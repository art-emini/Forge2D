import Asset from './asset';

export default class FontAsset extends Asset<'font'> {
  constructor(
    public readonly key: string,
    public readonly src: string,
    public readonly value: FontFace
  ) {
    super('font', key, src, value);
  }
}
