import React from "react";
import Header from "components/02-organisms/01-blocks/Header";
import Introduction from "components/02-organisms/01-blocks/Introduction";
import CaseStudies from "components/02-organisms/01-blocks/CaseStudies";
import Testimonials from "components/02-organisms/01-blocks/Testimonials";
import RecentWork from "components/02-organisms/01-blocks/RecentWork";
import Contact from "components/02-organisms/01-blocks/Contact";
import Footer from "components/02-organisms/01-blocks/Footer";
import ButtonGoTop from "components/00-atoms/02-buttons/ButtonGoTop";
import style from "./index.module.css";

function TMain() {
  return (
    <>
      <Header />
      <div className={style.main}>
        <div id="home" className={style.block}>
          <Introduction />
        </div>
        <div id="case-studies" className={style.block}>
          <CaseStudies />
        </div>

        <div id="testimonials" className={style.block}>
          <Testimonials />
        </div>

        <div id="recent-work" className={style.block}>
          <RecentWork />
        </div>

        <div id="contact" className={style.block}>
          <Contact />
        </div>
        <Footer />
        <ButtonGoTop />
      </div>
    </>
  );
}

export default TMain;
