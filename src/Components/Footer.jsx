import React from 'react';
import styles from './FooterSection.module.css'; // Import the CSS module

const FooterSection = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <span>@ 2024</span>
        <span>Enchanted Wigs</span>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" title="Instagram">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@example" target="_blank" rel="noopener noreferrer" title="TikTok">
          TikTok
        </a>
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" title="Facebook">
          Facebook
        </a>
      </div>
    </section>
  );
};

export default FooterSection;
