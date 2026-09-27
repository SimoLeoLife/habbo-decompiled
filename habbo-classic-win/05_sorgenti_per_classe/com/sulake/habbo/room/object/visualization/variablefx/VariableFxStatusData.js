// Extracted from HabboAirLauncher.deobf.js, line 274070.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/VariableFxStatusData.as
// Obfuscated name: _i2da8fa33720ae2

class {
  constructor(e, r = null, t = null, i = null, s = !1) {
    this.value = e;
    this._rd039082a66c6c1 = r;
    this._rde47e35540b4cb = t;
    this.isInitialize = s;
    this.extra = i ?? new B();
  }
  static {
    n(this, "VariableFxStatusData");
  }
  extra;
  get _r42e7bea2fe4ef5() {
    let e = Number(this._rd039082a66c6c1);
    return this._rd039082a66c6c1 == null || !isFinite(e) ? null : e;
  }
  get effectiveOverrideMinValue() {
    let e = Number(this._rde47e35540b4cb);
    return this._rde47e35540b4cb == null || !isFinite(e) ? null : e;
  }
}
