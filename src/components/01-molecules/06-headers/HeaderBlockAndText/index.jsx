import React from "react";
import HeaderForBlock from "components/00-atoms/04-texts/HeaderForBlock";
import Text from "components/00-atoms/04-texts/Text";
import style from "./index.module.css";

function HeaderBlockAndText({ header, text, colorHeader }) {
  return (
    <div className={style.header} style={{ color: colorHeader }}>
        <HeaderForBlock text={header} />

        <Text text={text} />
      </div>
  );
}

export default HeaderBlockAndText;
