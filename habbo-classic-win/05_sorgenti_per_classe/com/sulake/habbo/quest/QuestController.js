// Extracted from HabboAirLauncher.deobf.js, line 269801.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/QuestController.as
// Obfuscated name: _i1c4bc6d416373b

class {
  constructor(e, r = null) {
    this._questEngine = e;
    this._r064d851e9201c6 = r;
    ((this._questDetails = new Pge(this._questEngine)),
      (this.var_909 = new Tge(this._questEngine)),
      (this._r5154d144a3da95 = new kge(this._questEngine)),
      (this.var_1070 = new v5(this._questEngine)));
  }
  static {
    n(this, "QuestController");
  }
  var_1070;
  _r5154d144a3da95;
  var_909;
  _r969e117019b2f0 = new Map();
  _questDetails;
  _rdd12af87bae3e7() {
    if (this._questEngine?.isSeasonalCalendarEnabled() && this._r064d851e9201c6 != null) {
      (this._r064d851e9201c6._rdd12af87bae3e7(), this._questDetails.close());
      return;
    }
    this._questDetails._rdd12af87bae3e7();
  }
  _r33e727e2936109(e) {
    return this._r59879d3b699f8d(e, !1);
  }
  onQuest(e) {
    let r = this._r59879d3b699f8d(e._r808a32b2f4122c);
    r != null &&
      (r.onQuest(e),
      r._r808a32b2f4122c == null && this._r969e117019b2f0.delete(e._r808a32b2f4122c),
      this.var_909.onQuest(e),
      this._r5154d144a3da95.onQuest(e),
      this.var_1070.onQuest(e));
  }
  _r27f5f0ce8a8093(e, r) {
    (this._r59879d3b699f8d(e._r808a32b2f4122c)?._r27f5f0ce8a8093(e, r),
      this.var_909._r27f5f0ce8a8093(e),
      this._r5154d144a3da95._r27f5f0ce8a8093(e, r));
  }
  onQuestCancelled(e) {
    (this._r59879d3b699f8d(e, !1)?.onQuestCancelled(),
      this.var_909.onQuestCancelled(e),
      this._r5154d144a3da95.onQuestCancelled(),
      this.var_1070.onQuestCancelled());
  }
  onRoomEnter() {
    let e = this.getDefaultCampaign();
    e !== "" && this._r59879d3b699f8d(e)?.startDefaultCampaign(e);
  }
  onRoomExit() {
    (this._questDetails.onRoomExit(), this._r064d851e9201c6?.onRoomExit());
    for (let e of this._r969e117019b2f0.values()) e.onRoomExit();
    (this.var_909.onRoomExit(), this.var_1070.onRoomExit());
  }
  update(e) {
    this._r5154d144a3da95.update(e);
    for (let r of this._r969e117019b2f0.values()) r.update(e);
    (this.var_1070.update(e),
      this._questDetails.update(e),
      this.var_909.update(e),
      this._r064d851e9201c6?.update(e),
      this._rda51d9def10f81(!1));
  }
  dispose() {
    ((this._questEngine = null),
      this._questDetails.dispose(),
      this._rda51d9def10f81(!0),
      this._r969e117019b2f0.clear(),
      this.var_909.dispose(),
      this._r5154d144a3da95.dispose(),
      this.var_1070.dispose(),
      this._r064d851e9201c6?.dispose(),
      (this._r064d851e9201c6 = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  get _rddd2ff4cc28b1a() {
    return this._questDetails;
  }
  get _r2b4bfddbe77cb9() {
    return this.var_909;
  }
  get _rab30f8aab18f93() {
    return this._r064d851e9201c6;
  }
  onActivityPoints(e, r) {
    this._r064d851e9201c6?.onActivityPoints(e, r);
  }
  getDefaultCampaign() {
    return this._questEngine?.getProperty("questing.defaultCampaign") ?? "";
  }
  _r59879d3b699f8d(e, r = !0) {
    let t = this._r969e117019b2f0.get(e) ?? null;
    return (
      t == null &&
        r &&
        this._questEngine != null &&
        ((t = new Rge(this._questEngine)), this._r969e117019b2f0.set(e, t)),
      t
    );
  }
  _rda51d9def10f81(e) {
    let r = [];
    for (let [t, i] of this._r969e117019b2f0.entries()) (i._re4d2b54b2c521b || e) && (i.dispose(), r.push(t));
    for (let t of r) this._r969e117019b2f0.delete(t);
  }
}
