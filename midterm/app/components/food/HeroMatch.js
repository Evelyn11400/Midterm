"use client";
import { useState } from "react";
import styles from "../../page.module.css";

export default function HeroMatch({ hero, selectedFood }) {
  if (!hero) return null;

  return (
    <div>
      <div className={styles.heroTitle}>
        <p>Your matched hero is...</p>
      </div>

      <div className={styles.heroName}>
        <p>{hero.name}</p>
      </div>
      <div className={styles.heroInfoContainer}>
        <img src={hero.image} className={styles.heroImage} />
        <div className={styles.heroInfo}>
          <p>
            {selectedFood.name} is rich in {selectedFood.highestFlavor}.
          </p>
          <p>
            This taste match the {hero.highestStat} of {hero.name}, the value is{" "}
            {hero.highestValue}.
          </p>
        </div>
      </div>
    </div>
  );
}
