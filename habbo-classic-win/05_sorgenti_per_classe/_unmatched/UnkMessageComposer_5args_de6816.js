// Extracted from HabboAirLauncher.deobf.js, line 118861.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ide6816e93887e4

class a {
    static {
      n(this, "UnkMessageComposer_5args_de6816");
    }
    static {
      B1t(this, "UnkMessageComposer_5args_de6816");
    }
    static const_20 = -1;
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        s !== a.const_20 && this._data.push(s));
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
