// Extracted from HabboAirLauncher.deobf.js, line 117594.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i77c58ef847037c

class {
    static {
      n(this, "UnkMessageComposer_2args_77c58e");
    }
    static {
      sht(this, "UnkMessageComposer_2args_77c58e");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length));
      for (let t = 0; t < r.length; t++) this._data.push(r[t]);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
