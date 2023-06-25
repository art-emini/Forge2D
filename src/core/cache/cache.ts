import Asset from './asset';

export default class Cache {
  public table: Record<string, Asset> = {};

  public exists(key: string) {
    return this.table[key] ? true : false;
  }

  public get(key: string) {
    return this.table[key] || null;
  }

  public add(key: string, value: Asset) {
    if (!this.exists(key)) {
      this.table[key] = value;
    }
  }

  public remove(key: string) {
    if (this.exists(key)) {
      delete this.table[key];
    }
  }
}
