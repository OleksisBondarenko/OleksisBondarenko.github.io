import React from "react";
import { ARROW_LEFT } from "assets/static";
import styles from "./index.module.css";

function TemplateButton({ text, style, href }) {
  return (
    <a className={styles.button} style={style} href={href}>
      {text} <img src={ARROW_LEFT} />
    </a>
  );
}

export default TemplateButton;
