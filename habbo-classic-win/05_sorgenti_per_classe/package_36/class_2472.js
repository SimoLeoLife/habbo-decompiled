// Extracted from HabboAirLauncher.deobf.js, line 117069.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_36/class_2472.as
// Obfuscated name: _i894d4d6a00b70e

class {
    static {
      n(this, "class_2472");
    }
    static {
      dut(this, "class_2472");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s.length / 2),
        (this._data = this._data.concat(s)),
        this._data.push(o),
        this._data.push(d));
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
