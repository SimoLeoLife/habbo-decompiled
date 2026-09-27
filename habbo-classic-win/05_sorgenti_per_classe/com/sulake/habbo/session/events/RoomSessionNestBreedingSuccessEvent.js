// Extracted from HabboAirLauncher.deobf.js, line 159324.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionNestBreedingSuccessEvent.as
// Obfuscated name: _i92b91292f34897

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.NEST_BREEDING_SUCCESS, r, s, o);
    this.var_3113 = t;
    this.var_3123 = i;
  }
  static {
    n(this, "RoomSessionNestBreedingSuccessEvent");
  }
  static NEST_BREEDING_SUCCESS = "RSPFUE_NEST_BREEDING_SUCCESS";
  get _r4420bc8bc1a910() {
    return this.var_3123;
  }
  get petId() {
    return this.var_3113;
  }
}
