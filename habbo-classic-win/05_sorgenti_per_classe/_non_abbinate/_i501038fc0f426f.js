// Estratto da HabboAirLauncher.deobf.js, riga 115179.

class {
    static {
      n(this, "_i501038fc0f426f");
    }
    static {
      Ult(this, "_i501038fc0f426f");
    }
    static _r4aeb1069bd9e7c = 3;
    static _r67f92b4ec50a26 = 0;
    static _rc2fbd4b2cdb3aa = 2;
    static _r24987a904b796f = 1;
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
