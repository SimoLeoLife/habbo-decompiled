// Extracted from HabboAirLauncher.deobf.js, line 159400.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetFigureUpdateEvent.as
// Obfuscated name: _i9ea54d0c99cb8d

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.PET_FIGURE_UPDATE, r, s, o);
    this.var_3113 = t;
    this.var_1129 = i;
  }
  static {
    n(this, "RoomSessionPetFigureUpdateEvent");
  }
  static PET_FIGURE_UPDATE = "RSPFUE_PET_FIGURE_UPDATE";
  get petId() {
    return this.var_3113;
  }
  get figure() {
    return this.var_1129;
  }
}
