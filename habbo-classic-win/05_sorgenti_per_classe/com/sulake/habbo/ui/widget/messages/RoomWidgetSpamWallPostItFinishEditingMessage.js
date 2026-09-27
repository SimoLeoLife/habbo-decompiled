// Extracted from HabboAirLauncher.deobf.js, line 162038.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetSpamWallPostItFinishEditingMessage.as
// Obfuscated name: _ia429154f85ccab

class extends RoomWidgetMessage {
  constructor(r, t, i, s, o) {
    super(r);
    this.objectId = t;
    this.location = i;
    this.text = s;
    this._r90e16a8c48c219 = o;
  }
  static {
    n(this, "RoomWidgetSpamWallPostItFinishEditingMessage");
  }
  static SEND_POSTIT_DATA = "RWSWPFEE_SEND_POSTIT_DATA";
}
