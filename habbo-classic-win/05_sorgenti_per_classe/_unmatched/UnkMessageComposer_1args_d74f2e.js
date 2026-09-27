// Extracted from HabboAirLauncher.deobf.js, line 120470.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id74f2e4882fbcb

class {
    static {
      n(this, "UnkMessageComposer_1args_d74f2e");
    }
    static {
      u5t(this, "UnkMessageComposer_1args_d74f2e");
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
