import React from "react";
import style from "./index.module.css";

function Text({ text }) {
  return <span className={style.text}>{text}</span>;
}

export default Text;
