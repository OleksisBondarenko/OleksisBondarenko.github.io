import React from "react";
import styles from "./index.module.css";

function GlitchAnimation({ children, glitchText = "Hello world" }) {
  return (
    <div className={styles["glitch-animation"]} data-text={glitchText}>
      {children}
    </div>
  );
}

export default GlitchAnimation;
