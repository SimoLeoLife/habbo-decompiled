// Estratto da HabboAirLauncher.deobf.js, riga 275377.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationFrameData.as
// Nome offuscato: _ic5a4894af6503a

class {
  static {
    n(this, "AnimationFrameData");
  }
  _id;
  _x;
  _y;
  var_5033;
  var_4577;
  var_3582;
  constructor(e, r, t, i, s, o) {
    ((this._id = e),
      (this._x = r),
      (this._y = t),
      (this.var_5033 = i),
      (this.var_4577 = s),
      (this.var_3582 = o));
  }
  get id() {
    return this._id;
  }
  hasDirectionalOffsets() {
    return !1;
  }
  getX(e) {
    return this._x;
  }
  getY(e) {
    return this._y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._x;
  }
  get randomX() {
    return this.var_5033;
  }
  get randomY() {
    return this.var_4577;
  }
  get repeats() {
    return this.var_3582;
  }
}
