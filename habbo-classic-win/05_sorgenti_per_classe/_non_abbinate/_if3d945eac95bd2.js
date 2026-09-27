// Estratto da HabboAirLauncher.deobf.js, riga 123413.

class {
    static {
      n(this, "_if3d945eac95bd2");
    }
    static {
      qpt(this, "_if3d945eac95bd2");
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
