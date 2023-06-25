import Texture from '../material/texture';

export default abstract class BaseRenderer {
  constructor(public canvas: HTMLCanvasElement) {}

  public abstract clearFrame(): void;

  public abstract drawRect(
    x: number,
    y: number,
    w: number,
    h: number,
    color: number
  ): void;

  public abstract drawCircle(
    x: number,
    y: number,
    r: number,
    color: number
  ): void;

  public abstract drawImage(
    x: number,
    y: number,
    w: number,
    h: number,
    texture: Texture
  ): void;
  public abstract drawImageFromSheet(
    x: number,
    y: number,
    texture: Texture,
    row: number,
    col: number
  ): void;

  public abstract setFillColor(color: number): void;

  public abstract setStrokeColor(color: number): void;

  public abstract setLineWidth(width: number): void;

  public abstract transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): void;

  public abstract translate(x: number, y: number): void;

  public abstract save(): void;
  public abstract restore(): void;
}
