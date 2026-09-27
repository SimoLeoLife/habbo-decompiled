// Extracted from HabboAirLauncher.deobf.js, line 118374.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id175ed44ce8bea

class {
    static {
      n(this, "UnkMessageComposer_5args_d175ed");
    }
    static {
      U3t(this, "UnkMessageComposer_5args_d175ed");
    }
    _array = [];
    constructor(e, r, t, i, s = !0) {
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
      return !1;
    }
  }
