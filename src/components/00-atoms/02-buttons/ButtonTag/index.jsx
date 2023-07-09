import React from "react";
import _style from "./index.module.css";

function ButtonTag({ text, style, href }) {
  return (
    <a className={_style.button} style={style} href={href}>
      {text}
    </a>
  );
}

export default ButtonTag;
