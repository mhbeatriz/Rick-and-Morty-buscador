import React, { useState, useEffect } from "react";
import getDataFromAPI from "../services/api";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <>
      <h1>Hola mundo</h1>
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
