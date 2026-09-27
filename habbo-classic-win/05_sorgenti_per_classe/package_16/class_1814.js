// Extracted from HabboAirLauncher.deobf.js, line 114490.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_16/class_1814.as
// Obfuscated name: _i20c3ca28e4a1e4

class {
    static {
      n(this, "class_1814");
    }
    static {
      Cft(this, "class_1814");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d, c, f) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o),
        this._data.push(d),
        this._data.push(c),
        this._data.push(f));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
