import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import notfound from "../images/notfound.png";

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
      {props.characters.length === 0 ? (
        <div className="notfound">
          <p className="tryagain">Prueba a escribir otro personaje</p>{" "}
          <img src={notfound} className="img-notfound" />
        </div>
      ) : (
        <ul className="list-characters">{characterElements}</ul>
      )}
    </section>
  );
};
export default CharacterList;
CharacterList.PropsTypes = {
  characters: PropTypes.array,
};
