import { ImageResponse } from 'next/og';
import { Opengraph } from '../../../modules/seo/Opengraph';
import { speaking as podcasts } from '../../../data/speaking';
import { generateSlug } from '../../../utils/slug';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const podcast = podcasts.find((p) => generateSlug(p.title) === slug && p.format === 'Podcast');
  const podcastTitle = podcast ? `${podcast.title} | Mickaël Alves` : 'Podcasts | Mickaël Alves';

  return new ImageResponse(<Opengraph text={podcastTitle} />, {
    ...size,
  });
}

