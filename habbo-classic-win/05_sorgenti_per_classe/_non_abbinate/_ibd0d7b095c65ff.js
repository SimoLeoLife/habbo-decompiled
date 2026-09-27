// Estratto da HabboAirLauncher.deobf.js, riga 120059.

class {
    static {
      n(this, "_ibd0d7b095c65ff");
    }
    static {
      R8t(this, "_ibd0d7b095c65ff");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r.length), (this._array = this._array.concat(r)));
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
