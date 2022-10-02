import type { Component } from "solid-js";

import Canvas from "./components/Canvas";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Canvas />
    </div>
  );
};

export default App;
