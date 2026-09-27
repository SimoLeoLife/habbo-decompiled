// Extracted from HabboAirLauncher.deobf.js, line 125247.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iec45f45ee775ab

class {
    static {
      n(this, "UnkMessageComposer_1args_ec45f4");
    }
    static {
      twt(this, "UnkMessageComposer_1args_ec45f4");
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
