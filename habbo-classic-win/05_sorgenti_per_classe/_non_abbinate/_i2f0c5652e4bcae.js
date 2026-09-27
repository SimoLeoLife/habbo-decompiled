// Estratto da HabboAirLauncher.deobf.js, riga 118500.

class {
    static {
      n(this, "_i2f0c5652e4bcae");
    }
    static {
      q3t(this, "_i2f0c5652e4bcae");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(r), this._data.push(e.length));
      for (let t of e) this._data.push(t);
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
