// Estratto da HabboAirLauncher.deobf.js, riga 160723.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetStatusUpdateEvent.as
// Nome offuscato: _ic28842eb80a281

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(a.PET_STATUS_UPDATE, d, c);
    this.var_3113 = r;
    this.var_4676 = t;
    this.var_4416 = i;
    this.var_4579 = s;
    this.var_4568 = o;
  }
  static {
    n(this, "RoomWidgetPetStatusUpdateEvent");
  }
  static PET_STATUS_UPDATE = "RWPIUE_PET_STATUS_UPDATE";
  get petId() {
    return this.var_3113;
  }
  get canBreed() {
    return this.var_4676;
  }
  get canHarvest() {
    return this.var_4416;
  }
  get canRevive() {
    return this.var_4579;
  }
  get hasBreedingPermission() {
    return this.var_4568;
  }
}
