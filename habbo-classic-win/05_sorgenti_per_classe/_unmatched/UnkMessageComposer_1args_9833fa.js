// Extracted from HabboAirLauncher.deobf.js, line 122778.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9833fa914bec89

class {
    static {
      n(this, "UnkMessageComposer_1args_9833fa");
    }
    static {
      $7t(this, "UnkMessageComposer_1args_9833fa");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
