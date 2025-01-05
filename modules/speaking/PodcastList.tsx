import React from 'react';
import {podcasts} from './types/speaking';
import styles from './SpeakingList.module.scss';
import Link from 'next/link';
import {slugElementTitle} from './types/speakingSlug';
import {MainTitle} from '../common/mainTitle/MainTitle';

export default function PodcastList() {
  return (
    <section className={styles.speakingsRoot}>
      <MainTitle title="Podcasts" />
      <div className={styles.speakings}>
        {podcasts.map((podcast) => (
          <div className={styles.speakingElem} key={podcast.title}>
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <div className={styles.video}>
              <iframe
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/${podcast.videoId}`}
                title={podcast.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <Link href={`/speaking/${slugElementTitle(podcast)}`} key={podcast.id} className={styles.pageLink}>
              En savoir plus
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
