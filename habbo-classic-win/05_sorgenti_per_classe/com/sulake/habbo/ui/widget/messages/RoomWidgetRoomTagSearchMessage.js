// Extracted from HabboAirLauncher.deobf.js, line 161988.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetRoomTagSearchMessage.as
// Obfuscated name: _ide12cf54ee7ab1

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
