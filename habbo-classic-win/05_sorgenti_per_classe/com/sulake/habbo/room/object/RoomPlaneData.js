// Extracted from HabboAirLauncher.deobf.js, line 80606.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomPlaneData.as
// Obfuscated name: _i53bae3e2b55a3a

class a {
  static {
    n(this, "RoomPlaneData");
  }
  static PLANE_UNDEFINED = 0;
  static PLANE_FLOOR = 1;
  static PLANE_WALL = 2;
  static PLANE_LANDSCAPE = 3;
  static PLANE_BILLBOARD = 4;
  _type = a.PLANE_UNDEFINED;
  var_190;
  _rightSide;
  _rc4f1e6d6578243;
  _normal = null;
  _r1d5baa7d9f6fd7 = null;
  _r7c5471baa446ba = [];
  _masks = [];
  constructor(e, r, t, i, s = null) {
    if (
      ((this.var_190 = new k()),
      this.var_190.assign(r),
      (this._rightSide = new k()),
      this._rightSide.assign(t),
      (this._rc4f1e6d6578243 = new k()),
      this._rc4f1e6d6578243.assign(i),
      (this._type = e),
      t != null && i != null)
    ) {
      let o = k._rb3671a9c70d70f(t, i);
      if (o != null) {
        this._normal = o;
        let d = 0,
          c = 0,
          f = 0;
        if (o.x !== 0 || o.y !== 0) {
          ((d = 360 + (Math.atan2(o.y, o.x) / Math.PI) * 180), d >= 360 && (d -= 360));
          let l = Math.sqrt(o.x * o.x + o.y * o.y);
          ((c = 360 + (Math.atan2(o.z, l) / Math.PI) * 180), c >= 360 && (c -= 360));
        } else c = o.z < 0 ? 90 : 270;
        this._r1d5baa7d9f6fd7 = new k(d, c, f);
      }
    }
    if (s != null && s.length > 0) {
      for (let o of s)
        if (o != null && o.length > 0) {
          let d = new k();
          (d.assign(o), d.mul(1 / d.length), this._r7c5471baa446ba.push(d));
        }
    }
  }
  get type() {
    return this._type;
  }
  get loc() {
    return this.var_190;
  }
  get rightSide() {
    return this._rightSide;
  }
  get getScreenPoint() {
    return this._rc4f1e6d6578243;
  }
  get normal() {
    return this._normal;
  }
  get _rf401c37a5ece61() {
    return this._r1d5baa7d9f6fd7;
  }
  get _r8f76f0fbe8ad3b() {
    return this._r7c5471baa446ba.length;
  }
  get maskCount() {
    return this._masks.length;
  }
  _r57a5462004f79a(e) {
    if (e < 0 || e >= this._r8f76f0fbe8ad3b) return null;
    let r = new k();
    return (r.assign(this._r7c5471baa446ba[e] ?? null), r);
  }
  addMask(e, r, t, i) {
    this._masks.push(new RoomPlaneMaskData(e, r, t, i));
  }
  _rc7d3c5d3e7fdc9(e) {
    return this._rce948062a3990f(e)?._r43917ad7a56ea1 ?? -1;
  }
  _r5bd49c986a1e46(e) {
    return this._rce948062a3990f(e)?._r94891de5ca99b7 ?? -1;
  }
  _race01bab92c447(e) {
    return this._rce948062a3990f(e)?._rbb4b21cb0a9b7c ?? -1;
  }
  _rfdbab9eb6534a8(e) {
    return this._rce948062a3990f(e)?._r76c346d9fd3ef2 ?? -1;
  }
  _rce948062a3990f(e) {
    return e < 0 || e >= this.maskCount ? null : (this._masks[e] ?? null);
  }
}
