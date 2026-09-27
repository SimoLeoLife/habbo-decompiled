// Extracted from HabboAirLauncher.deobf.js, line 161639.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetFriendRequestMessage.as
// Obfuscated name: _i4b690e0f8214a9

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetFriendRequestMessage");
  }
  static ACCEPT = "RWFRM_ACCEPT";
  static DECLINE = "RWFRM_DECLINE";
  _requestId;
  constructor(e, r = 0) {
    (super(e), (this._requestId = r));
  }
  get requestId() {
    return this._requestId;
  }
}
