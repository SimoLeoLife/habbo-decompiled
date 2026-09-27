// Estratto da HabboAirLauncher.deobf.js, riga 160367.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetBreedingEvent.as
// Nome offuscato: _ie2b38bcbfc893f

class a extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetPetBreedingEvent");
  }
  static const_1056 = 0;
  static const_942 = 1;
  static TYPE_ACCEPT = 2;
  static TYPE_REQUEST = 3;
  static PET_BREEDING = "RWPPBE_PET_BREEDING_";
  _state;
  _r63b6792a558edf;
  _rb8cf28226bc78c;
  constructor(e = !1, r = !1) {
    super(a.PET_BREEDING, e, r);
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e;
  }
  get _rb2023938cee132() {
    return this._r63b6792a558edf;
  }
  set _rb2023938cee132(e) {
    this._r63b6792a558edf = e;
  }
  get _ra37180683cadb3() {
    return this._rb8cf28226bc78c;
  }
  set _ra37180683cadb3(e) {
    this._rb8cf28226bc78c = e;
  }
}
