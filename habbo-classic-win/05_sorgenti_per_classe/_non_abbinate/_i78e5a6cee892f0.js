// Estratto da HabboAirLauncher.deobf.js, riga 125224.

class {
    static {
      n(this, "_i78e5a6cee892f0");
    }
    static {
      ewt(this, "_i78e5a6cee892f0");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
