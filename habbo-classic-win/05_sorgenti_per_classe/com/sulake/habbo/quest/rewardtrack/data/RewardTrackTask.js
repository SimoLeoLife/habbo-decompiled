// Estratto da HabboAirLauncher.deobf.js, riga 266143.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/data/RewardTrackTask.as
// Nome offuscato: _i5b9b85ed2f4d9b

class {
  constructor(e, r) {
    this.var_292 = e;
    ((this._id = r.id),
      (this.var_3037 = r.actionType),
      (this.var_2471 = r.parameter),
      (this.var_1594 = r.progressCount),
      (this.var_3477 = r.premium),
      (this._levels = []));
    for (let t of r._r2d5eee2e2248ea) this._levels.push(new _i141c4e0d47145a(t));
  }
  static {
    n(this, "RewardTrackTask");
  }
  _id;
  var_3037;
  var_2471;
  var_1594;
  var_3477;
  _levels;
  get isComplete() {
    for (let e of this._levels) if (this.var_1594 < e.requiredCount) return !1;
    return !0;
  }
  get _r6be89bb89fe21b() {
    return this.var_1594 > 0;
  }
  get _r76ecf2833aa0e5() {
    for (let e = 0; e < this._levels.length; e++)
      if (this.var_1594 < this._levels[e].requiredCount) return e;
    return this._levels.length - 1;
  }
  get _rb7d6125d6db3f4() {
    let e = this._r76ecf2833aa0e5;
    if (e < 0 || e >= this._levels.length)
      throw new RangeError("Reward track task has no active level");
    return this._levels[e];
  }
  progressRatioFor(e) {
    return e.requiredCount <= 0 ? 1 : Math.max(0, Math.min(1, this.var_1594 / e.requiredCount));
  }
  get _r0b0accb7e3023d() {
    for (let e of this._levels) if (e.premium) return !0;
    return !1;
  }
  get track() {
    return this.var_292;
  }
  get id() {
    return this._id;
  }
  get actionType() {
    return this.var_3037;
  }
  get parameter() {
    return this.var_2471;
  }
  get progressCount() {
    return this.var_1594;
  }
  set progressCount(e) {
    this.var_1594 = e;
  }
  get premium() {
    return this.var_3477;
  }
  get levels() {
    return this._levels;
  }
}
