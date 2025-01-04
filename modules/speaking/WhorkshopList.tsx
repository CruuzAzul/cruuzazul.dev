import React from 'react';
import Image from 'next/image';
import {workshops} from '../../config/speaking/speaking';
import styles from './TalksList.module.scss';
import Link from 'next/link';
import {slugTalkTitle} from './talk/talkSlug';

export default function WorkshopList() {
  return (
    <div className={styles.talks}>
      {workshops.map((workshop) => (
        <div className={styles.talkElem}>
          <h2>{workshop.title}</h2>
          <p>{workshop.description}</p>
          <Image src={workshop.image} alt={workshop.title} width={320} height={180} />
          <Link href={`/speaking/${slugTalkTitle(workshop)}`} key={workshop.id} className={styles.pageLink}>
            En savoir plus
          </Link>
        </div>
      ))}
    </div>
  );
}
