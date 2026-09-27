// Extracted from HabboAirLauncher.deobf.js, line 122941.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_153/class_2787.as
// Obfuscated name: _i153366067fccfc

class {
    static {
      n(this, "class_2787");
    }
    static {
      spt(this, "class_2787");
    }
    static _r07008965ee7870 = !0;
    static _r975f702d3e4585 = !1;
    _array = [];
    constructor(e, r, t) {
      (this._array.push(e), this._array.push(r), this._array.push(t));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
