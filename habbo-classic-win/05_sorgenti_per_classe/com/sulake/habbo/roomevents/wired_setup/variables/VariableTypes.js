// Extracted from HabboAirLauncher.deobf.js, line 370423.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/VariableTypes.as
// Obfuscated name: _ieff13fd733e8cd

class {
  static {
    n(this, "VariableTypes");
  }
  _types = [];
  constructor() {
    (this._types.push(new class_3995()),
      this._types.push(new class_4218()),
      this._types.push(new class_3948()),
      this._types.push(new class_4272()),
      this._types.push(new ReferenceVariable()),
      this._types.push(new STe()),
      this._types.push(new PTe()),
      this._types.push(new kTe()),
      this._types.push(new ATe()));
  }
  _r15cee347bb0477(e) {
    for (let r of this._types) if (r.code === e) return r;
    return null;
  }
  getKey() {
    return "variable";
  }
  _r58bebf6acaa0b3(e) {
    return e instanceof UnkSubclassOf_class_2396_cbbc47;
  }
}
