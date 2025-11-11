import React from "react";
import styles from "./About.module.css";

function About() {
  // ✅ Scroll smoothly to the Contact section
  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.about}>
      <img
        src="https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photographer"
        className={styles.aboutImage}
        data-aos="fade-right"
      />

      <div
        className={styles.aboutContent}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h2
          className={styles.aboutTitle}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h2>

        <p className={styles.aboutText} data-aos="fade-up" data-aos-delay="200">
          Hello, I'm a passionate photographer dedicated to capturing the essence and beauty of life's most precious moments. With over a decade of experience in wedding, portrait, and event photography, I believe every frame tells a unique story worth preserving forever.
        </p>

        <p className={styles.aboutText} data-aos="fade-up" data-aos-delay="250">
          My approach combines technical expertise with artistic vision to create timeless images that evoke emotion and bring joy to those who view them. Whether it's the tender exchange of vows, genuine laughter with loved ones, or quiet moments of celebration, I'm committed to delivering exceptional photography that exceeds your expectations. 📸
        </p>

        <button
          className={styles.ctaButton}
          onClick={handleGetInTouchClick}   /* ✅ Add this */
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default About;
