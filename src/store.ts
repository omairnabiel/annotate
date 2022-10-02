import { createStore } from "solid-js/store";

const lineCap: CanvasLineCap = "square";

export const [options, setOptions] = createStore({
  lineWidth: 1,
  lineCap,
  strokeStyle: "black",
});
