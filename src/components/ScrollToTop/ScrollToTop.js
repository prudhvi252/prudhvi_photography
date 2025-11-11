import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.button}
          aria-label="Scroll to top"
        >
          &#8679;
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
