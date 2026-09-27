// Estratto da HabboAirLauncher.deobf.js, riga 159141.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionConfirmPetBreedingResultEvent.as
// Nome offuscato: _i04c705ae5350f1

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.CONFIRM_PET_BREEDING_RESULT, r, s, o);
    this.var_3427 = t;
    this.var_1241 = i;
  }
  static {
    n(this, "RoomSessionConfirmPetBreedingResultEvent");
  }
  static CONFIRM_PET_BREEDING_RESULT = "RSPFUE_CONFIRM_PET_BREEDING_RESULT";
  get breedingNestStuffId() {
    return this.var_3427;
  }
  get result() {
    return this.var_1241;
  }
}
