// Extracted from HabboAirLauncher.deobf.js, line 82476.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/data/MapStuffData.as
// Obfuscated name: _i3ee6653a5eb90e

class a extends class_1944 {
  static {
    n(this, "MapStuffData");
  }
  static FORMAT_KEY = UnkConstants_ae7a13._r8947632530aca0;
  static STATE_DEFAULT_KEY = "state";
  static const_1221 = "rarity";
  _data = null;
  constructor(e = null) {
    (super(), e != null && (this._data = e));
  }
  _rf86aa9dd0d70c1(e) {
    this._data = new B();
    let r = e.readInteger();
    for (let t = 0; t < r; t++) {
      let i = e.readString(),
        s = e.readString();
      this._data.add(i, s);
    }
    super._rf86aa9dd0d70c1(e);
  }
  _r8476f6049cdad6(e) {
    (super._r8476f6049cdad6(e), (this._data = e._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA)));
  }
  _r22048429087864(e) {
    (super._r22048429087864(e),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT, a.FORMAT_KEY),
      e._r8cf7b48ccd978e(RoomObjectVariableEnum.FURNITURE_DATA, this._data ?? new B()));
  }
  getLegacyString() {
    return this._data?.getValue(a.STATE_DEFAULT_KEY) ?? "";
  }
  getValue(e) {
    return this._data?.getValue(e) ?? null;
  }
  compare(e) {
    return !1;
  }
  get rarityLevel() {
    let e = this._data?.getValue(a.const_1221);
    return e != null && e !== "" ? parseInt(e, 10) : -1;
  }
  get contentsCount() {
    let e = this._data?.getValue("contents_count");
    return e != null && e !== "" ? parseInt(e, 10) : 0;
  }
  get chestName() {
    return this._data?.getValue("chest_name") ?? "";
  }
}
