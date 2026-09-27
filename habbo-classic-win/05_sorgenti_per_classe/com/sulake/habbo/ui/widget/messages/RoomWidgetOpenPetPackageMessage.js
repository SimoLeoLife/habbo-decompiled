// Estratto da HabboAirLauncher.deobf.js, riga 161843.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetOpenPetPackageMessage.as
// Nome offuscato: _i2813b9dbbac448

class extends RoomWidgetMessage {
  constructor(r, t, i) {
    super(r);
    this.objectId = t;
    this.name = i;
  }
  static {
    n(this, "RoomWidgetOpenPetPackageMessage");
  }
  static WIDGET_MESSAGE_OPEN_PET_PACKAGE = "RWOPPM_OPEN_PET_PACKAGE";
}
