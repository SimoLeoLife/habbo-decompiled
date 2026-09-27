// Estratto da HabboAirLauncher.deobf.js, riga 160401.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetBreedingResultEvent.as
// Nome offuscato: _i379b91ccbc0b9d

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.PET_BREEDING_RESULT, i, s);
    this.var_368 = r;
    this._resultData2 = t;
  }
  static {
    n(this, "RoomWidgetPetBreedingResultEvent");
  }
  static PET_BREEDING_RESULT = "RWPBRE_PET_BREEDING_RESULT";
  get resultData() {
    return this.var_368;
  }
  get resultData2() {
    return this._resultData2;
  }
}
