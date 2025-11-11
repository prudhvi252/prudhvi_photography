// FAQ.jsx
import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle question active/inactive
  };

  const faqs = [
    {
      question: "How long does a wedding photo shoot last?",
      answer:
        "A typical wedding photo shoot lasts between 6 and 10 hours, depending on the schedule and wishes of the couple. We adapt to capture all important moments of the day.",
    },
    {
      question: "What equipment do you use for wedding photos?",
      answer:
        "We use modern full-frame cameras and a variety of professional lenses to ensure that every moment is captured in the highest quality.",
    },
    {
      question: "When will we receive our photos?",
      answer:
        "Photo editing typically takes 4 to 6 weeks, depending on the selected package and current workload. The finished photos are provided digitally via an online gallery.",
    },
    {
      question: "Do you also offer video recording?",
      answer:
        "Yes, we work with professional videographers to cover weddings both photographically and videographically.",
    },
  ];

  useEffect(() => {
    AOS.refresh(); // Refresh AOS to recognize new elements
  }, [activeIndex]);

  return (
    <section className={styles.faqSection} data-aos="fade-up">
      <h2 className={styles.faqTitle} data-aos="fade-down">
        Frequently Asked Questions
      </h2>
      <div
        className={styles.titleUnderline}
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
            data-aos="fade-up"
            data-aos-delay={index * 100 + 300} // Different delay for each item
          >
            <div className={styles.question}>
              <h3>{faq.question}</h3>
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.show : styles.hide
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
