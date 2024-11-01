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
  const [selectedFood, setSelectedFood] = useState(null);
  const [confirmedFood, setConfirmedFood] = useState(null);
  const [hero, setHero] = useState(null);

  const handleSelectFood = (foodId) => {
    setSelectedFoodId(foodId);
    const food = foodData.find((food) => food.id === Number(foodId));
    if (food) {
      setSelectedFood(food);
    }
  };

  const handleCreateHero = async () => {
    if (selectedFoodId !== null) {
      try {
        console.log("Selected Food ID:", selectedFoodId);

        if (!selectedFood) {
          console.error("Food not found for the selected id:", selectedFoodId);
          return;
        }

        const highestFlavor = getHighestFlavorAttribute(selectedFood);

        const confirmedFoodWithFlavor = {
          ...selectedFood,
          highestFlavor,
        };

        setConfirmedFood(confirmedFoodWithFlavor);

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
      <div className={styles.createHero}>
        <button onClick={handleCreateHero}>
          <p>Click Me to See the Matched Hero!</p>
        </button>
      </div>
      {hero && confirmedFood && (
        <HeroMatch hero={hero} selectedFood={confirmedFood} />
      )}
    </main>
  );
}
