// Extracted from HabboAirLauncher.deobf.js, line 115434.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ida09ce64db7da5

class {
    static {
      n(this, "UnkMessageComposer_5args_da09ce");
    }
    static {
      bbt(this, "UnkMessageComposer_5args_da09ce");
    }
    _array = [];
    constructor(e, r, t, i, s) {
      (this._array.push(e),
        this._array.push(r),
        this._array.push(t),
        this._array.push(i),
        this._array.push(s));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array == null;
    }
  }
