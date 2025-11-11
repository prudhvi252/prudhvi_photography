import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = ""; // Reset overflow immediately after clicking a link
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled || menuOpen ? styles.scrolled : ""
      }`}
    >
      <div className={styles.headerContainer}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={handleLinkClick}>
          <img
            src={`${process.env.PUBLIC_URL}/img/Prudhvi Adari.png`}
            alt="Logo Aleksandar Nikolic"
            className={styles.logoImage}
          />
        </a>

        {/* Main menu */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={handleLinkClick}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
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
        </nav>

        {/* Hamburger button */}
        <div
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          aria-expanded={menuOpen}
          onKeyPress={(e) => {
            if (e.key === "Enter") toggleMenu();
          }}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
