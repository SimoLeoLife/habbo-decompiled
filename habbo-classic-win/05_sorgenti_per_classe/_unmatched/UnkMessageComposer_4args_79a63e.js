// Extracted from HabboAirLauncher.deobf.js, line 115998.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i79a63e6c277902

class {
    static {
      n(this, "UnkMessageComposer_4args_79a63e");
    }
    static {
      u_t(this, "UnkMessageComposer_4args_79a63e");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
