'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import BlogDate from '../shared/BlogDate'
import { Post, PostMain, PostContent, PostContainer } from '../shared/Post'
import { Wrapper } from '../layout/Wrapper'
import styles from './BlogpostLayout.module.css'

interface BlogpostLayoutProps {
  children: ReactNode
  title?: string
  image?: string
  date?: string
}

export default function BlogpostLayout({ children, title, image, date }: BlogpostLayoutProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translateY(0)')

  useEffect(() => {
    if (!image || typeof window === 'undefined') return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const parallaxY = scrollY * 0.5
          setTransform(`translateY(${parallaxY}px)`)
          ticking = false
        })
        ticking = true
      }
    }

    const checkDesktop = () => window.innerWidth >= 1024
    
    if (checkDesktop()) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }

    const handleResize = () => {
      if (checkDesktop()) {
        handleScroll()
      } else {
        setTransform('translateY(0)')
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [image])

  return (
    <Wrapper>
      <Navbar />
      <Main image={image}>
        {image && (
          <div className={styles.postHeader}>
            <h1 className={`${styles.postTitle} ${styles.postHeaderTitle}`}>{title}</h1>
            <div
              ref={imageRef}
              className={styles.postImage}
              style={{
                backgroundImage: image ? `url(${image})` : undefined,
                transform,
              }}
            />
            <h2 className={`${styles.postSubtitle} ${styles.postHeaderSubtitle}`}>
              {date && <BlogDate dateString={date} />}
            </h2>
          </div>
        )}
        <PostContent>
          <PostContainer>
            {!image && (
              <div>
                <h1 className={`${styles.postTitle} ${styles.postContentTitle}`}>{title}</h1>
                <h2 className={`${styles.postSubtitle} ${styles.postContentSubtitle}`}>
                  {date && <BlogDate dateString={date} />}
                </h2>
              </div>
            )}

            {children}
          </PostContainer>
        </PostContent>
      </Main>
      <Footer />
    </Wrapper>
  )
}

function Main(props: { children: ReactNode, image?: string }) {
  return props.image ? (
    <Post>{props.children}</Post>
  ) : (
    <PostMain>{props.children}</PostMain>
  )
}

