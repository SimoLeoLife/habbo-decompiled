// Extracted from HabboAirLauncher.deobf.js, line 125374.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7e3b2187bfe1ec

class {
    static {
      n(this, "UnkMessageComposer_3args_7e3b21");
    }
    static {
      uwt(this, "UnkMessageComposer_3args_7e3b21");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
