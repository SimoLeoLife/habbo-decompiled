// Extracted from HabboAirLauncher.deobf.js, line 169883.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/geometry/Matrix4x4.as
// Obfuscated name: _i9755326c535286

class a {
  static {
    n(this, "Matrix4x4");
  }
  static IDENTITY = new a(1, 0, 0, 0, 1, 0, 0, 0, 1);
  _data;
  constructor(e = 0, r = 0, t = 0, i = 0, s = 0, o = 0, d = 0, c = 0, f = 0) {
    this._data = [e, r, t, i, s, o, d, c, f];
  }
  identity() {
    return ((this._data = [1, 0, 0, 0, 1, 0, 0, 0, 1]), this);
  }
  static _r26995cc4eb138b(e) {
    let r = (e * Math.PI) / 180,
      t = Math.cos(r),
      i = Math.sin(r);
    return new a(1, 0, 0, 0, t, -i, 0, i, t);
  }
  static getYRotationMatrix(e) {
    let r = (e * Math.PI) / 180,
      t = Math.cos(r),
      i = Math.sin(r);
    return new a(t, 0, i, 0, 1, 0, -i, 0, t);
  }
  static _r495379e7c84927(e) {
    let r = (e * Math.PI) / 180,
      t = Math.cos(r),
      i = Math.sin(r);
    return new a(t, -i, 0, i, t, 0, 0, 0, 1);
  }
  vectorMultiplication(e) {
    let r = e.x * this._data[0] + e.y * this._data[3] + e.z * this._data[6],
      t = e.x * this._data[1] + e.y * this._data[4] + e.z * this._data[7],
      i = e.x * this._data[2] + e.y * this._data[5] + e.z * this._data[8];
    return new Gu(r, t, i);
  }
  multiply(e) {
    let r = this._data[0] * e.data[0] + this._data[1] * e.data[3] + this._data[2] * e.data[6],
      t = this._data[0] * e.data[1] + this._data[1] * e.data[4] + this._data[2] * e.data[7],
      i = this._data[0] * e.data[2] + this._data[1] * e.data[5] + this._data[2] * e.data[8],
      s = this._data[3] * e.data[0] + this._data[4] * e.data[3] + this._data[5] * e.data[6],
      o = this._data[3] * e.data[1] + this._data[4] * e.data[4] + this._data[5] * e.data[7],
      d = this._data[3] * e.data[2] + this._data[4] * e.data[5] + this._data[5] * e.data[8],
      c = this._data[6] * e.data[0] + this._data[7] * e.data[3] + this._data[8] * e.data[6],
      f = this._data[6] * e.data[1] + this._data[7] * e.data[4] + this._data[8] * e.data[7],
      l = this._data[6] * e.data[2] + this._data[7] * e.data[5] + this._data[8] * e.data[8];
    return new a(r, t, i, s, o, d, c, f, l);
  }
  _r68b7bf06856d1b(e) {
    for (let r = 0; r < this._data.length; r++) this._data[r] *= e;
  }
  _r1d7485b0c98aaf(e) {
    return a._r26995cc4eb138b(e).multiply(this);
  }
  _r3547f2a97c3afa(e) {
    return a.getYRotationMatrix(e).multiply(this);
  }
  _r275c521fb29b29(e) {
    return a._r495379e7c84927(e).multiply(this);
  }
  skew() {}
  transpose() {
    return new a(
      this._data[0],
      this._data[3],
      this._data[6],
      this._data[1],
      this._data[4],
      this._data[7],
      this._data[2],
      this._data[5],
      this._data[8],
    );
  }
  equals(e) {
    return this._data.every((r, t) => r === e.data[t]);
  }
  get data() {
    return this._data;
  }
}
