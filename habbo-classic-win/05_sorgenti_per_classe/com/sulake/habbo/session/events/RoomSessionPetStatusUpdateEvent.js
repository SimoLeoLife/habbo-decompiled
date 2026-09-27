// Estratto da HabboAirLauncher.deobf.js, riga 159473.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetStatusUpdateEvent.as
// Nome offuscato: _i5588afdb7518fc

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(a.PET_STATUS_UPDATE, r, c, f);
    this.var_3113 = t;
    this.var_4676 = i;
    this.var_4416 = s;
    this.var_4579 = o;
    this.var_4568 = d;
  }
  static {
    n(this, "RoomSessionPetStatusUpdateEvent");
  }
  static PET_STATUS_UPDATE = "RSPFUE_PET_STATUS_UPDATE";
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
