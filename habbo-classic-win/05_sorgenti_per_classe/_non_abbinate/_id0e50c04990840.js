// Estratto da HabboAirLauncher.deobf.js, riga 122709.

class {
    static {
      n(this, "_id0e50c04990840");
    }
    static {
      j7t(this, "_id0e50c04990840");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
