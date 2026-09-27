// Estratto da HabboAirLauncher.deobf.js, riga 124159.

class {
    static {
      n(this, "_i5990fcb8a7a3e8");
    }
    static {
      igt(this, "_i5990fcb8a7a3e8");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
