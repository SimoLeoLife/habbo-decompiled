// Extracted from HabboAirLauncher.deobf.js, line 114015.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8704fcb55b80b0

class {
    static {
      n(this, "UnkMessageComposer_2args_8704fc");
    }
    static {
      Cct(this, "UnkMessageComposer_2args_8704fc");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
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
