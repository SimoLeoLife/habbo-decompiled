// Extracted from HabboAirLauncher.deobf.js, line 124745.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ieb6736d26d7391

class {
    static {
      n(this, "UnkMessageComposer_1args_eb6736");
    }
    static {
      ivt(this, "UnkMessageComposer_1args_eb6736");
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
