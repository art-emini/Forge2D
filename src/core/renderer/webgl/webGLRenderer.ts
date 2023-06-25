import Texture from '../../material/texture';
import BaseRenderer from '../baseRenderer';

export default class WebGLRenderer extends BaseRenderer {
  public ctx: WebGL2RenderingContext;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.ctx = canvas.getContext('webgl2') as WebGL2RenderingContext;
  }

  public clearFrame(): void {
    // not yet implemented
  }

  public drawRect(x: number, y: number, w: number, h: number, color: number) {
    // not yet implemented
  }

  public drawCircle(x: number, y: number, r: number, color: number) {
    // not yet implemented
  }

  public drawImage(
    x: number,
    y: number,
    w: number,
    h: number,
    texture: Texture
  ) {
    // not yet implemented
  }
  public drawImageFromSheet(
    x: number,
    y: number,
    texture: Texture,
    row: number,
    col: number
  ) {
    // not yet implemented
  }

  public setFillColor(color: number) {
    // not yet implemented
  }

  public setStrokeColor(color: number) {
    // not yet implemented
  }

  public setLineWidth(width: number) {
    // not yet implemented
  }

  public transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ) {
    // not yet implemented
  }

  public translate(x: number, y: number) {
    // not yet implemented
  }

  public save() {
    // not yet implemented
  }
  public restore() {
    // not yet implemented
  }
}
