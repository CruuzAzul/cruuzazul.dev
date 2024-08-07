import React from 'react';
import Image from 'next/image';
import {speaking} from '../../config/speaking';
import styles from './TalksList.module.scss';
import Link from 'next/link';
import {slugTalkTitle} from './talk/talkSlug';

export default function TalksList() {
  return (
    <div className={styles.talks}>
      {speaking.map((talk) => (
        <div key={talk.id} className={styles.talkElem}>
          <Image src={talk.image} alt={talk.title} width={320} height={180} />
          <div className={styles.card} key={talk.title}>
            <h2>{talk.title}</h2>
          </div>
          <Link className={styles.pageLink} href={`/speaking/${slugTalkTitle(talk)}`}>En savoir plus</Link>
        </div>
      ))}
    </div>
  );
}
