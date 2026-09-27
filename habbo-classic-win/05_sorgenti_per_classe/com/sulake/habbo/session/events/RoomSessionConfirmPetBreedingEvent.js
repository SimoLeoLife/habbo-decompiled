// Estratto da HabboAirLauncher.deobf.js, riga 159112.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionConfirmPetBreedingEvent.as
// Nome offuscato: _i64ae71afe287a3

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(a.CONFIRM_PET_BREEDING, r, c, f);
    this.var_3305 = t;
    this._pet1 = i;
    this._pet2 = s;
    this._rarityCategories = o;
    this.var_4521 = d;
  }
  static {
    n(this, "RoomSessionConfirmPetBreedingEvent");
  }
  static CONFIRM_PET_BREEDING = "RSPFUE_CONFIRM_PET_BREEDING";
  get _r8e1bcb37bcabfb() {
    return this._rarityCategories;
  }
  get _reb3874e706dbb7() {
    return this.var_3305;
  }
  get pet1() {
    return this._pet1;
  }
  get pet2() {
    return this._pet2;
  }
  get _r182cdc80056896() {
    return this.var_4521;
  }
}
