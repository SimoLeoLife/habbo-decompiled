// Extracted from HabboAirLauncher.deobf.js, line 207524.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/CommunityGoalVsModeWidgetWithVoting.as
// Obfuscated name: _ie02dd6838d9e94

class extends Oz {
  static {
    n(this, "CommunityGoalVsModeWidgetWithVoting");
  }
  var_2753 = null;
  personalContributionScore = null;
  constructor(e) {
    super(e, !0);
  }
  initialize() {
    (super.initialize(),
      (this.var_2753 = this.container?.findChildByName("community_vote_one_button") ?? null),
      (this.personalContributionScore = this.container?.findChildByName("community_vote_two_button") ?? null),
      this.var_2753 != null && (this.var_2753.procedure = this._rc67d9f8ca80ec0),
      this.personalContributionScore != null && (this.personalContributionScore.procedure = this._r3b0322f1973362),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3806((e) => {
          this.onInfo(e);
        }),
      ));
  }
  refresh() {
    if ((super.refresh(), this.communityProgress != null)) {
      let e = this.communityProgress._r3fb4d63ff5804f === 0;
      (this.var_2753 != null && (this.var_2753.visible = e),
        this.personalContributionScore != null && (this.personalContributionScore.visible = e));
    }
  }
  _rc67d9f8ca80ec0 = n((e) => {
    e.type === u.CLICK &&
      (this.hideVoteButtons(),
      this._landingView?._rd4ea6e6c4ae178(1),
      this._landingView?.tracking?.trackGoogle("landingView", "click_voteoption_one"));
  }, "_rc67d9f8ca80ec0");
  _r3b0322f1973362 = n((e) => {
    e.type === u.CLICK &&
      (this.hideVoteButtons(),
      this._landingView?._rd4ea6e6c4ae178(2),
      this._landingView?.tracking?.trackGoogle("landingView", "click_voteoption_two"));
  }, "_r3b0322f1973362");
  onInfo(e) {
    e.getParser()?.acknowledged && this.hideVoteButtons();
  }
  hideVoteButtons() {
    (this.var_2753 != null && (this.var_2753.visible = !1),
      this.personalContributionScore != null && (this.personalContributionScore.visible = !1));
  }
}
