// Extracted from HabboAirLauncher.deobf.js, line 116535.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0b97a25d7308cb

class {
    static {
      n(this, "UnkMessageComposer_3args_0b97a2");
    }
    static {
      f0t(this, "UnkMessageComposer_3args_0b97a2");
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
