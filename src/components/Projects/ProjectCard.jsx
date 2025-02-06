import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, materials, details, inquiry },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.materials}>
        {materials.map((material, id) => {
          return (
            <li key={id} className={styles.material}>
              {material}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={details} className={styles.link}>
          View Details
        </a>
        <a href={inquiry} className={styles.link}>
          Make an Inquiry
        </a>
      </div>
    </div>
  );
};
