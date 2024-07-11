import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../Styling/Products.module.css';

const products = [
  { id: 1, imgSrc: './assets/products/peruvian.png', name: 'curly' },
  { id: 2, imgSrc: './assets/products/peruvian.png', name: 'straight' },
  { id: 3, imgSrc: './assets/products/peruvian.png', name: 'curly' },
  { id: 4, imgSrc: './assets/products/frontalwig-removebg-preview.png', name: 'straight' },
  { id: 5, imgSrc: './assets/products/frontalwig-removebg-preview.png', name: 'straight' },
  { id: 6, imgSrc: './assets/products/frontalwig-removebg-preview.png', name: 'curly' },
];

const ProductsSection = () => {
  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredProducts = products.filter(product =>
    filter === 'all' ? true : product.name === filter
  );

  return (
    <section className={styles.products}>
      <div className={styles.productsContainer}>
        <div className={styles.productsHeading}>
          <h2>Products</h2>
        </div>
        <div className={styles.productsTabs}>
          <div className={styles.filterLinks}>
            <a
              href="#"
              className={`${styles.filter} ${filter === 'all' ? styles.active : ''}`}
              onClick={() => setFilter('all')}
            >
              <div>All</div>
            </a>
            <a
              href="#"
              className={`${styles.filter} ${filter === 'straight' ? styles.active : ''}`}
              onClick={() => setFilter('straight')}
            >
              <div>Straight</div>
            </a>
            <a
              href="#"
              className={`${styles.filter} ${filter === 'curly' ? styles.active : ''}`}
              onClick={() => setFilter('curly')}
            >
              <div>Curly</div>
            </a>
          </div>
          <div className={styles.tabContents}>
            <motion.div
              className={styles.tab}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className={styles.productList}>
                {filteredProducts.map(product => (
                  <motion.div key={product.id} className={styles.listItem} variants={itemVariants}>
                    <a href="#" className={styles.productLink}>
                      <img className={styles.productImg} src={product.imgSrc} alt={product.name} />
                      <div className={styles.aboutProduct}>
                        <a href="#" className={styles.learnMore}>
                          <h5 className={styles.productName}>{product.name}</h5>
                        </a>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
