// Extracted from HabboAirLauncher.deobf.js, line 118217.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i48ff4540498101

class {
    static {
      n(this, "UnkMessageComposer_1args_48ff45");
    }
    static {
      M3t(this, "UnkMessageComposer_1args_48ff45");
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
