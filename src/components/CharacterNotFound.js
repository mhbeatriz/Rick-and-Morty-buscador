import React from "react";
import notfound from "../images/notfound.png";

const CharacterNotFound = () => {
  return (
    <section>
      <img src={notfound} />
      <p>Lo siento este personaje no existe</p>
    </section>
  );
};

export default CharacterNotFound;
