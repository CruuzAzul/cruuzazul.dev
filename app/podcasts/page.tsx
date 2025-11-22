import { Metadata } from 'next'
import PodcastsPage from '../../modules/podcasts/PodcastsPage'

export const metadata: Metadata = {
  title: 'Podcasts',
}

export default function Podcasts() {
  return <PodcastsPage />
}

