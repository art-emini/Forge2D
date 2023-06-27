import Forge2D from '../..';

export default class Asset<
  t extends Forge2D.Types.AssetLoader.Type,
  e = unknown
> {
  constructor(
    public readonly type: t,
    public readonly key: string,
    public readonly src: string,
    public readonly value:
      | HTMLImageElement
      | AudioBuffer
      | FontFace
      | Record<string, e>
  ) {}
}
