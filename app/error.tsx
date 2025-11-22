'use client'

import ErrorMessage from '../modules/shared/ErrorMessage'
import BlogpostLayout from '../modules/articles/BlogpostLayout'

export default function Error() {
  return (
    <BlogpostLayout>
      <ErrorMessage />
    </BlogpostLayout>
  )
}

