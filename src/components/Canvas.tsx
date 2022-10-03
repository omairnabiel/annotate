import { Component } from "solid-js";
import { ShapeFactory } from "../factory/shape.factory";
import { Shape } from "../shapes/shape.base";

import styles from "./Canvas.module.scss";

const Canvas: Component = (props) => {
  let canvas: HTMLCanvasElement | undefined = undefined;
  let context: CanvasRenderingContext2D | undefined | null;
  let shape: Shape | null;
  let isDrawing = false;

  const onMouseDown = (event: MouseEvent) => {
    if (!canvas) return;
    shape = ShapeFactory.createObject("line");
    context = canvas?.getContext("2d");

    if (!context || !shape) return;

    isDrawing = true;
    shape.draw(
      context,
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!canvas || !context || !isDrawing || !shape) return;

    shape.draw(
      context,
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
  };

  const onMouseUp = () => {
    isDrawing = false;
    context = null;
    shape = null;
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
