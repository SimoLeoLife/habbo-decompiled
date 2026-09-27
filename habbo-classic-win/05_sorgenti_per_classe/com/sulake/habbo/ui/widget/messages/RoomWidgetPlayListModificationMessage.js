// Estratto da HabboAirLauncher.deobf.js, riga 161884.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetPlayListModificationMessage.as
// Nome offuscato: _i105996b06e9d7a

class extends RoomWidgetMessage {
  constructor(r, t = -1, i = -1) {
    super(r);
    this._slotNumber = t;
    this._r398f5a77bf5446 = i;
  }
  static {
    n(this, "RoomWidgetPlayListModificationMessage");
  }
  static ADD_TO_PLAYLIST = "RWPLAM_ADD_TO_PLAYLIST";
  static REMOVE_FROM_PLAYLIST = "RWPLAM_REMOVE_FROM_PLAYLIST";
}
