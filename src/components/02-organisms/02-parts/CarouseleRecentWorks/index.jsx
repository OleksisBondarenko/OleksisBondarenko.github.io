import React, { useEffect, useState } from "react";
import BarRecentWorks from "components/02-organisms/05-bars/BarRecentWorks";
import { ARROW_LEFT_GRAY, ARROW_RIGHT_GRAY } from "assets/static";
import ButtonCarouseleArrow from "components/00-atoms/02-buttons/ButtonCarouseleArrow";
import style from "./index.module.css";

function CarouseleRecentWorks({
  cards = [],
  countShowCards = 2,
  countCardsMobile = 1,
}) {
  const [works, setWorks] = useState([]);

  const [index, setIndex] = useState(0);

  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    const newWorks = getVisibleWorks();
    setWorks(newWorks);
  }, [index]);

  const getVisibleWorks = () => {
    const newCards = [...cards, ...cards, ...cards];
    const realIndex = cards.length + index;

    return newCards.slice(realIndex, realIndex + countShowCards + 1);
  };

  const handleDecreaseIndex = () => {
    const newIndex = (index - 1) % cards.length;
    setIsNext(false);
    setIndex(newIndex);
  };

  const handleIncreaseIndex = () => {
    const newIndex = (index + 1) % cards.length;
    setIsNext(true);
    setIndex(newIndex);
  };

  return (
    <div className={style.block}>
      <div className={style["carousele-mobile"]}>
        {cards.length > countCardsMobile ? (
          <div
            className={style["button-wrapper"]}
            onClick={() => handleDecreaseIndex()}
          >
            <ButtonCarouseleArrow
              onClick={() => handleDecreaseIndex()}
              icon={ARROW_LEFT_GRAY}
             />
          </div>
        ) : null}

        <BarRecentWorks
          cards={works}
          countCards={countCardsMobile}
          isNext={isNext}
         />

        {cards.length > countCardsMobile ? (
          <div
            className={style["button-wrapper"]}
            onClick={() => handleIncreaseIndex()}
          >
            <ButtonCarouseleArrow
              onClick={() => handleIncreaseIndex()}
              icon={ARROW_RIGHT_GRAY}
             />
          </div>
        ) : null}
      </div>

      <div className={style.carousele}>
        {cards.length > countShowCards ? (
          <div
            className={style["button-wrapper"]}
            onClick={() => handleDecreaseIndex()}
          >
            <ButtonCarouseleArrow
              onClick={() => handleDecreaseIndex()}
              icon={ARROW_LEFT_GRAY}
             />
          </div>
        ) : null}

        <BarRecentWorks
          cards={works}
          countCards={countShowCards}
          isNext={isNext}
         />

        {cards.length > countShowCards ? (
          <div
            className={style["button-wrapper"]}
            onClick={() => handleIncreaseIndex()}
          >
            <ButtonCarouseleArrow
              onClick={() => handleIncreaseIndex()}
              icon={ARROW_RIGHT_GRAY}
             />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CarouseleRecentWorks;
