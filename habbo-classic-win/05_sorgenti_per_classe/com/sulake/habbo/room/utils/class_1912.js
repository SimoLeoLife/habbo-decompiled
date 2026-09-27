// Extracted from HabboAirLauncher.deobf.js, line 294315.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/class_1912.as
// Obfuscated name: _i80f75fb0bfd290

class a {
  static {
    n(this, "class_1912");
  }
  static MOVE_SPEED_DENOMINATOR = 12;
  var_4582 = -1;
  _r5aaf9a6ef0ff66 = RoomObjectCategoryEnum.const_434;
  var_349 = null;
  var_2405 = 0;
  var_3029 = 0;
  var_3403 = !1;
  var_232 = null;
  _rde74742eeb3e4b = new k();
  _r9112c8fb66c6b6 = !1;
  _r9800deb46ccc7c = !1;
  _r444e7b93506828 = !1;
  _r0dac5e268c3b14 = !1;
  _rd523173cdc2dac = 0;
  _r76bc5dbe19a4a6 = 0;
  _scale = 0;
  _r33d4cd74839d7a = 0;
  _r5d725ca0446b08 = 0;
  var_3208 = -1;
  var_3093 = !1;
  var_5679 = 0;
  get location() {
    return this.var_232;
  }
  get targetId() {
    return this.var_4582;
  }
  get _r8a7ceb813931b2() {
    return this._r5aaf9a6ef0ff66;
  }
  get _r51efde0c9a80ae() {
    return this._rde74742eeb3e4b;
  }
  get _r84384cd604654a() {
    return this._r9112c8fb66c6b6;
  }
  get _rbcb9002ff6a792() {
    return this._r9800deb46ccc7c;
  }
  get _r3266627f95bdbe() {
    return this._r444e7b93506828;
  }
  get _rfba0834cbe0886() {
    return this._r0dac5e268c3b14;
  }
  get _r76b39cf1435dcf() {
    return this._rd523173cdc2dac;
  }
  get _rf91d334d7942e0() {
    return this._r76bc5dbe19a4a6;
  }
  get scale() {
    return this._scale;
  }
  get _r22e984ba459928() {
    return this._r33d4cd74839d7a;
  }
  get _r7efc4b85af1f56() {
    return this._r5d725ca0446b08;
  }
  get _r94e842a5d2b12f() {
    return this.var_3208;
  }
  get _r4c3d51c4316d99() {
    return this.var_349 != null && this.var_232 != null;
  }
  set targetId(e) {
    this.var_4582 = e;
  }
  set _r8a7ceb813931b2(e) {
    this._r5aaf9a6ef0ff66 = e;
  }
  set _r51efde0c9a80ae(e) {
    this._rde74742eeb3e4b.assign(e);
  }
  set _r84384cd604654a(e) {
    this._r9112c8fb66c6b6 = e;
  }
  set _rbcb9002ff6a792(e) {
    this._r9800deb46ccc7c = e;
  }
  set _r3266627f95bdbe(e) {
    this._r444e7b93506828 = e;
  }
  set _rfba0834cbe0886(e) {
    this._r0dac5e268c3b14 = e;
  }
  set _r76b39cf1435dcf(e) {
    this._rd523173cdc2dac = e;
  }
  set _rf91d334d7942e0(e) {
    this._r76bc5dbe19a4a6 = e;
  }
  set _r22e984ba459928(e) {
    this._r33d4cd74839d7a = e;
  }
  set _r7efc4b85af1f56(e) {
    this._r5d725ca0446b08 = e;
  }
  set _r94e842a5d2b12f(e) {
    this.var_3208 = e;
  }
  set scale(e) {
    this._scale !== e && ((this._scale = e), (this.var_3093 = !0));
  }
  set target(e) {
    if (
      (this.var_349 == null && (this.var_349 = new k()),
      (this.var_349.x !== e.x ||
        this.var_349.y !== e.y ||
        this.var_349.z !== e.z) &&
        (this.var_349.assign(e), this.var_232 != null))
    ) {
      let r = k.dif(this.var_349, this.var_232);
      ((this.var_2405 = r?.length ?? 0), (this.var_3403 = !0));
    }
  }
  dispose() {
    ((this.var_349 = null), (this.var_232 = null));
  }
  _r01ffa1ee62d014(e) {
    this.var_232 == null && ((this.var_232 = new k()), this.var_232.assign(e));
  }
  _r34ac7c847f5d61(e) {
    (this.var_232 == null && (this.var_232 = new k()), this.var_232.assign(e));
  }
  update(e, r) {
    if (this.var_5679 > 0 && this.var_349 != null && this.var_232 != null) {
      if (this.var_3093) {
        ((this.var_3093 = !1),
          (this.var_232 = this.var_349),
          (this.var_349 = null));
        return;
      }
      let t = k.dif(this.var_349, this.var_232);
      if (t == null) return;
      if ((t.length > this.var_2405 && (this.var_2405 = t.length), t.length <= r))
        ((this.var_232 = this.var_349),
          (this.var_349 = null),
          (this.var_3029 = 0));
      else {
        let i = Math.sin((Math.PI * t.length) / this.var_2405),
          s = r * 0.5,
          o = this.var_2405 / a.MOVE_SPEED_DENOMINATOR,
          d = s + (o - s) * i;
        (this.var_3403 &&
          (d < this.var_3029
            ? ((d = this.var_3029), d > t.length && (d = t.length))
            : (this.var_3403 = !1)),
          (this.var_3029 = d),
          t.div(t.length),
          t.mul(d),
          (this.var_232 = k.sum(this.var_232, t)));
      }
    }
  }
  reset() {
    this.var_3208 = -1;
  }
  _r0d91b674577f8d(e) {
    this.var_5679 = e;
  }
}
