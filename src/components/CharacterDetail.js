import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">
        <span>Volver</span>
      </Link>
      <section>
        <img src={props.character.image} alt={props.character.name} />
      </section>
      <section>
        <h1>{props.character.name}</h1>
        <ul>
          <li>Status:{props.character.status}</li>
          <li>Specie:{props.character.species}</li>
          <li>Origin:{props.character.origin.name}</li>
          <li>Episode:{props.character.episode.length}</li>
        </ul>
      </section>
    </div>
  );
};
export default CharacterDetail;
