import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle} data-aos="fade-down">
        My Services
      </h2>
      <div className={styles.servicesList}>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className={`fas fa-camera-retro ${styles.icon}`}></i>
          <h3 className={styles.serviceItemTitle}>Wedding Photography</h3>
          <p className={styles.serviceItemText}>
            Professional photography for your special day, with breathtaking images that capture the magic of your wedding day forever.
          </p>
        </div>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className={`fas fa-heart ${styles.icon}`}></i>
          <h3 className={styles.serviceItemTitle}>Pre-Wedding Shootings</h3>
          <p className={styles.serviceItemText}>
            A relaxed and fun photo session before the wedding that allows us to capture unique moments and tell your story.
          </p>
        </div>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className={`fas fa-film ${styles.icon}`}></i>
          <h3 className={styles.serviceItemTitle}>Post-Wedding Shootings</h3>
          <p className={styles.serviceItemText}>
            post-wedding shootings offer the perfect opportunity to capture beautiful, relaxed images without the stress of wedding day.
          </p>
        </div>
        <div
          className={styles.serviceItem}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <i className={`fas fa-video ${styles.icon}`}></i>{" "}
          {/* Add icon for video */}
          <h3 className={styles.serviceItemTitle}>Videography</h3>
          <p className={styles.serviceItemText}>
            Professional wedding videos that capture the emotions and highlights of your special day in an impressive way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
