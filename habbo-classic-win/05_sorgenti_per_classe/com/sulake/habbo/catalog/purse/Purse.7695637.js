// Estratto da HabboAirLauncher.deobf.js, riga 243232.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purse/Purse.as
// Nome offuscato: _iac4662ba2a1804

class {
  static {
    n(this, "Purse");
  }
  _rbb373e67602424 = !1;
  _r01b5562b0e67ba = !1;
  var_4145 = 0;
  _r8aee4812a80e29 = 0;
  _rd54449bfd176ed = 0;
  _r1572a2e48abfe4 = !1;
  _r688feafa31b35d = !1;
  _rf23518bc22aa2f = 0;
  _r93da2fd18a0c87 = -1;
  _r4a907c90e97c20 = 0;
  get clubPeriods() {
    return this.var_4145;
  }
  set clubPeriods(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this.var_4145 = Math.max(0, e)));
  }
  get clubDays() {
    return this._r8aee4812a80e29;
  }
  set clubDays(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r8aee4812a80e29 = Math.max(0, e)));
  }
  get _rf3a9b3d6915b1c() {
    return this._rd54449bfd176ed;
  }
  set _rf3a9b3d6915b1c(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._rd54449bfd176ed = Math.max(0, e)));
  }
  get _r392f9b08842975() {
    return this._r1572a2e48abfe4;
  }
  set _r392f9b08842975(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r1572a2e48abfe4 = e));
  }
  get _ra6c4481543acf2() {
    return this._r688feafa31b35d;
  }
  set _ra6c4481543acf2(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r688feafa31b35d = e));
  }
  get minutesUntilExpiration() {
    let e = Math.floor((_ia411d8d8194a3a() - this._r4a907c90e97c20) / 6e4),
      r = this._rf23518bc22aa2f - e;
    return r > 0 ? r : 0;
  }
  set minutesUntilExpiration(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._rf23518bc22aa2f = e));
  }
  get _rd5192fa7d1725e() {
    return this._rbb373e67602424;
  }
  set _rd5192fa7d1725e(e) {
    this._rbb373e67602424 = e;
  }
  get _r5336785a0c8883() {
    return this._r01b5562b0e67ba;
  }
  set _r5336785a0c8883(e) {
    this._r01b5562b0e67ba = e;
  }
  get _rc43e18432c54a9() {
    return this._r93da2fd18a0c87;
  }
  set _rc43e18432c54a9(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r93da2fd18a0c87 = e));
  }
}
