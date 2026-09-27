// Estratto da HabboAirLauncher.deobf.js, riga 251444.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/class_4018.as
// Nome offuscato: _i294c8d3d621c76

class {
  static {
    n(this, "class_4018");
  }
  _value = "";
  _text = null;
  var_537 = 0;
  test(e) {
    return this._text == null
      ? !1
      : ((this._text.text = `${this._value.substring(0, e)}...`),
        this._text.textHeight > this.var_537);
  }
  beforeSearch(e, r, t) {
    ((this._value = e), (this._text = r), (this.var_537 = t));
  }
}
