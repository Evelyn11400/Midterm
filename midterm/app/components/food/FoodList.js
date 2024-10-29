import React from "react";
import styles from "../../page.module.css";

const foods = [
  { id: "1", name: "Lime Grilled Steak" },
  { id: "2", name: "Chili Vegetable Soup" },
  { id: "3", name: "Parsnips Chicken Breast" },
  { id: "4", name: "Honey Pecan Pie" },
  { id: "5", name: "Herbal Tea" },
  { id: "6", name: "Chocolate Cream Cheese Cupcakes" },
];

export default function FoodList({ onSelectFood }) {
  return (
    <div className={styles.foodListWrapper}>
      {foods.map((food) => (
        <button key={food.id} onClick={() => onSelectFood(food.id)}>
          <p>{food.name}</p>
        </button>
      ))}
    </div>
  );
}
