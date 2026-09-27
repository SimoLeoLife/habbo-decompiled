// Extracted from HabboAirLauncher.deobf.js, line 161712.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetGetBadgeDetailsMessage.as
// Obfuscated name: _i121f3ffd498b15

class a extends RoomWidgetMessage {
  constructor(r, t) {
    super(a.WIDGET_MESSAGE_GET_BADGE_DETAILS);
    this.own = r;
    this.groupId = t;
  }
  static {
    n(this, "RoomWidgetGetBadgeDetailsMessage");
  }
  static WIDGET_MESSAGE_GET_BADGE_DETAILS = "RWGOI_MESSAGE_GET_BADGE_DETAILS";
}
