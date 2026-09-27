// Extracted from HabboAirLauncher.deobf.js, line 116489.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0a24f78b563654

class {
    static {
      n(this, "UnkMessageComposer_4args_0a24f7");
    }
    static {
      s0t(this, "UnkMessageComposer_4args_0a24f7");
    }
    _array = [];
    constructor(e, r, t, i) {
      this._array = [e, r, t, i];
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
