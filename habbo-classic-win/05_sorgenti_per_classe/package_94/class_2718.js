// Extracted from HabboAirLauncher.deobf.js, line 124130.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_94/class_2718.as
// Obfuscated name: _i24ffcb42b6733b

class {
    static {
      n(this, "class_2718");
    }
    static {
      tgt(this, "class_2718");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
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
