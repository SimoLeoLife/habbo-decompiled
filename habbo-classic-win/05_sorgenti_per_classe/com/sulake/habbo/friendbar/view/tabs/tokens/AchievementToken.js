// Extracted from HabboAirLauncher.deobf.js, line 211586.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/tokens/AchievementToken.as
// Obfuscated name: _i1e11c708e45f70

class extends bl {
  static {
    n(this, "AchievementToken");
  }
  constructor(e, r, t) {
    super(r);
    let i = t.getBadgeName(r.message);
    this.prepare(
      "${friendbar.notify.achievement}",
      i,
      "message_piece_xml",
      "friend_bar_event_notification_icon",
    );
  }
}
