// Estratto da HabboAirLauncher.deobf.js, riga 159341.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetBreedingEvent.as
// Nome offuscato: _i8f192a7f886cf2

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(a.PET_BREEDING, r, o, d);
    this._state = t;
    this._r63b6792a558edf = i;
    this._rb8cf28226bc78c = s;
  }
  static {
    n(this, "RoomSessionPetBreedingEvent");
  }
  static PET_BREEDING = "RSPFUE_PET_BREEDING";
  get state() {
    return this._state;
  }
  get _rb2023938cee132() {
    return this._r63b6792a558edf;
  }
  get _ra37180683cadb3() {
    return this._rb8cf28226bc78c;
  }
}
