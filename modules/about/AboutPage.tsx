'use client'

import React from 'react'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import BaseLayout from '../layout/BaseLayout'
import { ButtonPrimary } from '../shared/ButtonPrimary'
import Toast from '../shared/Toast'
import type { LottieRef } from 'lottie-react'
import type { AboutItem } from './types/AboutItem'
import items from '../../data/about'
import communityItems from '../../data/community'
import educationItems from '../../data/education'
import Lottie from 'lottie-react'
import copyBioIcon from '../../public/static/icons/copy-bio.json'
import downloadIcon from '../../public/static/icons/download.json'
import styles from './AboutPage.module.css'

const description = `👋🏼 Hey, I'm Mickaël Alves, a Web Maker, application builder, and speaker! I'm passionate about web technologies, tooling and especially Developer Experience, always looking for ways to improve workflows and make developers' lives easier. 👨🏻‍💻`

export default function AboutPage() {
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const copyBioRef = React.useRef<LottieRef>(null)
  const downloadRef = React.useRef<LottieRef>(null)

  const renderIntro = () => {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <Image
            alt="Zeno"
            src="/static/images/micka.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
              filter: 'grayscale(0.8)'
            }} />
        </div>
        <div className={styles.section}>
          <p className={styles.paragraphWithTopMargin}>
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </p>
          <p className={styles.paragraph}>
            I'm currently <strong>Tech Lead Frontend</strong> at <strong>Zenika</strong> 🔴 & <strong>BedrockStreaming</strong> 📺. I also enjoy sharing my knowledge through teaching and speaking at conferences.
          </p>
          <p className={styles.paragraph}>
            I'm very involved in the tech communities. I'm a <strong>co-founder of DevFestLyon</strong> and a <strong>co-organizer of LyonJS</strong> 🦁, an <strong>Appwrite Hero</strong> 🦸🏼‍♂️, and a <strong>Remotion Expert</strong> 🎬.
          </p>
          <div className={styles.buttonsContainer}>
            <ButtonPrimary
              as="button"
              style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={copyBio}
              onMouseEnter={() => copyBioRef.current?.play()}
              onMouseLeave={() => copyBioRef.current?.stop()}
            >
              <Lottie lottieRef={copyBioRef} style={{ width: 24, height: 24, marginRight: 8 }} animationData={copyBioIcon} loop={false} autoplay={false} />
              Copy Bio
            </ButtonPrimary>
            <span style={{ margin: '0 20px 0 10px' }}>•</span>
            <ButtonPrimary
              as="a"
              download
              role="button"
              href="/static/images/micka.jpg"
              style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={downloadHeadshot}
              onMouseEnter={() => downloadRef.current?.play()}
              onMouseLeave={() => downloadRef.current?.stop()}
            >
              <span style={{ display: 'inline-block', width: 24, height: 24, marginRight: 8 }}>
                <Lottie lottieRef={downloadRef} style={{ width: 24, height: 24 }} animationData={downloadIcon} loop={false} autoplay={false} />
              </span>
              Download Headshot
            </ButtonPrimary>
          </div>
        </div>
      </div>
    )
  }

  const renderList = (list: AboutItem[]) => {
    return list.map((item, index) => {
      return (
        <div className={styles.listItem} key={index}>
          <h3>{item.jobTitle}</h3>
          <p className={styles.listParagraph}>
            <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
              {item.company}
            </a>
            {item.location && <span> • {item.location}</span>}
          </p>
          {item.subject && (
            <p className={styles.listParagraphItalic}>
              {item.subject}
            </p>
          )}
          <p className={styles.listParagraph}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate: string, endDate?: string) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years && durationObj.years > 1) {
      durationStr = `${durationObj.years} years `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} months`

    return durationStr
  }

  const downloadHeadshot = () => {
    setToastTitle('Downloading...')
    setToastDescription('You can now add this photo to your fancy site.')
    setShowToast(true)
  }

  const copyBio = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(description)

    setToastTitle('Copied 📝')
    setToastDescription('You can now paste it anywhere.')
    setShowToast(true)
  }

  return (
    <BaseLayout
      title="About // Mickaël Alves"
      tagline="Create. Share. Improve."
      primaryColor="pink"
      secondaryColor="purple"
    >
      {renderIntro()}

      <h2>Career</h2>
      {renderList(items)}

      <h2>Community</h2>
      {renderList(communityItems)}

      <h2>Education</h2>
      {renderList(educationItems)}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </BaseLayout>
  )
}



