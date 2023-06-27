import Asset from './asset';

export default class JSONAsset<e = unknown> extends Asset<'json', e> {
  constructor(
    public readonly key: string,
    public readonly src: string,
    public readonly value: Record<string, e>
  ) {
    super('json', key, src, value);
  }
}
