"use client";
import { useState } from "react";
import styles from "./page.module.css";
import FoodList from "./components/food/FoodList";
import HeroMatch from "./components/food/HeroMatch";

export default async function Page() {
  const foodid = "716429";
  const foodqueryURL = `https://api.spoonacular.com/recipes/${foodid}/information?apiKey=${process.env.FOOD_API_KEY}&addTasteData=false`;
  const request = await fetch(foodqueryURL);
  const foodData = await request.json();

  console.log(foodData);

  async function showHero(foods) {
    const heroid = 1;
    const heroURL = `https://superheroapi.com/api/${process.env.HERO_API_KEY}/${heroid}/powerstats`;
    const requestHero = await fetch(heroURL);
    const heroData = await requestHero.json();
    console.log(heroData);
  }

  return (
    <main className={styles.pageWrapper}>
      <h1>Choose Your Food！</h1>
      <FoodList />
      <HeroMatch />
    </main>
  );
}
