import React from "react";

const CharacterCard = (props) => {
  return (
    <li>
      <img src={props.character.image} />
      <h3>{props.character.name}</h3>
      <p>{props.character.species}</p>
    </li>
  );
};
export default CharacterCard;
