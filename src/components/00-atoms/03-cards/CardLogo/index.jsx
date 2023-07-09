import React from "react";
import style from "./index.module.css";

function CardLogo({ image, href, text }) {
  return (
    <a className={style.card} href={href}>
      <img className={style.image} src={image} alt={text} />
    </a>
  );
}

export default CardLogo;
