import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Us</h2>
        <p>
          We’re here to assist you with all your welding needs. Reach out to us
          today!
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:contact@elegantwelders.com">
            contact@elegantwelders.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
          <a href="tel:+25480425328">+254 804 25328</a>
        </li>
      </ul>
    </footer>
  );
};
