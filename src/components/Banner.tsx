import React from 'react';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src="/img/banner.jpg" alt="Banner Background" className={styles.bannerImage} />
      
      <div className={styles.textOverlay}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.subtitle}>
          Experience the epitome of elegance. From romantic weddings to exclusive soirées, discover breathtaking spaces curated to make your most cherished moments truly unforgettable.
        </p>
      </div>
    </div>
  );
}