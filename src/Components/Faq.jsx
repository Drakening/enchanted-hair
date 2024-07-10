import React from 'react';
import styles from './FAQSection.module.css'; // Import the CSS module

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "What other services do you offer?",
      answer: "I can help your business with brand strategy, research & product design."
    },
    {
      id: 2,
      question: "What other services do you offer?",
      answer: "I can help your business with brand strategy, research & product design."
    },
    {
      id: 3,
      question: "What other services do you offer?",
      answer: "I can help your business with brand strategy, research & product design."
    },
    {
      id: 4,
      question: "What other services do you offer?",
      answer: "I can help your business with brand strategy, research & product design."
    },
    {
      id: 5,
      question: "What other services do you offer?",
      answer: "I can help your business with brand strategy, research & product design."
    },
    {
      id: 6,
      question: "What other services do you offer?",
      answer: "I can help your business with brand strategy, research & product design."
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeading}>
          <h2>FAQ</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqData.map((faq) => (
            <div key={faq.id} className={styles.faqCard}>
              <h3 className={styles.faqTitle}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
