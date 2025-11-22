import ErrorMessage from '../modules/shared/ErrorMessage'
import BlogpostLayout from '../modules/articles/BlogpostLayout'

export default function NotFound() {
  return (
    <BlogpostLayout>
      <ErrorMessage code={404} />
    </BlogpostLayout>
  )
}

