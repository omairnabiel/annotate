import { Shape } from "./shape.base";

import { options } from "../store";

export class Rectangle extends Shape {
  startX: number | null = null;
  startY: number | null = null;

  constructor() {
    super();
    this.type = "line";

    this.draw = (
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D,
      positionX: number,
      positionY: number
    ) => {
      if (this.startX === null || this.startY === null) {
        this.startX = positionX;
        this.startY = positionY;
      }

      context.strokeStyle = options.strokeStyle;
      context.lineWidth = options.lineWidth;
      context.lineCap = options.lineCap;

      const width = positionX - this.startX;
      const height = positionY - this.startY;

      context.clearRect(this.startX, this.startY, width, height);
      context.strokeRect(this.startX, this.startY, width, height);
    };
  }
}
