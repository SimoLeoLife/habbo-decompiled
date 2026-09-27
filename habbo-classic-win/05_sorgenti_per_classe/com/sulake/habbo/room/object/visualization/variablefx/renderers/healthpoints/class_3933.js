// Estratto da HabboAirLauncher.deobf.js, riga 288150.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/healthpoints/class_3933.as
// Nome offuscato: _i77ab3f1e18f22d

class a {
  static {
    n(this, "class_3933");
  }
  static const_296 = 1e-4;
  static SINGLE_HEART_ANIMATION_MS = 200;
  static MIN_HEART_FADE_DURATION_MS = 100;
  static MAX_ANIMATION_DURATION_MS = 1400;
  _r5c5c82d7fa0915 = [];
  _durationMs = 0;
  _r5da9ac477c81b4 = 0;
  _opacities = [];
  _rb2b620e377200c = 0;
  _r0e80168405237c = [];
  var_2562 = 0;
  var_203 = 0;
  resolveNextOpacity = [];
  get visibleHeartCount() {
    let e = 0;
    for (let r = 0; r < this._opacities.length; r++)
      this._opacities[r] > a.const_296 && (e = Math.max(e, r + 1));
    return e;
  }
  _rf8461f9e828fee(e) {
    return e >= 0 && e < this._opacities.length ? this._opacities[e] : 0;
  }
  var_1190(e, r) {
    ((this._durationMs = this._r5da9ac477c81b4 = this._rb2b620e377200c = 0),
      (this.var_2562 = r),
      (this.var_203 = e),
      (this._opacities = a._rfb621d241982c6(e, 1)),
      (this._r0e80168405237c = this._opacities.concat()),
      (this.resolveNextOpacity = this._opacities.concat()),
      (this._r5c5c82d7fa0915 = []));
  }
  setTarget(e, r) {
    this.update(r);
    let t = Math.max(this._opacities.length, e),
      i = e >= this._r2e153107163270(t),
      s = 0;
    ((this.var_2562 = r),
      (this.var_203 = e),
      (this._r0e80168405237c = new Array(t)),
      (this.resolveNextOpacity = new Array(t)),
      (this._r5c5c82d7fa0915 = []));
    for (let o = 0; o < t; o++) {
      let d = o < this._opacities.length ? this._opacities[o] : 0,
        c = o < e ? 1 : 0,
        f = Math.abs(c - d);
      ((this._r0e80168405237c[o] = d),
        (this.resolveNextOpacity[o] = c),
        (s += f),
        f > a.const_296 && this._r5c5c82d7fa0915.push(o));
    }
    if (
      (this._r5c5c82d7fa0915.sort(i ? a._ra69d0068cfbb29 : a._r307ce492e9b97a),
      (this._durationMs = this._rd89cfc7f67f0b9(s)),
      this._durationMs <= 0 || this._r5c5c82d7fa0915.length === 0)
    ) {
      this._rd427939477f04e();
      return;
    }
    ((this._r5da9ac477c81b4 = this._rdcb446da66edea(s)),
      (this._rb2b620e377200c =
        this._r5c5c82d7fa0915.length > 1
          ? (this._durationMs - this._r5da9ac477c81b4) / (this._r5c5c82d7fa0915.length - 1)
          : 0));
  }
  needsUpdate(e, r) {
    return this._r5c5c82d7fa0915.length > 0;
  }
  update(e) {
    if (this._durationMs <= 0 || this._r5c5c82d7fa0915.length === 0) return !1;
    let r = Math.max(0, e - this.var_2562);
    if (r >= this._durationMs) return this._rd427939477f04e();
    let t = !1;
    for (let i = 0; i < this.resolveNextOpacity.length; i++) {
      let s = this.Number(i, r);
      s !== this._opacities[i] && ((this._opacities[i] = s), (t = !0));
    }
    return (this.trimTrailingInvisibleHearts(), t);
  }
  _rd427939477f04e() {
    let e = a._rfb621d241982c6(this.var_203, 1),
      r = this._durationMs !== 0 || !this._r056b4b045d5837(this._opacities, e);
    return (
      (this._opacities = e),
      (this._r0e80168405237c = e.concat()),
      (this.resolveNextOpacity = e.concat()),
      (this._r5c5c82d7fa0915 = []),
      (this._durationMs = this._r5da9ac477c81b4 = this._rb2b620e377200c = 0),
      r
    );
  }
  _r2e153107163270(e) {
    let r = 0;
    for (let t = 0; t < e; t++) r += t < this._opacities.length ? this._opacities[t] : 0;
    return r;
  }
  _rd89cfc7f67f0b9(e) {
    if (e <= a.const_296) return 0;
    let r = (a.MAX_ANIMATION_DURATION_MS - a.SINGLE_HEART_ANIMATION_MS) / a.MAX_ANIMATION_DURATION_MS;
    return a.MAX_ANIMATION_DURATION_MS * (1 - Math.pow(r, e));
  }
  _rdcb446da66edea(e) {
    return Math.min(
      this._durationMs,
      Math.max(a.MIN_HEART_FADE_DURATION_MS, Math.round((this._durationMs / e) * 1.5)),
    );
  }
  Number(e, r) {
    let t = this._r5c5c82d7fa0915.indexOf(e);
    if (t === -1) return e < this.resolveNextOpacity.length ? this.resolveNextOpacity[e] : 0;
    let i = Math.max(0, Math.min(1, (r - t * this._rb2b620e377200c) / this._r5da9ac477c81b4)),
      s = e < this._r0e80168405237c.length ? this._r0e80168405237c[e] : 0,
      o = e < this.resolveNextOpacity.length ? this.resolveNextOpacity[e] : 0;
    return s + (o - s) * i;
  }
  trimTrailingInvisibleHearts() {
    for (
      ;
      this._opacities.length > this.var_203 &&
      this._opacities[this._opacities.length - 1] <= a.const_296;
    )
      this._opacities.pop();
  }
  _r056b4b045d5837(e, r) {
    return e.length === r.length && e.every((t, i) => Math.abs(t - r[i]) <= a.const_296);
  }
  static _rfb621d241982c6(e, r) {
    return new Array(Math.max(0, e)).fill(r);
  }
  static _ra69d0068cfbb29(e, r) {
    return e - r;
  }
  static _r307ce492e9b97a(e, r) {
    return r - e;
  }
}
