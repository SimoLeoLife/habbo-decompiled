// Estratto da HabboAirLauncher.deobf.js, riga 118991.

class {
    static {
      n(this, "_i95c95556db026d");
    }
    static {
      O1t(this, "_i95c95556db026d");
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
