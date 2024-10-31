export function getHighestFlavorAttribute(food) {
  const flavorAttributes = {
    sweetness: food.sweetness,
    saltiness: food.saltiness,
    sourness: food.sourness,
    fattiness: food.fattiness,
    spiciness: food.spiciness,
  };
  const highestFlavor = Object.keys(flavorAttributes).reduce((a, b) =>
    flavorAttributes[a] > flavorAttributes[b] ? a : b
  );
  return highestFlavor;
}

export function getHeroIdByFlavor(highestFlavor) {
  let heroId;
  switch (highestFlavor) {
    case "sweetness":
      heroId = [17, 24, 487];
    case "saltiness":
      heroId = [1, 484];
      break;
    case "sourness":
      heroId = [242, 526];
      break;
    case "fattiness":
      heroId = [4, 6, 13, 506];
      break;
    case "spiciness":
      heroId = [10, 11, 63, 435];
      break;
    default:
      heroId = 1;
  }
  const randomIndex = Math.floor(Math.random() * heroId.length);
  return heroId[randomIndex];
}
