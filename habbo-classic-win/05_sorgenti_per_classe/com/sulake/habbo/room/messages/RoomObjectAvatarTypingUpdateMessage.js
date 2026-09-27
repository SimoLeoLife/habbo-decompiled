// Estratto da HabboAirLauncher.deobf.js, riga 181355.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarTypingUpdateMessage.as
// Nome offuscato: _i271046b6d05d70

class extends RoomObjectUpdateStateMessage {
  constructor(r = !1) {
    super();
    this.var_680 = r;
  }
  static {
    n(this, "RoomObjectAvatarTypingUpdateMessage");
  }
  get isTyping() {
    return this.var_680;
  }
}
