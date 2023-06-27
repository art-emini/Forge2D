import Texture from '../../material/texture';
import BaseRenderer from '../baseRenderer';

export default class CanvasRenderer extends BaseRenderer {
  public ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public clearFrame(): void {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public drawRect(x: number, y: number, w: number, h: number, color: number) {
    this.setFillColor(color);
    this.ctx?.fillRect(x, y, w, h);
  }

  public drawCircle(x: number, y: number, r: number, color: number) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    this.setFillColor(color);
    this.ctx.fill();
  }

  public drawImage(
    x: number,
    y: number,
    w: number,
    h: number,
    texture: Texture
  ) {
    this.ctx.drawImage(texture.asset.value, x, y, w, h);
  }
  public drawImageFromSheet(
    x: number,
    y: number,
    texture: Texture,
    row: number,
    col: number
  ) {
    if (!texture.frameScale) {
      return;
    }

    this.ctx.drawImage(
      texture.asset.value, // image
      col * texture.frameScale.w, // source x
      row * texture.frameScale.h, // source y
      texture.frameScale.w, // source width
      texture.frameScale.h, // source height
      x, // target x
      y, // target y
      texture.frameScale.w, // target width
      texture.frameScale.h // target height
    );
  }

  public setFillColor(color: number) {
    this.ctx.fillStyle = color.toString(16);
  }

  public setStrokeColor(color: number) {
    this.ctx.strokeStyle = color.toString(16);
  }

  public setLineWidth(width: number) {
    this.ctx.lineWidth = width;
  }

  public transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ) {
    this.ctx.transform(a, b, c, d, e, f);
  }

  public translate(x: number, y: number) {
    this.ctx.translate(x, y);
  }

  public save() {
    this.ctx.save();
  }
  public restore() {
    this.ctx.restore();
  }
}
