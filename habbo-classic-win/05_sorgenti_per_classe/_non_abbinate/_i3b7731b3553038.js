// Estratto da HabboAirLauncher.deobf.js, riga 124328.

class {
    static {
      n(this, "_i3b7731b3553038");
    }
    static {
      ggt(this, "_i3b7731b3553038");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
