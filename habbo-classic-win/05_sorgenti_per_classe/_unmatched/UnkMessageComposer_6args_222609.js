// Extracted from HabboAirLauncher.deobf.js, line 119112.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i222609ab66ee55

class {
    static {
      n(this, "UnkMessageComposer_6args_222609");
    }
    static {
      $1t(this, "UnkMessageComposer_6args_222609");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
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
