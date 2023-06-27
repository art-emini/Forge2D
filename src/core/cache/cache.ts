export default class Cache {
  public readonly storageIdentifier = 'Forge2D_Cache_';

  public table: Record<string, string> = {};

  public sync() {
    this.table = { ...localStorage };
  }

  public exists(key: string) {
    return this.table[key] ? true : false;
  }

  public get(key: string) {
    return (
      localStorage.getItem(`${this.storageIdentifier}${key}`) ||
      this.table[key] ||
      null
    );
  }

  public set(key: string, value: string) {
    if (this.exists(key)) {
      this.table[key] = value;
      localStorage.setItem(`${this.storageIdentifier}${key}`, value);
    }
  }

  public remove(key: string) {
    if (this.exists(key)) {
      delete this.table[key];
      localStorage.removeItem(`${this.storageIdentifier}${key}`);
    }
  }

  public keys() {
    return Object.keys(this.table);
  }

  public values() {
    return Object.values(this.table);
  }
}
