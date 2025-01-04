import React from 'react';
import TalksList from '../../modules/speaking/TalksList';
import {Home} from '../../modules/home/Home';
import {MainTitle} from '../../modules/common/mainTitle/MainTitle';
import WorkshopList from '../../modules/speaking/WhorkshopList';
import PodcastList from '../../modules/speaking/PodcastList';

export default function SpeakingPage() {
  return (
    <Home>
      <MainTitle title="Conférences" />
      <TalksList />
      <MainTitle title="Workshops" />
      <WorkshopList />
      <MainTitle title="Podcasts" />
      <PodcastList />
    </Home>
  );
}
