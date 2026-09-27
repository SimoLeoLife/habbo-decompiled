// Estratto da HabboAirLauncher.deobf.js, riga 219184.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/SnowBallGameObject.as
// Nome offuscato: _i476344de23bbdc

class a extends SnowWarGameObject {
  static {
    n(this, "SnowBallGameObject");
  }
  static TRAJECTORY_QUICK_THROW = 0;
  static TRAJECTORY_SHORT_LOB = 1;
  static TRAJECTORY_LONG_LOB = 2;
  static _re228ef8af7af52 = 3;
  static THROW_VELOCITY = 2e3;
  static INITIAL_HEIGHT = 3e3;
  static _r3cbe6817f2fec4 = 2 / 1.414 / a.THROW_VELOCITY;
  static _r4f227926fe7a1e = 2.236 / 2 / a.THROW_VELOCITY;
  static QUICK_THROW_MAX_RANGE = 2e4;
  static SHORT_LOB_MAX_RANGE = 6e4;
  static LONG_LOB_MAX_RANGE = 1e5;
  static DEFAULT_THROW_TO_LOB_CUTOFF_RANGE = 42e3;
  static const_538 = 10;
  static SHORT_LOB_HEIGHT_SCALING_FACTOR = 25;
  static const_947 = 50;
  static BOUNDING_DATA = [400];
  static _r7d51bd068f5220 = 3;
  static GRAVITY = 15;
  _location3D = new Is(0, 0, 0);
  setIntValue = new ri(0);
  var_307 = 0;
  var_795 = 0;
  var_235 = 0;
  var_1577 = null;
  var_1109 = 0;
  constructor(e) {
    super(e, !1);
  }
  dispose() {
    (super.dispose(),
      this._location3D.dispose(),
      this.setIntValue.dispose(),
      (this.var_307 = 0),
      (this.var_795 = 0),
      (this.var_235 = 0),
      (this.var_1577 = null),
      (this.var_1109 = 0));
  }
  _r0304025195c332(e, r) {
    (this._location3D.changeLocation(e.locationX3D, e.locationY3D, e._r1acd390142c80c),
      this.setIntValue._movementDirection360(e._rec9630da82b277),
      (this.var_307 = e.trajectory),
      (this.var_795 = e._rdde3a8de3f9ceb),
      (this.var_235 = e._r970c4511993861),
      (this.var_1577 = r),
      (this.var_1109 = e._rc2bae7730c6739),
      (this._active = !0));
  }
  initialize(e, r, t, i, s, o, d) {
    ((this._active = !0),
      this._location3D.changeLocation(e, r, t),
      (this.var_307 = i));
    let c = s - e,
      f = o - r;
    ((c = class_4083.javaDiv(c / 200)),
      (f = class_4083.javaDiv(f / 200)),
      this.setIntValue._movementDirection360(ri.getAngleFromComponents(c, f)));
    let l = B4e.fast_sqrt(c * c + f * f) * 200;
    (this.initializeTrajectory(i, l),
      this.var_307 === a.TRAJECTORY_QUICK_THROW
        ? ((this.var_235 = Math.trunc(a.QUICK_THROW_MAX_RANGE / a.THROW_VELOCITY)),
          (this.var_795 = a.THROW_VELOCITY))
        : this.var_307 === a.TRAJECTORY_SHORT_LOB
          ? ((l = Math.min(l, a.SHORT_LOB_MAX_RANGE)),
            (this.var_235 = Math.trunc(l * a._r4f227926fe7a1e)),
            (this.var_795 =
              this.var_235 === 0 ? 0 : class_4083.javaDiv(l / this.var_235)))
          : this.var_307 === a.TRAJECTORY_LONG_LOB &&
            ((l = Math.min(l, a.LONG_LOB_MAX_RANGE)),
            (this.var_235 = Math.trunc(l * a._r3cbe6817f2fec4)),
            (this.var_795 =
              this.var_235 === 0 ? 0 : class_4083.javaDiv(l / this.var_235))),
      (this.var_1109 = class_4083.javaDiv(this.var_235 / 2)),
      (this.var_1577 = d));
  }
  initializeTrajectory(e, r) {
    e === a._re228ef8af7af52
      ? r <= a.DEFAULT_THROW_TO_LOB_CUTOFF_RANGE
        ? (this.var_307 = a.TRAJECTORY_QUICK_THROW)
        : r <= a.SHORT_LOB_MAX_RANGE
          ? (this.var_307 = a.TRAJECTORY_SHORT_LOB)
          : (this.var_307 = a.TRAJECTORY_LONG_LOB)
      : (this.var_307 = e);
  }
  get _r4bc6d443f1bcb2() {
    return dq.const_38;
  }
  getVariable(e) {
    switch (e) {
      case 0:
        return Xa._r8c8ac0804fdcce;
      case 1:
        return this.var_686;
      case 2:
        return this._location3D.x;
      case 3:
        return this._location3D.y;
      case 4:
        return this._location3D.z;
      case 5:
        return this.setIntValue.intValue();
      case 6:
        return this.var_307;
      case 7:
        return this.var_235;
      case 8:
        return this.var_1577 == null ? -1 : this.var_1577._r8f79a04a0ab07b;
      case 9:
        return this.var_1109;
      case 10:
        return this.var_795;
      default:
        throw new Error(`No such variable:${String(e)}`);
    }
  }
  get _r07a29a11e88a0f() {
    return this.setIntValue;
  }
  get _r24b48ffa5796a4() {
    return M0._r4967436389a7cc;
  }
  get _r2651fdcb0df06e() {
    return a.BOUNDING_DATA;
  }
  get _r502e71c4c81659() {
    return this._location3D;
  }
  subturn(e) {
    let r = e;
    if (!this._active) return;
    (this.var_235--,
      this.var_307 === a.TRAJECTORY_QUICK_THROW
        ? this.updatePosition(a.const_538, !0)
        : this.var_307 === a.TRAJECTORY_SHORT_LOB
          ? this.updatePosition(a.SHORT_LOB_HEIGHT_SCALING_FACTOR, !1)
          : this.updatePosition(a.const_947, !1));
    let t = ti.convertToTileX(this._location3D.x),
      i = ti.convertToTileY(this._location3D.y),
      s = r.getTileAt(t, i),
      o = this.testCollisions(r, s);
    (o || ((o = r.testCollisionWithGround(this)), o && xs.playSound(HabboSoundTypesEnum.GAMES_SW_MISS)),
      o && r._r91cf818f369ca8(this));
  }
  testCollisions(e, r) {
    let t = !1;
    if (r != null && ((t = this._ref38309520bd1a(e, r)), !t)) {
      let i = this.setIntValue._r4e50794a48be8d() ?? ns.SE;
      ((t = this._ref38309520bd1a(e, r._r5f5473929168c6(i))),
        t ||
          ((t = this._ref38309520bd1a(e, r._r5f5473929168c6(i._r3908afe8f7843a(!1)))),
          t || (t = this._ref38309520bd1a(e, r._r5f5473929168c6(i._r3908afe8f7843a(!0))))));
    }
    return t;
  }
  _ref38309520bd1a(e, r) {
    if (r != null) {
      let t = r._rc8aff72414e7ca;
      if (t != null && t._r64f436fedfa81d(this)) return (t.onSnowBallHit(e, this), !0);
    }
    return !1;
  }
  updatePosition(e, r) {
    let t =
        this._location3D.x +
        class_4083.javaDiv((this.setIntValue._r7399670b5c7499() * this.var_795) / 255),
      i =
        this._location3D.y +
        class_4083.javaDiv((this.setIntValue._rc1d3846091fd16() * this.var_795) / 255),
      s = this.var_235 - this.var_1109,
      o = (this.var_1109 * this.var_1109 - s * s) * e + a.INITIAL_HEIGHT;
    (r && (o = Math.min(o, a.INITIAL_HEIGHT)), this._location3D.changeLocation(t, i, o));
  }
  onSnowBallHit(e, r) {}
  toString() {
    return ` location=(${String(this._location3D.x)},${String(this._location3D.y)},${String(this._location3D.z)}) dir=${this.setIntValue.toString()} paraOffs=${String(this.var_1109)} ttl=${String(this.var_235)}`;
  }
  get _r2b90cc10c41442() {
    return this.var_1577;
  }
}
