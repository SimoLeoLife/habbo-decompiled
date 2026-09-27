// Estratto da HabboAirLauncher.deobf.js, riga 218142.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/Location3D.as
// Nome offuscato: _i6dea7346fe87fa

class a {
  constructor(e, r, t) {
    this._x = e;
    this._y = r;
    this._z = t;
  }
  static {
    n(this, "Location3D");
  }
  _disposed = !1;
  dispose() {
    ((this._x = 0), (this._y = 0), (this._z = 0), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get z() {
    return this._z;
  }
  changeLocation(e, r, t) {
    ((this._x = e), (this._y = r), (this._z = t));
  }
  var_328(e, r) {
    ((this._x = e), (this._y = r));
  }
  _racd7288ae80f7b(e) {
    ((this._x = e._x), (this._y = e._y), (this._z = e._z));
  }
  _r70ba8723ae7eed(e) {
    let r = e._x - this._x,
      t = e._y - this._y,
      i = e._z - this._z;
    return Math.abs(r) + Math.abs(t) + Math.abs(i);
  }
  _r771d9d1ed3d827(e) {
    if (e._x === this._x && e._y === this._y) return null;
    let r = e._x - this._x,
      t = e._y - this._y,
      i = ri.getAngleFromComponents(r, t);
    return ri.direction360ValueToDirection8(i);
  }
  equals(e) {
    return this === e ? !0 : e instanceof a ? this._x === e._x && this._y === e._y && this._z === e._z : !1;
  }
  hashCode() {
    let e = this._x;
    return ((e = 29 * e + this._y), (e = 29 * e + this._z), e);
  }
  toString() {
    return `_x:${this._x}yy:${this._y}_zz:${this._z}`;
  }
  _rfd9334f88a7bef(e, r) {
    return a.isInDistanceStatic(this._x, this._y, e._x, e._y, r);
  }
  static isInDistanceStatic(e, r, t, i, s) {
    let o = t - e;
    o < 0 && (o = -o);
    let d = i - r;
    return (d < 0 && (d = -d), d > s || o > s ? !1 : o * o + d * d < s * s);
  }
}
