// Extracted from HabboAirLauncher.deobf.js, line 125107.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2072.as
// Obfuscated name: _i7ffb0617d00fcb

class {
    static {
      n(this, "class_2072");
    }
    static {
      Uvt(this, "class_2072");
    }
    _data = [];
    constructor(e, r, t = !1) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
