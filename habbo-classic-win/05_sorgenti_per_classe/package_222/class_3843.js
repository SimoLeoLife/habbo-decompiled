// Extracted from HabboAirLauncher.deobf.js, line 124374.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_222/class_3843.as
// Obfuscated name: _i73220c00c66d0b

class {
    static {
      n(this, "class_3843");
    }
    static {
      Igt(this, "class_3843");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t ?? ""), this._data.push(i));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
