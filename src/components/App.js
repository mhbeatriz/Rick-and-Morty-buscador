import React, { useState, useEffect } from "react";
import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setCharacters(data);
    });
  }, []);

  function handleFilter(data) {
    if (data.key === "name") {
      return setFilterName(data.value);
    }
  }

  const FilterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });
  return (
    <>
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={FilterCharacters} />
    </>
  );
};
export default App;
