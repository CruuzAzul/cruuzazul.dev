'use client'

import { useRef } from 'react'
import Lottie from 'lottie-react'
import type { LottieRef } from 'lottie-react'
import ListItem from '../shared/ListItem'
import FeaturedArticle from './FeaturedArticle'
import { ListGroup } from '../shared/ListGroup'
import { LayoutGroup } from 'framer-motion'
import { Box } from '../shared/Box'
import articlesIcon from '../../public/static/icons/articles.json'
import styles from './ArticlesContent.module.css'

import type { BlogPost } from './types/BlogPost'

interface ArticlesContentProps {
  allPosts: BlogPost[]
  featuredPosts: BlogPost[]
}

export default function ArticlesContent({ allPosts, featuredPosts }: ArticlesContentProps) {
    const lottieRef = useRef<LottieRef>(null)
    const filteredPosts = allPosts.filter((post: BlogPost) => post && post.slug && !post.skip)

    const renderFeatured = () => {
        return featuredPosts
            .filter((post: BlogPost) => post && post.slug)
            .map((post: BlogPost, index: number) => {
                return (
                    <FeaturedArticle
                        key={index}
                        index={index}
                        href={`/${post.slug}`}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        stats={post.stats}
                        content={post.content}
                    />
                )
            })
    }

    const renderAll = () => {
        return filteredPosts.map((post: BlogPost, index: number) => {
            return (
                <ListItem
                    key={index}
                    index={index}
                    href={`/${post.slug}`}
                    title={post.title}
                    date={post.date}
                />
            )
        })
    }

    if (filteredPosts.length === 0) {
        return (
            <Box className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>
                    <div className={styles.emptyStateLottie}>
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={articlesIcon}
                            loop={true}
                            autoplay={true}
                        />
                    </div>
                </div>
                <h1>No articles yet</h1>
                <p className={styles.emptyStateMessage}>
                    Articles are coming soon. Stay tuned!
                </p>
            </Box>
        )
    }

    return (
        <LayoutGroup>
            <p>
                Here you can find all the <strong>{filteredPosts.length} articles</strong> I wrote about web development, software engineering, tooling, developer experience, and tech career.
            </p>

            <h2>Featured Articles</h2>
            <div className={styles.featuredArticlesContainer}>{renderFeatured()}</div>

            <h2>All Articles</h2>
            <ListGroup>{renderAll()}</ListGroup>
        </LayoutGroup>
    )
}

