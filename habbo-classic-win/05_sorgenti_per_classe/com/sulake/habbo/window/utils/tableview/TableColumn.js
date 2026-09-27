// Extracted from HabboAirLauncher.deobf.js, line 153128.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/TableColumn.as
// Obfuscated name: _iab9ff4f3940eff

class {
  static {
    n(this, "TableColumn");
  }
  _id;
  _r2a5671745a8c5b;
  _rd02e0a8925ac8c;
  _alignment;
  constructor(e, r, t, i = "center") {
    ((this._id = e),
      (this._r2a5671745a8c5b = r),
      (this._rd02e0a8925ac8c = t),
      i === nr.const_27 && (i = nr.NONE),
      (this._alignment = i));
  }
  get id() {
    return this._id;
  }
  get _r6b14ca4de3faaf() {
    return this._r2a5671745a8c5b;
  }
  get _r1d964ddf55c3e4() {
    return this._rd02e0a8925ac8c;
  }
  get alignment() {
    return this._alignment;
  }
}
