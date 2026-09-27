// Extracted from HabboAirLauncher.deobf.js, line 118760.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i645e3c079f9dd6

class {
    static {
      n(this, "UnkMessageComposer_4args_645e3c");
    }
    static {
      w1t(this, "UnkMessageComposer_4args_645e3c");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(""),
        this._data.push(""),
        this._data.push(t),
        i !== ku.const_20 && this._data.push(i));
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
