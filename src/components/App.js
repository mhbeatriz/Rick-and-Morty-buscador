import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromAPI from "../services/api";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );

  useEffect(() => {
    if (characters.length === 0) {
      getDataFromAPI().then((data) => {
        setCharacters(data);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [filterName, filterSpecies, characters]);

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

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    console.log(foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };
  return (
    <Switch>
      <div>
        <Route exact path="/">
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
