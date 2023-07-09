import React, { useRef } from "react";
import NavHeader from "components/02-organisms/05-bars/NavHeader";
import NavSocials from "components/02-organisms/05-bars/NavSocials";
import NavHeaderMobile from "components/02-organisms/05-bars/NavHeaderMobile";
import { NAVS, SOCIALS } from "assets/static";
import useIsScrolUp from "components/hooks/useIsScrolUp";
import useIsMobileMode from "components/hooks/useIsMobileMode";
import style from "./index.module.css";

function DesktopHeader({ navs, socials }) {
  return (
    <div className={`${style["header-desktop"]}`}>
      <div className={style["header-desktop__wrapper"]}>
        <NavHeader navs={navs} />
        <NavSocials socials={socials} />
      </div>
    </div>
  );
}

function MobileHeader({ navs }) {
  return (
    <div className={style["header-mobile"]}>
      <NavHeaderMobile navs={navs} />
    </div>
  );
}

function Header({ navs = NAVS, socials = SOCIALS }) {
  const refHeader = useRef(null);
  const { isMobileMode } = useIsMobileMode();
  const { isScolUp } = useIsScrolUp();

  const headerHeight = !isScolUp
    ? refHeader?.current?.clientHeight
      ? refHeader?.current?.clientHeight * -1
      : 0
    : 0;
  
  if (!isMobileMode) {
    return (
      <header
        ref={refHeader}
        className={style.header}
        style={{ top: headerHeight }}
      >
        <DesktopHeader socials={socials} navs={navs} />
      </header>
    );
  } 
    return <MobileHeader navs={navs} />;
  
  // return (
  //   <header
  //     ref={refHeader}
  //     className={style["header"]}
  //     style={{ top: headerHeight }}
  //   >
  //     {!isMobileMode ? (
  //       <DesktopHeader socials={socials} navs={navs} />
  //     ) : (
  //       <MobileHeader navs={navs}></MobileHeader>
  //     )}
  //   </header>
  // );
}

export default Header;
