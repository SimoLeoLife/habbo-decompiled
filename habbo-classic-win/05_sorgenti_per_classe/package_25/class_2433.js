// Extracted from HabboAirLauncher.deobf.js, line 124653.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2433.as
// Obfuscated name: _i3a572da23dd3d6

class {
    static {
      n(this, "class_2433");
    }
    static {
      Ygt(this, "class_2433");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o.length));
      for (let d = 0; d < o.length; d++) this._data.push(o[d] | 0);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
