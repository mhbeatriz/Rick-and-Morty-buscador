import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromAPI from "../services/api";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import "../stylesheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );

  //Llamada a la Api y ordenarla alfabéticamente
  useEffect(() => {
    if (characters.length === 0) {
      getDataFromAPI().then((data) => {
        const orderAlpha = data.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        setCharacters(data);
      });
    }
  }, []);

  //LocalStorage
  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [filterName, filterSpecies, characters]);

  //Filtrar por nombre y especie
  function handleFilter(data) {
    if (data.key === "name") {
      return setFilterName(data.value);
    } else if (data.key === "species") {
      return setFilterSpecies(data.value);
    }
  }

  const FilterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecies === "") {
        return true;
      } else {
        return character.species
          .toLowerCase()
          .includes(filterSpecies.toLowerCase());
      }
    });

  //Función para llamar al detalle de cada personaje
  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    console.log(foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>Pruebe a buscar otro personaje</p>;
    }
  };
  return (
    <Switch>
      <div className="container">
        <Route exact path="/">
          <Header />
          <Filters
            handleFilter={handleFilter}
            filterName={filterName}
            filterSpecies={filterSpecies}
          />
          <CharacterList characters={FilterCharacters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </div>
    </Switch>
  );
};
export default App;
