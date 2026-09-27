// Estratto da HabboAirLauncher.deobf.js, riga 119796.

class {
    static {
      n(this, "_i9b211549994061");
    }
    static {
      s8t(this, "_i9b211549994061");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    _r13f3b8a80f9573(e, r) {
      (this._data.push(e), this._data.push(r));
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
