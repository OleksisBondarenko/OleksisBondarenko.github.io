import React from "react";
import style from "./index.module.css";

function Container({ children, background }) {
  return (
    <div className={style.block} style={{ background }}>
      <div className={style.content}>{children}</div>
    </div>
  );
}

export default Container;
