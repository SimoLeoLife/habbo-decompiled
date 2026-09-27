// Extracted from HabboAirLauncher.deobf.js, line 124802.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i642b73d3185b8f

class {
    static {
      n(this, "UnkMessageComposer_1args_642b73");
    }
    static {
      fvt(this, "UnkMessageComposer_1args_642b73");
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
