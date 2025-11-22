'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useKBar } from 'kbar'
import styles from './Navbar.module.css'

export default function Navbar(): JSX.Element {
  const pathname = usePathname()
  const pages: string[] = [
    'Home',
    'About',
    'Talks',
    'Projects',
    'Podcasts',
    'Articles',
  ]
  const [hovered, setHovered] = useState<string>('')
  const { query } = useKBar()

  return (
    <LayoutGroup>
      <header className={styles.header}>
        <Link href="/" className={styles.navLink}>
          <span className={`${styles.buttonHeader} ${styles.buttonLogo}`}>MA</span>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {pages.map(page => {
              const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`
              const isHovered = hovered === page
              const isActive = pathname === path

              return (
                <li key={page}>
                  <Link href={path} className={styles.navLink}>
                    <motion.div
                      className={styles.navWrapper}
                      onHoverStart={() => {
                        setHovered(page)
                      }}
                      onHoverEnd={() => {
                        setHovered('')
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {isHovered && (
                          <motion.span
                            className={styles.navHovered}
                            layoutId="nav"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              layout: {
                                duration: 0.4,
                                ease: [0.25, 0.1, 0.25, 1]
                              },
                              opacity: {
                                duration: 0.4,
                                ease: [0.25, 0.1, 0.25, 1]
                              }
                            }}
                          />
                        )}
                      </AnimatePresence>
                      <motion.span
                        className={`${styles.navContainer} ${isActive ? styles.active : ''}`}
                        animate={{
                          color: pathname === path || isHovered ? '#FFFFFF' : '#ADADAD'
                        }}
                        transition={{
                          duration: 0.4,
                          ease: 'easeInOut'
                        }}
                      >
                        {page}
                      </motion.span>
                    </motion.div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <aside className={styles.aside}>
          <button
            type="button"
            aria-label="Command"
            onClick={query.toggle}
            className={`${styles.buttonHeader} ${styles.buttonHeaderPadding}`}
          >
            <i className={`${styles.icon} ri-command-line`} />
          </button>
        </aside>
      </header>
    </LayoutGroup>
  )
}

