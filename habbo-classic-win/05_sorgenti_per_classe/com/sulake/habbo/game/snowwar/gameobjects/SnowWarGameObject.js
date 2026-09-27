// Extracted from HabboAirLauncher.deobf.js, line 218624.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/SnowWarGameObject.as
// Obfuscated name: _ib587e46fbf5b79

class {
  static {
    n(this, "SnowWarGameObject");
  }
  _active = !1;
  var_686 = -1;
  var_3326 = !1;
  _disposed = !1;
  constructor(e, r) {
    ((this.var_686 = r ? -e : e), (this.var_3326 = r));
  }
  dispose() {
    this._disposed = !0;
  }
  get disposed() {
    return this._disposed;
  }
  get isActive() {
    return this._active;
  }
  set isActive(e) {
    this._active = e;
  }
  get _r4bc6d443f1bcb2() {
    return -1;
  }
  getVariable(e) {
    return -1;
  }
  get _r8f79a04a0ab07b() {
    return this.var_686;
  }
  set _r8f79a04a0ab07b(e) {
    this.var_686 = e;
  }
  subturn(e) {}
  get _r24b48ffa5796a4() {
    return 0;
  }
  get _r2651fdcb0df06e() {
    return null;
  }
  get _r502e71c4c81659() {
    return null;
  }
  get _r07a29a11e88a0f() {
    return null;
  }
  get _rba12f0325cedd5() {
    return this.var_3326;
  }
  get _r206e239acb0d5c() {
    return -(this.var_686 + 1);
  }
  onRemove() {}
  get _r770408bc5f2523() {
    return this._r2651fdcb0df06e?.[0] ?? 0;
  }
  _r64f436fedfa81d(e) {
    return (e._r502e71c4c81659?.z ?? 0) < this._r770408bc5f2523 && M0._r8238b0999d6bac(this, e);
  }
  onSnowBallHit(e, r) {}
}
