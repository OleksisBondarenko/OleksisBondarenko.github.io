import React from "react";
import { RECENT_WORKS } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import CarouseleRecentWorks from "components/02-organisms/02-parts/CarouseleRecentWorks";
import Container from "components/02-organisms/02-parts/Container";

function RecentWork() {
  return (
    <Container background="white">
      <HeaderBlockAndText
        header={RECENT_WORKS.header}
        text={RECENT_WORKS.text}
        colorHeader="var(--color-font-primary)"
       />

      <CarouseleRecentWorks cards={RECENT_WORKS.works} />
    </Container>
  );
}

export default RecentWork;
