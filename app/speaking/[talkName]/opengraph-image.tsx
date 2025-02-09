import {ImageResponse} from 'next/og';
import {parserElementIdFromSlug} from '../../../modules/speaking/types/speakingSlug';
import {speaking} from '../../../modules/speaking/types/speaking';
import {Opengraph} from '../../../modules/seo/opengraph';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({params}: {params: {talkName: string}}) {
  const talkName = (await params).talkName;

  const talkId = parserElementIdFromSlug({slug: talkName});
  const talk = speaking.find((speaking) => speaking.id === talkId);
  const talkTitle = talk ? `${talk.title} | Mickaël Alves` : 'Speaking | Mickaël Alves';

  return new ImageResponse(
    (
      <Opengraph talkTitle={talkTitle} />
    ),
    {
      ...size,
    },
  );
}
