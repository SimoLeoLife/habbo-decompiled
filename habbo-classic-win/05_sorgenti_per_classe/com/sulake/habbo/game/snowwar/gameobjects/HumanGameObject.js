// Extracted from HabboAirLauncher.deobf.js, line 218687.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/HumanGameObject.as
// Obfuscated name: _id28af6dd8ebaf3

class a extends SnowWarGameObject {
  constructor(r, t, i, s) {
    super(t.id, i);
    this._rc48cb7ca67aee6 = s;
    ((this.var_1562 = t.sex),
      (this._name = t.name),
      (this.var_3185 = t.mission),
      (this.var_1129 = t.figure),
      (this.var_1369 = t.team),
      (this._userId = t.userId),
      (this.var_99 = t.activityState),
      (this.var_321 = t.activityTimer),
      this.var_134.var_328(t.currentLocationX, t.currentLocationY),
      (this.var_641 = ns.getDirection8(t._r14e868854a1f2e) ?? ns.SE),
      (this._hitPoints = t.hitPoints),
      this._r168333dfbc7927.var_328(t.moveTargetX, t.moveTargetY),
      (this.var_243 = t.snowBallCount),
      (this.var_971 = t.score),
      (this.var_120 = r.getTileAt(t._rdda6838c15e9a9, t._r6b8f9859b7d8e9)),
      this.var_120._r29463a5878c079(this));
    let o = r.getTileAt(t.nextTileX, t.nextTileY);
    (o !== this.var_120 &&
      ((this._rd47c0998e9bc9d = o),
      this._rd47c0998e9bc9d?._r29463a5878c079(this),
      this.var_120.occupyingHuman(),
      (this.var_431 = !0)),
      (this._rb44e7f37c93f1d = new B()));
  }
  static {
    n(this, "HumanGameObject");
  }
  static const_1134 = 534;
  static _r9206f2ccc2464b = 5;
  static _rd3747cbc99f376 = 5;
  static _rbd100f16417f5a = 5;
  static SNOWBALL_CREATE_TIME = 20;
  static STUN_TIME = 100;
  static INVINCIBLE_AFTER_STUN_TIME = 60;
  static _r1e6fb188c8c23d = 0;
  static _ra78ea96f8079bc = 1;
  static ACTIVITY_STATE_STUNNED = 2;
  static ACTIVITY_STATE_INVINCIBLE_AFTER_STUN = 3;
  static _r413c1697499f65 = 5;
  static BOUNDING_DATA = [1600];
  static PLAYER_HEIGHT = 5e3;
  static _rf4b5133a230c0f = 5;
  static _r5838705e02ae9a = 1;
  var_120;
  _rd47c0998e9bc9d = null;
  var_431 = !1;
  var_134 = new Is(0, 0, 0);
  _r168333dfbc7927 = new Is(0, 0, 0);
  var_641 = ns.SE;
  _hitPoints;
  var_243;
  var_4216 = 0;
  var_321;
  var_99;
  var_971 = 0;
  var_1369;
  var_1223 = 0;
  _name;
  var_3185;
  var_1129;
  var_1562;
  _userId;
  _visualizationMode = 0;
  _rb44e7f37c93f1d;
  get visualizationMode() {
    return this._visualizationMode;
  }
  set visualizationMode(r) {
    this._visualizationMode = r;
  }
  get _r049ac0f6c43932() {
    return this.var_99 === a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN;
  }
  dispose() {
    (super.dispose(),
      (this.var_1562 = ""),
      (this._name = ""),
      (this.var_3185 = ""),
      (this.var_1129 = ""),
      (this.var_1369 = 0),
      (this._userId = 0),
      this.var_134.dispose(),
      this._r168333dfbc7927.dispose(),
      (this.var_120 = null),
      (this._rd47c0998e9bc9d = null),
      (this.var_641 = null),
      (this.var_243 = 0),
      (this.var_971 = 0),
      (this.var_431 = !1),
      (this._rc48cb7ca67aee6 = null),
      this._rb44e7f37c93f1d.dispose(),
      (this._rb44e7f37c93f1d = null));
  }
  get _r4bc6d443f1bcb2() {
    return oq.const_38;
  }
  getVariable(r) {
    switch (r) {
      case 0:
        return Xa._rd5551a032e5fdf;
      case 1:
        return this.var_686;
      case 2:
        return this.var_134.x;
      case 3:
        return this.var_134.y;
      case 4:
        return this.var_120.fuseLocation[0];
      case 5:
        return this.var_120.fuseLocation[1];
      case 6:
        return this.var_641.intValue();
      case 7:
        return this._hitPoints;
      case 8:
        return this.var_243;
      case 9:
        return this.var_4216;
      case 10:
        return this.var_321;
      case 11:
        return this.var_99;
      case 12:
        return this._rd47c0998e9bc9d != null
          ? this._rd47c0998e9bc9d.fuseLocation[0]
          : this.var_120.fuseLocation[0];
      case 13:
        return this._rd47c0998e9bc9d != null
          ? this._rd47c0998e9bc9d.fuseLocation[1]
          : this.var_120.fuseLocation[1];
      case 14:
        return this._r168333dfbc7927.x;
      case 15:
        return this._r168333dfbc7927.y;
      case 16:
        return this.var_971;
      case 17:
        return this.var_1369;
      case 18:
        return this._userId;
      default:
        throw new Error(`No such variable:${String(r)}`);
    }
  }
  _r520ee7e4b093c5(r) {
    (this.var_134.var_328(r.var_134.x, r.var_134.y),
      (this.var_120 = r.var_120),
      (this.var_641 = r.var_641),
      (this._hitPoints = r._hitPoints),
      (this.var_243 = r.var_243),
      (this.var_4216 = r.var_4216),
      (this.var_321 = r.var_321),
      (this.var_99 = r.var_99),
      (this._rd47c0998e9bc9d = r._rd47c0998e9bc9d),
      this._r168333dfbc7927.var_328(r._r168333dfbc7927.x, r._r168333dfbc7927.y),
      (this.var_971 = r.var_971),
      (this.var_1369 = r.var_1369),
      (this._userId = r._userId));
  }
  _rb1a806cfde3dd4(r, t) {
    let i = this._rb44e7f37c93f1d.getValue(r) ?? null;
    return i != null ? i._rfd9334f88a7bef(t, ti._r14b7cf0af9464b) : !1;
  }
  _ra453f655136d7a(r) {
    let t = new Is(0, 0, 0);
    (t.var_328(this.var_134.x, this.var_134.y),
      this._rb44e7f37c93f1d.setProperty(r, t));
  }
  _r747adb286ed874(r) {
    this._rb44e7f37c93f1d.remove(r);
  }
  _r5abf3f0c0d47ca(r) {
    this.var_641 = r;
  }
  get _r24b48ffa5796a4() {
    return M0._r4967436389a7cc;
  }
  get _r2651fdcb0df06e() {
    return a.BOUNDING_DATA;
  }
  get _r502e71c4c81659() {
    return this.var_134;
  }
  get _r07a29a11e88a0f() {
    return null;
  }
  onRemove() {
    (this.var_120 != null &&
      this.var_120._r7bd2f517b4abf8 === this &&
      this.var_120.occupyingHuman(),
      this._rd47c0998e9bc9d != null &&
        this._rd47c0998e9bc9d._r7bd2f517b4abf8 === this &&
        this._rd47c0998e9bc9d.occupyingHuman(),
      (this.var_431 = !1));
  }
  _r25b4be8c8ce013() {
    if (this.var_99 === a.ACTIVITY_STATE_STUNNED) {
      ((this._hitPoints = a._rbd100f16417f5a),
        (this.var_99 = a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN),
        (this.var_321 = a.INVINCIBLE_AFTER_STUN_TIME));
      return;
    } else this.var_99 === a._ra78ea96f8079bc && this.var_243++;
    ((this.var_99 = a._r1e6fb188c8c23d),
      this._rc48cb7ca67aee6._r9789283ff9852d(this._r8f79a04a0ab07b));
  }
  subturn(r) {
    if (
      (this.var_321 > 0 &&
        (this.var_321 === 1 && this._r25b4be8c8ce013(), this.var_321--),
      this.var_1223 > 0 && this.var_1223--,
      this._r446c30c2e630ad() && this.var_120 != null)
    )
      if (this._rd47c0998e9bc9d != null) this._r02667704afd2c2();
      else if (this.var_120._r42d36e72195cde(this._r168333dfbc7927)) this.var_431 = !1;
      else {
        let t = ri.getAngleFromComponents(
            this._r168333dfbc7927.x - this.var_120.location.x,
            this._r168333dfbc7927.y - this.var_120.location.y,
          ),
          i = ri.direction360ValueToDirection8(t) ?? this.var_641;
        if (
          ((this._rd47c0998e9bc9d = this.var_120._r5f5473929168c6(i)),
          this._rd47c0998e9bc9d == null || !this._rd47c0998e9bc9d._r2838700b17d923(this))
        ) {
          if (
            this._rd47c0998e9bc9d != null &&
            !this._rd47c0998e9bc9d._r2838700b17d923(this) &&
            this._r168333dfbc7927.equals(this._rd47c0998e9bc9d.location)
          ) {
            ((this._rd47c0998e9bc9d = null), this._rf5e5889de14c6f());
            return;
          }
          ((i = i._r34d3544f507ede(-1)),
            (this._rd47c0998e9bc9d = this.var_120._r5f5473929168c6(i)),
            (this._rd47c0998e9bc9d == null || !this._rd47c0998e9bc9d._r2838700b17d923(this)) &&
              ((i = i._r34d3544f507ede(2)),
              (this._rd47c0998e9bc9d = this.var_120._r5f5473929168c6(i)),
              this._rd47c0998e9bc9d != null &&
                !this._rd47c0998e9bc9d._r2838700b17d923(this) &&
                (this._rd47c0998e9bc9d = null)));
        }
        this._rd47c0998e9bc9d != null
          ? (this._rba12f0325cedd5 ||
              (this.var_120.occupyingHuman(), this._rd47c0998e9bc9d._r29463a5878c079(this)),
            this._r5abf3f0c0d47ca(i),
            this._r02667704afd2c2())
          : (this.var_431 = !1);
      }
    else this.var_431 = !1;
  }
  _r02667704afd2c2() {
    let r = this._rd47c0998e9bc9d.location.x,
      t = this.var_134.x,
      i = t - r;
    i !== 0 &&
      (i < 0
        ? (t = i > -a.const_1134 ? r : t + a.const_1134)
        : (t = i < a.const_1134 ? r : t - a.const_1134));
    let s = this._rd47c0998e9bc9d.location.y,
      o = this.var_134.y,
      d = o - s;
    (d !== 0 &&
      (d < 0
        ? (o = d > -a.const_1134 ? s : o + a.const_1134)
        : (o = d < a.const_1134 ? s : o - a.const_1134)),
      this.var_134.var_328(t, o),
      this.var_134._r70ba8723ae7eed(this._rd47c0998e9bc9d.location) <
        class_4083.javaDiv(a.const_1134 / 2) &&
        ((this.var_120 = this._rd47c0998e9bc9d), (this._rd47c0998e9bc9d = null)),
      (this.var_431 = !0));
  }
  _r9b4b054d74f4a8(r, t) {
    (this.var_99 === a._ra78ea96f8079bc &&
      ((this.var_99 = a._r1e6fb188c8c23d),
      (this.var_321 = 0),
      this._rc48cb7ca67aee6._r9789283ff9852d(this._r8f79a04a0ab07b)),
      (this.var_99 === a._r1e6fb188c8c23d || this.var_99 === a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN) &&
        this._r168333dfbc7927.var_328(r, t));
  }
  get _re4f88bac64d340() {
    return this.var_134;
  }
  playerIsHitBySnowball(r, t, i) {
    this.var_3326 ||
      (this.var_1369 !== t.team &&
        this._hitPoints > 0 &&
        (this._hitPoints === 1 &&
          (this.playerFallsDown(i), t.onKnockDownHuman(r, this), xs.playSound(HabboSoundTypesEnum.GAMES_SW_HIT3)),
        this._hitPoints--,
        this._rc48cb7ca67aee6._r0f3c9e6a669f7d(this, t)));
  }
  _r590f942d7de689(r, t) {
    !t._rba12f0325cedd5 &&
      (this.team !== t.team || (r._r0c148637e03364?.getExtension()).isDeathMatch()) &&
      this._r0664576a1952b0(r._r0c148637e03364, a._r5838705e02ae9a);
  }
  onKnockDownHuman(r, t) {
    !t._rba12f0325cedd5 &&
      (this.team !== t.team || (r._r0c148637e03364?.getExtension()).isDeathMatch()) &&
      this._r0664576a1952b0(r._r0c148637e03364, a._rf4b5133a230c0f);
  }
  _r0664576a1952b0(r, t) {
    ((this.var_971 += t), r._r47263a8b3b70be(this.team, t));
  }
  playerFallsDown(r) {
    ((this.var_99 = a.ACTIVITY_STATE_STUNNED),
      (this.var_321 = a.STUN_TIME),
      this._r5abf3f0c0d47ca(ri.direction360ValueToDirection8(r)?._rc182b5cb7d10dc() ?? ns.SE),
      this._rf5e5889de14c6f(),
      this._rc48cb7ca67aee6._r9789283ff9852d(this._r8f79a04a0ab07b));
  }
  _rf5e5889de14c6f() {
    (this._rd47c0998e9bc9d == null
      ? (this._r168333dfbc7927._racd7288ae80f7b(this.var_120.location),
        this.var_134._racd7288ae80f7b(this.var_120.location))
      : ((this.var_120 = this._rd47c0998e9bc9d),
        this.var_134._racd7288ae80f7b(this._rd47c0998e9bc9d.location),
        this._r168333dfbc7927._racd7288ae80f7b(this._rd47c0998e9bc9d.location),
        (this._rd47c0998e9bc9d = null)),
      (this.var_431 = !1));
  }
  _r316cee6ba708c4() {
    return this.var_641.intValue();
  }
  _r15e0fb701bf1ae() {
    return (
      this.var_243 > 0 &&
      this.var_1223 < 1 &&
      (this.var_99 === a._r1e6fb188c8c23d || this.var_99 === a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN)
    );
  }
  _r5061b965d73920() {
    this.var_1223 = a._r413c1697499f65;
  }
  _rb7ed976997a0d9(r, t) {
    if (this.var_243 < 1) return !1;
    this._rf5e5889de14c6f();
    let i = ri.getAngleFromComponents(r - this.var_134.x, t - this.var_134.y),
      s = ri.direction360ValueToDirection8(i)?.intValue() ?? this.var_641.intValue();
    return (
      this._r5abf3f0c0d47ca(ns.getDirection8(s) ?? this.var_641),
      this.var_243--,
      !0
    );
  }
  _r446c30c2e630ad() {
    return this.var_99 === a._r1e6fb188c8c23d || this.var_99 === a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN;
  }
  _r6d4287435f29f1() {
    return (
      (this.var_99 === a._r1e6fb188c8c23d || this.var_99 === a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN) &&
      (this.var_243 < a._rd3747cbc99f376 || this._rba12f0325cedd5)
    );
  }
  _r3b945227ee69c0() {
    this._r6d4287435f29f1() &&
      ((this.var_99 = a._ra78ea96f8079bc),
      (this.var_321 = a.SNOWBALL_CREATE_TIME),
      this._rf5e5889de14c6f());
  }
  _r075592df573313() {
    return a._rd3747cbc99f376 - this.var_243;
  }
  _r64bf332f18b131(r) {
    this.var_243 += r;
  }
  _rcaafba71916eb2() {
    return this.var_99 === a.ACTIVITY_STATE_STUNNED;
  }
  get name() {
    return this._name;
  }
  get mission() {
    return this.var_3185;
  }
  get figure() {
    return this.var_1129;
  }
  get sex() {
    return this.var_1562;
  }
  get score() {
    return this.var_971;
  }
  get team() {
    return this.var_1369;
  }
  get snowballs() {
    return this.var_243;
  }
  get hitPoints() {
    return this._hitPoints;
  }
  get posture() {
    if (this.var_1223 > 0) return ve.POSTURE_SNOWWAR_THROW;
    switch (this.var_99) {
      case a.ACTIVITY_STATE_STUNNED:
        return ve.POSTURE_SNOWWAR_DIE_BACK;
      case a._ra78ea96f8079bc:
        return ve.POSTURE_SNOWWAR_PICK;
      default:
        break;
    }
    return this.var_431 ? ve.POSTURE_SNOWWAR_RUN : ve.POSTURE_STAND;
  }
  get action() {
    switch (this.var_99) {
      case a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN:
        return RoomObjectVariableEnum.const_1195;
      default:
        return RoomObjectVariableEnum.const_1195;
    }
  }
  get parameter() {
    if (this.var_1223 > 1) return 1;
    if (this.var_1223 === 1) return 0;
    switch (this.var_99) {
      case a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN:
        return 1;
      default:
        return 0;
    }
  }
  _r64f436fedfa81d(r) {
    return !!(
      !this.var_3326 &&
      this.var_99 !== a.ACTIVITY_STATE_STUNNED &&
      this.var_99 !== a.ACTIVITY_STATE_INVINCIBLE_AFTER_STUN &&
      r._r2b90cc10c41442 !== this &&
      super._r64f436fedfa81d(r)
    );
  }
  onSnowBallHit(r, t) {
    let i = t._r2b90cc10c41442;
    (this.playerIsHitBySnowball(r, i, t._r07a29a11e88a0f.intValue()),
      i._r590f942d7de689(r, this),
      xs.playSound(HabboSoundTypesEnum.GAMES_SW_HIT1));
  }
  get _r770408bc5f2523() {
    return a.PLAYER_HEIGHT;
  }
  toString() {
    return ` ref:${String(this.var_686)}_name:${this._name}`;
  }
}
