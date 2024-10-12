import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import icon from '../../Assets/icons/icon.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <a className={styles.brand} href="#">
            <img src={icon} className={styles.brandIcon} alt="" />
          </a>
          <div className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.closeBtn} onClick={toggleMenu}>&times;</div>
            <ul className={styles.menuWrap}>
              <li className={styles.navLink}>
                <ScrollLink
                  className={styles.link}
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                >
                  About Us
                </ScrollLink>
              </li>
              <li className={styles.navLink}>
                <ScrollLink
                  className={styles.link}
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                >
                  Services
                </ScrollLink>
              </li>
              <li className={styles.navLink}>
                <ScrollLink
                  className={styles.link}
                  to="products"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                >
                  Products
                </ScrollLink>
              </li>
              <li className={styles.navLink}>
                <ScrollLink
                  className={styles.link}
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className={styles.orderLink}>
            <ScrollLink
              to="order"
              className={styles.howTo}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              How to order
            </ScrollLink>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
