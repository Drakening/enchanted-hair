import React from 'react';
import styles from '../Styling/Faq.module.css';
import Scrollanimation from './Ui/fadeInUp/ScrollAnimation';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "What types of wigs do you offer?",
      answer: "We offer a wide range of wigs, including synthetic, human hair, lace front, and full lace wigs."
    },
    {
      id: 2,
      question: "How do I choose the right wig for me?",
      answer: "Consider factors like your lifestyle, hair type, and the look you want to achieve. Our customer service team can also help you make the best choice."
    },
    {
      id: 3,
      question: "Can I style and color my wig?",
      answer: "Yes, you can style and color human hair wigs just like your natural hair. However, we recommend consulting with a professional stylist for the best results."
    },
    {
      id: 4,
      question: "How do I care for my wig?",
      answer: "We provide care instructions with each wig. Generally, you should use sulfate-free shampoos and conditioners, avoid heat styling, and store the wig properly when not in use."
    },
    {
      id: 5,
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase if the wig is in its original condition and packaging. Please refer to our return policy for more details."
    },
    {
      id: 6,
      question: "Do you offer custom wigs?",
      answer: "Yes, we offer custom wig services to create a wig that perfectly matches your specifications. Contact our customer service team to learn more."
    },
  ];


  return (
    <section className={styles.faq}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeading}>
        <Scrollanimation>
          <h2>FAQ</h2>
        </Scrollanimation>
        </div>
        <Scrollanimation>
        <div className={styles.faqGrid}>
          {faqData.map((faq) => (
            <div key={faq.id} className={styles.faqCard}>
              <h3 className={styles.faqTitle}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
        </Scrollanimation>
      </div>
    </section>
  );
};

export default FAQSection;
