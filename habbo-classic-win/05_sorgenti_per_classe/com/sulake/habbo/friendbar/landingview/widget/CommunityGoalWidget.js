// Extracted from HabboAirLauncher.deobf.js, line 207310.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/CommunityGoalWidget.as
// Obfuscated name: _ia49a1510fd5b49

class a {
  constructor(e, r = !1) {
    this._landingView = e;
    this.var_2733 = r;
  }
  static {
    n(this, "CommunityGoalWidget");
  }
  static CHALLENGE_LEVEL_NEEDLE_BASE_FRAMES = [0, 8, 16, 23];
  static METER_INITIAL_DELAY_MS = 1500;
  static METER_BUILDUP_TIME_MS = 1e3;
  var_149 = null;
  _r81f40b1ad419c6 = null;
  var_5355 = null;
  _rd984e1981f7a16 = !1;
  _r3b532c1be560d9 = 0;
  _buildupProgress = 0;
  var_217 = !1;
  _isInteractive = !0;
  get container() {
    return this.var_149;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    (this._landingView?.removeUpdateReceiver(this),
      (this._landingView = null),
      (this.var_149 = null),
      (this._r81f40b1ad419c6 = null),
      (this.var_5355 = null));
  }
  initialize() {
    if (
      (this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3726((e) => {
          this.onCommunityGoalProgress(e);
        }),
      ),
      (this.var_149 = this._landingView?.getXmlWindow(
        this.var_2733 ? "community_goal_voting" : "community_goal",
      )),
      (this.var_5355 = this.var_149?.findChildByName("meter_needle")),
      !this.var_2733)
    ) {
      let e = this.var_149?.findChildByName("community_catalog_button");
      ((this._isInteractive = this._landingView?.getBoolean("landing.view.community.interactive") ?? !0),
        e != null && ((e.visible = this._isInteractive), (e.procedure = this._r0a1be162cc32e1)));
    }
    this.var_149 != null &&
      HabboLandingView.positionAfterAndStretch(this.var_149, "community_title", "hdr_line");
  }
  refresh() {
    (this.requestCommunityGoalProgress(), this.refreshContent());
  }
  update(e) {
    ((this._r3b532c1be560d9 += e),
      this._r3b532c1be560d9 > a.METER_INITIAL_DELAY_MS &&
        ((this._buildupProgress += e / a.METER_BUILDUP_TIME_MS),
        this._buildupProgress > 1 &&
          ((this._buildupProgress = 1), this._landingView?.removeUpdateReceiver(this)),
        this.updateMeter(Math.floor(this.getCurrentNeedleFrame() * this._buildupProgress))));
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this.var_149, e);
  }
  get communityProgress() {
    return this._r81f40b1ad419c6;
  }
  getCurrentNeedleFrame() {
    if (this._r81f40b1ad419c6 == null) return 0;
    let e = a.CHALLENGE_LEVEL_NEEDLE_BASE_FRAMES;
    if (this._r81f40b1ad419c6._r344df3534d9e24 >= e.length - 1) return e[e.length - 1] ?? 0;
    let r = this._r81f40b1ad419c6._r344df3534d9e24,
      t = e[r] ?? 0,
      s = (e[r + 1] ?? t) - t;
    return t + Math.floor((this._r81f40b1ad419c6.percentCompletionTowardsNextLevel * (s + 0.001)) / 100);
  }
  updateMeter(e, r = !0) {
    if (this.var_149 != null) {
      for (let t = 1; t < a.CHALLENGE_LEVEL_NEEDLE_BASE_FRAMES.length; t++) {
        let i = r && e >= (a.CHALLENGE_LEVEL_NEEDLE_BASE_FRAMES[t] ?? 0);
        ((this.var_149.findChildByName("meter_level_" + t).visible = i),
          (this.var_149.findChildByName("meter_level_" + t + "_icon").visible = i),
          (this.var_149.findChildByName("meter_level_" + t + "_icon_locked").visible = !i));
      }
      this.var_5355 != null &&
        (this.var_5355.assetUri = "landing_view_needle_meter_needle" + e);
    }
  }
  setCampaignLocalization(e, r) {
    let t = this.var_149?.findChildByName(e);
    t != null &&
      this._r81f40b1ad419c6 != null &&
      (t.caption = "${" + r + "." + this._r81f40b1ad419c6.goalCode + "}");
  }
  campaignizeMeterElementAssetUri(e) {
    let r = e;
    if (r == null || this._r81f40b1ad419c6 == null) return;
    let t = r.assetUri.indexOf(".png");
    t >= 0 &&
      (r.assetUri = r.assetUri.substring(0, t) + "_" + this._r81f40b1ad419c6.goalCode + ".png");
  }
  initializeLocalizations() {
    if (!(this._r81f40b1ad419c6?.goalCode == null || this.var_149 == null)) {
      for (let e = 0; e < a.CHALLENGE_LEVEL_NEEDLE_BASE_FRAMES.length; e++)
        (this.campaignizeMeterElementAssetUri(this.var_149.findChildByName("meter_level_" + e)),
          e > 0 &&
            (this.campaignizeMeterElementAssetUri(this.var_149.findChildByName("meter_level_" + e + "_icon")),
            this.campaignizeMeterElementAssetUri(
              this.var_149.findChildByName("meter_level_" + e + "_icon_locked"),
            )));
      (this.setCampaignLocalization("community_title", "landing.view.community.headline"),
        this.setCampaignLocalization("goal_caption", "landing.view.community.caption"),
        this.setCampaignLocalization("goal_info", "landing.view.community.info"),
        this.setCampaignLocalization("community_catalog_button", "landing.view.community_catalog_button.text"),
        (this.var_217 = !0));
    }
  }
  refreshContent() {
    if (this.var_149 == null) return;
    if (this._r81f40b1ad419c6 == null) {
      this.var_149.visible = !1;
      return;
    }
    this.var_217 || this.initializeLocalizations();
    for (let r = 1; r < a.CHALLENGE_LEVEL_NEEDLE_BASE_FRAMES.length; r++)
      ((this.var_149.findChildByName("meter_level_" + r).visible = !1),
        (this.var_149.findChildByName("meter_level_" + r + "_icon").visible = !1),
        (this.var_149.findChildByName("meter_level_" + r + "_icon_locked").visible = !1));
    (this._landingView?.localizationManager?._r43eae9731f5b27(
      "landing.view.community.meter",
      "userRank",
      String(this._r81f40b1ad419c6._re3de516f53acb5),
    ),
      this._landingView?.localizationManager?._r43eae9731f5b27(
        "landing.view.community.meter",
        "userAmount",
        String(this._r81f40b1ad419c6._r3fb4d63ff5804f),
      ),
      this._landingView?.localizationManager?._r43eae9731f5b27(
        "landing.view.community.meter",
        "totalAmount",
        String(this._r81f40b1ad419c6.communityTotalScore),
      ),
      this._landingView?.localizationManager?._r43eae9731f5b27(
        "landing.view.community.meter." + this._r81f40b1ad419c6.goalCode,
        "totalAmount",
        String(this._r81f40b1ad419c6.communityTotalScore),
      ),
      this.setCampaignLocalization("community_total_status", "landing.view.community.meter"),
      this.var_2733
        ? (this.setCampaignLocalization("community_vote_one_button", "landing.view.vote_one_button.text"),
          this.setCampaignLocalization("community_vote_two_button", "landing.view.vote_two_button.text"))
        : (this.var_149.findChildByName("community_catalog_button").visible = this._isInteractive));
    let e = this.var_149.findChildByName("goal_info");
    (e != null && (e.height = e.textHeight + 6),
      (this.var_149.visible = !0),
      this.var_149.invalidate());
  }
  requestCommunityGoalProgress() {
    this._rd984e1981f7a16 || (this._landingView?.send(new class_2982()), (this._rd984e1981f7a16 = !0));
  }
  onCommunityGoalProgress(e) {
    ((this._r81f40b1ad419c6 = e.getParser()?.data ?? null),
      (this._rd984e1981f7a16 = !1),
      this.refreshContent(),
      (this._r3b532c1be560d9 = 0),
      (this._buildupProgress = 0),
      this._landingView?.registerUpdateReceiver(this, 10));
  }
  _r0a1be162cc32e1 = n((e) => {
    if (e.type === u.CLICK) {
      let r = this._landingView?.getProperty("landing.view.community.catalog.target") ?? "";
      (r.length > 0 && this._landingView?.catalog?.openCatalogPage(r),
        this._landingView?.tracking?.trackGoogle("landingView", "click_communityCatalogTarget"));
    }
  }, "_r0a1be162cc32e1");
}
