// Estratto da HabboAirLauncher.deobf.js, riga 122529.

class {
    static {
      n(this, "_i857159cb91dc97");
    }
    static {
      M7t(this, "_i857159cb91dc97");
    }
    static _rbb0e38da69244d = 0;
    static _r7bf38ef8bfda68 = 1;
    static _r06de8e1f8203ee = 2;
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
