import Image from 'next/image';
import React from 'react';
import {Conference} from '../../config/speaking';
import styles from './TalkCard.module.scss';

export const TalkCard = ({conference}: {conference: Conference}) => (
  <a className={styles.talkCard} key={conference.name} href={conference.link} target="_blank" rel="noopener noreferrer">
    <Image src={conference.image} alt={conference.name} />
    <span>{conference.date}</span>
  </a>
);
