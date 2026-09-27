// Estratto da HabboAirLauncher.deobf.js, riga 159430.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetLevelUpdateEvent.as
// Nome offuscato: _i992c14fc054ab3

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.PET_LEVEL_UPDATE, r, s, o);
    this.var_3113 = t;
    this.var_1655 = i;
  }
  static {
    n(this, "RoomSessionPetLevelUpdateEvent");
  }
  static PET_LEVEL_UPDATE = "RSPLUE_PET_LEVEL_UPDATE";
  get petId() {
    return this.var_3113;
  }
  get level() {
    return this.var_1655;
  }
}
