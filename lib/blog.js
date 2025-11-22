import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = join(process.cwd(), 'articles')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'))
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  
  let parsed
  
  try {
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    parsed = matter(fileContents)
  } catch (error) {
    const slugs = getPostSlugs()
    let found = false
    
    for (const fileSlug of slugs) {
      const filePath = join(postsDirectory, fileSlug)
      const contents = fs.readFileSync(filePath, 'utf8')
      parsed = matter(contents)
      
      if (parsed.data.slug === realSlug) {
        found = true
        break
      }
    }
    
    if (!found) {
      throw new Error(`Post with slug "${realSlug}" not found`)
    }
  }
  
  const { data, content } = parsed

  const items = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = data.slug || realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return posts
}

export async function convertMarkdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}
