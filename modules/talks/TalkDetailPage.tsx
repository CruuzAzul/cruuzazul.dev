'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import BaseLayout from '../layout/BaseLayout'
import { speaking as talks } from '../../data/speaking'
import Image from 'next/image'
import { generateSlug } from '../../utils/slug'
import ResourceButton from './ResourceButton'
import styles from './TalkDetailPage.module.css'
import type { Conference } from './types/Conference'

const LOGO_PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23090c12'/></svg>"

function ConferenceCard({ conf }: { conf: Conference }) {
  const year = conf.date ? new Date(conf.date).getFullYear().toString() : (conf.year || '')

  const CardContent = (
    <>
      <div className={styles.conferenceImageWrapper}>
        <Image
          src={conf.image}
          alt={conf.name}
          width={conf.image.width}
          height={conf.image.height}
          style={{
            filter: 'brightness(0) invert(1)',
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          placeholder="blur"
          blurDataURL={LOGO_PLACEHOLDER}
          loading="lazy"
        />
      </div>
      {year && (
        <span className={styles.conferenceDateBadge}>
          {year}
        </span>
      )}
    </>
  )

  if (conf.link) {
    return (
      <a
        href={conf.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.conferenceCard}
      >
        {CardContent}
      </a>
    )
  }

  return (
    <div className={styles.conferenceCardDiv}>
      {CardContent}
    </div>
  )
}

export default function TalkDetailPage({ slug }: { slug: string }) {
  const talk = talks.find(t => generateSlug(t.title) === slug)

  if (!talk) {
    notFound()
  }

  const videoUrl = 'videoId' in talk && talk.videoId ? `https://www.youtube.com/watch?v=${talk.videoId}` : null

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
              fill
              className={styles.talkImageContent}
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="(max-width: 900px) 100vw, 900px"
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
              {talk.conferences.map((conf, idx) => (
                <ConferenceCard key={idx} conf={conf} />
              ))}
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



