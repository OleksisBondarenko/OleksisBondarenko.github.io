import React from "react";
import LinkText from "components/00-atoms/01-links/LinkText";
import style from "./index.module.css";

function NavHeader(props) {
  const { navs = [] } = props;

  return (
    <nav className={style.nav}>
      <ul>
        {navs.map((nav) => (
          <li key={nav.text}>
            <LinkText
              color="#ffffff99"
              colorHover="#ffffff"
              {...nav}
            >
              {nav.text}
            </LinkText>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavHeader;
