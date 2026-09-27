// Extracted from HabboAirLauncher.deobf.js, line 120447.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8c8542dd18e45a

class {
    static {
      n(this, "UnkMessageComposer_3args_8c8542");
    }
    static {
      b5t(this, "UnkMessageComposer_3args_8c8542");
    }
    _array = [];
    constructor(e, r, t) {
      this._array.push(t, r, e);
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
