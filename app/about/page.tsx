import { Metadata } from 'next'
import AboutPage from '../../modules/about/AboutPage'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return <AboutPage />
}

