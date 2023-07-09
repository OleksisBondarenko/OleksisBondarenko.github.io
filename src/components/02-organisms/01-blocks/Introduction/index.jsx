import React from "react";

import { RESUME , INTRODUCTION } from "assets/static";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";

import HeaderBlock from "components/00-atoms/04-texts/HeaderForBlock";
import Text from "components/00-atoms/04-texts/Text";
import Container from "components/02-organisms/02-parts/Container";
import MainUserImage from "components/00-atoms/03-cards/MainUserImage";
import WorkedWith from "components/02-organisms/02-parts/WorkedWith";
import { animated, useSpring } from "@react-spring/web";
import style from "./index.module.css";

const ANIMATION_LEFT = {
  from: { transform: "translate(0,-10%) ", opacity: 0.5 },
  to: { transform: "translate(0,0) ", opacity: 1 },
};

const ANIMATION_RIGHT = {
  from: { transform: "scale(0.85)", opacity: .5 },
  to: { transform: "scale(1)", opacity: 1 },
};

function Introduction() {
  const springsIntroducing = useSpring({
    config: { duration: 1000 },
    ...ANIMATION_LEFT,
  });

  const springsImage = useSpring({
    config: { duration: 1000 },
    ...ANIMATION_RIGHT,
  });

  return (
    <Container>
      <div className={style.block}>
        <animated.div style={springsIntroducing}>
          <div className={style.greetings}>
            <HeaderBlock text={INTRODUCTION.name} />
            <Text text={INTRODUCTION.description} />
            <ButtonBlock text="Download CV" href={RESUME} />
          </div>
        </animated.div>

        <animated.span style={springsImage}>
          <MainUserImage />
        </animated.span>
      </div>

      <WorkedWith />
    </Container>
  );
}

export default Introduction;
