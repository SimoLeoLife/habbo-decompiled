// Extracted from HabboAirLauncher.deobf.js, line 81612.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/data/class_1944.as
// Obfuscated name: _idb774d16469396

class {
  static {
    n(this, "class_1944");
  }
  _flags = 0;
  _rb51eab7ce43aca = 0;
  _r364dd6cfae4c73 = 0;
  set flags(e) {
    this._flags = e;
  }
  _rf86aa9dd0d70c1(e) {
    (this._flags & class_3076.UNIQUE_SERIAL_NUMBER) > 0 &&
      ((this._rb51eab7ce43aca = e.readInteger()), (this._r364dd6cfae4c73 = e.readInteger()));
  }
  _r8476f6049cdad6(e) {
    ((this._rb51eab7ce43aca = e._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_UNIQUE_SERIAL_NUMBER)),
      (this._r364dd6cfae4c73 = e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_391)));
  }
  _r22048429087864(e) {
    (e.setNumber(RoomObjectVariableEnum.FURNITURE_UNIQUE_SERIAL_NUMBER, this._rb51eab7ce43aca),
      e.setNumber(RoomObjectVariableEnum.const_391, this._r364dd6cfae4c73));
  }
  get uniqueSerialNumber() {
    return this._rb51eab7ce43aca;
  }
  set uniqueSerialNumber(e) {
    this._rb51eab7ce43aca = e;
  }
  get uniqueSeriesSize() {
    return this._r364dd6cfae4c73;
  }
  set uniqueSeriesSize(e) {
    this._r364dd6cfae4c73 = e;
  }
  getLegacyString() {
    return "";
  }
  compare(e) {
    return !1;
  }
  get rarityLevel() {
    return -1;
  }
  get contentsCount() {
    return 0;
  }
  get chestName() {
    return "";
  }
  get state() {
    let e = Number(this.getLegacyString());
    return Number.isNaN(e) ? -1 : e | 0;
  }
  var_2907(e) {
    try {
      let t = JSON.parse(this.getLegacyString())[e];
      return typeof t == "string" ? t : t == null ? "" : String(t);
    } catch {
      return "";
    }
  }
}
