// Extracted from HabboAirLauncher.deobf.js, line 115203.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i51137a269b2e9f

class {
    static {
      n(this, "UnkMessageComposer_1args_51137a");
    }
    static {
      jlt(this, "UnkMessageComposer_1args_51137a");
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
