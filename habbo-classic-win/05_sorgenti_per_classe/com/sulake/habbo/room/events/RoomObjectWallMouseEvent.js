// Estratto da HabboAirLauncher.deobf.js, riga 180977.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectWallMouseEvent.as
// Nome offuscato: _if3406c2daa9853

class extends RoomObjectMouseEvent {
  constructor(r, t, i, s, o, d, c, f, l, b = !1, _ = !1, h = !1, p = !1, m = !1, v = !1) {
    super(r, t, i, b, _, h, p, m, v);
    this._x = c;
    this._y = f;
    this.var_81 = l;
    ((this._r7fcdf8cf2e5214 = new k()),
      this._r7fcdf8cf2e5214.assign(s),
      (this._r3f39ee349f6212 = new k()),
      this._r3f39ee349f6212.assign(o),
      (this.var_4208 = new k()),
      this.var_4208.assign(d));
  }
  static {
    n(this, "RoomObjectWallMouseEvent");
  }
  _r7fcdf8cf2e5214;
  _r3f39ee349f6212;
  var_4208;
  get _r8a8bd2d04c661f() {
    return this._r7fcdf8cf2e5214;
  }
  get _rba969418d11b94() {
    return this._r3f39ee349f6212;
  }
  get wallHeight() {
    return this.var_4208;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get direction() {
    return this.var_81;
  }
}
