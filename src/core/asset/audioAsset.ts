import Asset from './asset';

export default class AudioAsset extends Asset<'audio'> {
  constructor(
    public readonly key: string,
    public readonly src: string,
    public readonly value: AudioBuffer
  ) {
    super('audio', key, src, value);
  }
}
