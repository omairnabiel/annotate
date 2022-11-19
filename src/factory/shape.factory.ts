import { Line } from "../shapes/line";
import { Shape } from "../shapes/shape.base";
import { Shapes } from "../types/shapes";

export class ShapeFactory {
  static createObject(type: Shapes): Shape {
    switch (type) {
      case "line":
        return new Line();
      case "circle":
        return new Line();
      case "rectangle":
        return new Line();
      default:
        return new Line();
    }
  }
}
