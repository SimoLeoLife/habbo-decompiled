// Extracted from HabboAirLauncher.deobf.js, line 266414.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/header/RewardTrackHeaderView.as
// Obfuscated name: _i9e153638158a14

class {
  constructor(e, r, t) {
    this.var_63 = e;
    this._window = r;
    this.var_292 = t;
    this.initialize();
  }
  static {
    n(this, "RewardTrackHeaderView");
  }
  _disposed = !1;
  initialize() {
    (this._r9800e65d4a08d9(),
      (this.trackTitleText.text = this.localize(
        "reward_track." + this.var_292.id + ".name",
      )),
      (this.trackDescText.text = this.localize(
        "reward_track." + this.var_292.id + ".desc",
      )),
      (this.trackInstructionsText.text = this.localize(
        "reward_track." + this.var_292.id + ".info",
      )),
      this.initializeStaffActions(),
      this.refresh());
  }
  initializeStaffActions() {
    ((this.trackTitleRegion._r824ae5dcbb4686 = !this.var_63._ra5fbf8bddad7bd),
      this.var_63._ra5fbf8bddad7bd &&
        this.trackTitleRegion.addEventListener(u.CLICK, this.onTrackTitleClicked));
  }
  refresh() {
    (this.refreshPoints(), this.refreshRewardsCollected());
  }
  _r9800e65d4a08d9() {
    this.ownAvatar.figure = this.var_63.questEngine.sessionDataManager.figure;
  }
  refreshPoints() {
    this.pointsTotalCollectedText.text = String(this.var_292.points);
  }
  refreshRewardsCollected() {
    this.rewardsCollectedText.text = this.var_63.localizationManager.getLocalizationWithParams(
      "reward_track.profile.rewards_collected",
      "",
      "progress",
      String(this.var_292._rbf161d5e951ce2),
      "total",
      String(this.var_292.claimedPrizeCount),
    );
  }
  localize(e) {
    return this.var_63.localizationManager.getLocalization(e, e);
  }
  onTrackTitleClicked = n(() => {
    this.var_63.copyTrackId(this.var_292.id);
  }, "onTrackTitleClicked");
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.trackTitleRegion.removeEventListener(u.CLICK, this.onTrackTitleClicked),
      (this.var_63 = null),
      (this._window = null),
      (this.var_292 = null));
  }
  get disposed() {
    return this._disposed;
  }
  get ownAvatar() {
    return this.ownAvatarWidget.widget;
  }
  get ownAvatarWidget() {
    return this._window.findChildByName("own_avatar");
  }
  get trackTitleText() {
    return this._window.findChildByName("track_title_txt");
  }
  get trackTitleRegion() {
    return this._window.findChildByName("track_title_region");
  }
  get trackDescText() {
    return this._window.findChildByName("track_desc_txt");
  }
  get trackInstructionsText() {
    return this._window.findChildByName("track_instructions_txt");
  }
  get pointsTotalCollectedText() {
    return this._window.findChildByName("points_total_collected_txt");
  }
  get rewardsCollectedText() {
    return this._window.findChildByName("rewards_collected_txt");
  }
}
