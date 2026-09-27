// Extracted from HabboAirLauncher.deobf.js, line 161798.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetNavigateToRoomMessage.as
// Obfuscated name: _i4715460d72b7bb

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetNavigateToRoomMessage");
  }
  static WIDGET_MESSAGE_NAVIGATE_HOME = "RWGOI_MESSAGE_NAVIGATE_HOME";
  static WIDGET_MESSAGE_NAVIGATE_TO_ROOM = "RWGOI_MESSAGE_NAVIGATE_TO_ROOM";
  var_2440;
  constructor(e, r = -1) {
    (super(e), (this.var_2440 = r));
  }
  get roomId() {
    return this.var_2440;
  }
}
