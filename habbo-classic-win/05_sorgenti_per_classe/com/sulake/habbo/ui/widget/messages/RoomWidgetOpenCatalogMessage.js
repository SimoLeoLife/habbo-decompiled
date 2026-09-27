// Estratto da HabboAirLauncher.deobf.js, riga 161812.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetOpenCatalogMessage.as
// Nome offuscato: _i91a27ad8e39509

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetOpenCatalogMessage");
  }
  static CATALOG_CLUB = "RWOCM_CLUB_MAIN";
  static CREDITS = "RWOCM_CREDITS";
  static PIXELS = "RWOCM_PIXELS";
  static SHELLS = "RWOCM_SHELLS";
  static const_998 = "RWGOI_MESSAGE_OPEN_CATALOG";
  _pageKey;
  constructor(e) {
    (super(a.const_998), (this._pageKey = e));
  }
  get pageKey() {
    return this._pageKey;
  }
}
