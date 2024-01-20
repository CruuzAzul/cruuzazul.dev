import React from 'react';
import Image from 'next/image';
import {speaking} from '../../config/speaking';
import styles from './TalksList.module.scss';
import {TalkCard} from './TalkCard';

export default function TalksList() {
  return (
    <div className={styles.talks}>
      {speaking.map((talk) => (
        <div className={styles.talk} key={talk.title}>
          <h2>{talk.title}</h2>
          <div className={styles.details}>
            <div className={styles.infos}>
              <div className={styles.description}>
                {talk.description}
              </div>
            </div>
            <Image src={talk.image} alt={talk.title} width={320} height={180} />
          </div>
          <div className={styles.conferences}>
            <h3>Conférences</h3>
            <div className={styles.conferencesList}>
              {talk.conferences.map((conference) => (
                <TalkCard conference={conference} key={conference.name} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
