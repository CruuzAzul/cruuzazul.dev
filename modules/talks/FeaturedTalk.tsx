import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { generateSlug } from '../../utils/slug'
import type { Talk } from './types/Talk'
import styles from './FeaturedTalk.module.css'

interface FeaturedTalkProps {
  talk: Talk
  index: string | number
  hovered: string | number
  setHovered: (value: string | number) => void
}

export default function FeaturedTalk(props: FeaturedTalkProps) {
  const { talk, hovered, setHovered } = props
  const slug = generateSlug(talk.title)
  const talkUrl = `/talks/${slug}`
  const displayImage = talk.featuredImage || talk.image
  const isPriority = typeof props.index === 'number' && props.index < 3

  return (
    <Link href={talkUrl} className={styles.talkLink}>
      <div className={styles.talk}>
        <Animation index={props.index} hovered={hovered} setHovered={setHovered}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src={displayImage}
                alt={talk.title}
                fill
                className={styles.image}
                priority={isPriority}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.title} style={{ margin: 0 }}>{talk.title}</h3>
            </div>
          </div>
        </Animation>
      </div>
    </Link>
  );
}

interface AnimationProps {
  index: string | number
  hovered: string | number
  setHovered: (value: string | number) => void
  children: React.ReactNode
}

function Animation(props: AnimationProps) {
  const { hovered, setHovered } = props
  const isHovered = hovered === props.index

  return (
    <motion.div
      className={styles.animContainer}
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
      animate={{
        color: isHovered ? '#FFFFFF' : '#ADADAD'
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className={styles.backgroundWrapper}>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={styles.animHovered}
              layoutId="featuredTalks"
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
      </div>

      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </motion.div>
  )
}
