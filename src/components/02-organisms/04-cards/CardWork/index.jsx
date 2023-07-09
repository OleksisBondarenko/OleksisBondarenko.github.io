import React from "react";
import HeaderCardAndText from "components/01-molecules/06-headers/HeaderCardAndText";
import ButtonCard from "components/00-atoms/02-buttons/ButtonCard";
import style from "./index.module.css";

function CardWork({ text, header, image, imageAnimation }) {
  return (
    <div className={style.card}>
      <img
        className={`${style.image} ${imageAnimation}`}
        loading="lazy"
        src={image}
        alt={header}
       />

      <div className={style.header}>
        <HeaderCardAndText header={header} text={text} />
      </div>

      <div className={style.button}>
        <ButtonCard
          text="Know more"
          style={{
            width: "100%",
            boxShadow: "0px 8px 30px var(--color-secondary)",
          }}
         />
      </div>
    </div>
  );
}

export default CardWork;
