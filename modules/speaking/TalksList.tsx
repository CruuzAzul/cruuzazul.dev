import React from 'react';
import {talks} from './types/speaking';
import styles from './SpeakingList.module.scss';
import Link from 'next/link';
import {slugElementTitle} from './types/speakingSlug';
import {MainTitle} from '../common/mainTitle/MainTitle';

export default function TalksList() {
  return (
    <section className={styles.speakingsRoot}>
      <MainTitle title="Conferences" />
      <div className={styles.speakings}>
        {talks.map((talk) => (
          <div className={styles.speakingElem} key={talk.title}>
            <h2>{talk.title} {talk.language}</h2>
            <p>{talk.description}</p>
            <div className={styles.video}>
              <iframe
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/${talk.videoId}`}
                title={talk.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <Link href={`/speaking/${slugElementTitle(talk)}`} key={talk.id} className={styles.pageLink}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
