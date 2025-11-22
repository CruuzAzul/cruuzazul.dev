import { useRef, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import podcastsIcon from '../../public/static/icons/podcasts.json'
import BlogDate from './BlogDate'
import type { LottieRef } from 'lottie-react'
import styles from './ListItem.module.css'

interface ListItemProps {
  href: string
  title: string
  date?: string
  description?: string
  index: string | number
}

export default function ListItem(props: ListItemProps) {
  const lottieRef = useRef<LottieRef>(null)
  // Articles
  if (props.href.charAt(0) === '/' && !props.href.includes('/podcasts/')) {
    return (
      <li className={`${styles.item} ${styles.articleItem}`}>
        <Link href={props.href} className={styles.anchor}>
          <Animation index={props.index}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.date}>
              <BlogDate dateString={props.date} />
            </span>
          </Animation>
        </Link>
      </li>
    )
  }

  // Podcasts (liens internes)
  if (props.href.includes('/podcasts/')) {
    return (
      <li className={styles.item}>
        <Link href={props.href} className={styles.anchor} onMouseEnter={() => lottieRef.current?.play()} onMouseLeave={() => lottieRef.current?.stop()}>
          <Animation index={props.index}>
            <div className={styles.contentLeft}>
              <div className={styles.titleRow}>
                <span className={styles.podcastIcon}>
                  <Lottie lottieRef={lottieRef} animationData={podcastsIcon} loop autoplay={false} style={{ width: 24, height: 24 }} />
                </span>
                <span className={styles.title}>{props.title}</span>
              </div>
              {props.date && (
                <span className={styles.date}>
                  <BlogDate dateString={props.date} />
                </span>
              )}
              {props.description && (
                <span className={styles.description}>{props.description}</span>
              )}
            </div>
            <span className={styles.iconContainer}>
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </Animation>
        </Link>
      </li>
    )
  }

  // Podcasts (liens externes)
  return (
    <li className={styles.item}>
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={styles.anchor} onMouseEnter={() => lottieRef.current?.play()} onMouseLeave={() => lottieRef.current?.stop()}>
        <Animation index={props.index}>
          <div className={styles.contentLeft}>
            <div className={styles.titleRow}>
              <span className={styles.podcastIcon}>
                <Lottie lottieRef={lottieRef} animationData={podcastsIcon} loop autoplay={false} style={{ width: 24, height: 24 }} />
              </span>
              <span className={styles.title}>{props.title}</span>
            </div>
            {props.description && (
              <span className={styles.description}>{props.description}</span>
            )}
          </div>
          <span className={styles.iconContainer}>
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </Animation>
      </a>
    </li>
  )
}

interface AnimationProps {
  index: string | number
  children: React.ReactNode
}

function Animation(props: AnimationProps) {
  const [hovered, setHovered] = useState<string | number>('')
  const isHovered = hovered === props.index

  return (
    <motion.span
      className={styles.animContainer}
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
      animate={{
        color: isHovered ? '#FFFFFF' : '#ADADAD'
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.span
            className={styles.animHovered}
            layoutId="listItem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              layout: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              },
              opacity: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
          />
        )}
      </AnimatePresence>

      <span className={styles.contentWrapper}>
        {props.children}
      </span>
    </motion.span>
  )
}
