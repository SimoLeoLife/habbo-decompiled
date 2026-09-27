// Estratto da HabboAirLauncher.deobf.js, riga 219556.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/SnowballGivingGameObject.as
// Nome offuscato: _i298b4dbc9d9530

class extends SnowWarGameObject {
  static {
    n(this, "SnowballGivingGameObject");
  }
  _rdb14348f8757f4;
  var_243;
  var_120;
  constructor(e, r, t, i) {
    (super(e, !1),
      (this._active = !0),
      (this.var_243 = r),
      (this.var_120 = t),
      (this._rdb14348f8757f4 = i));
  }
  dispose() {
    (super.dispose(), (this.var_120 = null));
  }
  get _r07a29a11e88a0f() {
    return null;
  }
  get _r24b48ffa5796a4() {
    return M0._r4967436389a7cc;
  }
  get _r502e71c4c81659() {
    return this.var_120?.location ?? null;
  }
  get fuseObjectId() {
    return this._rdb14348f8757f4;
  }
  get snowballCount() {
    return this.var_243;
  }
  subturn(e) {}
  _r8369db85d616c0(e) {
    return (
      this.var_243 < e && (e = this.var_243),
      (this.var_243 -= e),
      this.onSnowballPickup(),
      e
    );
  }
  onSnowBallHit(e, r) {}
  onSnowballPickup() {}
}
