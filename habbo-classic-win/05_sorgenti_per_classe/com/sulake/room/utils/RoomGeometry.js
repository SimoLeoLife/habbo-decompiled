// Extracted from HabboAirLauncher.deobf.js, line 80061.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/RoomGeometry.as
// Obfuscated name: _i63abf815960a3c

class a {
  static {
    n(this, "RoomGeometry");
  }
  static SCALE_ZOOMED_IN = 64;
  static SCALE_ZOOMED_OUT = 32;
  var_167 = 0;
  _x;
  _y;
  _z;
  _r46682d91ef0819;
  _location;
  var_81;
  _depth;
  _scale = 1;
  var_1058 = 1;
  var_1146 = 1;
  _rfa4478e3ba9dc3 = 1;
  _r62afa8acab603a = 1;
  _raf53fe4fafa12c = 1;
  _rd57c34928018ab = 1;
  var_190 = null;
  var_911 = null;
  var_5905 = -500;
  var_5898 = 500;
  _r0653ec3ebcc50d = null;
  constructor(e, r, t, i = null) {
    ((this.scale = e),
      (this._x = new k()),
      (this._y = new k()),
      (this._z = new k()),
      (this._r46682d91ef0819 = new k()),
      (this._location = new k()),
      (this.var_81 = new k()),
      (this._depth = new k()),
      (this._r62afa8acab603a = 1),
      (this._raf53fe4fafa12c = 1),
      (this._r292f3860a7aea4 = 1),
      (this._redc3ccb7bea42b = 1),
      (this._rd57c34928018ab = Math.sqrt(1 / 2) / Math.sqrt(3 / 4)),
      (this.z_scale = 1),
      (this.location = new k(t.x, t.y, t.z)),
      (this.direction = new k(r.x, r.y, r.z)),
      i != null ? this._r3f19880d400508(i) : this._r3f19880d400508(r),
      (this._r0653ec3ebcc50d = new B()));
  }
  get updateId() {
    return this.var_167;
  }
  get scale() {
    return this._scale / Math.sqrt(0.5);
  }
  set scale(e) {
    (e <= 1 && (e = 1),
      (e *= Math.sqrt(0.5)),
      e !== this._scale && ((this._scale = e), this.var_167++));
  }
  get directionAxis() {
    return this._r46682d91ef0819;
  }
  get location() {
    return (
      this._location.assign(this.var_190),
      (this._location.x *= this.var_1058),
      (this._location.y *= this.var_1146),
      (this._location.z *= this._rfa4478e3ba9dc3),
      this._location
    );
  }
  set location(e) {
    if (e == null) return;
    this.var_190 == null && (this.var_190 = new k());
    let r = this.var_190.x,
      t = this.var_190.y,
      i = this.var_190.z;
    (this.var_190.assign(e),
      (this.var_190.x /= this.var_1058),
      (this.var_190.y /= this.var_1146),
      (this.var_190.z /= this._rfa4478e3ba9dc3),
      (this.var_190.x !== r || this.var_190.y !== t || this.var_190.z !== i) &&
        this.var_167++);
  }
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    if (e == null) return;
    this.var_911 == null && (this.var_911 = new k());
    let r = this.var_911.x,
      t = this.var_911.y,
      i = this.var_911.z;
    (this.var_911.assign(e),
      this.var_81.assign(e),
      (this.var_911.x !== r || this.var_911.y !== t || this.var_911.z !== i) &&
        this.var_167++);
    let s = new k(0, 1, 0),
      o = new k(0, 0, 1),
      d = new k(1, 0, 0),
      c = (e.x / 180) * Math.PI,
      f = (e.y / 180) * Math.PI,
      l = (e.z / 180) * Math.PI,
      b = Math.cos(c),
      _ = Math.sin(c),
      h = k.sum(k.product(s, b), k.product(d, -_)),
      p = new k(o.x, o.y, o.z),
      m = k.sum(k.product(s, _), k.product(d, b)),
      v = Math.cos(f),
      w = Math.sin(f),
      I = new k(h.x, h.y, h.z),
      C = k.sum(k.product(p, v), k.product(m, w)),
      W = k.sum(k.product(p, -w), k.product(m, v));
    if (l !== 0) {
      let R = Math.cos(l),
        T = Math.sin(l),
        S = k.sum(k.product(I, R), k.product(C, T)),
        z = k.sum(k.product(I, -T), k.product(C, R)),
        K = new k(W.x, W.y, W.z);
      (this._x.assign(S), this._y.assign(z), this._z.assign(K), this._r46682d91ef0819.assign(this._z));
    } else (this._x.assign(I), this._y.assign(C), this._z.assign(W), this._r46682d91ef0819.assign(this._z));
  }
  set _r292f3860a7aea4(e) {
    this.var_1058 !== e * this._r62afa8acab603a &&
      ((this.var_1058 = e * this._r62afa8acab603a), this.var_167++);
  }
  set _redc3ccb7bea42b(e) {
    this.var_1146 !== e * this._raf53fe4fafa12c &&
      ((this.var_1146 = e * this._raf53fe4fafa12c), this.var_167++);
  }
  set z_scale(e) {
    this._rfa4478e3ba9dc3 !== e * this._rd57c34928018ab &&
      ((this._rfa4478e3ba9dc3 = e * this._rd57c34928018ab), this.var_167++);
  }
  dispose() {
    ((this._x = null),
      (this._y = null),
      (this._z = null),
      (this.var_190 = null),
      (this.var_911 = null),
      (this._r46682d91ef0819 = null),
      (this._location = null),
      this._r0653ec3ebcc50d != null && (this._r0653ec3ebcc50d.dispose(), (this._r0653ec3ebcc50d = null)));
  }
  _r2601fe63eb1ce7(e, r) {
    if (e == null || r == null || this._r0653ec3ebcc50d == null) return;
    let t = `${Math.trunc(Math.round(e.x))}_${Math.trunc(Math.round(e.y))}_${Math.trunc(Math.round(e.z))}`;
    this._r0653ec3ebcc50d.remove(t);
    let i = new k();
    (i.assign(r), this._r0653ec3ebcc50d.add(t, i), this.var_167++);
  }
  _r32ed732b771bf2(e) {
    if (this._r0653ec3ebcc50d != null) {
      let r = `${Math.trunc(Math.round(e.x))}_${Math.trunc(Math.round(e.y))}_${Math.trunc(Math.round(e.z))}`;
      return this._r0653ec3ebcc50d.getValue(r) ?? null;
    }
    return null;
  }
  _r3f19880d400508(e) {
    let r = new k(0, 1, 0),
      t = new k(0, 0, 1),
      i = new k(1, 0, 0),
      s = (e.x / 180) * Math.PI,
      o = (e.y / 180) * Math.PI,
      d = (e.z / 180) * Math.PI,
      c = Math.cos(s),
      f = Math.sin(s),
      l = k.sum(k.product(r, c), k.product(i, -f)),
      b = new k(t.x, t.y, t.z),
      _ = k.sum(k.product(r, f), k.product(i, c)),
      h = Math.cos(o),
      p = Math.sin(o),
      m = new k(l.x, l.y, l.z),
      v = k.sum(k.product(b, h), k.product(_, p)),
      w = k.sum(k.product(b, -p), k.product(_, h));
    if (d !== 0) {
      let I = Math.cos(d),
        C = Math.sin(d),
        W = k.sum(k.product(m, I), k.product(v, C)),
        R = k.sum(k.product(m, -C), k.product(v, I)),
        T = new k(w.x, w.y, w.z);
      this._depth.assign(T);
    } else this._depth.assign(w);
    this.var_167++;
  }
  _r558119346e8e8f(e, r) {
    if (e == null || this._z == null) return;
    let t = k.product(this._z, -r),
      i = new k(e.x + t.x, e.y + t.y, e.z + t.z);
    this.location = i;
  }
  getCoordinatePosition(e) {
    if (e == null) return null;
    let r = k.scalarProjection(e, this._x),
      t = k.scalarProjection(e, this._y),
      i = k.scalarProjection(e, this._z);
    return new k(r, t, i);
  }
  _rd0d22ff45cecac(e) {
    let r = k.dif(e, this.var_190);
    ((r.x *= this.var_1058), (r.y *= this.var_1146), (r.z *= this._rfa4478e3ba9dc3));
    let t = k.scalarProjection(r, this._depth);
    if (t < this.var_5905 || t > this.var_5898) return null;
    let i = k.scalarProjection(r, this._x),
      s = -k.scalarProjection(r, this._y);
    ((i *= this._scale), (s *= this._scale));
    let o = this._r32ed732b771bf2(e);
    return (
      o != null &&
        ((r = k.dif(e, this.var_190)),
        r.add(o),
        (r.x *= this.var_1058),
        (r.y *= this.var_1146),
        (r.z *= this._rfa4478e3ba9dc3),
        (t = k.scalarProjection(r, this._depth))),
      (r.x = i),
      (r.y = s),
      (r.z = t),
      r
    );
  }
  _r2c974b4bf77b84(e) {
    let r = this._rd0d22ff45cecac(e);
    return r == null ? null : new E(r.x, r.y);
  }
  getPlanePosition(e, r, t, i) {
    let s = e.x / this._scale,
      o = -e.y / this._scale,
      d = k.product(this._x, s);
    d.add(k.product(this._y, o));
    let c = new k(
      this.var_190.x * this.var_1058,
      this.var_190.y * this.var_1146,
      this.var_190.z * this._rfa4478e3ba9dc3,
    );
    c.add(d);
    let f = this._z,
      l = new k(r.x * this.var_1058, r.y * this.var_1146, r.z * this._rfa4478e3ba9dc3),
      b = new k(t.x * this.var_1058, t.y * this.var_1146, t.z * this._rfa4478e3ba9dc3),
      _ = new k(i.x * this.var_1058, i.y * this.var_1146, i.z * this._rfa4478e3ba9dc3),
      h = k._rb3671a9c70d70f(b, _),
      p = new k();
    if ((p.assign(a.getIntersectionVector(c, f, l, h)), p != null)) {
      p.sub(l);
      let m = (k.scalarProjection(p, t) / b.length) * t.length,
        v = (k.scalarProjection(p, i) / _.length) * i.length;
      return new E(m, v);
    }
    return null;
  }
  static getIntersectionVector(e, r, t, i) {
    let s = k.dotProduct(r, i);
    if (Math.abs(s) < 1e-5) return null;
    let o = k.dif(e, t),
      d = -k.dotProduct(i, o) / s;
    return k.sum(e, k.product(r, d));
  }
  _rcd0393dea1d508() {
    this._re45c1d93943a81() ? (this.scale = a.SCALE_ZOOMED_OUT) : (this.scale = a.SCALE_ZOOMED_IN);
  }
  _re45c1d93943a81() {
    return this.scale === a.SCALE_ZOOMED_IN;
  }
  _r77a8181546f2a5() {
    this.scale = a.SCALE_ZOOMED_OUT;
  }
  _r2bd6b90b6fb50d() {
    this.scale = a.SCALE_ZOOMED_IN;
  }
}
