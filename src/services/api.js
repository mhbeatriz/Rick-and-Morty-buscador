//llamada al API

const getDataFromAPI = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getDataFromAPI;
