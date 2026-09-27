// Extracted from HabboAirLauncher.deobf.js, line 181119.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarDanceUpdateMessage.as
// Obfuscated name: _ic226be3facdd8b

class extends RoomObjectUpdateStateMessage {
  constructor(r = 0) {
    super();
    this.var_3484 = r;
  }
  static {
    n(this, "RoomObjectAvatarDanceUpdateMessage");
  }
  get danceStyle() {
    return this.var_3484;
  }
}
