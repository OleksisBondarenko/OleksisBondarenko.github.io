import React from "react";

import TemplateButton from "../TemplateButton";

function ButtonBlock({ text, height, width, href }) {
  return (
    <TemplateButton
      text={text}
      href={href}
      style={{
        border: "1px solid var(--color-secondary)",
        boxShadow: "0px 8px 30px var(--color-secondary)",
        height,
        width,
      }}
     />
  );
}

export default ButtonBlock;
