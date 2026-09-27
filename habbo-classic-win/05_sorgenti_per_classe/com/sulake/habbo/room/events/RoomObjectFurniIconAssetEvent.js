// Extracted from HabboAirLauncher.deobf.js, line 180791.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectFurniIconAssetEvent.as
// Obfuscated name: _i37e27acdb4d186

class extends RoomObjectEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(r, t, d, c);
    this.var_4798 = i;
    this.var_4146 = s;
    this.var_3191 = o;
  }
  static {
    n(this, "RoomObjectFurniIconAssetEvent");
  }
  static const_1367 = "ROFIAE_LOAD_FURNI_ICON";
  get wallItem() {
    return this.var_4798;
  }
  get typeId() {
    return this.var_4146;
  }
  get extra() {
    return this.var_3191;
  }
}
