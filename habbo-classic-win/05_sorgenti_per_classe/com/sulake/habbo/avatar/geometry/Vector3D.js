// Estratto da HabboAirLauncher.deobf.js, riga 169708.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/geometry/Vector3D.as
// Nome offuscato: _ic25f9f9f1b2a0e

class a {
  constructor(e = 0, r = 0, t = 0) {
    this._x = e;
    this._y = r;
    this._z = t;
  }
  static {
    n(this, "Vector3D");
  }
  dot(e) {
    return this._x * e.x + this._y * e.y + this._z * e.z;
  }
  cross(e) {
    return new a(this._y * e.z - this._z * e.y, this._z * e.x - this._x * e.z, this._x * e.y - this._y * e.x);
  }
  subtract(e) {
    ((this._x -= e.x), (this._y -= e.y), (this._z -= e.z));
  }
  add(e) {
    ((this._x += e.x), (this._y += e.y), (this._z += e.z));
  }
  normalize() {
    let e = this.length();
    if (e === 0) return;
    let r = 1 / e;
    ((this._x *= r), (this._y *= r), (this._z *= r));
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
  }
  static dot(e, r) {
    return e.x * r.x + e.y * r.y + e.z * r.z;
  }
  static cross(e, r) {
    return new a(e.y * r.z - e.z * r.y, e.z * r.x - e.x * r.z, e.x * r.y - e.y * r.x);
  }
  static subtract(e, r) {
    return new a(e.x - r.x, e.y - r.y, e.z - r.z);
  }
  toString() {
    return `Vector3D: (${this._x},${this._y},${this._z})`;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
  }
}
