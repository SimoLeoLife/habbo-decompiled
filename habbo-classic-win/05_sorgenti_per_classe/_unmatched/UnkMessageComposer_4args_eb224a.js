// Extracted from HabboAirLauncher.deobf.js, line 116578.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ieb224a67b9cea6

class {
    static {
      n(this, "UnkMessageComposer_4args_eb224a");
    }
    static {
      u0t(this, "UnkMessageComposer_4args_eb224a");
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
