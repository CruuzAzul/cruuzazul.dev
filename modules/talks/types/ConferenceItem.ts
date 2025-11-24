import type { StaticImageData } from 'next/image'

export interface ConferenceItem {
  conferenceName: string
  talkTitle: string
  talkSlug: string
  link?: string
  image: StaticImageData
  date: string | null
}

