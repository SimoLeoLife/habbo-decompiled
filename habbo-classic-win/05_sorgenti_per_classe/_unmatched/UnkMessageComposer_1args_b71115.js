// Extracted from HabboAirLauncher.deobf.js, line 124553.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib71115acb7b3bb

class {
    static {
      n(this, "UnkMessageComposer_1args_b71115");
    }
    static {
      Ogt(this, "UnkMessageComposer_1args_b71115");
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
