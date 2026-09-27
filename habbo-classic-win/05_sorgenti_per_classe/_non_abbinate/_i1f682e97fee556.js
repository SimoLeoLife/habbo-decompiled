// Estratto da HabboAirLauncher.deobf.js, riga 118133.

class {
    static {
      n(this, "_i1f682e97fee556");
    }
    static {
      p3t(this, "_i1f682e97fee556");
    }
    _data = [];
    constructor(e) {
      this._data.push(e.length);
      for (let r of e) this._data.push(r);
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {}
  }
