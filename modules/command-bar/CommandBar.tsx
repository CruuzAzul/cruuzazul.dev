'use client'

import { Box } from '../shared/Box'
import Toast from '../shared/Toast'
import { useRef, useState, forwardRef } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './CommandBar.module.css'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'
import Lottie from 'lottie-react'
import copyLinkIcon from '../../public/static/icons/copy-link.json'
import emailIcon from '../../public/static/icons/email.json'
import sourceIcon from '../../public/static/icons/source.json'
import aboutIcon from '../../public/static/icons/about.json'
import homeIcon from '../../public/static/icons/home.json'
import articlesIcon from '../../public/static/icons/articles.json'
import projectsIcon from '../../public/static/icons/projects.json'
import talksIcon from '../../public/static/icons/talks.json'
import podcastsIcon from '../../public/static/icons/podcasts.json'

interface CommandBarProps {
  children?: React.ReactNode
}

export default function CommandBar(props: CommandBarProps) {
  const copyLinkRef = useRef<any>(null)
  const emailRef = useRef<any>(null)
  const sourceRef = useRef<any>(null)
  const homeRef = useRef<any>(null)
  const aboutRef = useRef<any>(null)
  const articlesRef = useRef<any>(null)
  const projectsRef = useRef<any>(null)
  const talksRef = useRef<any>(null)
  const podcastsRef = useRef<any>(null)
  const router = useRouter()
  const [showToast, setShowToast] = useState<boolean>(false)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
  }

  const iconSize = { width: 24, height: 24 }

  const actions = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: <Lottie lottieRef={copyLinkRef} style={iconSize} animationData={copyLinkIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.location.href = 'mailto:alves.mckl@gmail.com',
      icon: <Lottie lottieRef={emailRef} style={iconSize} animationData={emailIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'source',
      name: 'GitHub',
      shortcut: ['s'],
      keywords: 'github',
      section: 'General',
      perform: () =>
        window.open('https://github.com/CruuzAzul', '_blank'),
      icon: <Lottie lottieRef={sourceRef} style={iconSize} animationData={sourceIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Lottie lottieRef={homeRef} style={iconSize} animationData={homeIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <Lottie lottieRef={aboutRef} style={iconSize} animationData={aboutIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'talks',
      name: 'Talks',
      shortcut: ['g', 't'],
      keywords: 'go-talks',
      section: 'Go To',
      perform: () => router.push('/talks'),
      icon: <Lottie lottieRef={talksRef} style={iconSize} animationData={talksIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <Lottie lottieRef={projectsRef} style={iconSize} animationData={projectsIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'podcasts',
      name: 'Podcasts',
      shortcut: ['g', 'c'],
      keywords: 'go-podcasts',
      section: 'Go To',
      perform: () => router.push('/podcasts'),
      icon: <Lottie lottieRef={podcastsRef} style={iconSize} animationData={podcastsIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'b'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <Lottie lottieRef={articlesRef} style={iconSize} animationData={articlesIcon} loop={false} autoplay={false} />,
    },
  ]

  return (
    <>
      {/* @ts-expect-error - KBar types are not compatible with React 19 */}
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className={styles.positioner}>
            {/* @ts-expect-error - KBar types are not compatible with React 19 */}
            <KBarAnimator className={styles.animator}>
              <KBarSearch placeholder="Type a command or search…" className={styles.search} />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>

        {props.children}
      </KBarProvider>

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

function RenderResults() {
  const { results } = useDeepMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className={styles.groupName}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

interface ResultItemProps {
  action: {
    icon?: React.ReactNode
    name: string
    shortcut?: string[]
  }
  active: boolean
}

const ResultItem = forwardRef<HTMLDivElement, ResultItemProps>(({ action, active }, ref) => {
  const getLottieRef = (): React.RefObject<any> | undefined => {
    if (!action.icon || !React.isValidElement(action.icon)) return undefined
    const props = action.icon.props as { lottieRef?: React.RefObject<any> }
    return props.lottieRef
  }

  const lottieRef = getLottieRef()

  if (active) {
    lottieRef?.current?.play()
  } else {
    lottieRef?.current?.stop()
  }

  return (
    <Box
      ref={ref}
      className={`${styles.resultItem} ${active ? styles.resultItemActive : ''}`}
      onMouseEnter={() => lottieRef?.current?.play()}
      onMouseLeave={() => lottieRef?.current?.stop()}
    >
      <div className={styles.action}>
        {action.icon && action.icon}
        <div className={styles.actionRow}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className={styles.shortcut} aria-hidden="true">
          {action.shortcut.map(shortcut => (
            <kbd key={shortcut} className={styles.kbd} tabIndex={-1}>{shortcut}</kbd>
          ))}
        </div>
      ) : null}
    </Box>
  )
})

ResultItem.displayName = 'ResultItem'

