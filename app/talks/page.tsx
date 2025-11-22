import { Metadata } from 'next'
import TalksPage from '../../modules/talks/TalksPage'

export const metadata: Metadata = {
  title: 'Talks',
}

export default function Talks() {
  return <TalksPage />
}
