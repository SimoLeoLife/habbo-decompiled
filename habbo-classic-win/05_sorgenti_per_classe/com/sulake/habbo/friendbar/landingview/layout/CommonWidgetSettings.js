// Estratto da HabboAirLauncher.deobf.js, riga 206432.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/CommonWidgetSettings.as
// Nome offuscato: _i9f038d24de89b8

class a {
  static {
    n(this, "CommonWidgetSettings");
  }
  static _r2f6743bd8b472b = 4278190080;
  static _rc5d6c191f0edab = 4294967295;
  static _r09df0d48206584 = "bottom";
  static const_678 = "landing.view.common.textcolor";
  static ETCHINGCOLOR_CONFIGURATION_KEY = "landing.view.common.etchingcolor";
  static ETCHINGPOSITION_CONFIGURATION_KEY = "landing.view.common.etchingposition";
  _textColor = a._r2f6743bd8b472b;
  _etchingColor = a._rc5d6c191f0edab;
  var_3520 = a._r09df0d48206584;
  constructor(e) {
    let r = e.getProperty(a.const_678),
      t = e.getProperty(a.ETCHINGCOLOR_CONFIGURATION_KEY),
      i = e.getProperty(a.ETCHINGPOSITION_CONFIGURATION_KEY);
    (r !== "" && (this._textColor = Number.parseInt(r, 16)),
      t !== "" && (this._etchingColor = Number.parseInt(t, 16)),
      i !== "" && (this.var_3520 = i));
  }
  get _r670138977b9d1b() {
    return this._textColor !== a._r2f6743bd8b472b;
  }
  get _r167f34cc5b1ee1() {
    return this._etchingColor !== a._rc5d6c191f0edab;
  }
  get _r16eb4bb81322a2() {
    return this.var_3520 !== a._r09df0d48206584;
  }
  get textColor() {
    return this._textColor;
  }
  get etchingColor() {
    return this._etchingColor;
  }
  get etchingPosition() {
    return this.var_3520;
  }
}
