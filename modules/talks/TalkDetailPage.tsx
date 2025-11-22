import { notFound } from 'next/navigation'
import Link from 'next/link'
import BaseLayout from '../layout/BaseLayout'
import { speaking as talks } from '../../data/speaking'
import Image from 'next/image'
import { generateSlug } from '../../utils/slug'
import ResourceButton from './ResourceButton'
import styles from './TalkDetailPage.module.css'

export default function TalkDetailPage({ slug }: { slug: string }) {
  const talk = talks.find(t => generateSlug(t.title) === slug)

  if (!talk) {
    notFound()
  }

  const videoUrl = talk.videoId ? `https://www.youtube.com/watch?v=${talk.videoId}` : null

  return (
    <BaseLayout
      title={`${talk.title} // Mickaël Alves`}
      tagline={talk.title}
      primaryColor="purple"
      secondaryColor="cyan"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.talkImage}>
            <Image
              src={talk.image}
              alt={talk.title}
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
            <p className={styles.description}>{talk.description}</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Conferences</h2>
            <div className={styles.conferencesList}>
              {talk.conferences.map((conf, idx) => {
                const CardContent = (
                  <>
                    <div className={styles.conferenceImageWrapper}>
                      <img
                        src={conf.image.src}
                        alt={conf.name}
                        style={{
                          filter: 'brightness(0) invert(1)',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <span className={styles.conferenceDateBadge}>{conf.date}</span>
                  </>
                )

                return conf.link ? (
                  <a
                    key={idx}
                    href={conf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.conferenceCard}
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={idx} className={styles.conferenceCardDiv}>
                    {CardContent}
                  </div>
                )
              })}
            </div>
          </div>

          {(videoUrl || talk.slidesUrl) && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Resources</h2>
              <div className={styles.resourcesContainer}>
                {videoUrl && (
                  <ResourceButton href={videoUrl} type="video">
                    Watch video
                  </ResourceButton>
                )}
                {talk.slidesUrl && (
                  <ResourceButton href={talk.slidesUrl} type="slides">
                    View slides
                  </ResourceButton>
                )}
              </div>
            </div>
          )}
        </div>

        <Link href="/talks" className={styles.backLink}>← Back to talks</Link>
      </div>
    </BaseLayout>
  )
}



