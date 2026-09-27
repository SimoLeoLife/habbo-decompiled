// Extracted from HabboAirLauncher.deobf.js, line 79652.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/Vector3d.as
// Obfuscated name: _i51f36a1a30d6c5

class a {
  static {
    n(this, "Vector3d");
  }
  _x;
  _y;
  _z;
  _length = Number.NaN;
  constructor(e = 0, r = 0, t = 0) {
    ((this._x = e), (this._y = r), (this._z = t));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), (this._length = Number.NaN));
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), (this._length = Number.NaN));
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), (this._length = Number.NaN));
  }
  get length() {
    return (
      Number.isNaN(this._length) &&
        (this._length = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z)),
      this._length
    );
  }
  negate() {
    ((this._x = -this._x), (this._y = -this._y), (this._z = -this._z));
  }
  add(e) {
    e != null && ((this._x += e.x), (this._y += e.y), (this._z += e.z), (this._length = Number.NaN));
  }
  sub(e) {
    e != null && ((this._x -= e.x), (this._y -= e.y), (this._z -= e.z), (this._length = Number.NaN));
  }
  mul(e) {
    ((this._x *= e), (this._y *= e), (this._z *= e), (this._length = Number.NaN));
  }
  div(e) {
    e !== 0 && ((this._x /= e), (this._y /= e), (this._z /= e), (this._length = Number.NaN));
  }
  assign(e) {
    e != null && ((this._x = e.x), (this._y = e.y), (this._z = e.z), (this._length = Number.NaN));
  }
  static sum(e, r) {
    return e == null || r == null ? null : new a(e.x + r.x, e.y + r.y, e.z + r.z);
  }
  static dif(e, r) {
    return e == null || r == null ? null : new a(e.x - r.x, e.y - r.y, e.z - r.z);
  }
  static product(e, r) {
    return e == null ? null : new a(e.x * r, e.y * r, e.z * r);
  }
  static dotProduct(e, r) {
    return e == null || r == null ? 0 : e.x * r.x + e.y * r.y + e.z * r.z;
  }
  static _rb3671a9c70d70f(e, r) {
    return e == null || r == null
      ? null
      : new a(e.y * r.z - e.z * r.y, e.z * r.x - e.x * r.z, e.x * r.y - e.y * r.x);
  }
  static scalarProjection(e, r) {
    if (e == null || r == null) return -1;
    let t = r.length;
    return t > 0 ? (e.x * r.x + e.y * r.y + e.z * r.z) / t : -1;
  }
  static cosAngle(e, r) {
    if (e == null || r == null) return 0;
    let t = e.length * r.length;
    return t === 0 ? 0 : a.dotProduct(e, r) / t;
  }
  static isEqual(e, r) {
    return e != null && r != null && e.x === r.x && e.y === r.y && e.z === r.z;
  }
  toString() {
    return `(${[this._x, this._y, this._z].join(",")})`;
  }
}
