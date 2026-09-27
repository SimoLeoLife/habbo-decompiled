// Extracted from HabboAirLauncher.deobf.js, line 124015.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _icb14348d6e5af0

class {
    static {
      n(this, "UnkMessageComposer_5args_cb1434");
    }
    static {
      Qmt(this, "UnkMessageComposer_5args_cb1434");
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
