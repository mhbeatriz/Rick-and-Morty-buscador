import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li>
      <Link to={`/character/${props.character.id}`}>
        <img
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
