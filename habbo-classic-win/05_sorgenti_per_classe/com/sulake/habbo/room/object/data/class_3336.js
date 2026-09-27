// Estratto da HabboAirLauncher.deobf.js, riga 82282.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/data/class_3336.as
// Nome offuscato: _ib8b9b1d595271d

class a extends class_1944 {
  static {
    n(this, "class_3336");
  }
  static FORMAT_KEY = _iae7a134fea2fc8._r5f45ac3988c93d;
  static INTERNAL_STATE_KEY = "furniture_crackable_state";
  static INTERNAL_HIT_KEY = "furniture_crackable_hits";
  static INTERNAL_TARGET_KEY = "furniture_crackable_target";
  _state = "";
  _hits = 0;
  var_203 = 0;
  _rf86aa9dd0d70c1(e) {
    ((this._state = e.readString()),
      (this._hits = e.readInteger()),
      (this.var_203 = e.readInteger()),
      super._rf86aa9dd0d70c1(e));
  }
  _r22048429087864(e) {
    (super._r22048429087864(e),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT, a.FORMAT_KEY),
      e.setString(a.INTERNAL_STATE_KEY, this._state),
      e.setNumber(a.INTERNAL_HIT_KEY, this._hits),
      e.setNumber(a.INTERNAL_TARGET_KEY, this.var_203));
  }
  _r8476f6049cdad6(e) {
    (super._r8476f6049cdad6(e),
      (this._state = e.getString(a.INTERNAL_STATE_KEY)),
      (this._hits = e._ra3dc9a405b5c73(a.INTERNAL_HIT_KEY)),
      (this.var_203 = e._ra3dc9a405b5c73(a.INTERNAL_TARGET_KEY)));
  }
  getLegacyString() {
    return this._state;
  }
  setString(e) {
    this._state = e;
  }
  get hits() {
    return this._hits;
  }
  get target() {
    return this.var_203;
  }
  compare(e) {
    return !0;
  }
}
