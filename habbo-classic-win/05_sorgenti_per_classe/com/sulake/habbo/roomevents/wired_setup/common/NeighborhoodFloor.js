// Estratto da HabboAirLauncher.deobf.js, riga 351783.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/NeighborhoodFloor.as
// Nome offuscato: _ida2bf348f24bff

class a {
  constructor(e, r, t) {
    this._r81ff317dd809f8 = e;
    this._smallMode = r;
    this.var_4244 = t;
  }
  static {
    n(this, "NeighborhoodFloor");
  }
  static RADIUS = 10;
  static SMALL_RADIUS = 5;
  static var_5758 = a.RADIUS * 2 + 1;
  _r560c58c0b07475 = null;
  get _r223f1e7a35055c() {
    return this._r81ff317dd809f8;
  }
  setOccupied(e, r, t) {
    this._r81ff317dd809f8[Math.trunc(e)][Math.trunc(r)] = t;
  }
  isOccupied(e, r) {
    return !!this._r81ff317dd809f8[Math.trunc(e)][Math.trunc(r)];
  }
  _r048ec37a92d16f() {
    this.var_4244?.();
  }
  set smallMode(e) {
    this._smallMode = e;
  }
  smallModeAllowed() {
    for (let e = -a.RADIUS; e <= a.RADIUS; e += 1)
      for (let r = -a.RADIUS; r <= a.RADIUS; r += 1)
        if (
          (e < -a.SMALL_RADIUS ||
            e > a.SMALL_RADIUS ||
            r < -a.SMALL_RADIUS ||
            r > a.SMALL_RADIUS) &&
          this.isOccupied(e + a.RADIUS, r + a.RADIUS)
        )
          return !1;
    return !0;
  }
  get _rd9447b93d769d1() {
    return this._smallMode ? a.SMALL_RADIUS : a.RADIUS;
  }
  get _r193a246cc0605f() {
    return this._rd9447b93d769d1 * 2 + 1;
  }
  _rb9742298f2291a() {
    ((this._r560c58c0b07475 = this._r81ff317dd809f8), this._rd0bfcd5a4f7730());
  }
  _rd0bfcd5a4f7730() {
    this._r560c58c0b07475 != null && (this._r81ff317dd809f8 = this._r560c58c0b07475.map((e) => e.concat()));
  }
  _r1a092d01932bb8() {
    this._r560c58c0b07475 = null;
  }
}
