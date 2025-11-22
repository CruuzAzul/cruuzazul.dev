import { ImageResponse } from 'next/og';
import { Opengraph } from '../../../modules/seo/Opengraph';
import { speaking as talks } from '../../../data/speaking';
import { generateSlug } from '../../../utils/slug';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const talk = talks.find((t) => generateSlug(t.title) === slug);
  const talkTitle = talk ? `${talk.title} | Mickaël Alves` : 'Talks | Mickaël Alves';

  return new ImageResponse(<Opengraph text={talkTitle} />, {
    ...size,
  });
}

