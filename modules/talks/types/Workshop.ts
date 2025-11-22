import type { Talk } from './Talk'

export interface Workshop extends Omit<Talk, 'videoId'> { }

