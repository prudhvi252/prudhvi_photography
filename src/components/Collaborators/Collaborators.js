// Collaborators.jsx
import React, { useEffect } from "react";
import styles from "./Collaborators.module.css";
import { FaGlobe, FaInstagram, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Collaborators() {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS to recognize new elements
  }, []);

  return (
    <section className={styles.collaborators} data-aos="fade-up">
      <h2 className={styles.title} data-aos="fade-down">
        Our Partners
      </h2>
      <div className={styles.partner} data-aos="fade-up" data-aos-delay="200">
        <img
          src={`${process.env.PUBLIC_URL}/img/Prudhvi2.png`} // Use SVG logo from public folder (transparent)
          alt="Prudhvi Adari Logo"
          className={styles.logo}
          data-aos="zoom-in"
          data-aos-delay="300"
        />
        <div className={styles.info} data-aos="fade-left" data-aos-delay="400">
          <h3>Web Developer Prudhvi Adari</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://prudhvi252.github.io/Portfolio-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <FaGlobe />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/prudhvi252"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaborators;
