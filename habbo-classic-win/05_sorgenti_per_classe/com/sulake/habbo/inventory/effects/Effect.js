// Estratto da HabboAirLauncher.deobf.js, riga 239055.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/effects/Effect.as
// Nome offuscato: _i4aeaf22f647ba3

class {
  static {
    n(this, "Effect");
  }
  _type = 0;
  _subType = 0;
  _duration = 0;
  var_1504 = 1;
  _r0e1b085db4d74f = 0;
  _permanent = !1;
  _isActive = !1;
  var_2619 = !1;
  _r4d3434c24fdea4 = !1;
  var_1072 = null;
  _r74527c4ed40614 = null;
  get type() {
    return this._type;
  }
  get subType() {
    return this._subType;
  }
  get duration() {
    return this._duration;
  }
  get amountInInventory() {
    return this.var_1504;
  }
  get isPermanent() {
    return this._permanent;
  }
  get isActive() {
    return this._isActive;
  }
  get _r780270c6ffe49b() {
    return this._r4d3434c24fdea4;
  }
  get isSelected() {
    return this.var_2619;
  }
  get icon() {
    return this.var_1072;
  }
  get _r145cc0394d677f() {
    return this.var_1072;
  }
  get secondsLeft() {
    if (this._isActive && this._r74527c4ed40614 != null) {
      let e = this._r0e1b085db4d74f - Math.floor((Date.now() - this._r74527c4ed40614.valueOf()) / 1e3);
      return (e < 0 && (e = 0), e);
    }
    return this._r0e1b085db4d74f;
  }
  set type(e) {
    this._type = e;
  }
  set subType(e) {
    this._subType = e;
  }
  set duration(e) {
    this._duration = e;
  }
  set secondsLeft(e) {
    this._r0e1b085db4d74f = e;
  }
  set isPermanent(e) {
    this._permanent = e;
  }
  set isSelected(e) {
    this.var_2619 = e;
  }
  set _r780270c6ffe49b(e) {
    this._r4d3434c24fdea4 = e;
  }
  set _r145cc0394d677f(e) {
    this.var_1072 = e;
  }
  set amountInInventory(e) {
    this.var_1504 = e;
  }
  set isActive(e) {
    (e && !this._isActive && (this._r74527c4ed40614 = new Date()), (this._isActive = e));
  }
  setOneEffectExpired() {
    (this.var_1504--,
      this.var_1504 < 0 && (this.var_1504 = 0),
      (this._r0e1b085db4d74f = this._duration),
      (this._isActive = !1),
      (this._r4d3434c24fdea4 = !1));
  }
}
