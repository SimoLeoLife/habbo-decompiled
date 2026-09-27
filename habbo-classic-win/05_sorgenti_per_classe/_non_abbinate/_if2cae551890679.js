// Estratto da HabboAirLauncher.deobf.js, riga 123749.

class {
    static {
      n(this, "_if2cae551890679");
    }
    static {
      Imt(this, "_if2cae551890679");
    }
    _data = [];
    constructor(e) {
      if (!e) {
        this._data.push(0);
        return;
      }
      this._data.push(e.size);
      for (let [r, t] of e) (this._data.push(r), this._data.push(t));
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
