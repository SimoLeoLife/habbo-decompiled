// Extracted from HabboAirLauncher.deobf.js, line 211616.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/tokens/QuestToken.as
// Obfuscated name: _i2cbb00d171b2fc

class extends bl {
  static {
    n(this, "QuestToken");
  }
  constructor(e, r) {
    super(r);
    let t = `\${quests.${r.message}.name}`;
    this.prepare("${friendbar.notify.quest}", t, "message_piece_xml", "friend_bar_event_notification_icon");
  }
}
