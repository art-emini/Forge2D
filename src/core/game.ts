import Matter from 'matter-js';
import PIXI from 'pixi.js';

import Forge2D from '..';

import Scene from './scene/scene';

import getCanvas from '../utils/getCanvas';

import Cache from './cache/cache';

export default class Game {
  public readonly Matter = {
    Engine: Matter.Engine.create(),
    World: Matter.World,
    Body: Matter.Body,
    Bodies: Matter.Bodies,
  };

  public readonly PIXI: {
    App: PIXI.Application;
  };

  public readonly scenes: Scene[] = [];
  public currentScene?: Scene;

  public readonly cache: Cache = new Cache();

  constructor(public readonly config?: Forge2D.Types.Config) {
    console.log(`Powered by Forge2D || MIT LICENSE ||`);

    const canvas = getCanvas(this.config?.canvas);
    if (this.config?.scale) {
      canvas.width = this.config.scale.w;
      canvas.height = this.config.scale.h;
    }

    this.PIXI = {
      App: new PIXI.Application({ view: canvas }),
    };

    this.PIXI.App.ticker.add(this.loop);
  }

  public async start() {
    Matter.Runner.run(this.Matter.Engine);
  }

  public async loop() {
    for await (const scene of this.scenes) {
      if (scene.visible) {
        await scene.update(0);
        await scene.__tick();
      }
    }
  }
}
