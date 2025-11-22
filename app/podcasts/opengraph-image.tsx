import { ImageResponse } from 'next/og';
import { Opengraph } from '../../modules/seo/Opengraph';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(<Opengraph text="Podcasts | Mickaël Alves 🎙️" />, {
    ...size,
  });
}

