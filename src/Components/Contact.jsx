import React from 'react';
import styles from '../Styling/Contact.module.css'; 

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.headingTitle}>
          <h2>Let's Get In Contact</h2>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} action="" method="get">
            <div className={styles.orderWrapper}>
              <input
                type="text"
                className={styles.formName}
                name="name"
                maxLength="256"
                placeholder="Name"
                id="name"
              />
              <input
                type="email"
                className={styles.formEmail}
                name="email"
                maxLength="256"
                placeholder="Email"
                id="email"
              />
              <input
                type="text"
                className={styles.formPhone}
                name="phone"
                maxLength="256"
                placeholder="Phone"
                id="phone"
              />
            </div>
            <textarea
              name="field"
              className={styles.textarea}
              maxLength="5000"
              placeholder="What is the product(s) you want to buy?"
              id="field"
            ></textarea>
            <input
              className={styles.secondaryBtn}
              type="submit"
              value="Order Product"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
