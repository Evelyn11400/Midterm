export default async function fetchHeroData(heroId) {
  const heroURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/82fb200066454d0fb71b5c725399b3a5/${heroId}/powerstats`;
  const heroResponse = await fetch(heroURL);
  const heroData = await heroResponse.json();
  console.log(heroData);
  const heroImgURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/82fb200066454d0fb71b5c725399b3a5/${heroId}/image`;
  const heroImgResponse = await fetch(heroImgURL);
  const heroImgData = await heroImgResponse.json();
  console.log(heroImgData);

  const { id, ...powerstats } = heroData;
  let highestStat = null;
  let highestValue = -1;

  for (const [key, value] of Object.entries(powerstats)) {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue > highestValue) {
      highestValue = numericValue;
      highestStat = key;
    }
  }

  //console.log("Highest Stat:", highestStat, "Value:", highestValue);

  return {
    powerstats: heroData,
    image: heroImgData.url,
    name: heroImgData.name,
    highestStat,
    highestValue,
  };
}
