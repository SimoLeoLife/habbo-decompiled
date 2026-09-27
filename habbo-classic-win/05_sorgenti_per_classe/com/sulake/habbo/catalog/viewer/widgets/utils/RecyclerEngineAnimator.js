// Estratto da HabboAirLauncher.deobf.js, riga 194021.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/utils/RecyclerEngineAnimator.as
// Nome offuscato: _i12cfcfaa9f1e5b

class a {
  constructor(e, r, t) {
    this._arrow = e;
    this._onFinish = r;
    this._r1887bc363aa112 = t;
    ((this._raa5b577d85e756 = this._onFinish?.x ?? 0),
      (this._rc1e3eecd95c2e2 = this._onFinish?.y ?? 0),
      this.setRotation(0));
  }
  static {
    n(this, "RecyclerEngineAnimator");
  }
  static const_637 = -88;
  static MAX_ANGLE = 88;
  static const_1286 = 82;
  static const_907 = 68;
  static ANGLE_BUFFER = 5;
  static _rcf60c0fe2082f5 = 8e-5;
  static BASE_BIAS = 0.35;
  static FIRST_BIAS = 0.2;
  static const_1247 = 16;
  static RESET_TIME = 250;
  static SHAKE_TIMEOUT = 50;
  static SHAKE_PIXELS = 3;
  static MIN_TIME_ACTIVE = 3e3;
  static SHAKE_PIXELS_E = 24;
  static STEP_SIZE_E = 70;
  static _r58ec4e5a00a6b3 = 20;
  static TOTAL_DURATION_E = 5e3;
  static STEP_DURATION_MIN = 400;
  static STEP_DURATION_MAX = 200;
  static _rb2e74a9ba2be51 = 20;
  static STEP_SIZE_MAX = 55;
  _startTime = 0;
  _stepBeginTime = 0;
  var_1152 = 0;
  var_1423 = 0;
  _animationTime = 0;
  _rb3b60b2448a17e = 0;
  var_382 = null;
  var_1351 = !1;
  _raa5b577d85e756;
  _rc1e3eecd95c2e2;
  _easterEggMode = !1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  start(e = !1) {
    (this.stopTimer(),
      (this.var_1351 = !1),
      (this._easterEggMode = e),
      (this._startTime = Date.now()),
      this.setRotation(0),
      this.setShake(0, 0),
      this.nextStep(!1, !0),
      this.startTimer());
  }
  stop() {
    (this.stopTimer(), this.setShake(0, 0), (this.var_1351 = !1));
  }
  reset() {
    (this.stopTimer(),
      (this.var_1351 = !0),
      (this.var_1152 = this._arrow?.rotation ?? 0),
      this.setRotation(this.var_1152 % 360),
      (this.var_1423 = 0),
      (this._stepBeginTime = Date.now()),
      (this._animationTime = a.RESET_TIME),
      this.setShake(0, 0),
      this.startTimer());
  }
  isBusy() {
    return this.var_382 != null && !this.var_1351;
  }
  dispose() {
    this._disposed ||
      (this.stopTimer(),
      (this._arrow = null),
      (this._onFinish = null),
      (this._r1887bc363aa112 = null),
      (this._disposed = !0));
  }
  startTimer() {
    ((this.var_382 = new _i05394ecc0c0c4d(a.const_1247)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._re072be5b77c307),
      this.var_382.start());
  }
  stopTimer() {
    this.var_382 != null &&
      (this.var_382.stop(),
      this.var_382.removeEventListener(DeBouncer.addEventListener, this._re072be5b77c307),
      (this.var_382 = null));
  }
  setRotation(e) {
    this._arrow != null &&
      ((this._arrow.rotation = e), this._arrow.invalidate());
  }
  setShake(e, r) {
    this._onFinish != null &&
      ((this._onFinish.x = this._raa5b577d85e756 + e),
      (this._onFinish.y = this._rc1e3eecd95c2e2 + r));
  }
  nextStep(e = !1, r = !1) {
    if (
      ((this.var_1152 = this._arrow?.rotation ?? 0),
      (this._stepBeginTime = Date.now()),
      e)
    )
      this.var_1423 = a.MAX_ANGLE;
    else if (this._easterEggMode) this.var_1423 = this.var_1152 - a.STEP_SIZE_E;
    else {
      let t = Date.now() - this._startTime,
        i;
      if (this.var_1152 <= a.const_637 + a.ANGLE_BUFFER) i = !1;
      else if (this.var_1152 >= a.MAX_ANGLE - a.ANGLE_BUFFER) i = !0;
      else {
        let o = r ? a.FIRST_BIAS : a.BASE_BIAS + t * a._rcf60c0fe2082f5;
        i = Math.random() > o;
      }
      let s = (i ? -1 : 1) * this.rand(a._rb2e74a9ba2be51, a.STEP_SIZE_MAX);
      this.var_1423 = Math.max(
        a.const_637,
        Math.min(a.MAX_ANGLE, this.var_1152 + s),
      );
    }
    this._animationTime = this._easterEggMode
      ? a._r58ec4e5a00a6b3
      : this.rand(a.STEP_DURATION_MIN, a.STEP_DURATION_MAX);
  }
  _re072be5b77c307 = n((e) => {
    let r = Date.now(),
      t = r - this._stepBeginTime,
      i = Math.max(0, Math.min(1, t / this._animationTime)),
      s = (this.var_1423 - this.var_1152) * i + this.var_1152;
    if (
      (this.setRotation(s), this.isBusy() && r >= this._rb3b60b2448a17e + a.SHAKE_TIMEOUT)
    ) {
      this._rb3b60b2448a17e = r;
      let o = this._easterEggMode ? a.SHAKE_PIXELS_E : a.SHAKE_PIXELS;
      this.setShake(this.rand(-o, o), this.rand(-o, o));
    }
    if (!(t < this._animationTime)) {
      if (this.var_1351) {
        (this.stopTimer(), (this.var_1351 = !1));
        return;
      }
      if (
        (s >= a.const_1286 &&
          !this._easterEggMode &&
          r - this._startTime > a.MIN_TIME_ACTIVE) ||
        (this._easterEggMode && r - this._startTime > a.TOTAL_DURATION_E)
      ) {
        (this.stopTimer(), this.setShake(0, 0), this._r1887bc363aa112?.());
        return;
      }
      this.nextStep(
        s >= a.const_907 &&
          r - this._startTime > a.MIN_TIME_ACTIVE - 300 &&
          !this._easterEggMode,
      );
    }
  }, "_re072be5b77c307");
  rand(e, r) {
    return Math.floor(e + Math.random() * (r - e));
  }
}
