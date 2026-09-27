// Estratto da HabboAirLauncher.deobf.js, riga 162038.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetSpamWallPostItFinishEditingMessage.as
// Nome offuscato: _ia429154f85ccab

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
