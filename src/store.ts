import { createStore } from "solid-js/store";

const lineCap: CanvasLineCap = "round";

export const [options, setOptions] = createStore({
  lineWidth: 10,
  lineCap,
  strokeStyle: "black",
});
