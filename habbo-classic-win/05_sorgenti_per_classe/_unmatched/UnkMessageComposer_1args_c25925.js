// Extracted from HabboAirLauncher.deobf.js, line 117633.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic25925ab3f16cf

class {
    static {
      n(this, "UnkMessageComposer_1args_c25925");
    }
    static {
      fht(this, "UnkMessageComposer_1args_c25925");
    }
    _array = [];
    constructor(e) {
      this._array.push(new Byte(e));
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
