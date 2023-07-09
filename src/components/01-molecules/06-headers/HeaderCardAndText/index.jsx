import React from "react";
import Text from "components/00-atoms/04-texts/Text";
import HeaderForCard from "components/00-atoms/04-texts/HeaderForCard";
import style from "./index.module.css";

function HeaderCardAndText({ header, text, colorHeader }) {
  return (
    <>
      <div className={style.header} style={{ color: colorHeader }}>
        <HeaderForCard text={header} />
      </div>

      <Text text={text} />
    </>
  );
}

export default HeaderCardAndText;
