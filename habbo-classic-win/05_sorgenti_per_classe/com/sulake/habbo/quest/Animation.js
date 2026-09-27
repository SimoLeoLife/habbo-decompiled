// Estratto da HabboAirLauncher.deobf.js, riga 169384.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/Animation.as
// Nome offuscato: _i854ad0adf527a0

class a {
  static {
    n(this, "Animation");
  }
  static const_30 = [];
  _id;
  _description;
  _frames = [];
  _rea50f577b0e954 = [];
  _r14fa2bbb027b1d = null;
  _r396ce0e81a26b2 = null;
  _rf0b9d8fc6b700c = [];
  _r2bfb1770c4c92f = [];
  _r3ab85486f12d98 = null;
  _r9969efa43a44d5 = null;
  var_3288;
  constructor(e, r) {
    ((this._id = _ifdbe20062cc5b0(r, "name")),
      (this._description = _ifdbe20062cc5b0(r, "desc", this._id)),
      (this.var_3288 = _i68c84906b18730(r, "resetOnToggle")));
    for (let s of _ib5ee1bd09422e6(r, "sprite")) this._rea50f577b0e954.push(new SpriteDataContainer(this, s));
    let t = _ib5ee1bd09422e6(r, "avatar")[0];
    t != null && (this._r14fa2bbb027b1d = new AvatarDataContainer(t));
    let i = _ib5ee1bd09422e6(r, "direction")[0];
    i != null && (this._r396ce0e81a26b2 = new DirectionDataContainer(i));
    for (let s of _ib5ee1bd09422e6(r, "remove")) this._rf0b9d8fc6b700c.push(_ifdbe20062cc5b0(s, "id"));
    for (let s of _ib5ee1bd09422e6(r, "add")) this._r2bfb1770c4c92f.push(new AddDataContainer(s));
    for (let s of _ib5ee1bd09422e6(r, "override")) {
      ((this._r9969efa43a44d5 ??= new B()), (this._r3ab85486f12d98 ??= new B()));
      let o = _ifdbe20062cc5b0(s, "name"),
        d = _ifdbe20062cc5b0(s, "override"),
        c = [];
      (this._r3ab85486f12d98.add(d, o),
        this._r02865067e3ead9(c, _ib5ee1bd09422e6(s, "frame"), e),
        this._r9969efa43a44d5.add(o, c));
    }
    this._r02865067e3ead9(this._frames, _ib5ee1bd09422e6(r, "frame"), e);
  }
  _r02865067e3ead9(e, r, t) {
    for (let i of r) {
      let s = _i897b98cdeac318(i, "repeats", 1);
      s < 1 && (s = 1);
      for (let o = 0; o < s; o++) {
        let d = [];
        for (let c of _ib5ee1bd09422e6(i, "bodypart")) {
          let f = t._r0f956505679c69(_ifdbe20062cc5b0(c, "action"));
          d.push(new AnimationLayerData(c, AnimationLayerData.const_630, f));
        }
        for (let c of _ib5ee1bd09422e6(i, "fx")) {
          let f = t._r0f956505679c69(_ifdbe20062cc5b0(c, "action"));
          d.push(new AnimationLayerData(c, AnimationLayerData.const_1253, f));
        }
        e.push(d);
      }
    }
  }
  frameCount(e = null) {
    return e == null || e === "" ? this._frames.length : (this._r9969efa43a44d5?.getValue(e)?.length ?? 0);
  }
  hasOverriddenActions() {
    return (this._r3ab85486f12d98?.length ?? 0) > 0;
  }
  overriddenActionNames() {
    return this._r3ab85486f12d98?.getKeys() ?? null;
  }
  overridingAction(e) {
    return this._r3ab85486f12d98?.getValue(e) ?? null;
  }
  getFrame(e, r = null) {
    let t = [];
    if (r == null || r === "") this._frames.length > 0 && (t = this._frames[e % this._frames.length]);
    else {
      let i = this._r9969efa43a44d5?.getValue(r);
      i != null && i.length > 0 && (t = i[e % i.length]);
    }
    return t;
  }
  getAnimatedBodyPartIds(e, r = null) {
    let t = [];
    for (let i of this.getFrame(e, r))
      if (i.type === AnimationLayerData.const_630) t.push(i.id);
      else if (i.type === AnimationLayerData.const_1253)
        for (let s of this._r2bfb1770c4c92f) s.id === i.id && t.push(s.align);
    return t;
  }
  getLayerData(e, r, t = null) {
    for (let i of this.getFrame(e, t)) {
      if (i.id === r) return i;
      if (i.type === AnimationLayerData.const_1253) {
        for (let s of this._r2bfb1770c4c92f) if (s.align === r && s.id === i.id) return i;
      }
    }
    return null;
  }
  _r33d779b4902bcf() {
    return this._r14fa2bbb027b1d != null;
  }
  var_3626() {
    return this._r396ce0e81a26b2 != null;
  }
  _r4c53b3a0849ab8() {
    return this._r2bfb1770c4c92f.length > 0;
  }
  getAddData(e) {
    for (let r of this._r2bfb1770c4c92f) if (r.id === e) return r;
    return null;
  }
  get id() {
    return this._id;
  }
  get _rc0fcc8ad45e365() {
    return this._rea50f577b0e954;
  }
  get avatarData() {
    return this._r14fa2bbb027b1d;
  }
  get _r67275f6a7e1f5f() {
    return this._r396ce0e81a26b2;
  }
  get _r0357ae1667dbaf() {
    return this._rf0b9d8fc6b700c.length > 0 ? this._rf0b9d8fc6b700c : a.const_30;
  }
  get _r18bc0f7c1954f6() {
    return this._r2bfb1770c4c92f.length > 0 ? this._r2bfb1770c4c92f : a.const_30;
  }
  get resetOnToggle() {
    return this.var_3288;
  }
  toString() {
    return this._description;
  }
}
