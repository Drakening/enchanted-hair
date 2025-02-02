import React from 'react';
import styles from '../Styling/Footer.module.css';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <span>@ 2025</span>
        <span>Enchanted Wigs</span>
      </div>
      <div className={styles.socialLinks}>
        <a 
          href="https://www.instagram.com/example" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Instagram"
        >
          <FaInstagram className={styles.icon} />
          Instagram
        </a>
        <a 
          href="https://www.tiktok.com/@example" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="TikTok"
        >
          <FaTiktok className={styles.icon} />
          TikTok
        </a>
        <a 
          href="https://www.facebook.com/example" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Facebook"
        >
          <FaFacebookF className={styles.icon} />
          Facebook
        </a>
      </div>
    </section>
  );
};

export default FooterSection;