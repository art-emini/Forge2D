import Forge2D from '../..';

import Game from '../game';

import ImageAsset from './imageAsset';
import AudioAsset from './audioAsset';
import FontAsset from './fontAsset';
import JSONAsset from './jsonAsset';
import getImageData from '../../utils/getImageData';

export default class AssetLoader {
  public imageAssets: ImageAsset[] = [];
  public audioAssets: AudioAsset[] = [];
  public fontAssets: FontAsset[] = [];
  public jsonAssets: JSONAsset[] = [];

  constructor(public readonly game: Game) {}

  protected async getCache(type: Forge2D.Types.AssetLoader.Type, key: string) {
    return this.game.cache.get(`${type}_${key}`);
  }
  protected async saveCache(
    type: Forge2D.Types.AssetLoader.Type,
    key: string,
    value: string
  ) {
    return this.game.cache.set(`${type}_${key}`, value);
  }

  public async loadAssets(assets: Forge2D.Types.AssetLoader.LoadMassArray) {
    for await (const [type, key, src] of assets) {
      switch (type) {
        case 'image':
          await this.loadImage(key, src);
          break;

        case 'audio':
          break;

        case 'font':
          break;

        case 'json':
          break;

        default:
          break;
      }
    }
  }

  public async loadImage(key: string, src: string) {
    const image = new Image();

    // check if it is in the cache
    const cached = await this.getCache('image', key);
    if (cached) {
      // set data url object
      image.setAttribute('src', cached);
    } else {
      const res = await fetch(src);
      const blob = await res.blob();

      const url = URL.createObjectURL(blob.slice(0, 4000));

      image.src = url;

      // add to cache
      getImageData(
        image,
        image.width,
        image.height,
        (data) => {
          this.saveCache('image', key, data);
        },
        () => {
          // failed
        }
      );
    }

    const asset = new ImageAsset(key, src, image);

    this.imageAssets.push(asset);

    return image;
  }
}
