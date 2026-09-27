// Extracted from HabboAirLauncher.deobf.js, line 120493.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8f295e4bca1993

class {
    static {
      n(this, "UnkMessageComposer_1args_8f295e");
    }
    static {
      p5t(this, "UnkMessageComposer_1args_8f295e");
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
