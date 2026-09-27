// Extracted from HabboAirLauncher.deobf.js, line 124697.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i17f2164582ac32

class {
    static {
      n(this, "UnkMessageComposer_1args_17f216");
    }
    static {
      qgt(this, "UnkMessageComposer_1args_17f216");
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
