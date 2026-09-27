// Estratto da HabboAirLauncher.deobf.js, riga 370423.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/VariableTypes.as
// Nome offuscato: _ieff13fd733e8cd

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
    return e instanceof _icbbc47f0f04020;
  }
}
