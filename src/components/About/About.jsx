import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Elegant Welders</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("welding/weldingImage.png")}
          alt="Professional welding work"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("welding/precisionIcon.png")}
              alt="Precision icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Precision Welding</h3>
              <p>
                We specialize in precision welding, ensuring high-quality and
                durable results for every project.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("assets/about2.jpeg")}
              alt="Equipment icon"
            />
            <div className={styles.aboutItemText}>
              <h3>State-of-the-Art Equipment</h3>
              <p>
                Our team uses advanced tools and equipment to deliver top-notch
                welding services tailored to your needs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl(
                "assets/WhatsApp Image 2025-02-12 at 20.18.03.jpeg.png"
              )}
              alt="Experience icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Years of Expertise</h3>
              <p>
                With years of experience in welding, we provide reliable
                solutions for industrial, residential, and commercial projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
