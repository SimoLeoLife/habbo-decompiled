// Extracted from HabboAirLauncher.deobf.js, line 120424.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0dc938c014aed7

class {
    static {
      n(this, "UnkMessageComposer_1args_0dc938");
    }
    static {
      f5t(this, "UnkMessageComposer_1args_0dc938");
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
      return this._array == null;
    }
  }
