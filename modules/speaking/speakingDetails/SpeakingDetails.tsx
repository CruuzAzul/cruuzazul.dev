import styles from './SpeakingDetails.module.scss';
import Image from 'next/image';
import {ConferenceCard} from './ConferenceCard';
import React from 'react';
import {formatData, Talk} from '../types/speaking';
import Link from 'next/link';
import {FaAnglesLeft} from 'react-icons/fa6';

interface TalkProps {
  talkData: Talk;
}

export const SpeakingDetails = ({talkData}: TalkProps) => {
  const FormatIcon = formatData[talkData.format];

  return (
    <section className={styles.speakingRoot}>
      <div className={styles.speaking}>
        <Link href="/speaking" className={styles.goBack}>
          <FaAnglesLeft />
          Revenir à la liste
        </Link>
        <h2>{talkData.title}</h2>
        <div className={styles.details}>
          <div className={styles.formatAndSpeakers}>
            <Image src={talkData.image} alt={talkData.title} width={352	} height={198} className={styles.talkImage} />
            <span className={styles.label}>
              Format :
              <span className={styles.format}>
                {talkData.format}
                <FormatIcon />
              </span>
            </span>
            <span className={styles.label}>
              Co-speakers :
              <div className={styles.speakers}>
                {talkData.speaker.map((speaker) => (
                  <a key={speaker.name} href={speaker.twitter} className={styles.avatar}>
                    <img
                      width={30}
                      height={30}
                      src="https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611765.jpg"
                      alt="Speaker avatar"
                    />
                  </a>
                ))}
              </div>
            </span>
          </div>
          <p className={styles.description}>{talkData.description}</p>
        </div>

        <div className={styles.conferences}>
          <h3>Conférences</h3>
          <div className={styles.conferencesList}>
            {talkData.conferences.map((conference) => (
              <ConferenceCard conference={conference} key={conference.name} />
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
