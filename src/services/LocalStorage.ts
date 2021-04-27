export interface IStorageItem {
  key: string;
  value: any;
}

export class StorageItem {
  key: string;
  value: any;

  constructor(data: IStorageItem) {
    this.key = data.key;
    this.value = data.value;
  }
}

export class LocalStorage {
  localStorageSupported: boolean;

  constructor() {
    this.localStorageSupported =
      typeof window['localStorage'] != 'undefined' &&
      window['localStorage'] != null;
  }

  add(key: string, item: string) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, item);
    }
  }

  get(key: string): string {
    if (this.localStorageSupported) {
      var item = localStorage.getItem(key);
      return item;
    } else {
      return null;
    }
  }

  remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key);
    }
  }

  clear() {
    if (this.localStorageSupported) {
      localStorage.clear();
    }
  }
}
