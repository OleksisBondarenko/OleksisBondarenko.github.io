import React from "react";
import CardCaseStudies from "components/02-organisms/04-cards/CardCaseStudies";
import CardCaseStudiesReverse from "components/02-organisms/04-cards/CardCaseStudiesReverse";
import { useSpring, animated } from "@react-spring/web";
import style from "./index.module.css";

function BarCaseStudies({ cards = [] }) {

  const animationLeftSpawning = useSpring({
    config: { duration: 1000 },
    from: { transform: "translate(-10%,0) ", opacity: 0.5 },
    to: { transform: "translate(0,0) ", opacity: 1 },
  });

  const animationRightSpawning = useSpring({
    config: { duration: 1000 },
    from: { transform: "translate(10%,0) ", opacity: 0.5 },
    to: { transform: "translate(0, 0) ", opacity: 1 },

  });

  return (
    <div className={style.cards}>
      {cards.map((card, index) => (
          <div key={card.text}>
            {index % 2 === 0 ? (
              <animated.div style={animationLeftSpawning}><CardCaseStudies {...card} /></animated.div>
            ) : (
              <animated.div style={animationRightSpawning}><CardCaseStudiesReverse {...card} /></animated.div>
            )}
          </div>
        ))}
    </div>
  );
}

export default BarCaseStudies;
