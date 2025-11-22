import Link from 'next/link'
import styles from './Footer.module.css'

interface LinkItem {
  title: string
  url: string
  icon: string
}

export default function Footer(): JSX.Element {
  const links: LinkItem[] = [
    {
      title: 'Bluesky',
      url: 'https://bsky.app/profile/cruuzazul.dev',
      icon: 'ri-bluesky-line',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/CruuzAzul',
      icon: 'ri-github-line',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/CruuzAzul',
      icon: 'ri-twitter-line',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mickaelalves',
      icon: 'ri-linkedin-line',
    },
    {
      title: 'Email',
      url: 'mailto:alves.mckl@gmail.com',
      icon: 'ri-mail-line',
    },
  ]

  const renderAnchor = (link: LinkItem, index: number) => {
    return (
      <Link
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navLink}
      >
        <span className={styles.anchor}>
          <span className={styles.title}>{link.title}</span>
          <i className={`${styles.icon} ${link.icon}`} />
        </span>
      </Link>
    )
  }

  return (
    <footer className={styles.container}>
      {links.map(renderAnchor)}
    </footer>
  )
}
