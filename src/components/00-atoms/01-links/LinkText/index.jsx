import React, { useState } from "react";

import style from "./index.module.css";

function LinkText({ children, href, color, colorHover }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hover) => {
    if (hover === "over") {
      setIsHovered(true);
    } else if (hover === "out") {
      setIsHovered(false);
    }
  };

  return (
    <a
      onMouseOver={() => handleHover("over")}
      onMouseOut={() => handleHover("out")}
      className={style.link}
      style={{ color: `${color ? (isHovered ? colorHover : color) : ""}` }}
      href={href}
    >
      {children}
    </a>
  );
}

export default LinkText;
