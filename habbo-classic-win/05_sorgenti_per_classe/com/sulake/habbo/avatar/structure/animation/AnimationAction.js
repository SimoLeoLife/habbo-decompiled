// Extracted from HabboAirLauncher.deobf.js, line 170095.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/animation/AnimationAction.as
// Obfuscated name: _ifdb56e79d73225

class a {
  static {
    n(this, "AnimationAction");
  }
  static DEFAULT_OFFSET = new E(0, 0);
  _id;
  var_3239 = new Map();
  _rc98ff4e2f1b712 = new B();
  var_939 = 0;
  _frameIndexes = [];
  constructor(e) {
    this._id = _ifdbe20062cc5b0(e, "id");
    for (let t of _ib5ee1bd09422e6(e, "part")) {
      let i = new UnkClass_85993f(t);
      (this.var_3239.set(_ifdbe20062cc5b0(t, "set-type"), i),
        (this.var_939 = Math.max(this.var_939, i.frames.length)));
    }
    let r = _ib5ee1bd09422e6(e, "offsets")[0];
    for (let t of _ib5ee1bd09422e6(r, "frame")) {
      let i = _i897b98cdeac318(t, "id");
      this.var_939 = Math.max(this.var_939, i);
      let s = new B();
      this._rc98ff4e2f1b712.add(i, s);
      let o = _ib5ee1bd09422e6(t, "directions")[0];
      for (let c of _ib5ee1bd09422e6(o, "direction")) {
        let f = _i897b98cdeac318(c, "id"),
          l = new B();
        s.add(f, l);
        for (let b of _ib5ee1bd09422e6(c, "bodypart")) {
          let _ = _ifdbe20062cc5b0(b, "id"),
            h = b.hasAttribute("dx") ? _i897b98cdeac318(b, "dx") : 0,
            p = b.hasAttribute("dy") ? _i897b98cdeac318(b, "dy") : 0;
          l.add(_, new E(h, p));
        }
      }
      this._frameIndexes.push(i);
      let d = _i897b98cdeac318(t, "repeats");
      if (d > 1) for (; --d > 0;) this._frameIndexes.push(i);
    }
  }
  getPart(e) {
    return this.var_3239.get(e) ?? null;
  }
  get id() {
    return this._id;
  }
  get parts() {
    return this.var_3239;
  }
  get frameCount() {
    return this.var_939;
  }
  getFrameBodyPartOffset(e, r, t) {
    if (this._frameIndexes.length === 0) return a.DEFAULT_OFFSET;
    let i = r % this._frameIndexes.length,
      s = this._frameIndexes[i];
    return this._rc98ff4e2f1b712.getValue(s)?.getValue(e)?.getValue(t) ?? a.DEFAULT_OFFSET;
  }
}
