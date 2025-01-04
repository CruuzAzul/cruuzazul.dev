import React from 'react';
import Image from 'next/image';
import {podcasts, workshops} from '../../config/speaking/speaking';
import styles from './TalksList.module.scss';
import Link from 'next/link';
import {slugTalkTitle} from './talk/talkSlug';

export default function PodcastList() {
  return (
    <div className={styles.talks}>
      {podcasts.map((podcast) => (
        <div className={styles.talkElem}>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
          <Image src={podcast.image} alt={podcast.title} width={320} height={180} />
          <Link href={`/speaking/${slugTalkTitle(podcast)}`} key={podcast.id} className={styles.pageLink}>
            En savoir plus
          </Link>
        </div>
      ))}
    </div>
  );
}
