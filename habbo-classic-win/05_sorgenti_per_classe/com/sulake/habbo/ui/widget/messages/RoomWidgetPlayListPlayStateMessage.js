// Extracted from HabboAirLauncher.deobf.js, line 161896.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetPlayListPlayStateMessage.as
// Obfuscated name: _i036b0867dfa761

class extends RoomWidgetMessage {
  constructor(r, t, i = -1) {
    super(r);
    this.furniId = t;
    this.position = i;
  }
  static {
    n(this, "RoomWidgetPlayListPlayStateMessage");
  }
  static TOGGLE_PLAY_PAUSE = "RWPLPS_TOGGLE_PLAY_PAUSE";
}
