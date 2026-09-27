// Estratto da HabboAirLauncher.deobf.js, riga 249675.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/IssueManager.as
// Nome offuscato: _i8040f198122e61

class a {
  constructor(e) {
    this._moderationManager = e;
    ((this._rdbbfd5038ace5c = new Fpe(
      this,
      this._moderationManager.windowManager,
      this._moderationManager.assets,
    )),
      (this._r3bc688830e51b8 = this._moderationManager.getInteger("chf.score.updatefactor", 60)),
      (this._issueListLimit = this._moderationManager.getInteger("max.call_for_help.results", 200)),
      (this._rbb2a2fef9b7659 = new _i05394ecc0c0c4d(a.PRIORITY_UPDATE_INTERVAL_MS, 0)),
      this._rbb2a2fef9b7659.addEventListener(DeBouncer.addEventListener, this._r4dc2f58a5b650c.bind(this)),
      this._rbb2a2fef9b7659.start());
  }
  static {
    n(this, "IssueManager");
  }
  static const_936 = "issue_bundle_open";
  static BUNDLE_MY = "issue_bundle_my";
  static const_1093 = "issue_bundle_picked";
  static PRIORITY_UPDATE_INTERVAL_MS = 15e3;
  static RESOLUTION_USELESS = 1;
  static RESOLUTION_RESOLVED = 3;
  _rdbbfd5038ace5c;
  _issues = new B();
  _bundles = new B();
  _rbf013101ce942b = new B();
  _r1702aee3375062 = [];
  _r58d5a94b9eacf1 = [];
  _rdbdca23186ef82 = new B();
  _rc381e311d5a1c0 = new B();
  _r4cedf94d499088 = 1;
  _r3bc688830e51b8;
  _rbb2a2fef9b7659;
  _issueListLimit;
  var_3204 = 0;
  var_3182 = 0;
  _windowWidth = 0;
  var_3847 = 0;
  _r2e8e9bb942ea5e = [];
  get issueListLimit() {
    return this._issueListLimit;
  }
  init() {
    this._rdbbfd5038ace5c.show();
  }
  _r3a6d35308098b8(e, r, t = !1, i = 0) {
    let s = this._bundles.getValue(e) ?? null;
    s != null &&
      (this.sendPick(s._r5627d9a209015f(), t, i, r),
      (this._r1702aee3375062 = this._r1702aee3375062.concat(s._r5627d9a209015f())));
  }
  autoPick(e, r = !1, t = 0) {
    let i = null;
    for (let s of this._bundles.getValues())
      s.state === class_3267.STATE_OPEN && (i == null || this._rc95886df8746e0(s, i)) && (i = s);
    i != null && this._r3a6d35308098b8(i.id, e, r, t);
  }
  _r15bac7445b87a3() {
    let e = this._moderationManager.sessionDataManager.userId,
      r = [];
    for (let t of this._bundles.getValues())
      t.state === class_3267.const_911 && t.pickerUserId === e && (r = r.concat(t._r5627d9a209015f()));
    this._r3b876fc683ea84(r);
  }
  _r0a23c60f69b52c(e) {
    let r = this._bundles.getValue(e) ?? null;
    r != null && this._r3b876fc683ea84(r._r5627d9a209015f());
  }
  playSound(e) {
    this._issues.getValue(e.issueId) == null &&
      (this._rdbbfd5038ace5c.isOpen() ||
        this._moderationManager.musicController.playSound(HabboSoundTypesEnum.SOUND_CALL_FOR_HELP));
  }
  updateIssue(e) {
    (this._issues.remove(e.issueId), this._issues.add(e.issueId, e));
    let r = this._rdf9a1399054573(e);
    if (e.state === class_3267.const_1143) {
      this._issues.remove(e.issueId);
      return;
    }
    if (r == null) {
      for (let t of this._bundles.getValues())
        if (t.matches(e)) {
          ((r = t), r.updateIssue(e), this._rbf013101ce942b.add(e.issueId, r.id));
          break;
        }
    }
    if (r == null) {
      let t = this._r4cedf94d499088++;
      ((r = new IssueBundle(t, e)), this._rbf013101ce942b.add(e.issueId, t), this._bundles.add(t, r));
    }
    if (
      (this._r1702aee3375062.includes(e.issueId) &&
        (this.handleBundle(r.id),
        this._moderationManager.sessionDataManager.userId !== e.pickerUserId &&
          e.state === class_3267.const_911 &&
          this._r3d20b27f30f747(r.id)),
      e.state === class_3267.STATE_OPEN)
    ) {
      let t = this._r738c5d7e12548d(a.BUNDLE_MY),
        i = !1,
        s = null;
      for (let d of t)
        if (d.matches(e, !0)) {
          ((i = !0), (s = d));
          break;
        }
      let o = this._r58d5a94b9eacf1.indexOf(e.issueId);
      o === -1 && i && s != null
        ? this.sendPick(
            [e.issueId],
            !1,
            0,
            `matches bundle with issue: ${s.var_2416()?.issueId ?? 0}`,
          )
        : o >= 0 && this._r58d5a94b9eacf1.splice(o, 1);
    }
    (this._ra7f3f1dee3132c(r.id), this._rdbbfd5038ace5c.update());
  }
  _r4dc2f58a5b650c(e = null) {
    this._rdbbfd5038ace5c.update();
  }
  _r5604e032b83111(e) {
    (this._rdbdca23186ef82.remove(e) ?? null)?.dispose();
  }
  _rb6957f78f13311(e, r) {
    this._rc381e311d5a1c0.add(e, r);
  }
  _r39b5838dc30c57(e) {
    this._rc381e311d5a1c0.remove(e);
  }
  _r8637a9a49b851b(e) {
    let r = this._rbf013101ce942b.getValue(e) ?? 0;
    if (r !== 0) {
      let t = this._bundles.getValue(r) ?? null;
      t != null && (t._r8637a9a49b851b(e), t._r8c941abf51b0c4() === 0 && this._bundles.remove(t.id));
    }
    (this._issues.remove(e), this._rdbbfd5038ace5c.update());
  }
  _r738c5d7e12548d(e) {
    let r = [],
      t = this._moderationManager.sessionDataManager.userId;
    for (let i of this._bundles.getValues())
      switch (e) {
        case a.const_936:
          i.state === class_3267.STATE_OPEN && r.push(i);
          break;
        case a.BUNDLE_MY:
          i.state === class_3267.const_911 && i.pickerUserId === t && r.push(i);
          break;
        case a.const_1093:
          i.state === class_3267.const_911 && i.pickerUserId !== t && r.push(i);
          break;
      }
    return r;
  }
  handleBundle(e) {
    let r = this._bundles.getValue(e) ?? null;
    if (r == null) return;
    let t = new Hpe(
      this._moderationManager,
      r,
      this._r2e8e9bb942ea5e,
      this.var_3204,
      this.var_3182,
      this._windowWidth,
      this.var_3847,
    );
    (this._moderationManager._r2512b8a3ecad84.show(
      t,
      null,
      !1,
      !1,
      !1,
      !0,
      this.var_3204,
      this.var_3182,
      this._windowWidth,
      this.var_3847,
    ),
      this._r5604e032b83111(e),
      this._rdbdca23186ef82.add(e, t),
      (this._r1702aee3375062 = this._r1702aee3375062.filter((i) => !r.contains(i))));
  }
  _r3d20b27f30f747(e) {
    this._rdbdca23186ef82.remove(e)?.dispose();
  }
  _r94863113082c44(e, r) {
    let t = this._bundles.getValue(e) ?? null;
    t != null && this._rf69042521b33de(t._r5627d9a209015f(), r);
  }
  _rf57fb23edbb75c(e, r) {
    let t = this._bundles.getValue(e) ?? null;
    if (t == null) return;
    let i = t.var_2416()?.issueId ?? 0,
      s = t._r5627d9a209015f().filter((o) => o !== i);
    this._r477bfdf3bebbef(i, s, r);
  }
  _r19cc9935650149(e, r) {
    let i = (this._bundles.getValue(e) ?? null)?.var_2416() ?? null;
    i != null && this._moderationManager.connection?.send(new _i0195104c8c3160(i.issueId, -1, r));
  }
  _rd38f13cf29203e(e, r) {
    this._moderationManager.connection?.send(new _i0195104c8c3160(-1, e, r));
  }
  updateSanctionData(e, r, t) {
    let i = `${t.name}${t.avatarOnly ? " (avatar) " : " "}`;
    if (
      (t.sanctionLengthInHours > 24 ? (i += `${t.sanctionLengthInHours / 24} days`) : (i += `${t.sanctionLengthInHours}h`),
      ua.isEmpty(t.tradeLockInfo) || (i += ` & ${t.tradeLockInfo}`),
      ua.isEmpty(t._r1e4925451a85d4) || (i += ` & ${t._r1e4925451a85d4}`),
      e > 0)
    )
      for (let s of this._bundles.getValues())
        s.contains(e) && this._rdbdca23186ef82.getValue(s.id)?._rf37d42d9e6d54a(r, i);
    else this._rc381e311d5a1c0.getValue(r)?._rf37d42d9e6d54a(r, i);
  }
  autoHandle(e) {
    let r = this._moderationManager.sessionDataManager.userId,
      t = null;
    for (let i of this._bundles.getValues())
      i.state === class_3267.const_911 &&
        i.pickerUserId === r &&
        i.id !== e &&
        (t == null || i.highestPriority < t.highestPriority) &&
        (t = i);
    if (t == null) {
      this.autoPick("issue manager pick next");
      return;
    }
    this.handleBundle(t.id);
  }
  _r5f60613dfe5570(e) {
    if (e == null) return !1;
    let r = !1,
      t = this._moderationManager.sessionDataManager.userId;
    for (let i of e) {
      i.pickerUserId !== -1 && i.pickerUserId !== t && (r = !0);
      let s = null;
      for (let o of this._bundles.getValues())
        if (o._r5627d9a209015f().includes(i.issueId)) {
          s = o;
          break;
        }
      s != null && (this._rdbdca23186ef82.getValue(s.id)?.dispose(), this._r0a23c60f69b52c(s.id));
    }
    return r;
  }
  _r89ebf2a59f5994(e, r, t, i) {
    ((this.var_3204 = e),
      (this.var_3182 = r),
      (this._windowWidth = t),
      (this.var_3847 = i));
  }
  _r17119c189741bd(e) {
    this._r2e8e9bb942ea5e = e;
  }
  _rad9a4785ce0fe2() {
    return this._r2e8e9bb942ea5e;
  }
  _rc95886df8746e0(e, r) {
    return e.highestPriority < r.highestPriority
      ? !0
      : e.highestPriority === r.highestPriority && e._rc0bca29f4c3bbd < r._rc0bca29f4c3bbd;
  }
  _r3b876fc683ea84(e) {
    e.length === 0 ||
      this._moderationManager.connection == null ||
      (this._moderationManager.connection.send(new _iaab880822b368e(e)),
      (this._r58d5a94b9eacf1 = this._r58d5a94b9eacf1.concat(e)));
  }
  _rdf9a1399054573(e) {
    let r = this._rbf013101ce942b.getValue(e.issueId) ?? 0;
    if (r === 0) return null;
    let t = this._bundles.getValue(r) ?? null;
    return t == null
      ? null
      : t.matches(e)
        ? (t.updateIssue(e), t)
        : (t._r8637a9a49b851b(e.issueId),
          t._r8c941abf51b0c4() === 0 && (this._bundles.remove(t.id), this._r5604e032b83111(t.id)),
          this._rbf013101ce942b.remove(e.issueId),
          (t = null),
          t);
  }
  _ra7f3f1dee3132c(e) {
    this._rdbdca23186ef82.getValue(e)?._radb8e99ab8ee5c();
  }
  _rf69042521b33de(e, r) {
    e.length > 0 &&
      this._moderationManager.connection != null &&
      this._moderationManager.connection.send(new _i2f0c5652e4bcae(e, r));
  }
  sendPick(e, r, t, i) {
    e.length > 0 &&
      this._moderationManager.connection != null &&
      this._moderationManager.connection.send(new _i3fc7caf549514e(e, r, t, i));
  }
  _r477bfdf3bebbef(e, r, t) {
    this._moderationManager.connection?.send(new _i7df25a8484d009(e, r, t));
  }
}
