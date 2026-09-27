// Extracted from HabboAirLauncher.deobf.js, line 118708.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifdc0d5a2553a72

class a {
    static {
      n(this, "UnkMessageComposer_6args_fdc0d5");
    }
    static {
      p1t(this, "UnkMessageComposer_6args_fdc0d5");
    }
    static const_20 = -1;
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        o !== a.const_20 && this._data.push(o));
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
