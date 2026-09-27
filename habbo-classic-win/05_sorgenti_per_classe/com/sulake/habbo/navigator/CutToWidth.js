// Estratto da HabboAirLauncher.deobf.js, riga 251461.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/CutToWidth.as
// Nome offuscato: _i5c97d0b4f1a424

class {
  static {
    n(this, "CutToWidth");
  }
  _value = "";
  _text = null;
  _maxWidth = 0;
  test(e) {
    return this._text == null
      ? !1
      : ((this._text.text = `${this._value.substring(0, e)}...`),
        this._text.textWidth > this._maxWidth);
  }
  beforeSearch(e, r, t) {
    ((this._value = e), (this._text = r), (this._maxWidth = t));
  }
}
