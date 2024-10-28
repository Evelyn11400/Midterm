export default async function fetchHeroData(heroId) {
  const heroURL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/82fb200066454d0fb71b5c725399b3a5/${heroId}/powerstats`;
  const heroResponse = await fetch(heroURL);
  const heroData = await heroResponse.json();
  console.log(heroData);
  return heroData;
}
