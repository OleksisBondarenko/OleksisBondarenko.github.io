import React from "react";
import store from "store/counter";
import { observer } from "mobx-react-lite";
import styles from "./index.module.css";

const Minecraft = observer(() => {
  const actionHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h2>Header</h2>

        <form className={styles.form} onSubmit={actionHandler}>
          <input type="text" placeholder="Login " />
          <input type="text" placeholder="Password" />
          <input type="button" value="Submit" />
        </form>

        <h1>Count: {store.count}</h1>
        <button onClick={() => store.increment()}>add +</button>
        <button onClick={() => store.decrement()}>minus -</button>
      </div>
    </div>
  );
});

export default Minecraft;
