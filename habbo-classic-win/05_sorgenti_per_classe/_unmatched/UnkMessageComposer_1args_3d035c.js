// Extracted from HabboAirLauncher.deobf.js, line 120082.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3d035c65d2b98d

class {
    static {
      n(this, "UnkMessageComposer_1args_3d035c");
    }
    static {
      S8t(this, "UnkMessageComposer_1args_3d035c");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
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
