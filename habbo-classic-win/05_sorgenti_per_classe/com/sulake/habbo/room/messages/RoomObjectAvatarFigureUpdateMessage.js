// Extracted from HabboAirLauncher.deobf.js, line 181183.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarFigureUpdateMessage.as
// Obfuscated name: _if4dd7adabd297b

class extends RoomObjectUpdateStateMessage {
  constructor(r, t = null, i = null, s = !1) {
    super();
    this.var_1129 = r;
    this.var_106 = t;
    this.var_4919 = i;
    this.var_4578 = s;
  }
  static {
    n(this, "RoomObjectAvatarFigureUpdateMessage");
  }
  get figure() {
    return this.var_1129;
  }
  get gender() {
    return this.var_106;
  }
  get race() {
    return this.var_4919;
  }
  get isRiding() {
    return this.var_4578;
  }
}
