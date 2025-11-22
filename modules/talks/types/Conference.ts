import type { StaticImageData } from 'next/image'

export interface Conference {
  name: string
  link?: string
  date: string
  image: StaticImageData
}

