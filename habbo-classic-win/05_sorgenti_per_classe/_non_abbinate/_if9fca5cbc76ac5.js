// Estratto da HabboAirLauncher.deobf.js, riga 301743.

class a {
  static {
    n(this, "_if9fca5cbc76ac5");
  }
  static _rf7beb76667d943 = 1;
  static _re9690c916555a4 = 2;
  static _r4b50bbded9c7c3 = 3;
  static _r5641621ec6ae21 = 4;
  _r22b50c8a231980 = new B();
  _rd5b7234e089b6e = new B();
  _r48e31ff8489776 = new B();
  var_36 = null;
  set connection(e) {
    this.var_36 = e;
  }
  dispose() {
    ((this.var_36 = null),
      this._r22b50c8a231980.dispose(),
      this._rd5b7234e089b6e.dispose(),
      this._r48e31ff8489776.dispose());
  }
  _r1cacdcfc23a2de(e) {
    return this._r0e420e8c38fe10(e, a._rf7beb76667d943);
  }
  _r0e420e8c38fe10(e, r) {
    return this._r22b50c8a231980.getValue(r)?.getValue(e) ?? null;
  }
  userDataManager(e) {
    return this._rd5b7234e089b6e.getValue(e) ?? null;
  }
  _rc6e130af7a1d9c(e) {
    for (let r of this._rd5b7234e089b6e.getValues()) if (r?.name === e) return r;
    return null;
  }
  _r0deb9f0cedb2e1(e) {
    return this._r48e31ff8489776.getValue(e) ?? [];
  }
  _recac841a3190c4(e) {
    this.var_36 != null && this.var_36.send(new class_3706(e));
  }
  _r36c023c6d368b2(e) {
    let r = this._r0deb9f0cedb2e1(e);
    if (r.length === 0) return [];
    let t = [];
    for (let i of r) i != null && i._r3d8be6b2a8461a >= 0 && (t[i._r3d8be6b2a8461a] = i._rc9fc89e7eb27a7);
    return t;
  }
  _rdc1b3ac0c04f9f(e) {
    if (e == null) return;
    this._r366d2cdab90d49(e._r2fdf1f24b1e612);
    let r = this._r22b50c8a231980.getValue(e.type);
    (r == null && ((r = new B()), this._r22b50c8a231980.add(e.type, r)),
      r.add(e.webID, e),
      this._rd5b7234e089b6e.add(e._r2fdf1f24b1e612, e));
  }
  _r366d2cdab90d49(e) {
    let r = this._rd5b7234e089b6e.remove(e);
    r != null && this._r22b50c8a231980.getValue(r.type)?.remove(r.webID);
  }
  _r38b21be0f64a25(e, r) {
    let t = [];
    for (let i = 0; i < (r?.length ?? 0); i++) {
      let s = r[i];
      if (s instanceof _i6e70f7261361b5) {
        t.push(s);
        continue;
      }
      typeof s == "string" && s.length > 0 && t.push(new _i6e70f7261361b5(i + 1, s, 0, 0));
    }
    (this._r48e31ff8489776.remove(e), this._r48e31ff8489776.add(e, t));
  }
  _r8ae6058e7d4ba5(e, r) {
    this._r38b21be0f64a25(e, r);
  }
  updateFigure(e, r, t, i, s) {
    let o = this.userDataManager(e);
    o != null && ((o.figure = r), (o.sex = t), (o.hasSaddle = i), (o.isRiding = s));
  }
  _rd7a74e0532f0c2(e, r) {
    let t = this.userDataManager(e);
    t != null && (t.petLevel = r);
  }
  _r69a524ecab508f(e, r, t, i, s) {
    let o = this.userDataManager(e);
    o != null &&
      ((o.canBreed = r),
      (o.canHarvest = t),
      (o.canRevive = i),
      (o.hasBreedingPermission = s));
  }
  _r9df68d2ace9988(e, r) {
    let t = this.userDataManager(e);
    t != null && (t.custom = r);
  }
  _r10744a086dde8d(e, r) {
    let t = this.userDataManager(e);
    t != null && (t.achievementScore = r);
  }
  _r9df10abd3e0ca7(e, r) {
    let t = this.userDataManager(e);
    t != null && (t.badgesRank = r);
  }
  _r28765554969323(e, r) {
    let t = this.userDataManager(e);
    t != null && (t.name = r);
  }
  _r3fdc5483852a37(e, r = !0) {
    let t = this.userDataManager(e);
    t != null && (t.isBlocked = r);
  }
  _r088e8652882b97(e) {
    return this._r0e420e8c38fe10(e, a._re9690c916555a4);
  }
  _rfe3645979731ec(e) {
    return this._r0e420e8c38fe10(e, a._r5641621ec6ae21);
  }
  _r8d50ead7c2e152(e) {
    let r = this._r088e8652882b97(e);
    r != null && this.var_36 != null && this.var_36.send(new _i10fe46a4b278f3(r.webID));
  }
  _r729ffc9f13fde5() {
    let e = [];
    for (let r of this._rd5b7234e089b6e.getValues()) r != null && e.push(r.webID);
    return e;
  }
}
