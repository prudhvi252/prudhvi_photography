import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  // ✅ Scroll smoothly to contact section
  const handleBookingClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title} data-aos="fade-down">
        Unforgettable Moments, Captured Forever
      </h1>
      <button
        className={styles.ctaButton}
        onClick={handleBookingClick}
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Book Now
      </button>
    </section>
  );
}

export default Hero;
