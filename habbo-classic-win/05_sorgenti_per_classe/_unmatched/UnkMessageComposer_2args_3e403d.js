// Extracted from HabboAirLauncher.deobf.js, line 122686.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3e403da36678a5

class {
    static {
      n(this, "UnkMessageComposer_2args_3e403d");
    }
    static {
      U7t(this, "UnkMessageComposer_2args_3e403d");
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
