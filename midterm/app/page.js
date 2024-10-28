"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import FoodList from "./components/food/FoodList";
import HeroMatch from "./components/food/HeroMatch";
import foodData from "./foodData.json";
import { getHighestFlavorAttribute, getHeroIdByFlavor } from "./createHero";
import fetchHeroData from "./fetchHero";

export default function Page() {
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [hero, setHero] = useState(null);

  const handleSelectFood = (foodId) => {
    setSelectedFoodId(foodId);
  };

  const handleCreateHero = async () => {
    if (selectedFoodId !== null) {
      try {
        console.log("Selected Food ID:", selectedFoodId);

        const selectedFood = foodData.find(
          (food) => food.id === Number(selectedFoodId)
        );
        if (!selectedFood) {
          console.error("Food not found for the selected ID:", selectedFoodId);
          return;
        }

        const highestFlavor = getHighestFlavorAttribute(selectedFood);
        const heroId = getHeroIdByFlavor(highestFlavor);

        const heroData = await fetchHeroData(heroId);
        if (heroData) {
          setHero(heroData);
        }
      } catch (error) {
        console.error("Error creating hero:", error);
      }
    } else {
      alert("Please select a food first!");
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.title}>
        <p>First choose Your Food!</p>
      </div>
      <FoodList onSelectFood={handleSelectFood} />
      <button onClick={handleCreateHero}>Create Hero</button>
      {hero && <HeroMatch hero={hero} />}
    </main>
  );
}

//   async function showHero(foods) {
//     const heroid = 1;
//     const heroURL = `https://superheroapi.com/api/${process.env.HERO_API_KEY}/${heroid}/powerstats`;
//     const requestHero = await fetch(heroURL);
//     const heroData = await requestHero.json();
//     console.log(heroData);
//   }
