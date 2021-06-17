import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import arrow from "../images/arrow.png";

const CharacterDetail = (props) => {
  return (
    <div className="containerdetail">
      <Header />
      <Link to="/" className="go-back">
        {/* <span className="go-back-text">Volver</span> */}
        <img src={arrow} className="go-back-image" />
      </Link>

      <div className="detail">
        <section>
          <img
            className="image-detail"
            src={props.character.image}
            alt={props.character.name}
          />
        </section>
        <section className="info">
          <h1 className="name-detail">{props.character.name}</h1>
          <ul className="info-detail">
            <li className="detail-list">Status: {props.character.status}</li>
            <li className="detail-list">Specie: {props.character.species}</li>
            <li className="detail-list">Origin: {props.character.origin}</li>
            <li className="detail-list">Episode: {props.character.episode}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default CharacterDetail;
