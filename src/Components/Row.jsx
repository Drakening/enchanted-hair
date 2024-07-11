import React from 'react';
import styles from '../Styling/Row.module.css';
import Box from '../Assets/icons/box.png';
import Chat from '../Assets/icons/chat.png';
import Coupon from '../Assets/icons/coupon.png';
import Wallet from '../Assets/icons/wallet.png';

const features = [
  { icon: Box, title: 'Free Shipping', description: 'Standard shipping' },
  { icon: Chat, title: '24/7 Support', description: 'Always available' },
  { icon: Coupon, title: 'Best Deals', description: 'Exclusive offers' },
  { icon: Wallet, title: 'Secure Payment', description: 'Safe and trusted' },
];

const Row = () => {
  return (
    <section className={`${styles.rowFeatures} ${styles.section}`}>
      <div className={styles.container}>
        <div
          className={styles.rowCols}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.cols} ${styles.hidden}`}>
              <i className={styles.boxIcon}>
                <img src={feature.icon} alt="" />
              </i>
              <div className={styles.boxContent}>
                <div className={styles.boxTitle}>{feature.title}</div>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Row;
