// Estratto da HabboAirLauncher.deobf.js, riga 292322.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/class_1769.as
// Nome offuscato: _ic963f8e6cbdc1e

class {
  static {
    n(this, "class_1769");
  }
  _id = 0;
  var_163 = 0;
  var_4820 = "";
  var_190 = null;
  var_911 = null;
  var_4146 = 0;
  _rc2096932e12c04 = null;
  var_2364 = null;
  _state = -1;
  _animFrame = -1;
  var_391 = null;
  constructor(e, r, t, i, s, o = 0, d = null, c = null, f = -1, l = -1, b = null) {
    ((this._id = e),
      (this.var_163 = r),
      (this.var_4820 = t),
      (this.var_190 = new k()),
      this.var_190.assign(i),
      (this.var_911 = new k()),
      this.var_911.assign(s),
      (this.var_4146 = o),
      (this._rc2096932e12c04 = d),
      (this.var_2364 = c),
      (this._state = f),
      (this._animFrame = l),
      (this.var_391 = b));
  }
  get id() {
    return this._id;
  }
  get category() {
    return this.var_163;
  }
  get operation() {
    return this.var_4820;
  }
  get loc() {
    return this.var_190;
  }
  get dir() {
    return this.var_911;
  }
  get typeId() {
    return this.var_4146;
  }
  get _r669a9820d77b11() {
    return this._rc2096932e12c04;
  }
  get stuffData() {
    return this.var_2364;
  }
  get state() {
    return this._state;
  }
  get _rbd3b0db1317c16() {
    return this._animFrame;
  }
  get posture() {
    return this.var_391;
  }
  dispose() {
    ((this.var_190 = null), (this.var_911 = null));
  }
}
