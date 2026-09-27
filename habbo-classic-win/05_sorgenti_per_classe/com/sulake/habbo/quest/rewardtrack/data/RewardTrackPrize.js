// Extracted from HabboAirLauncher.deobf.js, line 266213.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/data/RewardTrackPrize.as
// Obfuscated name: _ib305f5d6cfaf51

class {
  static {
    n(this, "RewardTrackPrize");
  }
  _id;
  var_2352;
  var_3967;
  var_5045;
  _extraParams;
  _rewardAmount;
  var_3477;
  var_2141;
  var_2755;
  constructor(e) {
    ((this._id = e.id),
      (this.var_2352 = e.requiredPoints),
      (this.var_3967 = e.productItemTypeId),
      (this.var_5045 = e._r6e18946929c423),
      (this._extraParams = e._r692b2682fdaa0e),
      (this._rewardAmount = e.rewardAmount),
      (this.var_3477 = e.premium),
      (this.var_2141 = e.available),
      (this.var_2755 = e.claimed));
  }
  _r3aa162c43def03(e) {
    return this.var_3477 && !e.premium;
  }
  _rf5dc3b59920e24(e) {
    return !this._r3aa162c43def03(e) && this._rc9b659c7203ef1(e);
  }
  _rc9b659c7203ef1(e) {
    return e.points >= this.var_2352;
  }
  _r4cb1003f91383f(e) {
    return this._rf5dc3b59920e24(e) && !this.var_2755;
  }
  refreshAvailability(e) {
    this.var_2141 = this._rf5dc3b59920e24(e);
  }
  get id() {
    return this._id;
  }
  get requiredPoints() {
    return this.var_2352;
  }
  get productItemTypeId() {
    return this.var_3967;
  }
  get _r6e18946929c423() {
    return this.var_5045;
  }
  get _r692b2682fdaa0e() {
    return this._extraParams;
  }
  get rewardAmount() {
    return this._rewardAmount;
  }
  get premium() {
    return this.var_3477;
  }
  get available() {
    return this.var_2141;
  }
  get claimed() {
    return this.var_2755;
  }
  set claimed(e) {
    this.var_2755 = e;
  }
}
