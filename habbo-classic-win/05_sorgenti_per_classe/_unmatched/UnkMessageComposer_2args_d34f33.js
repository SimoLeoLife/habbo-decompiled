// Extracted from HabboAirLauncher.deobf.js, line 124533.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id34f337efc6435

class {
    static {
      n(this, "UnkMessageComposer_2args_d34f33");
    }
    static {
      Lgt(this, "UnkMessageComposer_2args_d34f33");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
