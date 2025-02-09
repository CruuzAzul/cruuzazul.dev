import {parserElementIdFromSlug} from '../../../modules/speaking/types/speakingSlug';
import {speaking} from '../../../modules/speaking/types/speaking';
import React from 'react';
import {SpeakingDetails} from '../../../modules/speaking/speakingDetails/SpeakingDetails';
import {notFound} from 'next/navigation';

type Props = {
  params: Promise<{ talkName: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<{
  title: string;
  description?: string;
}> {
  const talkName = (await params).talkName

  const talkId =parserElementIdFromSlug({slug: talkName});
  const talk = speaking.find(speaking => speaking.id === talkId);
  const talkTitle = talk ? `${talk.title} | Mickaël Alves` : 'Speaking | Mickaël Alves';

  return {
    title: talkTitle,
    description: talk?.description,
  }
}

export default async function SpeakingDetailsPage({
  params,
}: {
  params: { talkName: string };
}) {
  const talkId = parserElementIdFromSlug({slug: params.talkName});
  const talk = speaking.find(speaking => speaking.id === talkId);

  if (!talk) {
    notFound();
  }

  return (
    <SpeakingDetails talkData={talk} />
  )
}