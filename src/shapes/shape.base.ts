interface IShape {
  type: String;
  draw: Function;
}

export class Shape implements IShape {
  type = "shapes";
  draw = (
    context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number
  ) => {};
}
