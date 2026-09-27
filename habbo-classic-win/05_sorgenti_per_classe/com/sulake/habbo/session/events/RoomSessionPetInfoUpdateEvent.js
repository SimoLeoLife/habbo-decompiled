// Extracted from HabboAirLauncher.deobf.js, line 159417.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetInfoUpdateEvent.as
// Obfuscated name: _i13a35b561c8d7c

class a extends RoomSessionEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.PET_INFO, r, i, s);
    this._petInfo = t;
  }
  static {
    n(this, "RoomSessionPetInfoUpdateEvent");
  }
  static PET_INFO = "RSPIUE_PET_INFO";
  get petInfo() {
    return this._petInfo;
  }
}
