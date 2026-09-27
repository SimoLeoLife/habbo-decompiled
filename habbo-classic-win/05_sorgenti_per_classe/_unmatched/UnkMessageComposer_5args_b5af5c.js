// Extracted from HabboAirLauncher.deobf.js, line 116115.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib5af5c68bb04e7

class {
    static {
      n(this, "UnkMessageComposer_5args_b5af5c");
    }
    static {
      M_t(this, "UnkMessageComposer_5args_b5af5c");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
