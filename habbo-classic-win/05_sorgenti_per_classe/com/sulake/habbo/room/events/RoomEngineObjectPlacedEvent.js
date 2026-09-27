// Estratto da HabboAirLauncher.deobf.js, riga 70512.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineObjectPlacedEvent.as
// Nome offuscato: _i08fc04d8fbbc49

class extends RoomEngineObjectEvent {
  static {
    n(this, "RoomEngineObjectPlacedEvent");
  }
  var_4144;
  _x;
  _y;
  _z;
  var_81;
  _redd20a0b59a048;
  _r1e1be47f6592f0;
  _rae01e341e12e8a;
  _rc2096932e12c04;
  _rf27313536038b1;
  constructor(e, r, t, i, s, o, d, c, f, l, b, _, h, p, m = !1, v = !1) {
    (super(e, r, t, i, m, v),
      (this.var_4144 = s),
      (this._x = o),
      (this._y = d),
      (this._z = c),
      (this.var_81 = f),
      (this._redd20a0b59a048 = l),
      (this._r1e1be47f6592f0 = b),
      (this._rae01e341e12e8a = _),
      (this._rc2096932e12c04 = h),
      (this._rf27313536038b1 = p));
  }
  get _r8a8bd2d04c661f() {
    return this.var_4144;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get z() {
    return this._z;
  }
  get direction() {
    return this.var_81;
  }
  get _r176bfeda3ea21e() {
    return this._redd20a0b59a048;
  }
  get _rc4f9efa2c236ab() {
    return this._r1e1be47f6592f0;
  }
  get _r8b4764feb43833() {
    return this._rae01e341e12e8a;
  }
  get _r669a9820d77b11() {
    return this._rc2096932e12c04;
  }
  get _r07cbd1ea4ec403() {
    return this._rf27313536038b1;
  }
}
