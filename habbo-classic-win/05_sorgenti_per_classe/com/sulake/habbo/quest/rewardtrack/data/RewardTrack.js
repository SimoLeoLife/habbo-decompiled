// Extracted from HabboAirLauncher.deobf.js, line 266283.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/data/RewardTrack.as
// Obfuscated name: _ide29040a1e3d12

class {
  static {
    n(this, "RewardTrack");
  }
  _id;
  _theme;
  _points;
  _hasPremiumConfig;
  var_5414;
  var_4453;
  var_5146;
  var_5034;
  var_3477;
  _complete;
  var_3165;
  _tasks;
  _prizes;
  constructor(e) {
    ((this._id = e.id),
      (this._theme = e.theme),
      (this._points = e.points),
      (this._hasPremiumConfig = e.hasPremiumConfig),
      (this.var_5414 = e.taskPointsBoost),
      (this.var_4453 = e.instantPoints),
      (this.var_5146 = e.costDiamonds),
      (this.var_5034 = e.costCredits),
      (this.var_3477 = e.premium),
      (this._complete = e.complete),
      (this.var_3165 = e.premiumComplete),
      (this._tasks = []));
    for (let r of e.tasks) this._tasks.push(new RewardTrackTask(this, r));
    this._prizes = [];
    for (let r of e.prizes) this._prizes.push(new RewardTrackPrize(r));
    this.refreshDerivedState();
  }
  updateProgress(e, r, t) {
    this._points = t;
    let i = this.getTaskById(e);
    return (i !== null && (i.progressCount = r), this.refreshDerivedState(), i);
  }
  markPrizeClaimed(e) {
    let r = this._rbb0f9325c9640f(e);
    return (r !== null && (r.claimed = !0), this.refreshDerivedState(), r);
  }
  markPremiumPurchased(e) {
    ((this.var_3477 = !0), (this._points = e), this.refreshDerivedState());
  }
  refreshDerivedState() {
    for (let t of this._prizes) t.refreshAvailability(this);
    let e = !0,
      r = !0;
    for (let t of this._prizes)
      (!t.premium && !t.claimed && (e = !1), t.premium && !t.claimed && (r = !1));
    ((this._complete = e), (this.var_3165 = !this._hasPremiumConfig || (e && r)));
  }
  getTaskById(e) {
    for (let r of this._tasks) if (r.id === e) return r;
    return null;
  }
  _rbb0f9325c9640f(e) {
    for (let r of this._prizes) if (r.id === e) return r;
    return null;
  }
  get _rf4f33a9062d24b() {
    let e = 0;
    for (let r of this._tasks) r.isComplete && e++;
    return e;
  }
  get completedTaskCount() {
    return this._tasks.length;
  }
  get _rbf161d5e951ce2() {
    let e = 0;
    for (let r of this._prizes) r.claimed && e++;
    return e;
  }
  get claimedPrizeCount() {
    return this._prizes.length;
  }
  get _r776e2254f1de68() {
    for (let e of this._prizes) if (e.premium) return !0;
    return !1;
  }
  get _rb0aa96ab9d9788() {
    for (let e of this._tasks) if (e.premium) return !0;
    return !1;
  }
  get _r0b0accb7e3023d() {
    for (let e of this._tasks) if (e._r0b0accb7e3023d) return !0;
    return !1;
  }
  get id() {
    return this._id;
  }
  get theme() {
    return this._theme;
  }
  get points() {
    return this._points;
  }
  get hasPremiumConfig() {
    return this._hasPremiumConfig;
  }
  get taskPointsBoost() {
    return this.var_5414;
  }
  get instantPoints() {
    return this.var_4453;
  }
  get costDiamonds() {
    return this.var_5146;
  }
  get costCredits() {
    return this.var_5034;
  }
  get premium() {
    return this.var_3477;
  }
  get complete() {
    return this._complete;
  }
  get premiumComplete() {
    return this.var_3165;
  }
  get tasks() {
    return this._tasks;
  }
  get prizes() {
    return this._prizes;
  }
}
