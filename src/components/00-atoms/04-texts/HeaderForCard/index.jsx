import React from "react";
import style from "./index.module.css";

function HeaderForCard({ text }) {
  return <h3 className={style.header}>{text}</h3>;
}

export default HeaderForCard;
