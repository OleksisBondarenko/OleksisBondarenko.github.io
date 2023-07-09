// import styles from "./index.module.css";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

function MoveLeftToRightAnimation({ children }) {
  const springs = useSpring({
    config: { duration: 1000 },
    from: {
      x: -20,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
  });

  return (
    <animated.div style={{ color: "white", ...springs }}>
      {children}
    </animated.div>
  );
}

export default MoveLeftToRightAnimation;
