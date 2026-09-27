// Extracted from HabboAirLauncher.deobf.js, line 116466.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i69d2f563614870

class {
    static {
      n(this, "UnkMessageComposer_3args_69d2f5");
    }
    static {
      i0t(this, "UnkMessageComposer_3args_69d2f5");
    }
    _array = [];
    constructor(e, r, t) {
      this._array = [e, r, t];
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
