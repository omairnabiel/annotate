import { Component, onMount } from "solid-js";
import { ShapeFactory } from "../factory/shape.factory";
import { Shape } from "../shapes/shape.base";

import styles from "./Canvas.module.scss";

const Canvas: Component = (props) => {
  let canvas: HTMLCanvasElement | undefined = undefined;
  let context: CanvasRenderingContext2D | undefined | null;
  let shape: Shape;
  let isDrawing = false;
  onMount(() => {
    shape = ShapeFactory.createObject("line");
  });
  const onMouseDown = (event: MouseEvent) => {
    if (!canvas) return;
    context = canvas?.getContext("2d");

    if (!context) return;

    isDrawing = true;
    shape.draw(
      context,
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!canvas || !context || !isDrawing) return;

    shape.draw(
      context,
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
  };

  const onMouseUp = () => {
    isDrawing = false;
    context = null;
  };

  return (
    <canvas
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      ref={canvas}
      height={800}
      width={800}
      class={styles.canvas}
    ></canvas>
  );
};

export default Canvas;
