import { getAllPosts, getPostBySlug } from '../../lib/blog'
import BaseLayout from '../layout/BaseLayout'
import ArticlesContent from './ArticlesContent'

export default function ArticlesPage() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title'])

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description',
  ]

  const featuredPosts = []

  return (
    <BaseLayout
      title="Articles // Mickaël Alves"
      tagline="Stories. Experimentation. Guides."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <ArticlesContent
        allPosts={allPosts}
        featuredPosts={featuredPosts}
      />
    </BaseLayout>
  )
}


