// Estratto da HabboAirLauncher.deobf.js, riga 184709.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purse/Purse.as
// Nome offuscato: _iac4662ba2a1804

class {
  static {
    n(this, "Purse");
  }
  _r5ce3efad3b61fb = 0;
  _rede2511531aa68 = new Map();
  var_4145 = 0;
  _r8aee4812a80e29 = 0;
  _r688feafa31b35d = !1;
  _rcc351ee7176e5a = 0;
  _rc826819601feed = 0;
  _rbb373e67602424 = !1;
  _rf23518bc22aa2f = 0;
  _r93da2fd18a0c87 = 0;
  _r4a907c90e97c20 = 0;
  _rb8b6ff23484682 = 0;
  _r70970d8ef2a142 = 0;
  get credits() {
    return this._r5ce3efad3b61fb;
  }
  set credits(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r5ce3efad3b61fb = e));
  }
  get clubPeriods() {
    return this.var_4145;
  }
  set clubPeriods(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this.var_4145 = e));
  }
  get clubDays() {
    return this._r8aee4812a80e29;
  }
  set clubDays(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r8aee4812a80e29 = e));
  }
  get isVIP() {
    return this.var_4145 > 0 || this._r8aee4812a80e29 > 0;
  }
  get _ra6c4481543acf2() {
    return this._r688feafa31b35d;
  }
  set _ra6c4481543acf2(e) {
    this._r688feafa31b35d = e;
  }
  get _r3923fce18be4bf() {
    return this._rbb373e67602424;
  }
  set _r3923fce18be4bf(e) {
    this._rbb373e67602424 = e;
  }
  get giftsAvailable() {
    return this._rcc351ee7176e5a;
  }
  set giftsAvailable(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._rcc351ee7176e5a = e));
  }
  get _r5268ed54bc12e0() {
    return this._rc826819601feed;
  }
  set _r5268ed54bc12e0(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._rc826819601feed = e));
  }
  get _rb8c20786ac8048() {
    return this._rede2511531aa68;
  }
  set _rb8c20786ac8048(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._rede2511531aa68 = e));
  }
  getActivityPointsForType(e) {
    return this._rede2511531aa68.get(e) ?? 0;
  }
  get minutesUntilExpiration() {
    let e = Math.floor((_ia411d8d8194a3a() - this._r4a907c90e97c20) / 6e4),
      r = this._rf23518bc22aa2f - e;
    return r > 0 ? r : 0;
  }
  set minutesUntilExpiration(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._rf23518bc22aa2f = e));
  }
  get _rc43e18432c54a9() {
    return this._r93da2fd18a0c87;
  }
  set _rc43e18432c54a9(e) {
    ((this._r4a907c90e97c20 = _ia411d8d8194a3a()), (this._r93da2fd18a0c87 = e));
  }
  get _r42111b5dfa7b12() {
    return this._r4a907c90e97c20;
  }
  get _r5f1a30114e44a8() {
    return this._rb8b6ff23484682;
  }
  set _r5f1a30114e44a8(e) {
    this._rb8b6ff23484682 = e;
  }
  get _r410418cea3a606() {
    return this._r70970d8ef2a142;
  }
  set _r410418cea3a606(e) {
    this._r70970d8ef2a142 = e;
  }
}
