// Extracted from HabboAirLauncher.deobf.js, line 127489.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifcfff33b14b31b

class {
    static {
      n(this, "UnkMessageComposer_1args_fcfff3");
    }
    static {
      pxt(this, "UnkMessageComposer_1args_fcfff3");
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
