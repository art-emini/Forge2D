import Forge2D from '..';

import Scene from './scene/scene';

import BaseRenderer from './renderer/baseRenderer';
import CanvasRenderer from './renderer/canvas/canvasRenderer';
import WebGLRenderer from './renderer/webgl/webGLRenderer';
import getRendererMethod from '../utils/getRendererMethod';
import getCanvas from '../utils/getCanvas';

import Cache from './cache/cache';

export default class Game {
  public readonly scenes: Scene[] = [];
  public currentScene?: Scene;

  public readonly renderMethod: Forge2D.Types.Misc.Renderer;
  public readonly renderer: BaseRenderer;

  public readonly cache: Cache = new Cache();

  constructor(public readonly config?: Forge2D.Types.Config) {
    console.log(`Powered by Forge2D MIT LICENSE`);

    this.renderMethod = this.config?.renderer || getRendererMethod();

    if (this.renderMethod === 0) {
      this.renderer = new CanvasRenderer(getCanvas(this.config?.canvas));
    } else {
      this.renderer = new WebGLRenderer(getCanvas(this.config?.canvas));
    }
  }
}
