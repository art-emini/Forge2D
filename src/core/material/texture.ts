import PIXI from 'pixi.js';

import Forge2D from '../..';

import Scene from '../scene/scene';

import ImageAsset from '../asset/imageAsset';

export default class Texture {
  public asset: ImageAsset;

  constructor(
    public readonly scene: Scene,
    public readonly key: string,
    public scale: Forge2D.Types.Math.Scale,
    public frameScale?: Forge2D.Types.Math.Scale,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public pixiOptions?: PIXI.IBaseTextureOptions<any>
  ) {
    this.asset = this.scene.assetLoader.imageAssets.find(
      (asset) => asset.key === key
    ) as ImageAsset;
    this.scale = scale;
  }
}
