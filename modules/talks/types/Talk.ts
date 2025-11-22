import type { StaticImageData } from 'next/image'
import type { Speaker } from './Speaker'
import type { Conference } from './Conference'
import type { Format } from './Format'

export type Talk = {
  id: string
  title: string
  description: string
  language?: string
  image: StaticImageData
  featuredImage?: StaticImageData
  format: Format
  videoId?: string
  speaker: Speaker[]
  conferences: Conference[]
  slidesUrl?: string
}

