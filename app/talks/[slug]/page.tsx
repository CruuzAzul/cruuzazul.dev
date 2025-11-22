import { Metadata } from 'next'
import { use } from 'react'
import TalkDetailPage from '../../../modules/talks/TalkDetailPage'
import { speaking as talks } from '../../../data/speaking'
import { generateSlug } from '../../../utils/slug'

export async function generateStaticParams() {
  return talks
    .filter((t) => t.format === 'Talk')
    .map((talk) => ({
      slug: generateSlug(talk.title),
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const talk = talks.find((t) => generateSlug(t.title) === slug)

  if (!talk) {
    return {
      title: 'Talk Not Found',
    }
  }

  return {
    title: talk.title,
    description: talk.description,
  }
}

export default function TalkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  return <TalkDetailPage slug={slug} />
}

