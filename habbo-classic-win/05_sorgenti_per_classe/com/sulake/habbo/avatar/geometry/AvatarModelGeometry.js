// Extracted from HabboAirLauncher.deobf.js, line 169964.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/geometry/AvatarModelGeometry.as
// Obfuscated name: _i4348b05dcf4229

class {
  static {
    n(this, "AvatarModelGeometry");
  }
  _rcb1c718e2a0785;
  _r9ae8fac0095844 = new Map();
  _r332e0f72c69ad0 = new Map();
  _r691b39b3335b0b = new Map();
  _rcd38495f1cef06 = new Map();
  var_1815;
  _camera = new Gu(0, 0, 10);
  _rbb6ed82fd04651 = new Map();
  constructor(e) {
    ((this.var_1815 = new Qj()), (this._rcb1c718e2a0785 = new W6e(_i98d0f91752dcba(e, "avatarset"))));
    let r = _i98d0f91752dcba(e, "camera");
    r != null &&
      ((this._camera.x = Number.parseFloat(_i98d0f91752dcba(r, "x")?.textContent ?? "0")),
      (this._camera.y = Number.parseFloat(_i98d0f91752dcba(r, "y")?.textContent ?? "0")),
      (this._camera.z = Number.parseFloat(_i98d0f91752dcba(r, "z")?.textContent ?? "10")));
    for (let t of _ib5ee1bd09422e6(e, "canvas")) {
      let i = _ifdbe20062cc5b0(t, "scale"),
        s = new Map();
      for (let o of _ib5ee1bd09422e6(t, "geometry")) {
        let d = new AvatarCanvas(o, i);
        s.set(_ifdbe20062cc5b0(o, "id"), d);
      }
      this._rbb6ed82fd04651.set(i, s);
    }
    for (let t of _ib5ee1bd09422e6(e, "type")) {
      let i = new Map(),
        s = new Map();
      for (let d of _ib5ee1bd09422e6(t, "bodypart")) {
        let c = new GeometryBodyPart(d),
          f = _ifdbe20062cc5b0(d, "id");
        i.set(f, c);
        let l = _ifdbe20062cc5b0(d, "order-before");
        l !== "" && this._r691b39b3335b0b.set(f, l);
        let b = _ifdbe20062cc5b0(d, "order-after");
        b !== "" && this._rcd38495f1cef06.set(f, b);
        for (let _ of c.getPartIds(null)) s.set(_, c);
      }
      let o = _ifdbe20062cc5b0(t, "id");
      (this._r9ae8fac0095844.set(o, i), this._r332e0f72c69ad0.set(o, s));
    }
  }
  _r797a1ed39c1895(e) {
    for (let r of this._r9ae8fac0095844.values()) for (let t of r.values()) t.removeDynamicParts(e);
  }
  _r79c72680a84ca2(e) {
    return this._rcb1c718e2a0785._rcbb085aaf2aed4(e)?._r34ad31bc624ae6() ?? [];
  }
  _r77f8ed88339b2c(e) {
    return this._rcb1c718e2a0785._rcbb085aaf2aed4(e)?.isMain ?? !1;
  }
  getCanvas(e, r) {
    return this._rbb6ed82fd04651.get(e)?.get(r) ?? null;
  }
  _rfc1fda250dc7db(e) {
    return this._r9ae8fac0095844.get(e) ?? new Map();
  }
  getBodyPartIdsInAvatarSet(e, r) {
    return this._rfc1fda250dc7db(e).get(r) ?? null;
  }
  _r992ede4a5ca34e(e, r, t) {
    let s = this._r332e0f72c69ad0.get(e)?.get(r);
    if (s != null) return s;
    for (let o of this._rfc1fda250dc7db(e).values()) if (o.hasPart(r, t)) return o;
    return null;
  }
  _r4dab5245ee5921(e, r) {
    let t = [];
    for (let i of this._r79c72680a84ca2(r)) {
      let s = e.get(i);
      s != null && t.push(s);
    }
    return t;
  }
  _r16703c8e089708(e, r, t) {
    let i = e.indexOf(r);
    if (i === -1) return;
    e.splice(i, 1);
    let s = e.indexOf(t);
    s !== -1 && e.splice(s, 0, r);
  }
  _r7687e4de071896(e, r, t) {
    let i = e.indexOf(r);
    if (i === -1) return;
    e.splice(i, 1);
    let s = e.indexOf(t);
    s !== -1 && e.splice(s + 1, 0, r);
  }
  _r01f094e78f9b61(e, r, t) {
    if (t == null) return [];
    let i = this._rfc1fda250dc7db(t),
      s = this._r4dab5245ee5921(i, e),
      o = [],
      d = [];
    this.var_1815 = Qj.getYRotationMatrix(r);
    for (let c of s)
      (c.applyTransform(this.var_1815), o.push([c.getDistance(this._camera), c]));
    o.sort((c, f) => c[0] - f[0]);
    for (let [, c] of o) d.push(c.id);
    for (let [c, f] of this._r691b39b3335b0b.entries()) this._r16703c8e089708(d, c, f);
    for (let [c, f] of this._rcd38495f1cef06.entries()) this._r7687e4de071896(d, c, f);
    return d;
  }
  getParts(e, r, t, i, s) {
    let o = this.getBodyPartIdsInAvatarSet(e, r);
    return o == null
      ? []
      : ((this.var_1815 = Qj.getYRotationMatrix(t)),
        o.getParts(this.var_1815, this._camera, i, s));
  }
}
