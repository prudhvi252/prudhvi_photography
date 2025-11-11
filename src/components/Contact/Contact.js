import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [selectedPackage, setSelectedPackage] = useState("Basic Package");

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.description}>
        Fill out the following form to get in touch with us or book a package.
      </p>

      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="package">Select Package:</label>
          <select
            id="package"
            name="package"
            value={selectedPackage}
            onChange={handlePackageChange}
            required
          >
            <option value="Economy Package">Economy Package</option>
            <option value="Basic Package">Basic Package</option>
            <option value="Premium Package">Premium Package</option>
            <option value="Luxury Package">Luxury Package</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
