import {parserTalkIdFromSlug} from '../../../modules/speaking/talk/talkSlug';
import {speaking} from '../../../config/speaking';
import React from 'react';
import {Talk} from '../../../modules/speaking/talk/Talk';

export default function TalkPage({ params }: { params: { talkName: string } }) {
  const talkId = parserTalkIdFromSlug({slug: params.talkName});
  const talk = speaking.find(speaking => speaking.id === talkId);

  //TODO: Adding redirection errors
  if (!talk) return <></>

  return (
    <Talk talkData={talk} />
  )
}