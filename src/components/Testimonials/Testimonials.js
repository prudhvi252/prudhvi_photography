import React, { useEffect } from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";

function Testimonials() {
  // ✅ Proper AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animate only once
    });
  }, []);

  // ✅ Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slides change every 3 seconds
    arrows: true,
    pauseOnHover: false, // keeps autoplaying even on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={styles.testimonials} data-aos="fade-up">
      <h2 className={styles.title} data-aos="fade-down">
        What Our Customers Say
      </h2>

      <Slider {...settings} className={styles.slider}>
        {/* Testimonial 1 */}
        <div className={styles.testimonialCard} data-aos="zoom-in">
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.text}>
            "Working with Prudhvi was absolutely amazing! He managed to perfectly capture the emotions of our special day. The images are breathtaking and will stay with us forever. Very professional and creative. Absolutely recommended!"
          </p>
          <div className={styles.clientInfo}>
            <h4 className={styles.clientName}>Shiva</h4>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.starIcon} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className={styles.testimonialCard} data-aos="zoom-in">
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.text}>
            "Prudhvi made our wedding day truly special. He was super friendly and captured beautiful memories. I would recommend him to everyone!"
          </p>
          <div className={styles.clientInfo}>
            <h4 className={styles.clientName}>Ramu</h4>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.starIcon} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className={styles.testimonialCard} data-aos="zoom-in">
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.text}>
            "From the very first consultation, I knew we were in great hands. Prudhvi's attention to detail and artistic eye transformed our special moments into timeless art. The final gallery exceeded all our expectations!"
          </p>
          <div className={styles.clientInfo}>
            <h4 className={styles.clientName}>Priya Sharma</h4>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.starIcon} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className={styles.testimonialCard} data-aos="zoom-in">
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.text}>
            "An exceptional photographer who made us feel comfortable and at ease throughout the entire shoot. The editing work is stunning, and the quick turnaround on the photos was greatly appreciated. Highly professional!"
          </p>
          <div className={styles.clientInfo}>
            <h4 className={styles.clientName}>Rajesh & Anjali</h4>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.starIcon} />
              ))}
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Testimonials;
