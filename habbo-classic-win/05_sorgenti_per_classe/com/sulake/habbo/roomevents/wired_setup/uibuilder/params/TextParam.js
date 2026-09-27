// Estratto da HabboAirLauncher.deobf.js, riga 345483.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/TextParam.as
// Nome offuscato: _i51566f3c0be9c4

class a {
  constructor(e, r = !1, t = 0, i = !1, s = null) {
    this._mode = e;
    this.var_5599 = r;
    this._maxLines = t;
    this.var_5522 = i;
    this._alignment = s;
  }
  static {
    n(this, "TextParam");
  }
  static _r6fed1697bdc125 = 0;
  static MODE_STRETCH = 0;
  static MODE_MULTILINE = 1;
  static MODE_OVERFLOW = 2;
  static DEFAULT = new a(a.MODE_MULTILINE, !1);
  _fontSize = -1;
  _textColor = a._r6fed1697bdc125;
  get mode() {
    return this._mode;
  }
  get bold() {
    return this.var_5599;
  }
  get _r79e0cd188e1c70() {
    return this._maxLines;
  }
  get underline() {
    return this.var_5522;
  }
  get alignment() {
    return this._alignment;
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(e) {
    this._fontSize = e;
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(e) {
    this._textColor = e;
  }
}
