// Estratto da HabboAirLauncher.deobf.js, riga 181119.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarDanceUpdateMessage.as
// Nome offuscato: _ic226be3facdd8b

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
