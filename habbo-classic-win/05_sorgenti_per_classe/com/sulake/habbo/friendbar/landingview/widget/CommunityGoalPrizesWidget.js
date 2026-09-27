// Estratto da HabboAirLauncher.deobf.js, riga 207175.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/CommunityGoalPrizesWidget.as
// Nome offuscato: _ib7f37ab205f09e

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "CommunityGoalPrizesWidget");
  }
  _container = null;
  _data = null;
  var_1129 = "";
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    ((this._landingView = null), (this._container = null), (this._data = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("achievement_competition_prizes")),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3726((e) => {
          this.onCommunityGoalProgress(e);
        }),
      ),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_1926((e) => {
          this._r6e2e75987c854e(e);
        }),
      ),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new _ic493e19be4b81c((e) => {
          this._r9b3a75bb1f2b44(e);
        }),
      ));
  }
  refresh() {
    this.refreshContent();
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  refreshContent() {
    if (this._container == null) return;
    if (this._data == null) {
      this._container.visible = !1;
      return;
    }
    ((this._container.visible = !0),
      this.setPrizeRankLimits(1),
      this.setPrizeRankLimits(2),
      this.setPrizeRankLimits(3),
      this._landingView?.localizationManager?._r43eae9731f5b27(
        this.getCompetitionSpecificKey("yourrankinfo"),
        "points",
        String(this._data._r3fb4d63ff5804f),
      ),
      (this._container.findChildByName("caption_txt").caption = this.getCompetitionSpecificText("caption")),
      (this._container.findChildByName("info_txt").caption = this.getCompetitionSpecificText("info")),
      (this._container.findChildByName("reward_name_txt").caption = this.getCompetitionSpecificText("rewardname")),
      (this._container.findChildByName("reward_info_txt").caption = this.getCompetitionSpecificText("rewardinfo")),
      (this._container.findChildByName("rank_1_txt").caption = this.getCompetitionSpecificText("rank1")),
      (this._container.findChildByName("rank_2_txt").caption = this.getCompetitionSpecificText("rank2")),
      (this._container.findChildByName("rank_3_txt").caption = this.getCompetitionSpecificText("rank3")),
      (this._container.findChildByName("user_rank_border").visible =
        !this._data._rd9ef39e02c0446 || this._data._re3de516f53acb5 > 0));
    let e = this._data._rd9ef39e02c0446
      ? "yourfinalrank"
      : this._data._re3de516f53acb5 > 0
        ? "yourrank"
        : "youarenotranked";
    (this._landingView?.localizationManager?._r43eae9731f5b27(
      this.getKey(e),
      "rank",
      String(this._data._re3de516f53acb5),
    ),
      (this._container.findChildByName("user_rank_txt").caption = this.getText(e)),
      (this._container.findChildByName("user_rank_info_txt").visible = !this._data._rd9ef39e02c0446),
      (this._container.findChildByName("user_rank_info_txt").caption = this.getCompetitionSpecificText(
        this._data._re3de516f53acb5 > 0 ? "yourrankinfo" : "youarenotrankedinfo",
      )));
    let r = this._container.findChildByName("reward_image");
    r != null && (r.assetUri = "${image.library.url}reception/" + this._data.goalCode + "Reward.png");
  }
  setPrizeRankLimits(e) {
    if (this._data == null || this._container == null) return;
    let r = 1;
    for (let o = 0; o < e; o++) r += this._rad752693de62b3(e - o);
    let t = 0;
    for (let o = 0; o < e; o++) t += this._rd81570942c4443(e - o);
    let i = r === t ? this.getKey("rank") : this.getKey("ranks"),
      s =
        this._landingView?.localizationManager?.getLocalizationWithParams(
          i,
          "",
          "start",
          String(r),
          "end",
          String(t),
        ) ?? "";
    this._container.findChildByName("rank_" + e + "_info_txt").caption = s;
  }
  _rad752693de62b3(e) {
    return this._data?._rd5bb6b002f32d2?.[e - 2] ?? 0;
  }
  _rd81570942c4443(e) {
    return this._data?._rd5bb6b002f32d2?.[e - 1] ?? 0;
  }
  onCommunityGoalProgress(e) {
    ((this._data = e.getParser()?.data ?? null), this.refreshContent());
  }
  getKey(e) {
    return "landing.view.competition.prizes." + e;
  }
  getCompetitionSpecificKey(e) {
    return this.getKey((this._data?.goalCode ?? "") + "." + e);
  }
  getCompetitionSpecificText(e) {
    return "${" + this.getCompetitionSpecificKey(e) + "}";
  }
  getText(e) {
    return "${" + this.getKey(e) + "}";
  }
  _r6e2e75987c854e(e) {
    ((this.var_1129 = e.getParser()?.figure ?? ""), this.refreshAvatarInfo());
  }
  _r9b3a75bb1f2b44(e) {
    e.id === -1 && ((this.var_1129 = e.figure), this.refreshAvatarInfo());
  }
  refreshAvatarInfo() {
    let r = this._container?.findChildByName("avatar_image")?.widget;
    r != null && (r.figure = this.var_1129);
  }
}
