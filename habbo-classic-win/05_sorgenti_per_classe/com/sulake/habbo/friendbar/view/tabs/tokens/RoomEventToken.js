// Extracted from HabboAirLauncher.deobf.js, line 211626.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/tokens/RoomEventToken.as
// Obfuscated name: _ie88c83f8b9a5f4

class extends bl {
  static {
    n(this, "RoomEventToken");
  }
  constructor(e, r) {
    (super(r),
      this.prepare(
        "${friendbar.notify.event}",
        r.message,
        "message_piece_xml",
        "friend_bar_event_notification_icon",
      ));
  }
}
