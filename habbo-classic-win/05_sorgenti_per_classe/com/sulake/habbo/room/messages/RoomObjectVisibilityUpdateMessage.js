// Extracted from HabboAirLauncher.deobf.js, line 181759.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectVisibilityUpdateMessage.as
// Obfuscated name: _i3e710f34c754a4

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
