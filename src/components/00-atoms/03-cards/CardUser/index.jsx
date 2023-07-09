import React from "react";
import style from "./index.module.css";

function CardUser({ image, text }) {
  return (
    <a className={style.card} href="#">
      <img className={style.image} src={image} alt={text} />
      {text}
    </a>
  );
}

export default CardUser;
