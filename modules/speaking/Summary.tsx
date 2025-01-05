import styles from './Summary.module.scss';

export const Summary = () => {
  return (
    <p className={styles.summaryRoot}>
      Tish is a collection of talks, workshop and podcasts I&apos;ve given in the past. You can find the{' '}
      <a href="#">full playlist on YouTube</a>
    </p>
  );
};
