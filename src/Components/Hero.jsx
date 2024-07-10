import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import styles from './HeroSection.module.css'; // Assuming you are using CSS Modules for styling

const HeroSection = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const split = new SplitType(headerRef.current.querySelector('h1'), {
        types: 'words, chars',
      });
    }
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <section className={styles.hero2}>
      <div className={styles.heroContainer2}>
        <div className={`${styles.heroContent2} ${styles.animate}`}>
          <div className={styles.heroTitle2} ref={headerRef}>
            <h1>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={headerVariants}
                custom={0}
                className={styles.gradientText}
              >
                Crowning
              </motion.span>{' '}
              <motion.span
                initial="hidden"
                animate="visible"
                variants={headerVariants}
                custom={1}
              >
                You with Confidence
              </motion.span>
            </h1>
          </div>
          <p className={styles.heroText2}>
            Discover the perfect wig to express your unique style and your beauty.
          </p>
          <div className={styles.heroBtnWrapper}>
            <a href="#" className={styles.ctaBtn}>
              ORDER NOW
              <svg viewBox="0 0 19 9" fill="none">
                <path
                  d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="#" className={styles.heroBtn}>
              Products
              <svg viewBox="0 0 19 9" fill="none">
                <path
                  d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <img className={`${styles.threeStar} ${styles.animate}`} src="./assets/hero/threeStars.png" alt="Three Stars" />
      <img className={`${styles.oneStar} ${styles.animate}`} src="./assets/hero/oneStar.png" alt="One Star" />
    </section>
  );
};

export default HeroSection;
