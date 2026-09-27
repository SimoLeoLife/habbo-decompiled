// Extracted from HabboAirLauncher.deobf.js, line 118099.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4f047f2557116b

class {
    static {
      n(this, "UnkMessageComposer_1args_4f047f");
    }
    static {
      b3t(this, "UnkMessageComposer_1args_4f047f");
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
