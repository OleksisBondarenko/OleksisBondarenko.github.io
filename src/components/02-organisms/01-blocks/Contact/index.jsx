import { CONTACT } from "assets/static";
import React from "react";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import ContactForm from "components/02-organisms/02-parts/ContactForm";
import Container from "components/02-organisms/02-parts/Container";
import style from "./index.module.css";

function Contact() {
  return (
    <Container>
      <div className={style.header}>
        <HeaderBlockAndText
          header={CONTACT.header}
          text={CONTACT.text}
          colorHeader="var(--color-font-secondary)"
         />
      </div>

      <ContactForm />
    </Container>
  );
}

export default Contact;
