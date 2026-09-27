// Extracted from HabboAirLauncher.deobf.js, line 162051.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetStickieSendUpdateMessage.as
// Obfuscated name: _iba20ab8df328dc

class extends RoomWidgetMessage {
  constructor(r, t, i = "", s = "") {
    super(r);
    this.objectId = t;
    this.text = i;
    this._r90e16a8c48c219 = s;
  }
  static {
    n(this, "RoomWidgetStickieSendUpdateMessage");
  }
  static const_766 = "RWSUM_STICKIE_SEND_DELETE";
  static const_216 = "RWSUM_STICKIE_SEND_UPDATE";
}
