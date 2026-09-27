// Estratto da HabboAirLauncher.deobf.js, riga 68133.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/InfoText.as
// Nome offuscato: _i4d619e48199fe5

class {
  static {
    n(this, "InfoText");
  }
  _input;
  _includeInfo = !1;
  var_3901 = "";
  constructor(e, r = null) {
    ((this._input = e),
      r != null && ((this._includeInfo = !0), (this.var_3901 = r), (this._input.text = r)),
      this._input.addEventListener(y.const_962, this._r8ca91d65fd5d3b));
  }
  dispose() {
    this._input != null && (this._input.dispose(), (this._input = null));
  }
  goBackToInitialState() {
    this._input != null && ((this._input.text = this.var_3901), (this._includeInfo = !0));
  }
  getText() {
    return this._input == null || this._includeInfo ? "" : this._input.text;
  }
  setText(e) {
    ((this._includeInfo = !1), this._input != null && (this._input.text = e));
  }
  get input() {
    return this._input;
  }
  _onFocus = n((e) => {
    !this._includeInfo || this._input == null || ((this._input.text = ""), (this._includeInfo = !1));
  }, "_onFocus");
  _r8ca91d65fd5d3b = n((...e) => {
    this._onFocus(e[0]);
  }, "_r8ca91d65fd5d3b");
}
