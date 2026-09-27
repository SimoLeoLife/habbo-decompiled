// Extracted from HabboAirLauncher.deobf.js, line 266604.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/prizes/RewardTrackPrizeLayout.as
// Obfuscated name: _i2cb96584c12179

class a {
  static {
    n(this, "RewardTrackPrizeLayout");
  }
  static PAGE_BOUNDARY_EPSILON = 1e-4;
  _visibleWidth = 0;
  _prizeWidth = 0;
  var_4009 = 0;
  var_4023 = NaN;
  var_5002 = NaN;
  var_2769 = 1;
  _distancePerPoint = 1;
  var_4108 = 1;
  var_4540 = 0;
  rebuild(e, r, t, i) {
    ((this._visibleWidth = r),
      (this._prizeWidth = t),
      (this.var_4009 = i),
      (this.var_4023 = this._prizeWidth / 2 + this.var_4009),
      (this.var_4540 = this.findMinRequiredPoints(e.prizes)));
    let s = this.findMinimumGap(e.prizes),
      o = this.findMaxRequiredPoints(e.prizes);
    (s <= 0 && (s = Math.max(1, o)),
      (this._distancePerPoint = (this._prizeWidth + this.var_4009) / s),
      this._distancePerPoint <= 0 && (this._distancePerPoint = 1),
      (this.var_2769 = this.calculatePagePointSpan(this._distancePerPoint, s)),
      (this._distancePerPoint = this.findMaxDistancePerPoint(this._distancePerPoint, this.var_2769)),
      (this.var_5002 = this.zeroOffsetFor(this._distancePerPoint)),
      (this.var_4108 = this.calculatePageCount(e.prizes)));
  }
  _r2152ec0ab1a1e2(e, r) {
    let t = Math.max(0, r * this.var_2769);
    return this.var_5002 + (e - t) * this._distancePerPoint;
  }
  _ref57e3f92d4bb7(e) {
    return Math.max(0, Math.min(this.var_4108 - 1, this._rcdbe79336cfcfd(e, this.var_2769)));
  }
  calculatePageCount(e) {
    let r = 0;
    for (let t of e) r = Math.max(r, this._rcdbe79336cfcfd(t.requiredPoints, this.var_2769));
    return Math.max(1, r + 1);
  }
  _rcdbe79336cfcfd(e, r) {
    return e <= 0 ? 0 : Math.max(0, Math.ceil((e - a.PAGE_BOUNDARY_EPSILON) / r) - 1);
  }
  zeroOffsetFor(e) {
    return Math.max(0, this.var_4023 - this.var_4540 * e);
  }
  _r4e9efa0e6b40b1(e) {
    return Math.max(1, this._visibleWidth - this.var_4023 - this.zeroOffsetFor(e));
  }
  calculatePagePointSpan(e, r) {
    let t = Math.max(1, Math.floor(this._r4e9efa0e6b40b1(e) / e / r));
    return Math.max(1, t * r);
  }
  findMaxDistancePerPoint(e, r) {
    let t = e,
      i = e;
    for (let s = 0; s < 32 && ((i *= 2), !!this._rffebaf7d25cfcb(i, r)); s++) t = i;
    for (let s = 0; s < 24; s++) {
      let o = (t + i) / 2;
      this._rffebaf7d25cfcb(o, r) ? (t = o) : (i = o);
    }
    return t;
  }
  _rffebaf7d25cfcb(e, r) {
    return r * e <= this._r4e9efa0e6b40b1(e) + a.PAGE_BOUNDARY_EPSILON;
  }
  findMinimumGap(e) {
    let r = this._r620a20ec70f46e(e, !1),
      t = this._r620a20ec70f46e(e, !0);
    return r <= 0 ? t : t <= 0 ? r : Math.min(r, t);
  }
  _r620a20ec70f46e(e, r) {
    let t = -1,
      i = 0;
    for (let s of e)
      if (s.premium === r) {
        if (t !== -1) {
          let o = s.requiredPoints - t;
          o > 0 && (i === 0 || o < i) && (i = o);
        }
        t = s.requiredPoints;
      }
    return i;
  }
  findMinRequiredPoints(e) {
    let r = -1;
    for (let t of e) (r === -1 || t.requiredPoints < r) && (r = t.requiredPoints);
    return Math.max(0, r);
  }
  findMaxRequiredPoints(e) {
    let r = 0;
    for (let t of e) r = Math.max(r, t.requiredPoints);
    return r;
  }
  get _r3afa55440b125a() {
    return this.var_4108;
  }
  get _rcffeab039376b8() {
    return this._distancePerPoint;
  }
}
