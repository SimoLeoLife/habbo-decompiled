// Extracted from HabboAirLauncher.deobf.js, line 116994.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i826cee1cafa171

class {
    static {
      n(this, "UnkMessageComposer_6args_826cee");
    }
    static {
      tut(this, "UnkMessageComposer_6args_826cee");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i.length / 2),
        (this._data = this._data.concat(i)),
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
