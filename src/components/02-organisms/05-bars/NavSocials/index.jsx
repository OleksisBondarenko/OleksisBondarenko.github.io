import React from "react";
import LinkText from "components/00-atoms/01-links/LinkText";
import style from "./index.module.css";
// import LinkImage from "components/00-atoms/01-links/LinkImage";

function NavSocials(props) {
  const { socials = [] } = props;

  return (
    <nav className={style.nav}>
      {socials.map((nav) => (
        <LinkText key={nav.id} {...nav}>
          <img src={nav.image} alt={nav} />
        </LinkText>
      ))}
    </nav>
  );
}

export default NavSocials;
