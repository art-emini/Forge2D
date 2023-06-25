import Forge2D from '..';
import Scene from './scene/scene';

export default class Game {
  public readonly scenes: Scene[] = [];
  public currentScene?: Scene;

  constructor(public readonly config?: Forge2D.Types.Config) {
    console.log(`Powered by Forge2D MIT LICENSE`);
  }
}
