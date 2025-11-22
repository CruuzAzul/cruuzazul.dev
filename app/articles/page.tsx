import { Metadata } from 'next'
import ArticlesPage from '../../modules/articles/ArticlesPage'

export const metadata: Metadata = {
  title: 'Articles',
}

export default function Articles() {
  return <ArticlesPage />
}

