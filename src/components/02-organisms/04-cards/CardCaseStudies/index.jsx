import React from "react";
import ButtonCard from "components/00-atoms/02-buttons/ButtonCard";
import ButtonTag from "components/00-atoms/02-buttons/ButtonTag";
import HeaderCardAndText from "components/01-molecules/06-headers/HeaderCardAndText";
import style from "./index.module.css";

function CardCaseStudies({
  text,
  textTag,
  header,
  colorPrimary,
  colorSecondary,
  href,
  image,
}) {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <ButtonTag
          text={textTag}
          style={{ color: colorPrimary, background: colorSecondary }}
         />

        <div className={style.header}>
          <HeaderCardAndText
            header={header}
            text={text}
            colorHeader="var(--color-font-primary)"
           />
        </div>

        <ButtonCard
          href={href}
          text="View case study"
          style={{ background: colorPrimary, width: "50%", minWidth: "200px" }}
         />
      </div>

      <img
        className={style.image}
        loading="lazy"
        src={image}
        alt={header}
       />
    </div>
  );
}

export default CardCaseStudies;
