import React from "react";
import style from "./index.module.css";

function ButtonCarouseleArrow({ onClick = () => {}, icon }) {
  return (
    <button className={style.button} onClick={onClick}>
      {icon}
    </button>
  );
}

export default ButtonCarouseleArrow;
