import React from "react";
import { CASE_STUDIES } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import BarCaseStudies from "components/02-organisms/05-bars/BarCaseStudies";
import Container from "components/02-organisms/02-parts/Container";

function CaseStudies() {
  return (
    <Container background="white">
      <HeaderBlockAndText
        header={CASE_STUDIES.header}
        text={CASE_STUDIES.text}
        color="var(--color-font-primary)"
       />

      <BarCaseStudies cards={CASE_STUDIES.studies} />
    </Container>
  );
}

export default CaseStudies;
