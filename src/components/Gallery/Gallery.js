// Gallery.jsx
import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1711913322812-a84d37007924?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wedding 1",
    },
    {
      src: "https://images.unsplash.com/photo-1542415719-96b33a38d73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wedding 2",
    },
    {
      src: "https://images.unsplash.com/photo-1616430292050-64f5ca6b2260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wedding 3",
    },
    {
      src: "https://images.unsplash.com/photo-1713726145710-85b58fc4180e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wedding 4",
    },
    {
      src: "https://images.unsplash.com/photo-1464160551369-33c49e545109?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wedding 5",
    },
    {
      src: "https://images.unsplash.com/photo-1717844519178-fa7dcd729f00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wedding 6",
    },
  ];

  return (
    <section className={styles.gallery}>
      <h2 className={styles.galleryTitle} data-aos="fade-down">
        Gallery
      </h2>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Progressive delay: 0ms, 100ms, 200ms, etc.
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
