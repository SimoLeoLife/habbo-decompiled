// Extracted from HabboAirLauncher.deobf.js, line 82564.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/data/class_2604.as
// Obfuscated name: _ifa4fa14c1c9ab8

class a extends class_1944 {
  static {
    n(this, "class_2604");
  }
  static FORMAT_KEY = UnkConstants_ae7a13._r3c684e808ca07e;
  static INTERNAL_STATE_KEY = "s";
  static INTERNAL_RESULT_KEY = "r";
  _state = "";
  var_1241 = 0;
  _rf86aa9dd0d70c1(e) {
    ((this._state = e.readString()),
      (this.var_1241 = e.readInteger()),
      super._rf86aa9dd0d70c1(e));
  }
  _r22048429087864(e) {
    (super._r22048429087864(e), e.setNumber(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT, a.FORMAT_KEY));
    let r = new B();
    (r.add(a.INTERNAL_STATE_KEY, this._state),
      r.add(a.INTERNAL_RESULT_KEY, this.var_1241.toString()),
      e._r8cf7b48ccd978e(RoomObjectVariableEnum.FURNITURE_DATA, r));
  }
  _r8476f6049cdad6(e) {
    super._r8476f6049cdad6(e);
    let r = e._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA);
    ((this._state = r?.getValue(a.INTERNAL_STATE_KEY) ?? ""),
      (this.var_1241 = parseInt(r?.getValue(a.INTERNAL_RESULT_KEY) ?? "0", 10)));
  }
  getLegacyString() {
    return this._state;
  }
  setString(e) {
    this._state = e;
  }
  get result() {
    return this.var_1241;
  }
  compare(e) {
    return !0;
  }
}
