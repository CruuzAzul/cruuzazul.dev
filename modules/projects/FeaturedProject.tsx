'use client'

import { useState, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import type { LottieRef } from 'lottie-react'
import type { Project } from './types/Project'
import styles from './FeaturedProject.module.css'
import remotionIcon from '../../public/static/icons/remotion.json'
import codeInTheDarkIcon from '../../public/static/icons/code-in-the-dark.json'
import sourceIcon from '../../public/static/icons/source.json'

// Mapping statique des icônes pour le tree-shaking et la sécurité des types
const iconMap = {
  'remotion': remotionIcon,
  'code-in-the-dark': codeInTheDarkIcon,
  'source': sourceIcon,
}

interface FeaturedProjectProps {
  project: Project
  index: string | number
}

export default function FeaturedProject(props: FeaturedProjectProps) {
  const { project } = props

  const icon = iconMap[project.icon] || sourceIcon
  const iconRef = useRef<LottieRef>(null)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.project}
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Animation index={props.index}>
        <Lottie
          lottieRef={iconRef}
          style={{ width: 24, height: 24, marginBottom: 10 }}
          animationData={icon}
          loop={false}
          autoplay={false}
        />
        <div className={styles.body}>
          <p className={styles.title}>{project.title}</p>
          <p className={styles.description}>{project.description}</p>
          {project.stats && <p className={styles.stats}>{project.stats}</p>}
        </div>
      </Animation>
    </a>
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
    >
      {isHovered && (
        <motion.span
          className={styles.animHovered}
          layoutId="featuredProjects"
          transition={{
            layout: { duration: 0.3, ease: 'easeInOut' }
          }}
        />
      )}

      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </motion.span>
  )
}
