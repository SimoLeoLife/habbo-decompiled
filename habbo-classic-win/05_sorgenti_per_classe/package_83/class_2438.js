// Extracted from HabboAirLauncher.deobf.js, line 118889.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_83/class_2438.as
// Obfuscated name: _ica6842743080e2

class {
    static {
      n(this, "class_2438");
    }
    static {
      k1t(this, "class_2438");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e),
        this._data.push(r ? 1 : 0),
        this._data.push(t ? 1 : 0),
        this._data.push(i ? 1 : 0));
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
