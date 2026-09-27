// Extracted from HabboAirLauncher.deobf.js, line 159362.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetBreedingResultEvent.as
// Obfuscated name: _i7ed0d7b6adf972

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.PET_BREEDING_RESULT, r, s, o);
    this.var_368 = t;
    this.var_5130 = i;
  }
  static {
    n(this, "RoomSessionPetBreedingResultEvent");
  }
  static PET_BREEDING_RESULT = "RSPFUE_PET_BREEDING_RESULT";
  get resultData() {
    return this.var_368;
  }
  get otherResultData() {
    return this.var_5130;
  }
}
