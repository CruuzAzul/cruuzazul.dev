import { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'
import { speaking as talks } from '../data/speaking'
import { generateSlug } from '../utils/slug'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cruuzazul.dev'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/talks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcasts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  const posts = getAllPosts(['slug', 'date'])
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Talks
  const talkPages = talks.map((talk) => ({
    url: `${baseUrl}/talks/${generateSlug(talk.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Podcasts
  const podcasts = talks.filter((t) => t.format === 'Podcast')
  const podcastPages = podcasts.map((podcast) => ({
    url: `${baseUrl}/podcasts/${generateSlug(podcast.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPosts, ...talkPages, ...podcastPages]
}

