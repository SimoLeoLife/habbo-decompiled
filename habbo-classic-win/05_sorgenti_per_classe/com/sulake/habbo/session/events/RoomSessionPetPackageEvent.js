// Extracted from HabboAirLauncher.deobf.js, line 159447.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetPackageEvent.as
// Obfuscated name: _i3ac8480edcf407

class extends RoomSessionEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(r, t, c, f);
    this.var_344 = i;
    this.var_748 = s;
    this._nameValidationStatus = o;
    this._nameValidationInfo = d;
  }
  static {
    n(this, "RoomSessionPetPackageEvent");
  }
  static ROOM_SESSION_OPEN_PET_PACKAGE_REQUESTED = "RSOPPE_OPEN_PET_PACKAGE_REQUESTED";
  static ROOM_SESSION_OPEN_PET_PACKAGE_RESULT = "RSOPPE_OPEN_PET_PACKAGE_RESULT";
  get objectId() {
    return this.var_344;
  }
  get figureData() {
    return this.var_748;
  }
  get _r008c105caa5e72() {
    return this._nameValidationStatus;
  }
  get _r549e697cdd257f() {
    return this._nameValidationInfo;
  }
}
