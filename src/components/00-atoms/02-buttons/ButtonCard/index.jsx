import React from "react";

import TemplateButton from "../TemplateButton";

function ButtonCard({ text, style, href }) {
  return (
    <TemplateButton
      text={text}
      href={href}
      style={{ height: "38px", ...style }}
     />
  );
}

export default ButtonCard;
