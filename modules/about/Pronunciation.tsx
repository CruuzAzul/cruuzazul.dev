import React, { useState, useRef } from 'react'
import styles from './Pronunciation.module.css'

export default function Pronunciation(): JSX.Element {
  const pronunciationAudio = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const togglePronunciation = () => {
    if (
      pronunciationAudio.current !== null &&
      pronunciationAudio.current.duration > 0 &&
      !pronunciationAudio.current.paused
    ) {
      setIsPlaying(false)
      pronunciationAudio.current.pause()
    } else {
      setIsPlaying(true)
      pronunciationAudio.current.play()
    }
  }

  return (
    <button
      role="button"
      aria-label="How to pronounce my name"
      onClick={togglePronunciation}
      className={styles.button}
    >
      <i
        className={`ri-${isPlaying ? 'pause' : 'play' }-circle-fill ${styles.icon}`}
      />
      <audio
        src="/static/audio/pronunciation.mp3"
        ref={pronunciationAudio}
        onEnded={() => setIsPlaying(false)}
      />
    </button>
  )
}