// Extracted from HabboAirLauncher.deobf.js, line 160071.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetConfirmPetBreedingEvent.as
// Obfuscated name: _i045216e688f3a2

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(a.CONFIRM_PET_BREEDING, d, c);
    this.var_3305 = r;
    this._pet1 = t;
    this._pet2 = i;
    this._rarityCategories = s;
    this.var_4521 = o;
  }
  static {
    n(this, "RoomWidgetConfirmPetBreedingEvent");
  }
  static CONFIRM_PET_BREEDING = "RWPPBE_CONFIRM_PET_BREEDING_";
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
