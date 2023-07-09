import React from "react";
import CardTestimonial from "components/02-organisms/04-cards/CardTestimonial";
import style from "./index.module.css";

function BarTestimonials({ cards: testimolials = [] }) {
  return (
    <div className={style.cards}>
      {testimolials.map((card) => <CardTestimonial key={card.id} {...card} />)}
    </div>
  );
}

export default BarTestimonials;
