import React from 'react';
import {talks} from '../../config/speaking/speaking';
import styles from './TalksList.module.scss';
import Link from 'next/link';
import {slugTalkTitle} from './talk/talkSlug';

export default function TalksList() {
  return (
    <div className={styles.talks}>
      {talks.map((talk) => (
        <div className={styles.talkElem}>
          <h2>{talk.title}</h2>
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
          <Link href={`/speaking/${slugTalkTitle(talk)}`} key={talk.id} className={styles.pageLink}>
            En savoir plus
          </Link>
        </div>
      ))}
    </div>
  );
}
