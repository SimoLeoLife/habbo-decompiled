// Extracted from HabboAirLauncher.deobf.js, line 127512.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i94bac7601f451c

class {
    static {
      n(this, "UnkMessageComposer_1args_94bac7");
    }
    static {
      gxt(this, "UnkMessageComposer_1args_94bac7");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array === null;
    }
  }
