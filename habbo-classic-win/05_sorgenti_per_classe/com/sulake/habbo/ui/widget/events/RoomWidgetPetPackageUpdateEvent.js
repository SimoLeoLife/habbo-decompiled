// Estratto da HabboAirLauncher.deobf.js, riga 160692.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetPackageUpdateEvent.as
// Nome offuscato: _i13e1cd7bf35a3f

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(r, c, f);
    this.var_344 = t;
    this.var_39 = i;
    this._nameValidationStatus = s;
    this._nameValidationInfo = o;
    this.var_4146 = d;
  }
  static {
    n(this, "RoomWidgetPetPackageUpdateEvent");
  }
  static const_233 = "RWOPPUE_OPEN_PET_PACKAGE_REQUESTED";
  static OPEN_PET_PACKAGE_RESULT = "RWOPPUE_OPEN_PET_PACKAGE_RESULT";
  static OPEN_PET_PACKAGE_UPDATE_PET_IMAGE = "RWOPPUE_OPEN_PET_PACKAGE_UPDATE_PET_IMAGE";
  get _r008c105caa5e72() {
    return this._nameValidationStatus;
  }
  get _r549e697cdd257f() {
    return this._nameValidationInfo;
  }
  get image() {
    return this.var_39;
  }
  get objectId() {
    return this.var_344;
  }
  get typeId() {
    return this.var_4146;
  }
}
