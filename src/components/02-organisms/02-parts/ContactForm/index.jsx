import React from "react";
import TextBox from "components/00-atoms/05-fields/TextBox";
import TextArea from "components/00-atoms/05-fields/TextArea";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";
import style from "./index.module.css";

function ContactForm() {

  return (
    <div className={style.block}>
      <div className={style.field}>
        <label className={style.label} htmlFor="Email">
          Email
        </label>
        <TextBox placeholder="Please enter your email" />
      </div>
      <div className={style.field}>
        <label className={style.label} htmlFor="Mobile">
          Mobile
        </label>
        <TextBox placeholder="Enter mobile" />
      </div>
      <div className={style.field}>
        <label className={style.label} htmlFor="Mmail">
          Message
        </label>
        <TextArea placeholder="Enter your message" />
      </div>
      <ButtonBlock href="mailto:oleksisbondarenko@gmail.com" text="Submit" height="50px" />
    </div>
  );
}

export default ContactForm;
