import { Metadata } from 'next'
import { ArticleJsonLd } from 'next-seo'
import BlogpostLayout from '../../modules/articles/BlogpostLayout'
import ErrorMessage from '../../modules/shared/ErrorMessage'
import { getPostBySlug, getAllPosts, convertMarkdownToHtml } from '../../lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  const test = posts.map(post => ({
    slug: post.slug,
  }))

  return test
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = getPostBySlug(slug, [
      'title',
      'description',
      'image',
      'canonical_url',
      'slug',
    ])

    const title = `${post.title} // Mickaël Alves`
    const description = post.description || ''
    const url = `https://cruuzazul.dev/${post.slug}`
    const image = post.image
      ? `https://cruuzazul.dev${post.image}`
      : 'https://cruuzazul.dev/og-image.png'

    return {
      title,
      description,
      alternates: {
        canonical: post.canonical_url || url,
      },
      openGraph: {
        title,
        description,
        url,
        images: [image],
      },
    }
  } catch (e) {
    return {
      title: 'Not Found',
    }
  }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const BlogPostPage = (await import('../../modules/articles/BlogPostPage')).default
  return <BlogPostPage slug={slug} />
}

