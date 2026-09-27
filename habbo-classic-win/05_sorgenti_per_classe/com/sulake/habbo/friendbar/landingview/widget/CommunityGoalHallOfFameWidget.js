// Extracted from HabboAirLauncher.deobf.js, line 207096.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/CommunityGoalHallOfFameWidget.as
// Obfuscated name: _i110317aabcb052

class extends UserListWidget {
  static {
    n(this, "CommunityGoalHallOfFameWidget");
  }
  _data = null;
  _schedulingStr = "";
  initialize() {
    (super.initialize(),
      (this._schedulingStr = this.landingView.getProperty("landing.view.dynamic.slot.6.conf")));
  }
  refresh() {
    this.landingView.send(new class_2726(this._schedulingStr));
  }
  registerMessageListeners() {
    (this.landingView._rf3db13932bfb60?._r2e106e2349a0b6(
      new class_2480((e) => {
        this.onCommunityGoalHallOfFame(e);
      }),
    ),
      this.landingView._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3464((e) => {
          this.onTimingCode(e);
        }),
      ));
  }
  get users() {
    return this._data?.hof ?? null;
  }
  refreshPopup(e, r) {
    let t = e;
    ((r.findChildByName("user_name_txt").caption = t.userName),
      this.landingView.localizationManager?._r43eae9731f5b27(
        "landing.view.competition.hof.points",
        "points",
        String(t._r901265a6ad395e),
      ),
      (r.findChildByName("score_txt").caption = this.getText("landing.view.competition.hof.points")),
      (r.findChildByName("rank_desc_txt").caption = this.getText(
        "landing.view.competition.hof." + this._data?.goalCode + ".rankdesc.leader",
      )));
  }
  getPopupXml() {
    return "competition_user_popup";
  }
  hasExtraLink() {
    return this.landingView.getBoolean("landing.view.communitygoalhof.hasroomlink");
  }
  _r5d4733d09209ab(e) {
    this._data != null && this.landingView.send(new class_3211(this._data.goalCode, e.userId));
  }
  onCommunityGoalHallOfFame(e) {
    ((this._data = e.getParser()?.data ?? null), this.refreshContent());
  }
  onTimingCode(e) {
    let r = e.getParser(),
      t = r?.code ?? "";
    r?.schedulingStr === this._schedulingStr &&
      t !== "" &&
      !this.disposed &&
      (this.loadConfigurationOverrides(t), this.landingView.send(new class_3315(t)));
  }
  loadConfigurationOverrides(e) {
    let r = "landing.view." + e + ".avatarlist.yoffsets.array";
    this.landingView.propertyExists(r) &&
      (this._rda5e8d281a649a = this.landingView
        .getProperty(r)
        .split(",")
        .map((s) => Number.parseInt(s)));
    let t = "landing.view." + e + ".avatarlist.widths.array";
    this.landingView.propertyExists(t) &&
      (this._r18fe56dfa6de93 = this.landingView
        .getProperty(t)
        .split(",")
        .map((s) => Number.parseInt(s)));
    let i = "landing.view." + e + ".avatarlist.startoffset";
    this.landingView.propertyExists(i) &&
      (this.startOffset = Number.parseInt(this.landingView.getProperty(i)));
  }
}
