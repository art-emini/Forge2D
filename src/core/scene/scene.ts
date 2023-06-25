import Game from '../game';
import BaseRenderer from '../renderer/baseRenderer';
import Body from '../body/body';
import Forge2D from '../..';
import getRendererMethod from '../../utils/getRendererMethod';
import CanvasRenderer from '../renderer/canvas/canvasRenderer';
import WebGLRenderer from '../renderer/webgl/webGLRenderer';
import getCanvas from '../../utils/getCanvas';

export default class Scene {
  public readonly renderMethod: Forge2D.Types.Misc.Renderer;
  public readonly renderer: BaseRenderer;

  public readonly bodies: Body[] = [];

  constructor(public readonly game: Game, public readonly name: string) {
    this.renderMethod = this.game.config?.renderer || getRendererMethod();

    if (this.renderMethod === 0) {
      this.renderer = new CanvasRenderer(getCanvas(this.game.config?.canvas));
    } else {
      this.renderer = new WebGLRenderer(getCanvas(this.game.config?.canvas));
    }
  }

  public async preload() {
    // user implements
  }

  public async create() {
    // user implements
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async update(dt: number) {
    // user implements
  }
}
