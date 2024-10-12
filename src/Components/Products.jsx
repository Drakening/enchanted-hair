// ProductsSection.jsx
import React, { useState } from 'react';
import styles from '../Styling/Products.module.css';
import Scrollanimation from './Ui/fadeInUp/ScrollAnimation';
import Peruvian from '../Assets/products/peruvian.png';
import Ponytail from '../Assets/products/ponytail.webp';

const products = [
  { id: 1, imgSrc: Peruvian, name: 'Product 1', category: 'category1' },
  { id: 2, imgSrc: Ponytail, name: 'Product 2', category: 'category2' },
  { id: 3, imgSrc: Peruvian, name: 'Product 3', category: 'category1' },
  { id: 4, imgSrc: Ponytail, name: 'Product 4', category: 'category2' },
  { id: 5, imgSrc: Ponytail, name: 'Product 5', category: 'category2' },
  { id: 6, imgSrc: Peruvian, name: 'Product 6', category: 'category1' },
];

const ProductsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product =>
    filter === 'all' ? true : product.category === filter
  );

  return (
    <section id="products" className={styles.products}>
      <div className={styles.productsContainer}>
        <div className={styles.productsHeading}>
          <Scrollanimation>
            <h2>Products</h2>
          </Scrollanimation>
        </div>
        <div className={styles.productsTabs}>
          <Scrollanimation>
            <div className={styles.filterLinks}>
              <button
                className={`${styles.filter} ${filter === 'all' ? styles.active : ''}`}
                onClick={() => setFilter('all')}
              >
                <div>All</div>
              </button>
              <button
                className={`${styles.filter} ${filter === 'category1' ? styles.active : ''}`}
                onClick={() => setFilter('category1')}
              >
                <div>Category 1</div>
              </button>
              <button
                className={`${styles.filter} ${filter === 'category2' ? styles.active : ''}`}
                onClick={() => setFilter('category2')}
              >
                <div>Category 2</div>
              </button>
            </div>
          </Scrollanimation>
          <div className={styles.tabContents}>
            <div className={styles.tab}>
              <div className={styles.productList}>
                {filteredProducts.map(product => (
                  <Scrollanimation key={product.id}>
                    <div className={styles.listItem}>
                      <div className={styles.productLink}>
                        <img className={styles.productImg} src={product.imgSrc} alt={product.name} />
                        <div className={styles.aboutProduct}>
                          <a href="#" className={styles.learnMore}>
                            <h5 className={styles.productName}>{product.name}</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Scrollanimation>
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
