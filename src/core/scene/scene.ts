import Game from '../game';

import Body from '../body/body';
import AssetLoader from '../asset/assetLoader';

export default class Scene {
  public readonly bodies: Body[] = [];

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
}
