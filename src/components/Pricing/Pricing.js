// Pricing.jsx
import React from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  const pricingPlans = [
    {
      name: "Economy Package",
      price: 15000,
      features: [
        "Up to 2 hours of photography",
        "20 edited photos",
        "Online gallery",
        "Pre-event consultation",
      ],
      type: "economy",
      delay: 100,
    },
    {
      name: "Basic Package",
      price: 30000,
      features: [
        "Up to 5 hours of photography",
        "50 edited photos",
        "Online gallery",
        "Pre-event consultation",
      ],
      type: "basic",
      delay: 200,
    },
    {
      name: "Premium Package",
      price: 60000,
      features: [
        "Up to 10 hours of photography",
        "100 edited photos",
        "Online gallery",
        "Photo book included",
      ],
      type: "popular",
      delay: 300,
    },
    {
      name: "Luxury Package",
      price: 100000,
      features: [
        "Full day photography",
        "150 edited photos",
        "Online gallery",
        "Photo book and USB stick included",
      ],
      type: "luxury",
      delay: 400,
    },
  ];

  return (
    <section className={styles.pricing}>
      <h2 className={styles.title} data-aos="fade-down">
        Our Prices
      </h2>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.pricingCard} ${styles[plan.type]}`}
            data-aos="fade-up"
            data-aos-delay={plan.delay}
          >
            <h3 className={styles.planTitle}>{plan.name}</h3>
            <p className={styles.price}>
              <span className={styles.currency}>₹</span>
              {plan.price.toLocaleString()}
            </p>
            <ul className={styles.features}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaButton}>Book Package</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
