import React from 'react';
import TalksList from '../../modules/speaking/TalksList';
import {Home} from '../../modules/home/Home';
import {MainTitle} from '../../modules/common/mainTitle/MainTitle';

export default function SpeakingPage() {
  return (
    <Home>
      <MainTitle title="Conférences" />
      <TalksList />
    </Home>
  );
}
