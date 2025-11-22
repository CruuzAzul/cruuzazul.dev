'use client'

import { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import readingTime from 'reading-time'
import styles from './FeaturedArticle.module.css'

interface FeaturedArticleProps {
  href: string
  image: string
  title: string
  description: string
  content?: string
  index: string | number
}

export default function FeaturedArticle(props: FeaturedArticleProps): JSX.Element {
  const stats = props.content ? readingTime(props.content) : { text: '1 min read' }

  return (
    <a href={props.href} className={styles.article}>
      <Animation index={props.index}>
        <div className={styles.container}>
          <div className={styles.imageContainer} style={{ backgroundImage: `url(${props.image})` }} />
          <div className={styles.content}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.stats}>{stats.text}</p>
          </div>
        </div>
      </Animation>
    </a>
  )
}

interface AnimationProps {
  index: string | number
  children: ReactNode
}

function Animation(props: AnimationProps) {
  const [hovered, setHovered] = useState<string | number>('')
  const isHovered = hovered === props.index

  return (
    <motion.div
      className={styles.animContainer}
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
    >
      {isHovered && (
        <motion.div
          className={styles.animHovered}
          layoutId="featuredArticles"
          transition={{
            layout: { duration: 0.3, ease: 'easeInOut' }
          }}
        />
      )}

      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </motion.div>
  )
}
