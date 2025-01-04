import styles from './Talk.module.scss';
import Image from 'next/image';
import {TalkCard} from './TalkCard';
import React from 'react';
import {Talk} from '../../../config/speaking/speaking';
import Link from 'next/link';
import {FaAnglesLeft} from 'react-icons/fa6';

interface TalkProps {
  talkData: Talk;
}

export const TalkData = ({talkData}: TalkProps) => {
  return (
    <section className={styles.talkRoot}>
      <div className={styles.talk}>
        <Link href="/speaking" className={styles.goBack}>
          <FaAnglesLeft />
          Revenir à la liste
        </Link>
        <h2>{talkData.title}</h2>
        <div className={styles.details}>
          <p className={styles.description}>{talkData.description}</p>
          <Image src={talkData.image} alt={talkData.title} width={320} height={180} />
        </div>
        <div className={styles.conferences}>
          <h3>Conférences</h3>
          <div className={styles.conferencesList}>
            {talkData.conferences.map((conference) => (
              <TalkCard conference={conference} key={conference.name} />
            ))}
          </div>
        </div>
        {talkData.videoId ? (
          <div className={styles.video}>
            <h3>Rediffusion</h3>
            <iframe
              className={styles.videoIframe}
              src={`https://www.youtube.com/embed/${talkData.videoId}`}
              title={talkData.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : null}
        <Link href="/speaking" className={styles.goBack}>
          <FaAnglesLeft />
          Revenir à la liste
        </Link>
      </div>
    </section>
  );
};
