// Estratto da HabboAirLauncher.deobf.js, riga 152825.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/TableCell.as
// Nome offuscato: _i3960298574f675

class {
  static {
    n(this, "TableCell");
  }
  static name_2 = 0;
  static var_1800 = 1;
  _type;
  var_162;
  var_4528;
  var_5010;
  var_5630;
  _linkClickCallback;
  _highlightOnChange;
  var_5677;
  _textColor;
  var_5234 = null;
  _extraBtnCallback = null;
  constructor(e, r, t = !1, i = !1, s = null, o = null, d = !1, c = null, f = 0) {
    ((this._type = e),
      (this.var_162 = r),
      (this.var_5010 = t),
      (this.var_4528 = i),
      (this._linkClickCallback = o),
      s == null && (t || i) && (s = r),
      (this.var_5630 = s),
      (this._highlightOnChange = d),
      (this.var_5677 = c),
      (this._textColor = f));
  }
  get type() {
    return this._type;
  }
  get _r460273a11667bf() {
    return this.var_5010;
  }
  get contents() {
    return this.var_162;
  }
  get _raf4140f973b214() {
    return this.var_4528;
  }
  get _r648d3221a328f8() {
    return this.var_5630;
  }
  get _r31a4c3ac57d03d() {
    return this._linkClickCallback;
  }
  get highlightOnChange() {
    return this._highlightOnChange;
  }
  get tooltipText() {
    return this.var_5677;
  }
  get textColor() {
    return this._textColor;
  }
  setExtraBtn(e, r) {
    ((this.var_5234 = e), (this._extraBtnCallback = r));
  }
  get getExtraButtonRegion() {
    return this.var_5234;
  }
  get _r869734bca8479d() {
    return this._extraBtnCallback;
  }
}
