// Estratto da HabboAirLauncher.deobf.js, riga 120082.

class {
    static {
      n(this, "_i3d035c65d2b98d");
    }
    static {
      S8t(this, "_i3d035c65d2b98d");
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
