'use client'

import { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import readingTime from 'reading-time'
import styles from './FeaturedArticle.module.css'

interface FeaturedArticleProps {
  href: string
  image?: string
  title: string
  description?: string
  content?: string
  stats?: string
  index: string | number
}

export default function FeaturedArticle(props: FeaturedArticleProps) {
  const stats = props.content ? readingTime(props.content) : { text: '1 min read' }
  const isPriority = typeof props.index === 'number' && props.index < 3

  return (
    <a href={props.href} className={styles.article}>
      <Animation index={props.index}>
        <div className={styles.container}>
          {props.image && (
            <div className={styles.imageContainer}>
              <Image
                src={props.image}
                alt={props.title}
                fill
                className={styles.image}
                priority={isPriority}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="370px"
              />
            </div>
          )}
          <div className={styles.content}>
            <h3 className={styles.title}>{props.title}</h3>
            {props.description && <p className={styles.description}>{props.description}</p>}
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
