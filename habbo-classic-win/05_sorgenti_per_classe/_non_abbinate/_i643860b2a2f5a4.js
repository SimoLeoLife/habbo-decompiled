// Estratto da HabboAirLauncher.deobf.js, riga 113426.

class {
    static {
      n(this, "_i643860b2a2f5a4");
    }
    static {
      $dt(this, "_i643860b2a2f5a4");
    }
    _data;
    constructor(e) {
      ((this._data = []), this._data.push(e));
    }
    dispose() {
      this._data = null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
  }
