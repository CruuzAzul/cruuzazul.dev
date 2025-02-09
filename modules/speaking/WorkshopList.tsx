import React from 'react';
import Image from 'next/image';
import {workshops} from './types/speaking';
import styles from './SpeakingList.module.scss';
import Link from 'next/link';
import {slugElementTitle} from './types/speakingSlug';
import {MainTitle} from '../common/mainTitle/MainTitle';

export default function WorkshopList() {
  return (
    <section className={styles.speakingsRoot}>
      <MainTitle title="Workshops" />
      <div className={styles.speakings}>
        {workshops.map((workshop) => (
          <div className={styles.speakingElem} key={workshop.title}>
            <h2>{workshop.title} {workshop.language}</h2>
            <p>{workshop.description}</p>
            <Image src={workshop.image} alt={workshop.title} width={320} height={180} />
            <Link href={`/speaking/${slugElementTitle(workshop)}`} key={workshop.id} className={styles.pageLink}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
