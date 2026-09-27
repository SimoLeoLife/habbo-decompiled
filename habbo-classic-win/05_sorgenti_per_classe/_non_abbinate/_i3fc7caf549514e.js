// Estratto da HabboAirLauncher.deobf.js, riga 118942.

class {
    static {
      n(this, "_i3fc7caf549514e");
    }
    static {
      S1t(this, "_i3fc7caf549514e");
    }
    _data = [];
    constructor(e, r, t, i) {
      this._data.push(e.length);
      for (let s of e) this._data.push(s);
      (this._data.push(r), this._data.push(t), this._data.push(i));
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
