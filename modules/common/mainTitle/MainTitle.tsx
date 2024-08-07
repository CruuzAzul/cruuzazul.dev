import styles from './mainTitle.module.scss';
import React from 'react';

interface MainTitleProps {
  title: string;
}

export const MainTitle = ({title} : MainTitleProps) => {
  return (
    <div className={styles.mainTitlePage}>
      <h2>{title}</h2>
    </div>
  )
}