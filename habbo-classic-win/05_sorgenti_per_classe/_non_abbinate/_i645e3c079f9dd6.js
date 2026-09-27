// Estratto da HabboAirLauncher.deobf.js, riga 118760.

class {
    static {
      n(this, "_i645e3c079f9dd6");
    }
    static {
      w1t(this, "_i645e3c079f9dd6");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(""),
        this._data.push(""),
        this._data.push(t),
        i !== ku.const_20 && this._data.push(i));
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
