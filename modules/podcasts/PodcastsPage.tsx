'use client'

import BaseLayout from '../layout/BaseLayout'
import { zenikast } from '../../data/podcasts'
import ListItem from '../shared/ListItem'
import { ListGroup } from '../shared/ListGroup'
import { LayoutGroup } from 'framer-motion'
import { generateSlug } from '../../utils/slug'
import type { PodcastItem } from './types/PodcastItem'

export default function PodcastsPage() {
    const renderZenikast = (items: PodcastItem[]) => {
        return items.map((item, index) => {
            const slug = generateSlug(item.title)
            return (
                <ListItem
                    key={index}
                    index={index}
                    href={`/podcasts/${slug}`}
                    title={`${item.title} ${item.lang}`}
                    date={item.date}
                    description={item.description}
                />
            )
        })
    }

    return (
        <BaseLayout
            title="Podcasts // Mickaël Alves"
            tagline="Ideas. Conversations. Sharing."
            primaryColor="pink"
            secondaryColor="purple"
        >
            <LayoutGroup>
                <p>
                    Audio is a powerful medium and a great way to <strong>debate ideas</strong>. I love exchanging ideas with people and have had the opportunity to organize or participate in various podcasts. But sharing is even better around a table with <strong>amazing guests</strong>.
                </p>

                <h2>Zenikast</h2>
                <p>
                    French podcasts about development and tech communities,
                    created in collaboration with Zenika.
                </p>
                <ListGroup>{renderZenikast(zenikast)}</ListGroup>
            </LayoutGroup>
        </BaseLayout>
    )
}


