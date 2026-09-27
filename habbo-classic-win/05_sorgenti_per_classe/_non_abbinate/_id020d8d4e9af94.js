// Estratto da HabboAirLauncher.deobf.js, riga 118297.

class {
    static {
      n(this, "_id020d8d4e9af94");
    }
    static {
      S3t(this, "_id020d8d4e9af94");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
