import Link from 'next/link'
import BaseLayout from '../layout/BaseLayout'
import { speaking as podcasts } from '../../data/speaking'
import type { Podcast } from './types/Podcast'
import Image from 'next/image'
import { generateSlug } from '../../utils/slug'
import { notFound } from 'next/navigation'
import styles from './PodcastDetailPage.module.css'

export default function PodcastDetailPage({ slug }: { slug: string }) {
  const podcast = podcasts.find(p => generateSlug(p.title) === slug && p.format === 'Podcast') as Podcast | undefined

  if (!podcast || !('platformLinks' in podcast)) {
    notFound()
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Spotify':
        return '/static/icons/spotify.svg'
      case 'Apple Podcast':
        return '/static/icons/apple.svg'
      case 'Deezer':
        return '/static/icons/deezer.svg'
      case 'YouTube':
        return '/static/icons/youtube.svg'
      default:
        return '/static/icons/spotify.svg'
    }
  }

  return (
    <BaseLayout
      title={`${podcast.title} // Mickaël Alves`}
      tagline={podcast.title}
      primaryColor="pink"
      secondaryColor="purple"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.podcastImage}>
            <Image
              src={podcast.image}
              alt={podcast.title}
              width={800}
              height={450}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <p className={styles.description}>{podcast.description}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Listen to the podcast</h2>
            <div className={styles.platformsContainer}>
              {podcast.platformLinks.map((platform: PlatformLink, idx: number) => (
                <a
                  key={idx}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformButton}
                >
                  <span className={styles.platformIcon}>
                    <Image
                      src={getPlatformIcon(platform.platform)}
                      alt={`${platform.platform} icon`}
                      width={24}
                      height={24}
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(100%)',
                      }}
                    />
                  </span>
                  <span className={styles.platformName}>{platform.platform}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <Link href="/podcasts" className={styles.backLink}>← Back to podcasts</Link>
      </div>
    </BaseLayout>
  )
}



