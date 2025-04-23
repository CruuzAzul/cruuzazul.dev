import styles from './SpeakingDetails.module.scss';
import Image from 'next/image';
import {ConferenceCard} from './ConferenceCard';
import React from 'react';
import {formatData, Talk} from '../types/speaking';
import Link from 'next/link';
import {FaAnglesLeft} from 'react-icons/fa6';
import {RiSlideshow4Line} from 'react-icons/ri';

interface TalkProps {
  talkData: Talk;
}

export const SpeakingDetails = ({talkData}: TalkProps) => {
  const FormatIcon = formatData[talkData.format];

  console.log(talkData);
  return (
    <section className={styles.speakingRoot}>
      <div className={styles.speaking}>
        <Link href="/speaking" className={styles.goBack}>
          <FaAnglesLeft />
          Go back to the list
        </Link>
        <h2>
          {talkData.title} {talkData.language}
        </h2>
        <div className={styles.details}>
          <div className={styles.formatAndSpeakers}>
            <Image src={talkData.image} alt={talkData.title} width={352} height={198} className={styles.talkImage} />
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
                  <a
                    key={speaker.name}
                    href={speaker.social}
                    className={styles.avatar}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={speaker.picture} alt={speaker.name} width={30} height={30} />
                  </a>
                ))}
              </div>
            </span>
            {talkData.slidesUrl && (
              <span className={styles.label}>
                <RiSlideshow4Line />
                <a href={talkData.slidesUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Slide presentation
                </a>
              </span>
            )}
          </div>
          <p className={styles.description}>{talkData.description}</p>
        </div>

        <div className={styles.conferences}>
          <h3>Conferences</h3>
          <div className={styles.conferencesList}>
            {talkData.conferences.map((conference) => (
              <ConferenceCard conference={conference} key={conference.name} />
            ))}
          </div>
        </div>
        {talkData.videoId ? (
          <div className={styles.video}>
            <h3>Replay</h3>
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
          Go back to the list
        </Link>
      </div>
    </section>
  );
};
