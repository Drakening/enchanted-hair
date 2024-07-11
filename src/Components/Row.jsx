import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Styling/Row.module.css';

const features = [
  { icon: './assets/icons/box.png', title: 'Free Shipping', description: 'Standard shipping' },
  { icon: './assets/icons/chat.png', title: '24/7 Support', description: 'Always available' },
  { icon: './assets/icons/coupon.png', title: 'Best Deals', description: 'Exclusive offers' },
  { icon: './assets/icons/wallet.png', title: 'Secure Payment', description: 'Safe and trusted' },
];

const RowFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.rowFeatures}>
      <div className={styles.container}>
        <motion.div
          className={styles.rowCols}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className={`${styles.cols} ${styles.hidden}`} variants={itemVariants}>
              <i className={styles.boxIcon}>
                <img src={feature.icon} alt="" />
              </i>
              <div className={styles.boxContent}>
                <div className={styles.boxTitle}>{feature.title}</div>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RowFeatures;
