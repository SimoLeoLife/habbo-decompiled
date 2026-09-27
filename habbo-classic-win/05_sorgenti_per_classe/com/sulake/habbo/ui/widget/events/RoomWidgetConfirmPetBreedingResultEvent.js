// Estratto da HabboAirLauncher.deobf.js, riga 160100.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetConfirmPetBreedingResultEvent.as
// Nome offuscato: _i38bd506914ac7c

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.CONFIRM_PET_BREEDING_RESULT, i, s);
    this.var_3427 = r;
    this.var_1241 = t;
  }
  static {
    n(this, "RoomWidgetConfirmPetBreedingResultEvent");
  }
  static CONFIRM_PET_BREEDING_RESULT = "RWPPBE_CONFIRM_PET_BREEDING_RESULT";
  static SUCCESS = 0;
  static NO_NEST_FOUND = 1;
  static PETS_MISSING = 2;
  static INVALID_NAME = 3;
  get breedingNestStuffId() {
    return this.var_3427;
  }
  get result() {
    return this.var_1241;
  }
}
