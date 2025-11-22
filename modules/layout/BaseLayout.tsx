'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import { PostMain, PostContent, PostContainer } from '../shared/Post'
import { Wrapper } from './Wrapper'
import { ReactNode } from 'react'
import styles from './BaseLayout.module.css'

interface BaseLayoutProps {
  children: ReactNode
  title?: string
  tagline?: string
  primaryColor?: string
  secondaryColor?: string
}

export default function BaseLayout({
  children,
  title,
  tagline,
  primaryColor = 'pink',
  secondaryColor = 'purple'
}: BaseLayoutProps) {
  return (
    <Wrapper>
      <Navbar />
      <PostMain
        style={{
          ['--selection-bg' as string]: `var(--color-${primaryColor})`,
        }}
      >
        <PostContent>
          <PostContainer>
            <h1
              className={styles.gradientTitle}
              style={{
                backgroundImage: `linear-gradient(
                135deg,
                var(--color-${primaryColor}) 0%,
                var(--color-${secondaryColor}) 100%
              )`,
              }}
            >
              {tagline || title}
            </h1>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  )
}

