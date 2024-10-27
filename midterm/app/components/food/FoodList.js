import styles from "../../page.module.css";

export default function FoodList() {
  return (
    <div className={styles.FoodListWrapper}>
      {foods.map((food) => (
        <button
          key={food.id}
          onClick={() => showHero(food)}
          className={styles.foodButton}
        >
          {food.name}
        </button>
      ))}
    </div>
  );
}

// { foodData }.map((food) => <button onclick={showHero(food)}></button>);
