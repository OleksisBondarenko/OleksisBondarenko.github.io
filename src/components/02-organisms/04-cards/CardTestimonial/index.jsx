import React from "react";
import Text from "components/00-atoms/04-texts/Text";
import CardUser from "components/00-atoms/03-cards/CardUser";

import { QUOTES } from "assets/static";
import style from "./index.module.css";

function CardTestimonial({ text, client, image }) {
  return (
    <div className={style.border}>
      <div className={style.card}>
        <Text text={text} />

        <CardUser text={client} image={image} />
      </div>
      <img className={style.quotes} src={QUOTES} />
    </div>
  );
}

export default CardTestimonial;
