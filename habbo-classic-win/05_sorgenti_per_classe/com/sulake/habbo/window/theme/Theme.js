// Estratto da HabboAirLauncher.deobf.js, riga 146210.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/theme/Theme.as
// Nome offuscato: _i688a65c20d3750

class {
  constructor(e, r, t, i, s) {
    this._name = e;
    this.var_5399 = r;
    this.var_3537 = t;
    this.var_4241 = i;
    this._rafafa42f7e6a08 = s;
  }
  static {
    n(this, "Theme");
  }
  static NONE = "None";
  static ICON = "Icon";
  static LEGACY_BORDER = "Legacy border";
  static VOLTER = "Volter";
  static UBUNTU = "Ubuntu";
  static MISC = "Misc";
  static ILLUMINA_LIGHT = "Illumina Light";
  static ILLUMINA_DARK = "Illumina Dark";
  get name() {
    return this._name;
  }
  get _r7674bbc1e9e88f() {
    return this.var_5399;
  }
  get baseStyle() {
    return this.var_3537;
  }
  get styleCount() {
    return this.var_4241;
  }
  get _rd11149100cb80c() {
    return this._rafafa42f7e6a08;
  }
  coversStyle(e) {
    return e >= this.var_3537 && e < this.var_3537 + this.var_4241;
  }
}
