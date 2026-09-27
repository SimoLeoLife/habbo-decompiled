// Estratto da HabboAirLauncher.deobf.js, riga 80465.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomPlaneBitmapMaskData.as
// Nome offuscato: _i7dd4c6b000788f

class {
  static {
    n(this, "RoomPlaneBitmapMaskData");
  }
  static MASK_CATEGORY_WINDOW = "window";
  static MASK_CATEGORY_HOLE = "hole";
  var_190 = null;
  _type = null;
  var_163 = null;
  constructor(e, r, t) {
    ((this.type = e), (this.loc = r), (this.category = t));
  }
  get loc() {
    return this.var_190;
  }
  set loc(e) {
    if (e == null) {
      this.var_190 = null;
      return;
    }
    (this.var_190 == null && (this.var_190 = new k()), this.var_190.assign(e));
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
  }
  get category() {
    return this.var_163;
  }
  set category(e) {
    this.var_163 = e;
  }
  dispose() {
    this.var_190 = null;
  }
}
