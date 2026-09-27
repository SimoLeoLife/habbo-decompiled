// Extracted from HabboAirLauncher.deobf.js, line 114942.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9ca1638af6efb8

class {
    static {
      n(this, "UnkMessageComposer_2args_9ca163");
    }
    static {
      glt(this, "UnkMessageComposer_2args_9ca163");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
