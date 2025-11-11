import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        {/* Logo above all sections */}
        <img
          src={`${process.env.PUBLIC_URL}/img/Prudhvi Adari.png`}
          alt="Logo Prudhvi Studios"
          className={styles.logo}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h4>Contact</h4>
          <p>Phone: +91 9581100738</p>
          <p>Email: prudhviadari252@example.com</p>
        </div>

        <div className={styles.quickLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.socialMedia}>
          <h4>Follow Me</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.copyright}>
        <p>All rights reserved &copy; 2025</p>
        <p>Developed by Prudhvi Adari</p>
      </div>
    </footer>
  );
}

export default Footer;
