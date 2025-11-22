import type { Talk } from '../../talks/types/Talk'
import type { PlatformLink } from './PlatformLink'

export interface Podcast extends Talk {
  platformLinks: PlatformLink[]
}

