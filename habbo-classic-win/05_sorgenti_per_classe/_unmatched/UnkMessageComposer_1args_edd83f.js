// Extracted from HabboAirLauncher.deobf.js, line 120177.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iedd83fc9b191da

class {
    static {
      n(this, "UnkMessageComposer_1args_edd83f");
    }
    static {
      U8t(this, "UnkMessageComposer_1args_edd83f");
    }
    _data;
    constructor(e) {
      ((this._data = []), this._data.push(e));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = null;
    }
  }
