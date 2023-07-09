import React, { useState } from "react";
import style from "./index.module.css";

function TextBox({ value = "", placeholder = "" }) {
  const [text, setText] = useState(value);

  return (
    <div className={style.box}>
      <input
        className={style.text}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
       />
    </div>
  );
}

export default TextBox;
