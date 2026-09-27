// Extracted from HabboAirLauncher.deobf.js, line 114621.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i01e8673c5d0d4e

class {
    static {
      n(this, "UnkMessageComposer_1args_01e867");
    }
    static {
      Lft(this, "UnkMessageComposer_1args_01e867");
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
