import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li>
      <Link to={`/character/${props.character.id}`}>
        <img
          className="image"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <section className="info-character">
          <h3 className="name">{props.character.name}</h3>
          <p className="species">{props.character.species}</p>
        </section>
      </Link>
    </li>
  );
};
export default CharacterCard;
