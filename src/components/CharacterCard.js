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
      </Link>
      <section className="info-character">
        <h3 className="name">{props.character.name}</h3>
        <p className="species">{props.character.species}</p>
        <p className="location">{props.character.location}</p>
      </section>
    </li>
  );
};
export default CharacterCard;
