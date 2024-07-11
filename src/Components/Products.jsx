import React, { useState } from 'react';
import styles from '../Styling/Products.module.css';
import Ponytail from '../Assets/products/straight-brazilian-ponytail.webp';

const products = [
  { id: 1, imgSrc: Ponytail, name: 'curly' },
  { id: 2, imgSrc: Ponytail, name: 'straight' },
  { id: 3, imgSrc: Ponytail, name: 'curly' },
  { id: 4, imgSrc: Ponytail, name: 'straight' },
  { id: 5, imgSrc: Ponytail, name: 'straight' },
  { id: 6, imgSrc: Ponytail, name: 'curly' },
];

const ProductsSection = () => {
  const [filter, setFilter] = useState('all');

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
            <div
              className={styles.tab}
            >
              <div className={styles.productList}>
                {filteredProducts.map(product => (
                  <div key={product.id} className={styles.listItem}>
                    <a href="#" className={styles.productLink}>
                      <img className={styles.productImg} src={product.imgSrc} alt={product.name} />
                      <div className={styles.aboutProduct}>
                        <a href="#" className={styles.learnMore}>
                          <h5 className={styles.productName}>{product.name}</h5>
                        </a>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
