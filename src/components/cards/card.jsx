import React from "react";
import "./card.css";

function Card({ item }) {
  return (
    <section className="card">
      <img className="card__image" src={item.image} alt="" />
      <div className="card__content">
        <h4 className="card__subtitle">{item.subTitle}</h4>
        <h1 className="card__title">{item.title}</h1>
      </div>
    </section>
  );
}

export default Card;
