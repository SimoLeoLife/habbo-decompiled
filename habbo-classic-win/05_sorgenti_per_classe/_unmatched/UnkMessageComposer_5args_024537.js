// Extracted from HabboAirLauncher.deobf.js, line 124038.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i024537317bf672

class {
    static {
      n(this, "UnkMessageComposer_5args_024537");
    }
    static {
      Ymt(this, "UnkMessageComposer_5args_024537");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
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
