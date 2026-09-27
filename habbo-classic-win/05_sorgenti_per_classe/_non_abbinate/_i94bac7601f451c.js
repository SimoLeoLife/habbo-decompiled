// Estratto da HabboAirLauncher.deobf.js, riga 127512.

class {
    static {
      n(this, "_i94bac7601f451c");
    }
    static {
      gxt(this, "_i94bac7601f451c");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array === null;
    }
  }
