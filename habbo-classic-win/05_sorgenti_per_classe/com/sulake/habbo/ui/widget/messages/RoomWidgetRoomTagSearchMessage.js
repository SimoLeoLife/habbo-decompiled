// Estratto da HabboAirLauncher.deobf.js, riga 161988.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetRoomTagSearchMessage.as
// Nome offuscato: _ide12cf54ee7ab1

class a extends RoomWidgetMessage {
  constructor(r) {
    super(a.ROOM_TAG_SEARCH);
    this.tag = r;
  }
  static {
    n(this, "RoomWidgetRoomTagSearchMessage");
  }
  static ROOM_TAG_SEARCH = "RWRTSM_ROOM_TAG_SEARCH";
}
