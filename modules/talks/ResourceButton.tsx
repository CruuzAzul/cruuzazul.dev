'use client'

import { useRef } from 'react'
import Lottie, { type LottieRef } from 'lottie-react'
import remotionIcon from '../../public/static/icons/remotion.json'
import slidesIcon from '../../public/static/icons/slides.json'
import styles from './TalkDetailPage.module.css'

interface ResourceButtonProps {
  href: string
  type: 'video' | 'slides'
  children: React.ReactNode
}

export default function ResourceButton({ href, type, children }: ResourceButtonProps) {
  const iconRef = useRef<LottieRef>(null)
  const iconData = type === 'video' ? remotionIcon : slidesIcon

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceButton}
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <span className={styles.resourceIcon}>
        <Lottie
          lottieRef={iconRef}
          animationData={iconData}
          loop={false}
          autoplay={false}
          style={{ width: 20, height: 20 }}
        />
      </span>
      {children}
    </a>
  )
}

