// Extracted from HabboAirLauncher.deobf.js, line 117322.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2aab97f8361721

class {
    static {
      n(this, "UnkMessageComposer_1args_2aab97");
    }
    static {
      Lut(this, "UnkMessageComposer_1args_2aab97");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
