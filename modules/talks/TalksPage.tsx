'use client'

import { useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import Link from 'next/link'
import BaseLayout from '../layout/BaseLayout'
import { Box } from '../shared/Box'
import FeaturedTalk from './FeaturedTalk'
import { speaking } from '../../data/speaking'
import type { Talk } from './types/Talk'
import type { Conference } from './types/Conference'
import { generateSlug } from '../../utils/slug'
import type { ConferenceItem } from './types/ConferenceItem'
import styles from './TalksPage.module.css'

export default function TalksPage() {
  const [viewMode, setViewMode] = useState<'talks' | 'conferences'>('conferences')
  const [hoveredTalk, setHoveredTalk] = useState<string | number>('')

  // Filtrer pour exclure les podcasts
  const talks = speaking.filter(item => 'format' in item && item.format !== 'Podcast')

  const renderFeatured = () => {
    return (
      <>
        {talks.slice(0, 3).map((talk, index) => {
          return <FeaturedTalk key={index} talk={talk} index={index} hovered={hoveredTalk} setHovered={setHoveredTalk} />
        })}
      </>
    )
  }

  const renderAllTalks = () => {
    return talks.map((talk, index) => {
      return <TalkItem key={index} talk={talk} />
    })
  }

  const renderByConferences = () => {
    const conferencesByYear: { [year: string]: ConferenceItem[] } = {}

    talks.forEach(talk => {
      talk.conferences.forEach((conf: Conference) => {
        const year = conf.date
          ? conf.date.substring(0, 4)
          : (conf.year || new Date().getFullYear().toString())
        if (!conferencesByYear[year]) {
          conferencesByYear[year] = []
        }
        conferencesByYear[year].push({
          conferenceName: conf.name,
          talkTitle: talk.title,
          talkSlug: generateSlug(talk.title),
          link: conf.link,
          image: conf.image,
          date: conf.date,
        })
      })
    })

    const sortedYears = Object.keys(conferencesByYear).sort((a, b) => b.localeCompare(a))

    return sortedYears.map(year => {
      const confMap: { [name: string]: ConferenceItem[] } = {}
      conferencesByYear[year].forEach(item => {
        if (!confMap[item.conferenceName]) {
          confMap[item.conferenceName] = []
        }
        confMap[item.conferenceName].push(item)
      })

      const sortedConfs = Object.entries(confMap).sort(([nameA, itemsA], [nameB, itemsB]) => {
        const dateA = itemsA[0]?.date
        const dateB = itemsB[0]?.date
        if (!dateA && !dateB) return 0
        if (!dateA) return 1  // Sans date à la fin
        if (!dateB) return -1
        return dateB.localeCompare(dateA)
      })

      return (
        <div key={year} className={styles.yearSection}>
          <h3 className={styles.yearTitle}>{year}</h3>
          {sortedConfs.map(([confName, items]) => {
            const sortedItems = [...items].sort((a, b) => {
              if (!a.date && !b.date) return 0
              if (!a.date) return 1
              if (!b.date) return -1
              return b.date.localeCompare(a.date)
            })

            const confDate = sortedItems[0]?.date
              ? new Date(sortedItems[0].date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
              : null

            return (
              <div key={confName} className={styles.conferenceGroup}>
                <h4 className={styles.conferenceName}>
                  {confName}
                  {confDate && (
                    <span className={styles.talkDate}> - {confDate}</span>
                  )}
                </h4>
                <ul className={styles.talksList}>
                  {sortedItems.map((item, idx) => (
                    <li key={idx} className={styles.talksListItem}>
                      <Link href={`/talks/${item.talkSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {item.talkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <BaseLayout
      title="Talks // Mickaël Alves"
      tagline="Confs. Meetups. Events."
      primaryColor="purple"
      secondaryColor="cyan"
    >
      <LayoutGroup>
        <p>
          Passionate about <strong>sharing knowledge</strong> as a speaker and teacher, I enjoy speaking at various conferences and meetups about web development, tooling, and new technologies.
        </p>

        <h2>Featured Talks</h2>
        <Box style={{ margin: '20px 0 0 -20px' }}>
          <LayoutGroup id="featured-talks">
            <div className={styles.featuredTalksContainer}>
              {renderFeatured()}
            </div>
          </LayoutGroup>
        </Box>

        <div className={styles.headerWithToggle}>
          <h2>All Talks</h2>
          <LayoutGroup id="toggle">
            <div className={styles.toggleContainer}>
              <button
                className={`${styles.toggleButton} ${viewMode === 'conferences' ? styles.toggleButtonActive : ''}`}
                onClick={() => setViewMode('conferences')}
              >
                {viewMode === 'conferences' && (
                  <motion.div
                    className={styles.toggleBackground}
                    layoutId="toggleBg"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                )}
                <span className={styles.toggleText}>By Year</span>
              </button>
              <button
                className={`${styles.toggleButton} ${viewMode === 'talks' ? styles.toggleButtonActive : ''}`}
                onClick={() => setViewMode('talks')}
              >
                {viewMode === 'talks' && (
                  <motion.div
                    className={styles.toggleBackground}
                    layoutId="toggleBg"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                )}
                <span className={styles.toggleText}>By Talk</span>
              </button>
            </div>
          </LayoutGroup>
        </div>

        {viewMode === 'talks' ? renderAllTalks() : renderByConferences()}
      </LayoutGroup>
    </BaseLayout>
  )
}

function TalkItem({ talk }: { talk: Talk }) {
  const slug = generateSlug(talk.title)

  return (
    <div className={styles.talkContainer}>
      <div className={styles.talkContent}>
        <h3>{talk.title}</h3>
        <div className={styles.talkMeta}>
          <span>{talk.language}</span>
          <span> • </span>
          <span>{talk.format}</span>
        </div>
        <p className={styles.talkDescription}>{talk.description}</p>
      </div>
      <Link href={`/talks/${slug}`} className={styles.talkButton}>
        <span>View more</span>
        <i className="ri-arrow-right-up-line"></i>
      </Link>
    </div>
  )
}



