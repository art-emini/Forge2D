import Game from '../game';

import AssetLoader from '../asset/assetLoader';

import Sprite from '../gameobjects/sprite';

export default class Scene {
  public visible = false;

  public readonly gameobjects: Sprite[] = [];

  public readonly assetLoader: AssetLoader = new AssetLoader(this.game);

  constructor(public readonly game: Game, public readonly name: string) {}

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

  public async __tick() {
    for await (const object of this.gameobjects) {
      object.renderableBody.position = object.physicsBody.position;
      object.renderableBody.rotation = object.physicsBody.angle;
    }
  }
}
