import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesSection.module.css'; // Assuming you are using CSS Modules for styling

const ServicesSection = () => {
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
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <motion.div
          className={styles.servicesWrapper}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className={`${styles.contentRight} ${styles.hiding}`} variants={itemVariants}>
            <h2 className={styles.servicesHeading}>Steps to Order</h2>
            <p className={styles.servicesDescription}>
              The ordering process is incredibly reliable and easy, thus ensuring a smooth and hassle-free shopping experience for all customers.
            </p>
            <ul className={styles.servicesList}>
              <li>Browse our collection and choose the wig that best suits you</li>
              <li>Fill Out the Order Form at the bottom of the page</li>
              <li>After submitting your Order, you will receive an email confirming your order.</li>
              <li>Complete Your Payment and Await Delivery</li>
            </ul>
            <div className={styles.buttonWrapper}>
              <a href="#" className={styles.primaryBtn}>PRODUCTS</a>
            </div>
          </motion.div>
          <motion.div className={`${styles.imageWrapper} ${styles.hiding}`} variants={itemVariants}>
            <img className={styles.servicesImg} src="./assets/deliveryPackage.jpg" loading="lazy" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
