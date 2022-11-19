interface IShape {
  type: String;
  draw: Function;
}

export class Shape implements IShape {
  type = "shapes";
  draw = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number
  ) => {};
}
