"use client";
import { useState } from "react";
import styles from "../../page.module.css";

export default function HeroMatch({ hero }) {
  if (!hero) return null;

  return (
    <div>
      <h2>Matched Hero</h2>
      <p>
        <h3>Name:</h3> {hero.name}
      </p>
      <h3>Powerstats:</h3>
      <ul>
        <li>Intelligence: {hero.intelligence}</li>
        <li>Strength: {hero.strength}</li>
        <li>Speed: {hero.speed}</li>
        <li>Durability: {hero.durability}</li>
        <li>Power: {hero.power}</li>
        <li>Combat: {hero.combat}</li>
      </ul>
    </div>
  );
}
