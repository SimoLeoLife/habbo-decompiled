// Extracted from HabboAirLauncher.deobf.js, line 116018.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i263d9886677b96

class {
    static {
      n(this, "UnkMessageComposer_4args_263d98");
    }
    static {
      p_t(this, "UnkMessageComposer_4args_263d98");
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
