import Forge2D from '../..';
import ImageAsset from '../asset/imageAsset';
import Scene from '../scene/scene';

export default class Texture {
  public asset: ImageAsset;

  constructor(
    public readonly scene: Scene,
    public readonly key: string,
    public scale: Forge2D.Types.Math.Scale,
    public frameScale?: Forge2D.Types.Math.Scale
  ) {
    this.asset = this.scene.assetLoader.imageAssets.find(
      (asset) => asset.key === key
    ) as ImageAsset;
    this.scale = scale;
  }
}
