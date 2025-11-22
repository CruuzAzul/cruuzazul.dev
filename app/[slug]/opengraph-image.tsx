import { ImageResponse } from 'next/og';
import { Opengraph } from '../../modules/seo/Opengraph';
import { getPostBySlug } from '../../lib/blog';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const post = getPostBySlug(slug, ['title', 'slug']);
    const articleTitle = post ? `${post.title} | Mickaël Alves` : 'Articles | Mickaël Alves';
    return new ImageResponse(<Opengraph text={articleTitle} />, {
      ...size,
    });
  } catch (e) {
    return new ImageResponse(<Opengraph text="Articles | Mickaël Alves ✍️" />, {
      ...size,
    });
  }
}

