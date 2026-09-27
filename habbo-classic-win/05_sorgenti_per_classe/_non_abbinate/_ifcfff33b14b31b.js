// Estratto da HabboAirLauncher.deobf.js, riga 127489.

class {
    static {
      n(this, "_ifcfff33b14b31b");
    }
    static {
      pxt(this, "_ifcfff33b14b31b");
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
