import { ArticleJsonLd } from 'next-seo'
import BlogpostLayout from './BlogpostLayout'
import { getPostBySlug, convertMarkdownToHtml } from '../../lib/blog'

export default async function BlogPostPage({ slug }: { slug: string }) {
    const post = getPostBySlug(slug, [
        'canonical_url',
        'content',
        'date',
        'description',
        'image',
        'lang',
        'slug',
        'title',
    ])

    const content = await convertMarkdownToHtml(post.content || '')

    const title = `${post.title} // Mickaël Alves`
    const description = post.description || ''
    const url = `https://cruuzazul.dev/${post.slug}`
    const date = new Date(post.date).toISOString()
    const image = post.image
        ? `https://cruuzazul.dev${post.image}`
        : 'https://cruuzazul.dev/og-image.png'

    return (
        <BlogpostLayout
            title={post.title}
            image={post.image}
            date={post.date}
        >
            <ArticleJsonLd
                useAppDir={true}
                authorName="Mickaël Alves"
                type="Blog"
                url={url}
                title={title}
                images={[image]}
                datePublished={date}
                dateModified={date}
                description={description}
            />

            <div dangerouslySetInnerHTML={{ __html: content }} />
        </BlogpostLayout>
    )
}


