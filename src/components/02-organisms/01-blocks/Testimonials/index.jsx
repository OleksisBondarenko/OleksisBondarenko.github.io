import React from "react";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";

import { default as BarTestimonials } from "components/02-organisms/05-bars/BarTestimonials";
import { TESTIMONIALS } from "assets/static";
import Container from "components/02-organisms/02-parts/Container";
import style from "./index.module.css";

function Testimonials() {
  return (
    <Container>
      <HeaderBlockAndText
        header={TESTIMONIALS.header}
        text={TESTIMONIALS.text}
        colorHeader="var(--color-font-secondary)"
       />

      <div className={style.content}>
        <BarTestimonials cards={TESTIMONIALS.testimonials} />
      </div>
    </Container>
  );
}

export default Testimonials;
