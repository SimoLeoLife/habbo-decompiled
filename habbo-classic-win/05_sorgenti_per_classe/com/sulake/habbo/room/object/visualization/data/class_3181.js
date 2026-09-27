// Estratto da HabboAirLauncher.deobf.js, riga 275821.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/class_3181.as
// Nome offuscato: _id0fcd05cf5dc0a

class a {
  static {
    n(this, "class_3181");
  }
  static _r6e5d65472a15a2 = "";
  static _rb70b6db4a5082b = 0;
  static _r867909bf9f4491 = 255;
  static _rf55f55bd54a874 = !1;
  static _r870d6a59ee15e6 = 0;
  static _r5ac5d65538c4b0 = 0;
  static _rb6be903bbb8b1e = 0;
  static INK_ADD = 1;
  static INK_SUBTRACT = 2;
  static INK_DARKEN = 3;
  static INK_DIFFERENCE = 4;
  static INK_MULTIPLY = 5;
  static INK_INVERT = 6;
  static INK_SCREEN = 7;
  var_4265 = a._r6e5d65472a15a2;
  var_4064 = a._rb70b6db4a5082b;
  _alpha = a._r867909bf9f4491;
  _ignoreMouse = a._rf55f55bd54a874;
  var_4487 = a._r870d6a59ee15e6;
  var_5069 = a._r5ac5d65538c4b0;
  var_5343 = a._rb6be903bbb8b1e;
  get tag() {
    return this.var_4265;
  }
  set tag(e) {
    this.var_4265 = e;
  }
  get ink() {
    return this.var_4064;
  }
  set ink(e) {
    this.var_4064 = e;
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(e) {
    this._alpha = e;
  }
  get ignoreMouse() {
    return this._ignoreMouse;
  }
  set ignoreMouse(e) {
    this._ignoreMouse = e;
  }
  get xOffset() {
    return this.var_4487;
  }
  set xOffset(e) {
    this.var_4487 = e;
  }
  get yOffset() {
    return this.var_5069;
  }
  set yOffset(e) {
    this.var_5069 = e;
  }
  get zOffset() {
    return this.var_5343;
  }
  set zOffset(e) {
    this.var_5343 = e;
  }
  copyValues(e) {
    e != null &&
      ((this.tag = e.tag),
      (this.ink = e.ink),
      (this.alpha = e.alpha),
      (this.ignoreMouse = e.ignoreMouse),
      (this.xOffset = e.xOffset),
      (this.yOffset = e.yOffset),
      (this.zOffset = e.zOffset));
  }
}
