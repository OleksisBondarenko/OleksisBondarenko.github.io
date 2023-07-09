import React from "react";
import style from "./index.module.css";
import CardCaseStudies from "../CardCaseStudies";

function CardCaseStudiesReverse(props) {
  return (
    <div className={style.card}>
      <CardCaseStudies {...props} />
    </div>
  );
}

export default CardCaseStudiesReverse;
