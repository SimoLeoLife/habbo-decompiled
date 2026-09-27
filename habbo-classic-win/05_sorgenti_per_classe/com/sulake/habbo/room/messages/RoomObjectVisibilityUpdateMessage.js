// Estratto da HabboAirLauncher.deobf.js, riga 181759.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectVisibilityUpdateMessage.as
// Nome offuscato: _i3e710f34c754a4

class extends RoomObjectUpdateMessage {
  constructor(r) {
    super(null, null);
    this._type = r;
  }
  static {
    n(this, "RoomObjectVisibilityUpdateMessage");
  }
  static ENABLED = "ROVUM_ENABLED";
  static DISABLED = "ROVUM_DISABLED";
  get type() {
    return this._type;
  }
}
