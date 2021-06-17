import React from "react";
import notfound from "../images/notfound.png";

const CharacterNotFound = () => {
  return (
    <section className="notfound">
      <img src={notfound} className="img-notfound" />
      <p className="tryagain">Lo siento este personaje no existe</p>
    </section>
  );
};

export default CharacterNotFound;
