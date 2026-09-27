// Extracted from HabboAirLauncher.deobf.js, line 274194.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/VariableFxStackAddition.as
// Obfuscated name: _i82e02fb29d8d0f

class a {
  constructor(e, r, t, i, s) {
    this.var_3623 = e;
    this._variableId = r;
    this.var_41 = t;
    this.var_2234 = i;
    this._rendererRegistry = s;
    this._id = a.var_5067++;
  }
  static {
    n(this, "VariableFxStackAddition");
  }
  static FADE_IN_DURATION_MS = 150;
  static FADE_OUT_DURATION_MS = 350;
  static DEFAULT_RELATIVE_DEPTH = -0.2;
  static var_5067 = 1e4;
  _id;
  var_5600 = 0;
  var_541 = null;
  var_2323 = -1;
  var_3378 = -1;
  var_1124 = !1;
  var_847 = !1;
  var_826 = !1;
  var_988 = !1;
  _alpha = 0;
  var_4101 = 0;
  _fadeStartAlpha = 0;
  _fadeTargetAlpha = 0;
  var_4039 = 0;
  var_642 = !1;
  get id() {
    return this._id;
  }
  get configId() {
    return this.var_3623;
  }
  get variableId() {
    return this._variableId;
  }
  get createdAt() {
    return this.var_5600;
  }
  get isFinished() {
    return this.var_988;
  }
  get requiresAnimationTick() {
    return (
      !this.var_642 ||
      this._alpha !== this._fadeTargetAlpha ||
      (this.var_541 != null && this.var_541.requiresAnimationTick)
    );
  }
  get disposed() {
    return this.var_41 == null;
  }
  get isPartOfStack() {
    return this.var_1124;
  }
  set isPartOfStack(e) {
    this.var_1124 !== e && ((this.var_1124 = e), (this.var_642 = !1));
  }
  get _r811e948c222c4c() {
    return this.var_847 && !this.var_826;
  }
  get invisible() {
    return this.var_826;
  }
  show(e, r) {
    let t = !1;
    if (this.var_41 == null) return !1;
    let i = this.var_41._r2324173970b390(this.var_3623);
    if (i == null) return this.hide(r);
    this.var_5600 = e.createdAt;
    let s = this.var_41._rb2e80a645435a5(this.var_3623),
      o = e.isInitialize || e.invisible,
      d = new VariableFxStatusData(e.value, e._rd039082a66c6c1, e._rde47e35540b4cb, e.extra.clone(), o);
    return (
      this.var_541 == null || this.var_3378 !== s
        ? (this.disposeVisualizer(),
          (this.var_541 = new VariableFxVisualizer(i, d, r, this.var_2234, this._rendererRegistry)),
          (this.var_3378 = s),
          (this.var_2323 = e.updateId),
          (t = !0))
        : this.var_2323 !== e.updateId &&
          (this.var_541.updateData(d, r),
          (this.var_2323 = e.updateId),
          (t = !0)),
      this.var_988 && (t = !0),
      (this.var_988 = !1),
      e.invisible
        ? this.startInvisibleFade(r) || t
        : ((this.var_826 || !this.var_847) && (t = !0),
          (this.var_826 = !1),
          (this.var_847 = !0),
          this.startFade(255, a.FADE_IN_DURATION_MS, r) || t)
    );
  }
  hide(e) {
    let r = this.var_826;
    return (
      (this.var_826 = !1),
      !this.var_847 && this._fadeTargetAlpha === 0
        ? (this._alpha === 0 && ((r = r || !this.var_988), this.finishHidden()), r)
        : ((r = !0),
          (this.var_847 = !1),
          (r = this.startFade(0, a.FADE_OUT_DURATION_MS, e) || r),
          this._alpha === 0 && ((r = r || !this.var_988), this.finishHidden()),
          r)
    );
  }
  update(e, r) {
    let t = _ia411d8d8194a3a();
    (this.updateFade(t), this.updateVisualizer(t), this.applyToSprite(e));
  }
  animate(e) {
    let r = _ia411d8d8194a3a(),
      t = this.updateFade(r);
    return (
      this.updateVisualizer(r) && (t = !0),
      !t && this.var_642 ? !1 : (this.applyToSprite(e), !0)
    );
  }
  dispose() {
    (this.disposeVisualizer(),
      (this.var_41 = null),
      (this.var_2234 = null),
      (this._rendererRegistry = null));
  }
  startFade(e, r, t) {
    let i = this.updateFade(t);
    return this._fadeTargetAlpha === e
      ? i
      : ((this.var_4101 = t),
        (this._fadeStartAlpha = this._alpha),
        (this._fadeTargetAlpha = e),
        (this.var_4039 = r),
        !0);
  }
  updateFade(e) {
    if (this._alpha === this._fadeTargetAlpha) return !1;
    let r =
        this.var_4039 <= 0
          ? 1
          : Math.max(0, Math.min(1, (e - this.var_4101) / this.var_4039)),
      t = Math.round(this._fadeStartAlpha + (this._fadeTargetAlpha - this._fadeStartAlpha) * r) | 0;
    return t === this._alpha
      ? !1
      : ((this._alpha = t),
        this._alpha === 0 && !this.var_847 && !this.var_826 && this.finishHidden(),
        !0);
  }
  finishHidden() {
    ((this.var_988 = !0), this.disposeVisualizer());
  }
  updateVisualizer(e) {
    return this.var_541 == null ||
      (this.var_826 && !this.var_847 && this._alpha <= 0)
      ? !1
      : this.var_541.needsUpdate(e)
        ? this.var_541.update(e)
        : !1;
  }
  applyToSprite(e) {
    if (e == null) {
      this.var_642 = !1;
      return;
    }
    if (this.var_541 == null || this._alpha <= 0) {
      ((e.alpha = 0), (e.visible = !1), (this.var_642 = !0));
      return;
    }
    let r = this.var_541.frame;
    if (r == null || r.bitmapData == null) {
      ((e.alpha = 0), (e.visible = !1), (this.var_642 = !0));
      return;
    }
    ((e.asset = r.bitmapData),
      (e.offsetX = -Math.trunc(r.bitmapData.width / 2) + r.anchorX),
      (e.offsetY = this.var_1124 ? r.anchorY : -r.bitmapData.height + r.anchorY),
      (e._relativeDepth = a.DEFAULT_RELATIVE_DEPTH),
      (e.alpha = this._alpha),
      (e.visible = !0),
      (this.var_642 = !0));
  }
  disposeVisualizer() {
    (this.var_541 != null && (this.var_541.dispose(), (this.var_541 = null)),
      (this.var_3378 = -1),
      (this.var_2323 = -1),
      (this.var_642 = !1));
  }
  startInvisibleFade(e) {
    let r = !this.var_826 || this.var_847;
    return (
      (this.var_826 = !0),
      (this.var_847 = !1),
      this.startFade(0, a.FADE_OUT_DURATION_MS, e) || r
    );
  }
}
