// Estratto da HabboAirLauncher.deobf.js, riga 161723.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetGetBadgeImageMessage.as
// Nome offuscato: _i678ce3166404b2

class a extends RoomWidgetMessage {
  constructor(r) {
    super(a.WIDGET_MESSAGE_GET_BADGE_IMAGE);
    this.badgeId = r;
  }
  static {
    n(this, "RoomWidgetGetBadgeImageMessage");
  }
  static WIDGET_MESSAGE_GET_BADGE_IMAGE = "RWGOI_MESSAGE_GET_BADGE_IMAGE";
}
