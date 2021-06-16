import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id} className="character-card">
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="list-characters">{characterElements}</ul>
    </section>
  );
};
export default CharacterList;
