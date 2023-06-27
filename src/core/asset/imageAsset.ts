import Asset from './asset';

export default class ImageAsset extends Asset<'image'> {
  constructor(
    public readonly key: string,
    public readonly src: string,
    public readonly value: HTMLImageElement
  ) {
    super('image', key, src, value);
  }
}
