// Estratto da HabboAirLauncher.deobf.js, riga 353156.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/model/VariableFxStyleDefinition.as
// Nome offuscato: _ibc5adbf6d3ce2d

class {
  constructor(e, r, t, i, s, o, d, c, f, l = null, b = null, _ = !1) {
    this.id = e;
    this.localizationKey = r;
    this.runtimeStyle = t;
    this.defaultColor = d;
    this.defaultWidth = c;
    this.defaultRenderer = f;
    this._rb36bfb3876ce51 = _;
    ((this.colorOptions = i ?? []),
      (this.widthOptions = s ?? []),
      (this.rendererOptions = o ?? []),
      (this.extra = l ?? new B()),
      (this._radcbdacfc8a881 = b ?? new B()));
  }
  static {
    n(this, "VariableFxStyleDefinition");
  }
  colorOptions;
  widthOptions;
  rendererOptions;
  extra;
  _radcbdacfc8a881;
  get _r3c25c370b61ff4() {
    return this.colorOptions.length > 0 && this.defaultColor.runtimeValue !== class_3649.NOT_APPLICABLE;
  }
  get _r76a41c508a28aa() {
    return this.widthOptions.length > 0 && this.defaultWidth.runtimeValue !== VariableFxWidth.NOT_APPLICABLE;
  }
  get _re6aa00e50ca8fd() {
    return this.rendererOptions.length > 1;
  }
}
