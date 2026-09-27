// Estratto da HabboAirLauncher.deobf.js, riga 118737.

class {
    static {
      n(this, "_iea5f21bce03b75");
    }
    static {
      g1t(this, "_iea5f21bce03b75");
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
