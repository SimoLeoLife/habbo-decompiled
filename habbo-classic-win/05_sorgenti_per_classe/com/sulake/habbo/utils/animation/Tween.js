// Extracted from HabboAirLauncher.deobf.js, line 69101.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/animation/Tween.as
// Obfuscated name: _i1644d161fa104f

class a extends EventDispatcherWrapper {
  static {
    n(this, "Tween");
  }
  static HINT_MARKER = "#";
  static var_3507 = [];
  static REMOVE_FROM_JUGGLER = "REMOVE_FROM_JUGGLER";
  var_203 = null;
  var_1556 = null;
  mTransitionName = "";
  _properties = [];
  _r4f4bf5ad80d67a = [];
  _rbec6beb96c53a9 = [];
  var_2995 = [];
  var_1743 = null;
  _onUpdate = null;
  var_1699 = null;
  var_2028 = null;
  var_2252 = null;
  var_2024 = null;
  var_2010 = null;
  var_2171 = null;
  mTotalTime = 0;
  _currentTime = 0;
  var_1639 = 0;
  var_3844 = 0;
  var_2948 = !1;
  mNextTween = null;
  var_720 = 1;
  var_2986 = 0;
  var_2842 = !1;
  var_1329 = -1;
  constructor(e, r, t = "linear") {
    (super(), this.reset(e, r, t));
  }
  reset(e, r, t = "linear") {
    if (
      ((this.var_203 = e ?? null),
      (this._currentTime = 0),
      (this.mTotalTime = Math.max(1e-4, r)),
      (this.var_1639 = 0),
      (this.var_3844 = 0),
      (this.var_2986 = 0),
      (this.var_1743 = null),
      (this._onUpdate = null),
      (this.var_1699 = null),
      (this.var_2028 = null),
      (this.var_2252 = null),
      (this.var_2024 = null),
      (this.var_2010 = null),
      (this.var_2171 = null),
      (this.var_2948 = !1),
      (this.var_2842 = !1),
      (this.var_720 = 1),
      (this.var_1329 = -1),
      (this.mNextTween = null),
      typeof t == "string")
    )
      this.transition = t;
    else if (typeof t == "function") this.transitionFunc = t;
    else throw new TypeError("Transition must be either a string or a function");
    return (
      (this._properties.length = 0),
      (this._r4f4bf5ad80d67a.length = 0),
      (this._rbec6beb96c53a9.length = 0),
      (this.var_2995.length = 0),
      this
    );
  }
  animate(e, r) {
    if (this.var_203 == null) return;
    let t = this._properties.length;
    ((this._properties[t] = a._r0a7b1dee79b7f0(e)),
      (this._r4f4bf5ad80d67a[t] = Number.NaN),
      (this._rbec6beb96c53a9[t] = r),
      (this.var_2995[t] = this.getUpdateFuncFromProperty(e)));
  }
  scaleTo(e) {
    (this.animate("scaleX", e), this.animate("scaleY", e));
  }
  moveTo(e, r) {
    (this.animate("x", e), this.animate("y", r));
  }
  fadeTo(e) {
    this.animate("alpha", e);
  }
  rotateTo(e, r = "rad") {
    this.animate(`rotation#${r}`, e);
  }
  advanceTime(e) {
    if (e === 0 || (this.var_720 === 1 && this._currentTime === this.mTotalTime)) return;
    let r = this._currentTime,
      t = this.mTotalTime - this._currentTime,
      i = e > t ? e - t : 0;
    if (((this._currentTime += e), this._currentTime <= 0)) return;
    (this._currentTime > this.mTotalTime && (this._currentTime = this.mTotalTime),
      this.var_1329 < 0 &&
        r <= 0 &&
        this._currentTime > 0 &&
        (this.var_1329++, this.var_1743?.apply(this, this.var_2252 ?? [])));
    let s = this._currentTime / this.mTotalTime,
      o = this.var_1556 ?? N2.getTransition(N2.LINEAR),
      d = this.var_2842 && this.var_1329 % 2 === 1;
    this.var_1639 = d ? (o?.(1 - s) ?? 1 - s) : (o?.(s) ?? s);
    for (let c = 0; c < this._r4f4bf5ad80d67a.length; c++)
      (Number.isNaN(this._r4f4bf5ad80d67a[c] ?? Number.NaN) &&
        (this._r4f4bf5ad80d67a[c] = Number(this.var_203?.[this._properties[c] ?? ""] ?? 0)),
        this.var_2995[c]?.(
          this._properties[c] ?? "",
          this._r4f4bf5ad80d67a[c] ?? 0,
          this._rbec6beb96c53a9[c] ?? 0,
        ));
    if (
      (this._onUpdate?.apply(this, this.var_2024 ?? []),
      r < this.mTotalTime && this._currentTime >= this.mTotalTime)
    )
      if (this.var_720 === 0 || this.var_720 > 1)
        ((this._currentTime = -this.var_2986),
          this.var_1329++,
          this.var_720 > 1 && this.var_720--,
          this.var_1699?.apply(this, this.var_2010 ?? []));
      else {
        let c = this.var_2028,
          f = this.var_2171;
        (this.dispatchEvent(new M(a.REMOVE_FROM_JUGGLER)),
          c?.apply(this, f ?? []),
          this._currentTime === 0 && (i = 0));
      }
    i !== 0 && this.advanceTime(i);
  }
  _r250aec0eec1b9e(e) {
    let r = this._properties.indexOf(e);
    if (r === -1) throw new Error(`The property '${e}' is not animated`);
    return this._rbec6beb96c53a9[r] ?? 0;
  }
  get isComplete() {
    return this._currentTime >= this.mTotalTime && this.var_720 === 1;
  }
  get target() {
    return this.var_203;
  }
  get transition() {
    return this.mTransitionName;
  }
  set transition(e) {
    if (
      ((this.mTransitionName = e),
      (this.var_1556 = N2.getTransition(e)),
      this.var_1556 == null)
    )
      throw new Error(`Invalid transiton: ${e}`);
  }
  get transitionFunc() {
    return this.var_1556;
  }
  set transitionFunc(e) {
    ((this.mTransitionName = "custom"), (this.var_1556 = e));
  }
  get _r84774aebc9833a() {
    return this.mTotalTime;
  }
  get currentTime() {
    return this._currentTime;
  }
  get progress() {
    return this.var_1639;
  }
  get delay() {
    return this.var_3844;
  }
  set delay(e) {
    ((this._currentTime = this._currentTime + this.var_3844 - e), (this.var_3844 = e));
  }
  get repeatCount() {
    return this.var_720;
  }
  set repeatCount(e) {
    this.var_720 = e;
  }
  get _re9cff66284eff7() {
    return this.var_2986;
  }
  set _re9cff66284eff7(e) {
    this.var_2986 = e;
  }
  get reverse() {
    return this.var_2842;
  }
  set reverse(e) {
    this.var_2842 = e;
  }
  get _redd824da2c29ce() {
    return this.var_2948;
  }
  set _redd824da2c29ce(e) {
    this.var_2948 = e;
  }
  get _rc5944b74c34fab() {
    return this.var_1743;
  }
  set _rc5944b74c34fab(e) {
    this.var_1743 = e;
  }
  get onUpdate() {
    return this._onUpdate;
  }
  set onUpdate(e) {
    this._onUpdate = e;
  }
  get _r911feb6da861ea() {
    return this.var_1699;
  }
  set _r911feb6da861ea(e) {
    this.var_1699 = e;
  }
  get onComplete() {
    return this.var_2028;
  }
  set onComplete(e) {
    this.var_2028 = e;
  }
  get _r8ebc1822c3273e() {
    return this.var_2252;
  }
  set _r8ebc1822c3273e(e) {
    this.var_2252 = e;
  }
  get _r1ff2ee066afdfb() {
    return this.var_2024;
  }
  set _r1ff2ee066afdfb(e) {
    this.var_2024 = e;
  }
  get _rc674bd856dc756() {
    return this.var_2010;
  }
  set _rc674bd856dc756(e) {
    this.var_2010 = e;
  }
  get _r3b59e6d9caf835() {
    return this.var_2171;
  }
  set _r3b59e6d9caf835(e) {
    this.var_2171 = e;
  }
  get _rbc1d02c4657631() {
    return this.mNextTween;
  }
  set _rbc1d02c4657631(e) {
    this.mNextTween = e;
  }
  static getPropertyHint(e) {
    if (e.indexOf("color") !== -1 || e.indexOf("Color") !== -1) return "rgb";
    let r = e.indexOf(a.HINT_MARKER);
    return r !== -1 ? e.substring(r + 1) : null;
  }
  static _r0a7b1dee79b7f0(e) {
    let r = e.indexOf(a.HINT_MARKER);
    return r !== -1 ? e.substring(0, r) : e;
  }
  static fromPool(e, r, t = "linear") {
    let i = a.var_3507.pop();
    return i ? i.reset(e, r, t) : new a(e, r, t);
  }
  static toPool(e) {
    ((e.var_1743 = null),
      (e._onUpdate = null),
      (e.var_1699 = null),
      (e.var_2028 = null),
      (e.var_2252 = null),
      (e.var_2024 = null),
      (e.var_2010 = null),
      (e.var_2171 = null),
      (e.var_203 = null),
      (e.var_1556 = null),
      a.var_3507.push(e));
  }
  getUpdateFuncFromProperty(e) {
    switch (a.getPropertyHint(e)) {
      case null:
        return this.updateStandard;
      case "rgb":
        return this.updateRgb;
      case "rad":
        return this.updateRad;
      case "deg":
        return this.updateDeg;
      default:
        return this.updateStandard;
    }
  }
  updateStandard = n((e, r, t) => {
    let i = r + this.var_1639 * (t - r);
    (this.var_2948 && (i = Math.round(i)),
      this.var_203 != null && (this.var_203[e] = i));
  }, "updateStandard");
  updateRgb = n((e, r, t) => {
    let i = r >>> 0,
      s = t >>> 0,
      o = (i >> 24) & 255,
      d = (i >> 16) & 255,
      c = (i >> 8) & 255,
      f = i & 255,
      l = (s >> 24) & 255,
      b = (s >> 16) & 255,
      _ = (s >> 8) & 255,
      h = s & 255,
      p = o + (l - o) * this.var_1639,
      m = d + (b - d) * this.var_1639,
      v = c + (_ - c) * this.var_1639,
      w = f + (h - f) * this.var_1639;
    this.var_203 != null &&
      (this.var_203[e] = ((p << 24) | (m << 16) | (v << 8) | w) >>> 0);
  }, "updateRgb");
  updateRad = n((e, r, t) => {
    this.updateAngle(Math.PI, e, r, t);
  }, "updateRad");
  updateDeg = n((e, r, t) => {
    this.updateAngle(180, e, r, t);
  }, "updateDeg");
  updateAngle(e, r, t, i) {
    for (; Math.abs(i - t) > e;) t < i ? (i -= 2 * e) : (i += 2 * e);
    this.updateStandard(r, t, i);
  }
}
