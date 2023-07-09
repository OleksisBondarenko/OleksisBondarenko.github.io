import React from "react";
import style from "./index.module.css";

function HeaderForBlock({ text }) {
  return <h2 className={style.header}>{text}</h2>;
}

export default HeaderForBlock;
