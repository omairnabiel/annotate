import { Shape } from "./shape.base";

import { options } from "../store";

export class Line extends Shape {
  previousX: number = 0;
  previousY: number = 0;

  constructor() {
    super();
    this.type = "line";

    this.draw = (
      context: CanvasRenderingContext2D,
      positionX: number,
      positionY: number
    ) => {
      this.previousX = positionX;
      this.previousY = positionY;

      context.beginPath();
      context.moveTo(this.previousX, this.previousY);
      context.lineTo(positionX, positionY);
      context.strokeStyle = options.strokeStyle;
      context.lineWidth = options.lineWidth;
      context.lineCap = options.lineCap;
      context.stroke();
      context.closePath();
    };
  }
}
