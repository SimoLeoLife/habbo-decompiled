// Estratto da HabboAirLauncher.deobf.js, riga 275605.

class a {
  static {
    n(this, "_ib6e3512f89dd7e");
  }
  static DEFAULT_FRAME_NUMBER = 0;
  static TRANSITION_TO_ANIMATION_OFFSET = 1e6;
  static TRANSITION_FROM_ANIMATION_OFFSET = 2e6;
  _layers = new B();
  var_939 = -1;
  var_3743 = !1;
  _r2df75ae94638c4 = null;
  static _r435b9491bcd5a6(e) {
    return a.TRANSITION_TO_ANIMATION_OFFSET + e;
  }
  static _r54a272d9d927de(e) {
    return a.TRANSITION_FROM_ANIMATION_OFFSET + e;
  }
  static _r40a627647568f0(e) {
    return e >= a.TRANSITION_TO_ANIMATION_OFFSET && e < a.TRANSITION_FROM_ANIMATION_OFFSET;
  }
  static _r08d3170c533a96(e) {
    return e >= a.TRANSITION_FROM_ANIMATION_OFFSET;
  }
  dispose() {
    if (this._layers != null) {
      for (let e = 0; e < this._layers.length; e++) this._layers.getWithIndex(e)?.dispose();
      (this._layers.dispose(), (this._layers = null));
    }
    this._r2df75ae94638c4 = null;
  }
  _re9b58cd9fa39eb(e) {
    this._r2df75ae94638c4 = e;
  }
  _rfa4b6bfb7fcf31(e) {
    return this._r2df75ae94638c4?.includes(e) ?? !1;
  }
  _r658374b2eae883(e) {
    return this.var_3743 ? Math.floor(Math.random() * this.var_939) : 0;
  }
  initialize(e) {
    this.var_3743 = Number.parseInt(String(e.attribute("randomStart") ?? "0"), 10) !== 0;
    let r = ["id"];
    for (let t of e.child("animationLayer").toArray()) {
      if (!(t instanceof Object) || !("attribute" in t) || !da.checkRequiredAttributes(t, r)) return !1;
      let i = t,
        s = Number.parseInt(String(i.attribute("id") ?? "0"), 10),
        o = this.parsePlaneMaterialCells(i, "loopCount", 1),
        d = this.parsePlaneMaterialCells(i, "frameRepeat", 1),
        c = this.parsePlaneMaterialCells(i, "random", 0) !== 0;
      if (!this._r05da3ceeaf94ab(s, o, d, c, i)) return !1;
    }
    return !0;
  }
  getFrame(e, r, t) {
    return this._layers.getValue(r)?.getFrame(e, t) ?? null;
  }
  getFrameFromSequence(e, r, t, i, s) {
    return this._layers.getValue(r)?.getFrameFromSequence(e, t, i, s) ?? null;
  }
  _r05da3ceeaf94ab(e, r, t, i, s) {
    let o = new AnimationLayerData_(r < 0 ? 0 : r, t < 1 ? 1 : t, i),
      d = ["id"];
    for (let c of s.child("frameSequence").toArray()) {
      if (!(c instanceof Object) || !("attribute" in c)) return (o.dispose(), !1);
      let f = c,
        l = this.parsePlaneMaterialCells(f, "loopCount", 1),
        b = this.parsePlaneMaterialCells(f, "random", 0) !== 0,
        _ = o._rd05bbae404fac5(l, b);
      for (let h of f.child("frame").toArray()) {
        if (!(h instanceof Object) || !("attribute" in h) || !da.checkRequiredAttributes(h, d))
          return (o.dispose(), !1);
        let p = h,
          m = this.parsePlaneMaterialCells(p, "id"),
          v = this.parsePlaneMaterialCells(p, "x"),
          w = this.parsePlaneMaterialCells(p, "y"),
          I = this.parsePlaneMaterialCells(p, "randomX"),
          C = this.parsePlaneMaterialCells(p, "randomY"),
          W = this._r2dc6597b0950ad(p);
        _.addFrame(m, v, w, I, C, W);
      }
      _.initialize();
    }
    return (
      o.calculateLength(),
      this._layers.add(e, o),
      (this.var_939 = Math.max(this.var_939, o.frameCount)),
      !0
    );
  }
  _r2dc6597b0950ad(e) {
    let r = null,
      t = e.child("offsets");
    if (t.length() === 0) return null;
    let i = ["direction"],
      [s] = t.toArray();
    if (!(s instanceof Object) || !("child" in s)) return null;
    let o = s;
    for (let d of o.child("offset").toArray()) {
      if (!(d instanceof Object) || !("attribute" in d) || !da.checkRequiredAttributes(d, i)) continue;
      let c = d,
        f = this.parsePlaneMaterialCells(c, "direction"),
        l = this.parsePlaneMaterialCells(c, "x"),
        b = this.parsePlaneMaterialCells(c, "y");
      (r == null && (r = new class_2861()), r.setOffset(f, l, b));
    }
    return r;
  }
  parsePlaneMaterialCells(e, r, t = 0) {
    let i = String(e.attribute(r) ?? "");
    return i.length > 0 ? Number.parseInt(i, 10) : t;
  }
}
