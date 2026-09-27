// Extracted from HabboAirLauncher.deobf.js, line 341277.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/progmenu/ProgMenuController.as
// Obfuscated name: _i71e2148633d9a0

class extends AbstractSubMenuController {
  static {
    n(this, "ProgMenuController");
  }
  constructor(e, r) {
    (super(e, r, "prog_menu_view_xml", Me.PROGRESSION),
      e.getBoolean("toolbar.hide.quests") && this.setQuestsVisibility(!1),
      e.getBoolean("dailytasks.enabled") || this.setDailyTasksVisibility(!1));
  }
  set unseenAchievementsCount(e) {
    this.setUnseenItemCount("achievements", e);
  }
  set unseenRewardTrackRewardsCount(e) {
    this.setUnseenItemCount("introduction", e);
  }
  set unseenDailyTaskCount(e) {
    this.setUnseenItemCount("dailytasks", e);
  }
  onSubMenuItemClick(e) {
    switch (e) {
      case "achievements":
        this.toolbar.questEngine?._r771098bda9d4ec();
        break;
      case "dailytasks":
        this.toolbar.context._r6b6c989018eb05("dailytasks/open");
        break;
      case "leaderboards":
        this.toolbar.context._r6b6c989018eb05(
          ka.getLink(ka.TOTAL_BADGES, ka.DEFAULT_RARITY, ka._r44f115799afb60),
        );
        break;
      case "introduction":
        this.toolbar.context._r6b6c989018eb05("reward_track/open/introduction");
        break;
      case "quests":
        this.toolbar.questEngine?._r462f8731011a70();
        break;
    }
  }
  setQuestsVisibility(e) {
    let r = this.window.findChildByName("quests");
    r != null && (r.visible = e);
  }
  setDailyTasksVisibility(e) {
    let r = this.window.findChildByName("dailytasks");
    r != null && (r.visible = e);
  }
}
