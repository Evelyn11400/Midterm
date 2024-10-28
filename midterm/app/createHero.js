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
      heroId = 1;
      break;
    case "saltiness":
      heroId = 2;
      break;
    case "sourness":
      heroId = 3;
      break;
    case "fattiness":
      heroId = 4;
      break;
    case "spiciness":
      heroId = 5;
      break;
    default:
      heroId = 1;
  }
  return heroId;
}
