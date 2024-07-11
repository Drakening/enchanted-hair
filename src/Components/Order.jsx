import React from 'react';
import styles from '../Styling/Order.module.css';
import Delivery from '../Assets/deliveryPackage.jpg';

const Order = () => {

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div
          className={styles.servicesWrapper}
        >
          <div className={`${styles.contentRight}`}>
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
              <a href="#products" className={styles.primaryBtn}>PRODUCTS</a>
            </div>
          </div>
          <div className={`${styles.imageWrapper}`}>
            <img className={styles.servicesImg} src={Delivery} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
