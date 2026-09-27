// Estratto da HabboAirLauncher.deobf.js, riga 275972.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/SizeData.as
// Nome offuscato: _iaf5c045ab6d2d2

class a {
  static {
    n(this, "SizeData");
  }
  static LAYER_LIMIT = 1e3;
  static DEFAULT_DIRECTION = 0;
  var_703;
  _angle;
  _r8ece4ddec5b7ab;
  _directions;
  _r0965e8b4af4e87;
  _r2d424876606041 = null;
  var_3257 = -1;
  constructor(e, r) {
    ((e = Math.min(a.LAYER_LIMIT, Math.max(0, e))),
      (r = Math.min(360, Math.max(1, r))),
      (this.var_703 = e),
      (this._angle = r),
      (this._r8ece4ddec5b7ab = new DirectionData(e)),
      (this._directions = new B()),
      (this._r0965e8b4af4e87 = new B()));
  }
  dispose() {
    if ((this._r8ece4ddec5b7ab?.dispose(), (this._r8ece4ddec5b7ab = null), this._directions != null)) {
      for (let e = 0; e < this._directions.length; e++) this._directions.getWithIndex(e)?.dispose();
      (this._directions.dispose(), (this._directions = null));
    }
    if (((this._r2d424876606041 = null), this._r0965e8b4af4e87 != null)) {
      for (let e = 0; e < this._r0965e8b4af4e87.length; e++) this._r0965e8b4af4e87.getWithIndex(e)?.dispose();
      (this._r0965e8b4af4e87.dispose(), (this._r0965e8b4af4e87 = null));
    }
  }
  get layerCount() {
    return this.var_703;
  }
  defineLayers(e) {
    return e == null || this._r8ece4ddec5b7ab == null
      ? !1
      : this._r5f3524d34f900f(this._r8ece4ddec5b7ab, e.child("layer"));
  }
  defineDirections(e) {
    if (e == null || this._directions == null || this._r8ece4ddec5b7ab == null) return !1;
    let r = ["id"];
    for (let t of e.child("direction").toArray()) {
      if (!(t instanceof Object) || !("attribute" in t) || !da.checkRequiredAttributes(t, r)) return !1;
      let i = t,
        s = Number.parseInt(String(i.attribute("id") ?? "0"), 10),
        o = String(s);
      if (this._directions.getValue(o) != null) return !1;
      let d = new DirectionData(this.var_703);
      if ((d.copyValues(this._r8ece4ddec5b7ab), !this._r5f3524d34f900f(d, i.child("layer"))))
        return (d.dispose(), !1);
      (this._directions.add(o, d), (this.var_3257 = -1), (this._r2d424876606041 = null));
    }
    return !0;
  }
  defineColors(e) {
    if (e == null || this._r0965e8b4af4e87 == null) return !0;
    let r = ["id"],
      t = ["id", "color"];
    for (let i of e.child("color").toArray()) {
      if (!(i instanceof Object) || !("attribute" in i) || !da.checkRequiredAttributes(i, r)) return !1;
      let s = i,
        o = String(s.attribute("id") ?? "");
      if (this._r0965e8b4af4e87.getValue(o) != null) return !1;
      let d = new k0(this.var_703);
      for (let c of s.child("colorLayer").toArray()) {
        if (!(c instanceof Object) || !("attribute" in c) || !da.checkRequiredAttributes(c, t))
          return (d.dispose(), !1);
        let f = c,
          l = Number.parseInt(String(f.attribute("id") ?? "0"), 10),
          b = Number.parseInt(String(f.attribute("color") ?? "0"), 16);
        d.setColor(b, l);
      }
      this._r0965e8b4af4e87.add(o, d);
    }
    return !0;
  }
  getDirectionValue(e) {
    if (this._directions == null) return a.DEFAULT_DIRECTION;
    let r = Math.trunc((((e % 360) + 360 + this._angle / 2) % 360) / this._angle);
    if (this._directions.getValue(String(r)) != null) return r;
    r = ((e % 360) + 360) % 360;
    let t = -1,
      i = -1;
    for (let s = 0; s < this._directions.length; s++) {
      let o = this._directions.getKey(s),
        c = (Number.parseInt(String(o ?? "0"), 10) * this._angle - r + 360) % 360;
      (c > 180 && (c = 360 - c), (c < t || t < 0) && ((t = c), (i = s)));
    }
    return i >= 0 ? Number.parseInt(String(this._directions.getKey(i) ?? "0"), 10) : a.DEFAULT_DIRECTION;
  }
  getTag(e, r) {
    return this._r52507ac6d2c16e(e)?.getTag(r) ?? qt._r6e5d65472a15a2;
  }
  _rfcbae7e0d7ff05(e, r) {
    return this._r52507ac6d2c16e(e)?._rfcbae7e0d7ff05(r) ?? qt._rb70b6db4a5082b;
  }
  _rdcf30128fdeaa9(e, r) {
    return this._r52507ac6d2c16e(e)?._rdcf30128fdeaa9(r) ?? qt._r867909bf9f4491;
  }
  getColor(e, r) {
    return this._r0965e8b4af4e87?.getValue(String(r))?.getColor(e) ?? k0.DEFAULT_COLOR;
  }
  _refa91ef7deb9e0(e, r) {
    return this._r52507ac6d2c16e(e)?._refa91ef7deb9e0(r) ?? qt._rf55f55bd54a874;
  }
  _r2acf02aae84c5e(e, r) {
    return this._r52507ac6d2c16e(e)?._r2acf02aae84c5e(r) ?? qt._r870d6a59ee15e6;
  }
  _r39e48c695dc1c1(e, r) {
    return this._r52507ac6d2c16e(e)?._r39e48c695dc1c1(r) ?? qt._r5ac5d65538c4b0;
  }
  _r3cb1c15a773382(e, r) {
    return this._r52507ac6d2c16e(e)?._r3cb1c15a773382(r) ?? qt._rb6be903bbb8b1e;
  }
  _r52507ac6d2c16e(e) {
    if (e === this.var_3257 && this._r2d424876606041 != null) return this._r2d424876606041;
    let r = this._directions?.getValue(String(e)) ?? null;
    return (
      r == null && (r = this._r8ece4ddec5b7ab),
      (this.var_3257 = e),
      (this._r2d424876606041 = r),
      r
    );
  }
  _r5f3524d34f900f(e, r) {
    if (e == null || r == null) return !1;
    let t = ["id"];
    for (let i of r.toArray()) {
      if (!(i instanceof Object) || !("attribute" in i) || !da.checkRequiredAttributes(i, t)) return !1;
      let s = i,
        o = Number.parseInt(String(s.attribute("id") ?? "0"), 10);
      if (o < 0 || o >= this.var_703) return !1;
      let d = String(s.attribute("tag") ?? "");
      switch ((d.length > 0 && e.setTag(o, d), String(s.attribute("ink") ?? ""))) {
        case "ADD":
          e._re6444473cee2e5(o, qt.INK_ADD);
          break;
        case "SUBTRACT":
          e._re6444473cee2e5(o, qt.INK_SUBTRACT);
          break;
        case "DARKEN":
          e._re6444473cee2e5(o, qt.INK_DARKEN);
          break;
        case "DIFFERENCE":
          e._re6444473cee2e5(o, qt.INK_DIFFERENCE);
          break;
        case "MULTIPLY":
          e._re6444473cee2e5(o, qt.INK_MULTIPLY);
          break;
        case "INVERT":
          e._re6444473cee2e5(o, qt.INK_INVERT);
          break;
        case "SCREEN":
          e._re6444473cee2e5(o, qt.INK_SCREEN);
          break;
      }
      let c = String(s.attribute("alpha") ?? "");
      c.length > 0 && e.setAlpha(o, Number.parseInt(c, 10));
      let f = String(s.attribute("ignoreMouse") ?? "");
      f.length > 0 && e._r83701c3b05c0dd(o, Number.parseInt(f, 10) !== 0);
      let l = String(s.attribute("x") ?? "");
      l.length > 0 && e._r00d929aad3bd7e(o, Number.parseInt(l, 10));
      let b = String(s.attribute("y") ?? "");
      b.length > 0 && e._r95bfe96b59c297(o, Number.parseInt(b, 10));
      let _ = String(s.attribute("z") ?? "");
      _.length > 0 && e._r9511aeb9fea39d(o, Number.parseInt(_, 10) / -1e3);
    }
    return !0;
  }
}
