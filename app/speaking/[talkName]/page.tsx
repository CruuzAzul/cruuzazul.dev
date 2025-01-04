import {parserTalkIdFromSlug} from '../../../modules/speaking/talk/talkSlug';
import {speaking, talks} from '../../../config/speaking/speaking';
import React from 'react';
import {TalkData} from '../../../modules/speaking/talk/TalkData';

export default function TalkPage({ params }: { params: { talkName: string } }) {
  const talkId = parserTalkIdFromSlug({slug: params.talkName});
  const talk = speaking.find(speaking => speaking.id === talkId);

  //TODO: Adding redirection errors
  if (!talk) return <>Coucou</>

  return (
    <TalkData talkData={talk} />
  )
}