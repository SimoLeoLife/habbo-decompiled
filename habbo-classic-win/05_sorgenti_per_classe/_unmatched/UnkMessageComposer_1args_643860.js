// Extracted from HabboAirLauncher.deobf.js, line 113426.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i643860b2a2f5a4

class {
    static {
      n(this, "UnkMessageComposer_1args_643860");
    }
    static {
      $dt(this, "UnkMessageComposer_1args_643860");
    }
    _data;
    constructor(e) {
      ((this._data = []), this._data.push(e));
    }
    dispose() {
      this._data = null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
  }
