import Forge2D from '../..';

export default class Texture {
  public value: HTMLImageElement;

  public scale: Forge2D.Types.Math.Scale;
  public frameScale?: Forge2D.Types.Math.Scale;

  constructor(public src: string, scale: Forge2D.Types.Math.Scale) {
    this.value = new Image();
    this.value.src = src;
    this.scale = scale;
  }
}
