import React, { useState } from "react";
import style from "./index.module.css";

function TextArea({ value = "", placeholder = "" }) {
  const [text, setText] = useState(value);

  return (
    <div className={style.box}>
      <textarea
        className={style.text}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
       />
    </div>
  );
}

export default TextArea;
