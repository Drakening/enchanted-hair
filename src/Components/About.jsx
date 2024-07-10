import React from 'react';
import styles from './AboutSection.module.css'; // Import the CSS module

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <div className={styles.imageWrapper}>
            <img className={styles.aboutImg} src="./assets/aboutY.jpg" loading="lazy" alt="" />
          </div>
          <div className={styles.contentRight}>
            <h2 className={styles.aboutHeading}>Wigs That Will Leave You Feeling Fabulous!</h2>
            <p className={styles.description}>
              Loved by celebs like Sarah Jessica Parker, this upscale nail salon created by the one and only Bertie Capone herself is incredible.
            </p>
            <div className={styles.buttonWrapper}>
              <a href="#" className={styles.ctaBtn}>
                ORDER NOW
                <svg viewBox="0 0 19 9" fill="none">
                  <path d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z" fill="black" />
                </svg>
              </a>
              <a href="#" className={styles.heroBtn}>
                Products
                <svg viewBox="0 0 19 9" fill="none">
                  <path d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
