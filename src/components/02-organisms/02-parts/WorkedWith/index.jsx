import React from "react";
import { CLIENTS } from "assets/static";
import CardLogo from "components/00-atoms/03-cards/CardLogo";
import style from "./index.module.css";

function WorkedWith({ clients = CLIENTS }) {
  return (
    <div className={style.block}>
      <div className={style.header}>Worked with</div>

      <div className={style.clients}>
        {clients.map((client) => (
          <CardLogo key={client.id} {...client} />
        ))}
      </div>
    </div>
  );
}

export default WorkedWith;
