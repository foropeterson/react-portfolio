import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";
import styles from "./Hero.module.css";
import logo from "../../assets/w.jpg";

export const Hero = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const colorThief = new ColorThief();
      const [r, g, b] = colorThief.getColor(img);
      setBgColor(`rgb(${r}, ${g}, ${b})`);
    };
  }, []);

  return (
    <section className={styles.container} style={{ backgroundColor: bgColor }}>
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
      <img src={logo} alt="Welder at work" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
