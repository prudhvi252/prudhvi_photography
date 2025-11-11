import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title} data-aos="fade-down">
        Unforgettable Moments, Captured Forever
      </h1>
      <button
        className={styles.ctaButton}
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Book Now
      </button>{" "}
      {/* Button for booking */}
    </section>
  );
}

export default Hero;
