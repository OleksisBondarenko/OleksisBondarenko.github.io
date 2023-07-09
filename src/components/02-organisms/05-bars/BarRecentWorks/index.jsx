import React from "react";
import CardWork from "components/02-organisms/04-cards/CardWork";
import style from "./index.module.css";

function BarRecentWorks({ cards: _works = [], countCards = 2, isNext = true }) {
  const activeWorks = _works.slice(0, countCards);

  const animationIndex = isNext ? activeWorks.length - 1 : 0;

  return (
    <div className={style.cards}>
      {activeWorks.map((card, index) => (
          <div key={card.id} className={`${style.card} `}>
            <CardWork
              imageAnimation={
                animationIndex === index ? style.animation : ""
              }
              {...card}
             />
          </div>
        ))}
    </div>
  );
}

export default BarRecentWorks;
