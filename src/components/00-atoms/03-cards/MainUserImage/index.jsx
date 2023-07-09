import { USER_PHOTO } from "assets/static";
import React from "react";
import style from "./index.module.css";

function MainUserImage() {
  return (
    <div className={style["user-image"]}>
      <img src={USER_PHOTO} alt="alex" />
    </div>
  );
}

export default MainUserImage;
