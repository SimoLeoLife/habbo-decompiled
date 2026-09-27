// Estratto da HabboAirLauncher.deobf.js, riga 278107.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureParticleSystemParticle.as
// Nome offuscato: _i07d560c92130db

class {
  static {
    n(this, "FurnitureParticleSystemParticle");
  }
  _x = 0;
  _y = 0;
  _z = 0;
  var_1823 = 0;
  var_2003 = 0;
  var_1911 = 0;
  var_1085 = !1;
  var_81 = null;
  var_700 = 0;
  _lifeTime = 0;
  var_2876 = !1;
  _fade = !1;
  _rd35077c8f9232b = 0;
  _alphaMultiplier = 1;
  _frames = null;
  get fade() {
    return this._fade;
  }
  get alphaMultiplier() {
    return this._alphaMultiplier;
  }
  get direction() {
    return this.var_81;
  }
  get age() {
    return this.var_700;
  }
  init(e, r, t, i, s, o, d, c = !1, f = null, l = !1) {
    ((this._x = e),
      (this._y = r),
      (this._z = t),
      (this.var_81 = new k(i.x, i.y, i.z)),
      this.var_81.mul(s),
      (this.var_1823 = this._x - this.var_81.x * o),
      (this.var_2003 = this._y - this.var_81.y * o),
      (this.var_1911 = this._z - this.var_81.z * o),
      (this.var_700 = 0),
      (this.var_1085 = !1),
      (this._lifeTime = d),
      (this.var_2876 = c),
      (this._frames = f),
      (this._fade = l),
      (this._alphaMultiplier = 1),
      (this._rd35077c8f9232b = 0.5 + Math.random() * 0.5));
  }
  update() {
    (this.var_700++,
      this.var_700 === this._lifeTime && this.ignite(),
      this._fade &&
        this.var_700 / this._lifeTime > this._rd35077c8f9232b &&
        (this._alphaMultiplier =
          (this._lifeTime - this.var_700) /
          (this._lifeTime * (1 - this._rd35077c8f9232b))));
  }
  getAsset() {
    return this._frames != null && this._frames.length > 0
      ? (this._frames[this.var_700 % this._frames.length] ?? null)
      : null;
  }
  ignite() {}
  get isEmitter() {
    return this.var_2876;
  }
  get _r9b005d808c9efe() {
    return this.var_700 <= this._lifeTime;
  }
  dispose() {
    ((this.var_81 = null), (this._frames = null));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
  }
  get lastX() {
    return this.var_1823;
  }
  set lastX(e) {
    ((this.var_1085 = !0), (this.var_1823 = e));
  }
  get lastY() {
    return this.var_2003;
  }
  set lastY(e) {
    ((this.var_1085 = !0), (this.var_2003 = e));
  }
  get _rc03d1ddfe8e732() {
    return this.var_1911;
  }
  set _rc03d1ddfe8e732(e) {
    ((this.var_1085 = !0), (this.var_1911 = e));
  }
  get hasMoved() {
    return this.var_1085;
  }
  toString() {
    return [this._x, this._y, this._z].toString();
  }
  copy(e, r) {
    ((this._x = e._x * r),
      (this._y = e._y * r),
      (this._z = e._z * r),
      (this.var_1823 = e.var_1823 * r),
      (this.var_2003 = e.var_2003 * r),
      (this.var_1911 = e.var_1911 * r),
      (this.var_1085 = e.hasMoved),
      (this.var_81 = e.var_81),
      (this.var_700 = e.var_700),
      (this._lifeTime = e._lifeTime),
      (this.var_2876 = e.var_2876),
      (this._fade = e._fade),
      (this._rd35077c8f9232b = e._rd35077c8f9232b),
      (this._alphaMultiplier = e._alphaMultiplier),
      (this._frames = e._frames));
  }
}
