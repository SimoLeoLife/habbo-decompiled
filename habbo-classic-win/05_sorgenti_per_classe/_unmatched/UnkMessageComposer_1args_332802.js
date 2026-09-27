// Extracted from HabboAirLauncher.deobf.js, line 120378.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3328024d70ceb5

class {
    static {
      n(this, "UnkMessageComposer_1args_332802");
    }
    static {
      s5t(this, "UnkMessageComposer_1args_332802");
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
