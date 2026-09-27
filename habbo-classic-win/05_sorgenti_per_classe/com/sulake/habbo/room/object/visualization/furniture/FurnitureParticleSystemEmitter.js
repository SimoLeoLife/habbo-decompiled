// Extracted from HabboAirLauncher.deobf.js, line 278245.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureParticleSystemEmitter.as
// Obfuscated name: _i99695989e9aff3

class a extends FurnitureParticleSystemParticle {
  constructor(r = "", t = -1) {
    super();
    this._rbdcb64b374a8ea = r;
    this._r0bb21a42832954 = t;
  }
  static {
    n(this, "FurnitureParticleSystemEmitter");
  }
  static SHAPE_CONE = "cone";
  static SHAPE_PLANE = "plane";
  static SHAPE_SPHERE = "sphere";
  _rbfbc04cd77eee9 = [];
  _particles = [];
  var_2812 = 0;
  _rf79c7f29cb9ab7 = new k();
  var_1392 = 0.1;
  getAttraction = 0;
  _rda0c96c634c17a = 0;
  _r783590d3bb9731 = "";
  _maxNumberOfParticles = 0;
  _particlesPerFrame = 0;
  _emittedParticles = 0;
  _fuseTime = 10;
  var_2547 = 1;
  var_5567 = !1;
  var_2682 = 1;
  dispose() {
    for (let r of this._particles) r.dispose();
    ((this._particles = []), super.dispose());
  }
  setup(r, t, i, s, o, d, c, f, l, b) {
    ((this._maxNumberOfParticles = r),
      (this._particlesPerFrame = t),
      (this.var_2812 = i),
      (this._rf79c7f29cb9ab7 = s),
      normalize_(this._rf79c7f29cb9ab7),
      (this.getAttraction = o),
      (this._rda0c96c634c17a = d),
      (this._r783590d3bb9731 = c),
      (this._fuseTime = l),
      (this.var_2547 = f),
      (this.var_2682 = b),
      this.reset());
  }
  reset() {
    for (let r of this._particles) r.dispose();
    ((this._particles = []),
      (this._emittedParticles = 0),
      (this.var_5567 = !1),
      this.init(
        0,
        0,
        0,
        this._rf79c7f29cb9ab7,
        this.var_2812,
        this.var_1392,
        this._fuseTime,
        !0,
      ));
  }
  _r41f81c78ef0904(r, t) {
    (super.copy(r, t),
      (this.var_2812 = r.var_2812),
      (this._rf79c7f29cb9ab7 = r._rf79c7f29cb9ab7),
      (this.getAttraction = r.getAttraction),
      (this._rda0c96c634c17a = r._rda0c96c634c17a),
      (this._r783590d3bb9731 = r._r783590d3bb9731),
      (this._fuseTime = r._fuseTime),
      (this.var_2547 = r.var_2547),
      (this.var_2682 = r.var_2682),
      (this.var_1392 = r.var_1392),
      (this.var_5567 = r.var_5567));
  }
  configureParticle(r, t, i, s) {
    this._rbfbc04cd77eee9.push({ lifeTime: r, isEmitter: t, frames: i, fade: s });
  }
  ignite() {
    ((this.var_5567 = !0),
      this._emittedParticles < this._maxNumberOfParticles &&
        this.age > 1 &&
        this.releaseParticles(this, this.direction ?? new k()));
  }
  update() {
    (super.update(),
      this._re6adcc56b72cdc(),
      this._rcd004112de6809(),
      this._r607053f5c21f96(),
      !this._r9b005d808c9efe &&
        this._emittedParticles < this._maxNumberOfParticles &&
        this.age % this.var_2682 === 0 &&
        this.releaseParticles(this, this.direction ?? new k()));
  }
  _rcd004112de6809() {
    if (this._r9b005d808c9efe || this._emittedParticles < this._maxNumberOfParticles) {
      let t = this.x,
        i = this.y,
        s = this.z;
      ((this.x = (2 - this._rda0c96c634c17a) * this.x - (1 - this._rda0c96c634c17a) * this.lastX),
        (this.y =
          (2 - this._rda0c96c634c17a) * this.y -
          (1 - this._rda0c96c634c17a) * this.lastY +
          this.getAttraction * this.var_1392 * this.var_1392),
        (this.z = (2 - this._rda0c96c634c17a) * this.z - (1 - this._rda0c96c634c17a) * this._rc03d1ddfe8e732),
        (this.lastX = t),
        (this.lastY = i),
        (this._rc03d1ddfe8e732 = s));
    }
    let r = [];
    for (let t of this._particles) {
      t.update();
      let i = t.x,
        s = t.y,
        o = t.z;
      ((t.x = (2 - this._rda0c96c634c17a) * t.x - (1 - this._rda0c96c634c17a) * t.lastX),
        (t.y =
          (2 - this._rda0c96c634c17a) * t.y -
          (1 - this._rda0c96c634c17a) * t.lastY +
          this.getAttraction * this.var_1392 * this.var_1392),
        (t.z = (2 - this._rda0c96c634c17a) * t.z - (1 - this._rda0c96c634c17a) * t._rc03d1ddfe8e732),
        (t.lastX = i),
        (t.lastY = s),
        (t._rc03d1ddfe8e732 = o),
        (t.y > 10 || !t._r9b005d808c9efe) && r.push(t));
    }
    for (let t of r) {
      let i = this._particles.indexOf(t);
      (i >= 0 && this._particles.splice(i, 1), t.dispose());
    }
  }
  get particles() {
    return this._particles;
  }
  get _r8f56c7d5ebaa94() {
    return this.var_5567;
  }
  get _rd0de39e42c2f35() {
    return this._r0bb21a42832954;
  }
  releaseParticles(r, t) {
    let i = t ?? new k(),
      s = this._ra973b5d2f6ed42();
    for (let o = 0; o < this._particlesPerFrame; o++) {
      let d = new k();
      switch (this._r783590d3bb9731) {
        case a.SHAPE_CONE:
          ((d.x = this.randomBoolean(0.5) ? Math.random() : -Math.random()),
            (d.y = -(Math.random() + 1)),
            (d.z = this.randomBoolean(0.5) ? Math.random() : -Math.random()));
          break;
        case a.SHAPE_PLANE:
          ((d.x = this.randomBoolean(0.5) ? Math.random() : -Math.random()),
            (d.y = 0),
            (d.z = this.randomBoolean(0.5) ? Math.random() : -Math.random()));
          break;
        case a.SHAPE_SPHERE:
        default:
          ((d.x = this.randomBoolean(0.5) ? Math.random() : -Math.random()),
            (d.y = this.randomBoolean(0.5) ? Math.random() : -Math.random()),
            (d.z = this.randomBoolean(0.5) ? Math.random() : -Math.random()));
          break;
      }
      normalize_(d);
      let c = new FurnitureParticleSystemParticle(),
        f = s != null ? Math.floor(Math.random() * s.lifeTime + 10) : Math.floor(Math.random() * 20 + 10),
        l = s?.isEmitter ?? !1,
        b = s?.frames ?? [],
        _ = s?.fade ?? !1;
      (c.init(r.x, r.y, r.z, d, this.var_2547, this.var_1392, f, l, b, _),
        this._particles.push(c),
        this._emittedParticles++);
    }
  }
  _ra973b5d2f6ed42() {
    if (this._rbfbc04cd77eee9.length === 0) return null;
    let r = Math.floor(Math.random() * this._rbfbc04cd77eee9.length);
    return this._rbfbc04cd77eee9[r] ?? null;
  }
  _r607053f5c21f96() {}
  _re6adcc56b72cdc() {}
  randomBoolean(r) {
    return Math.random() < r;
  }
}
