// Estratto da HabboAirLauncher.deobf.js, riga 118475.

class {
    static {
      n(this, "_i7df25a8484d009");
    }
    static {
      $3t(this, "_i7df25a8484d009");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r.length));
      for (let i of r) this._data.push(i);
      this._data.push(t);
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
