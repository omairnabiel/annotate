import { createStore } from "solid-js/store";

import { Shapes } from "./types/shapes";

// initial state
const shape: Shapes = "line";
const lineCap: CanvasLineCap = "round";

export const [options, setOptions] = createStore({
  shape,
  lineCap,
  lineWidth: 10,
  strokeStyle: "black",
});
