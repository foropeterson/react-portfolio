import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Elegant Welders</h1>
        <p className={styles.description}>
          Delivering precision, quality, and excellence in welding and metal
          fabrication. From custom designs to large-scale projects, we are your
          trusted welding partner.
        </p>
        <a
          href="mailto:contact@elegantwelders.com"
          className={styles.contactBtn}
        >
          Get in Touch
        </a>
      </div>
      <img
        src={getImageUrl("hero/weldingHeroImage.png")}
        alt="Welder at work"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
