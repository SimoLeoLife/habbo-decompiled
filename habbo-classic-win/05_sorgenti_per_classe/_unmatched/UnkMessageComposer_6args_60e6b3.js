// Extracted from HabboAirLauncher.deobf.js, line 123894.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i60e6b3515ace27

class {
    static {
      n(this, "UnkMessageComposer_6args_60e6b3");
    }
    static {
      Lmt(this, "UnkMessageComposer_6args_60e6b3");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(0),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o));
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
