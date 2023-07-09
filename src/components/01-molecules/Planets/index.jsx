import React, { useEffect, useRef } from "react";
import useMousePosition from "components/hooks/useMousePosition";
import useIsinViewPort from "components/hooks/useIsInViewport";
import { animated, useSpring } from "@react-spring/web";

import styles from "./index.module.css";

const HORIZONTAL_DIFF = 35;
const VERTICAL_DIFF = 40;

function Planets() {
  const mousePosition = useMousePosition();

  const refPlanet1 = useRef(null);
  const refPlanet2 = useRef(null);
  const refPlanet3 = useRef(null);

  const isPlanet1Visible = useIsinViewPort(refPlanet1);
  const isPlanet2Visible = useIsinViewPort(refPlanet2);
  const isPlanet3Visible = useIsinViewPort(refPlanet3);

  const [animationStyles, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useEffect(() => {
    const [width, height] = [window.innerWidth, window.innerHeight];
    const newOffset = {
      x: (mousePosition.x + (-1 * width) / 2) / HORIZONTAL_DIFF,
      y: (mousePosition.y + (-1 * height) / 2) / VERTICAL_DIFF,
    };
    api(newOffset);
  }, [mousePosition]);

  return (
    <div className={styles.planets}>
      <animated.div
        style={isPlanet1Visible ? animationStyles : {}}
        className={`${styles.planet} ${styles.first}`}
        ref={refPlanet1}
       />

      <animated.div
        style={isPlanet2Visible ? animationStyles : {}}
        className={`${styles.planet} ${styles.second}`}
        ref={refPlanet2}
       />

      <animated.div
        style={isPlanet3Visible ? animationStyles : {}}
        className={`${styles.planet} ${styles.third}`}
        ref={refPlanet3}
       />
    </div>
  );
}

export default Planets;
