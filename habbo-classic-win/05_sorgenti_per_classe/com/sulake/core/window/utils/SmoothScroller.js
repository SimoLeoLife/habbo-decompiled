// Extracted from HabboAirLauncher.deobf.js, line 138404.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/SmoothScroller.as
// Obfuscated name: _i1635eb591ccb31

class a {
  static {
    n(this, "SmoothScroller");
  }
  static _r268d120a4a4717 = 25;
  static _r83d942592babec = 200;
  static INVERSE_DELTA_RAMP_START_PX = 120;
  static INVERSE_DELTA_RAMP_END_PX = 480;
  static INVERSE_DELTA_MIN_DURATION_SCALE = 0.5;
  static VELOCITY_BOUND_FUDGE = 2.5;
  static EPSILON = 0.01;
  static CURVE_X1 = 0.42;
  static CURVE_X2 = 0.58;
  static CURVE_Y2 = 1;
  static MAX_SLOPE = 1e3;
  static NEWTON_ITERATIONS = 4;
  static BINARY_SEARCH_ITERATIONS = 8;
  var_3245;
  var_3757;
  var_3244;
  var_2028;
  var_4288 = a._r268d120a4a4717;
  _rfd7348c4abceda = a._r83d942592babec;
  _r81087d13269b6f = a._r83d942592babec * a.INVERSE_DELTA_MIN_DURATION_SCALE;
  var_3650 = !0;
  var_4466 = !0;
  _r0239e60d39b45b;
  _r06cc16a865bd86 = 1e3 / 60;
  var_390 = 0;
  var_206 = 0;
  var_330 = 0;
  var_354 = 0;
  _curveControlY1 = 0;
  _r50327d02f32b1a = n((e) => {
    this._rc2d04b355171a5(e);
  }, "_r50327d02f32b1a");
  constructor(e, r, t, i = a._r83d942592babec, s = 60, o = !0, d = null, c = Number.NaN, f = !0) {
    (Number.isNaN(c) || (this.var_4288 = c),
      (this.duration = i),
      (this.var_3650 = o),
      (this.var_4466 = f),
      (this.var_2028 = d),
      (this.var_3245 = e),
      (this.var_3757 = r),
      (this.var_3244 = t));
    let l = 1e3 / s;
    ((this._r06cc16a865bd86 = l),
      (this._r0239e60d39b45b = new UnkEventDispatcherWrapperSubclass_05394e(l)),
      this._r0239e60d39b45b.addEventListener(DeBouncer.addEventListener, this._r50327d02f32b1a));
  }
  dispose() {
    (this.stop(),
      this._r0239e60d39b45b != null &&
        (this._r0239e60d39b45b.removeEventListener(DeBouncer.addEventListener, this._r50327d02f32b1a),
        (this._r0239e60d39b45b = null)),
      (this.var_3245 = null),
      (this.var_3757 = null),
      (this.var_3244 = null),
      (this.var_2028 = null));
  }
  get duration() {
    return this._rfd7348c4abceda;
  }
  set duration(e) {
    ((!Number.isFinite(e) || e <= 0) && (e = a._r83d942592babec),
      (this._rfd7348c4abceda = e),
      (this._r81087d13269b6f = e * a.INVERSE_DELTA_MIN_DURATION_SCALE));
  }
  get _r1bd7920e521eab() {
    return this._r0239e60d39b45b != null && this._r0239e60d39b45b.running;
  }
  _r4b59d5020c3c2b(e) {
    !this._r1bd7920e521eab ||
      !Number.isFinite(e) ||
      e === 0 ||
      ((this.var_390 = this.clampPosition(this.var_390 + e)),
      (this.var_206 = this.clampPosition(this.var_206 + e)));
  }
  WindowMouseEvent(e) {
    return this._rf4d27fea633d03(e);
  }
  _rf4d27fea633d03(e) {
    if (!Number.isFinite(e) || e === 0) return !1;
    let r = this._rda90ed083315ef();
    if (this.var_3650 && (!Number.isFinite(r) || r <= 0)) return (this.stop(), !1);
    let t = this._rfe2ba29215820f(e, r);
    if (!Number.isFinite(t) || t === 0) return !1;
    let i = _ia411d8d8194a3a(),
      s = this.getPosition(),
      o = this.clampPosition((this._r1bd7920e521eab ? this.var_206 : s) + t);
    return Math.abs(o - s) < a.EPSILON &&
      (!this._r1bd7920e521eab || Math.abs(o - this.var_206) < a.EPSILON)
      ? o !== s
        ? (this.setPosition(o), this.stop(), !0)
        : (this.stop(), !1)
      : (this._r1bd7920e521eab ? this._rc9427286ed87cc(i, o) : this.startAnimation(i, s, o),
        this.var_354 <= this.var_330
          ? (this.complete(), !1)
          : (this._r0239e60d39b45b?.reset(),
            this._r0239e60d39b45b?.start(),
            this._r653cd34f611746(i + this._r06cc16a865bd86),
            !0));
  }
  stop() {
    this.stopInternal(!1);
  }
  complete() {
    (this.var_354 > this.var_330 &&
      this.setPosition(this.clampPosition(this.var_206)),
      this.stopInternal(!0));
  }
  stopInternal(e) {
    if (this._r0239e60d39b45b == null) return;
    let r = this._r0239e60d39b45b.running;
    (this._r0239e60d39b45b.reset(),
      (this.var_330 = 0),
      (this.var_354 = 0),
      (this.var_390 = 0),
      (this.var_206 = 0),
      (this._curveControlY1 = 0),
      e && r && this.var_2028?.());
  }
  startAnimation(e, r, t) {
    ((this.var_390 = this.clampPosition(r)),
      (this.var_206 = this.clampPosition(t)),
      (this._curveControlY1 = 0),
      (this.var_330 = e),
      (this.var_354 = e + this.getInverseDeltaDurationMs(this.var_206 - this.var_390)));
  }
  _rc9427286ed87cc(e, r) {
    if (((r = this.clampPosition(r)), Math.abs(this.var_206 - r) < a.EPSILON)) {
      this.var_206 = r;
      return;
    }
    let t = this._r9b844b760648c3(e),
      i = r - t;
    if (Math.abs(i) < a.EPSILON) {
      ((this.var_390 = t),
        (this.var_206 = r),
        (this.var_330 = e),
        (this.var_354 = e));
      return;
    }
    if (this.var_354 - this.var_330 <= a.EPSILON) {
      this.startAnimation(e, t, r);
      return;
    }
    let s = this._r9156817b8cd9a3(e),
      o = this._rc821df7c95da8f(i, s);
    if (!Number.isFinite(o) || o < a.EPSILON) {
      ((this.var_390 = t),
        (this.var_206 = r),
        (this.var_330 = e),
        (this.var_354 = e));
      return;
    }
    let d = s * (o / i);
    ((d = a.clamp(d, -a.MAX_SLOPE, a.MAX_SLOPE)),
      (this._curveControlY1 = d * a.CURVE_X1),
      (this.var_390 = t),
      (this.var_206 = r),
      (this.var_330 = e),
      (this.var_354 = e + o));
  }
  _rc2d04b355171a5(e) {
    this._r653cd34f611746(_ia411d8d8194a3a());
  }
  _r653cd34f611746(e) {
    (this.setPosition(this._r9b844b760648c3(e)),
      (e >= this.var_354 || this.var_354 - this.var_330 <= a.EPSILON) &&
        this.complete());
  }
  _rfe2ba29215820f(e, r) {
    return this.var_3650 ? (-e * this.var_4288) / r : -e * this.var_4288;
  }
  getInverseDeltaDurationMs(e) {
    let r = Math.abs(e),
      t = this._rfd7348c4abceda;
    return (
      r > a.INVERSE_DELTA_RAMP_START_PX &&
        (t +=
          ((r - a.INVERSE_DELTA_RAMP_START_PX) * (this._r81087d13269b6f - this._rfd7348c4abceda)) /
          (a.INVERSE_DELTA_RAMP_END_PX - a.INVERSE_DELTA_RAMP_START_PX)),
      a.clamp(t, this._r81087d13269b6f, this._rfd7348c4abceda)
    );
  }
  _rc821df7c95da8f(e, r) {
    let t = this.getInverseDeltaDurationMs(e),
      i = this._r0c8da1abb778c7(e, r);
    return Math.min(t, i);
  }
  _r0c8da1abb778c7(e, r) {
    if (Math.abs(e) < a.EPSILON) return 0;
    if (Math.abs(r) < a.EPSILON) return Number.MAX_VALUE;
    let t = (e / r) * a.VELOCITY_BOUND_FUDGE;
    return t < 0 ? Number.MAX_VALUE : t;
  }
  _r9b844b760648c3(e) {
    let r = this.var_354 - this.var_330;
    if (r <= a.EPSILON || e >= this.var_354) return this.var_206;
    if (e <= this.var_330) return this.var_390;
    let t = (e - this.var_330) / r,
      i = a._r3588e763184dc2(
        t,
        a.CURVE_X1,
        this._curveControlY1,
        a.CURVE_X2,
        a.CURVE_Y2,
      );
    return this.var_390 + (this.var_206 - this.var_390) * i;
  }
  _r9156817b8cd9a3(e) {
    let r = this.var_354 - this.var_330;
    if (r <= a.EPSILON) return 0;
    let t = a.clamp((e - this.var_330) / r, 0, 1);
    return (
      a._r8a17b4f3c98d29(
        t,
        a.CURVE_X1,
        this._curveControlY1,
        a.CURVE_X2,
        a.CURVE_Y2,
      ) *
      ((this.var_206 - this.var_390) / r)
    );
  }
  getPosition() {
    return this.var_3245?.() ?? 0;
  }
  setPosition(e) {
    this.var_3757?.(e);
  }
  _rda90ed083315ef() {
    return this.var_3244?.() ?? Number.NaN;
  }
  clampPosition(e) {
    if (!this.var_4466 || !Number.isFinite(e)) return e;
    let r = this._r13aa390966fe86();
    return Number.isFinite(r) ? a.clamp(e, 0, r) : e;
  }
  _r13aa390966fe86() {
    if (this.var_3650) return 1;
    let e = this._rda90ed083315ef();
    return !Number.isFinite(e) || e < 0 ? Number.NaN : e;
  }
  static _r3588e763184dc2(e, r, t, i, s) {
    e = a.clamp(e, 0, 1);
    let o = a._re8a5dc98c345f2(e, r, i);
    return a._r7c0cd6ce70a445(o, t, s);
  }
  static _r8a17b4f3c98d29(e, r, t, i, s) {
    e = a.clamp(e, 0, 1);
    let o = a._re8a5dc98c345f2(e, r, i),
      d = a._ra9b9e8528393d8(o, r, i);
    return Math.abs(d) < a.EPSILON ? 0 : a._ra9b9e8528393d8(o, t, s) / d;
  }
  static _re8a5dc98c345f2(e, r, t) {
    let i = e;
    for (let d = 0; d < a.NEWTON_ITERATIONS; d++) {
      let c = a._r7c0cd6ce70a445(i, r, t) - e;
      if (Math.abs(c) < a.EPSILON) return i;
      let f = a._ra9b9e8528393d8(i, r, t);
      if (Math.abs(f) < a.EPSILON) break;
      i -= c / f;
    }
    let s = 0,
      o = 1;
    i = e;
    for (let d = 0; d < a.BINARY_SEARCH_ITERATIONS; d++) {
      let c = a._r7c0cd6ce70a445(i, r, t);
      if (Math.abs(c - e) < a.EPSILON) return i;
      (c > e ? (o = i) : (s = i), (i = (o + s) * 0.5));
    }
    return i;
  }
  static _r7c0cd6ce70a445(e, r, t) {
    return ((a._rafa68d54c9e161(r, t) * e + a._r23091bcc784cd0(r, t)) * e + a.getCurveC(r)) * e;
  }
  static _ra9b9e8528393d8(e, r, t) {
    return 3 * a._rafa68d54c9e161(r, t) * e * e + 2 * a._r23091bcc784cd0(r, t) * e + a.getCurveC(r);
  }
  static _rafa68d54c9e161(e, r) {
    return 1 - 3 * r + 3 * e;
  }
  static _r23091bcc784cd0(e, r) {
    return 3 * r - 6 * e;
  }
  static getCurveC(e) {
    return 3 * e;
  }
  static clamp(e, r, t) {
    return e < r ? r : e > t ? t : e;
  }
}
