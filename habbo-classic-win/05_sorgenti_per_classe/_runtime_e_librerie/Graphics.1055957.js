// Estratto da HabboAirLauncher.deobf.js, riga 31852.

class a {
  static {
    n(this, "Graphics");
  }
  static _r222c304099c965 = 819.2;
  static _ra6e896c6eaaf52 = 256;
  _rd61f2b2e214fe4 = new Cl();
  var_3295;
  _fill = null;
  _recfbb432421e11 = !1;
  _r5c303b9ab30ded = 0;
  _r04b7557ea588b1 = 0;
  _ra6025a44a33e66 = 1;
  _r4e2bd0a87845da = [];
  constructor(e) {
    ((this.var_3295 = e), this.var_3295._rb6ed46fa961336(this._rd61f2b2e214fe4));
  }
  get _r81087cd81bc949() {
    return this._rd61f2b2e214fe4;
  }
  clear() {
    this._rd61f2b2e214fe4.clear();
    for (let e of this._r4e2bd0a87845da) e.destroy();
    ((this._r4e2bd0a87845da.length = 0),
      (this._fill = null),
      (this._recfbb432421e11 = !1),
      (this._r5c303b9ab30ded = 0),
      (this._r04b7557ea588b1 = 0),
      (this._ra6025a44a33e66 = 1));
  }
  beginFill(e = 0, r = 1) {
    ((this._fill = { color: e & 16777215, alpha: r }), (this._recfbb432421e11 = !0));
  }
  beginGradientFill(e, r, t, i, s = null, o = "pad", d = "rgb", c = 0) {
    if (d !== "rgb")
      throw new Error(`Graphics.beginGradientFill does not support interpolation method "${d}".`);
    if (c !== 0) throw new Error("Graphics.beginGradientFill does not support non-zero focal-point ratios.");
    if (e === "radial" && o !== "pad")
      throw new Error("Graphics.beginGradientFill radial gradients currently require pad spread.");
    let f = s ?? { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 },
      l = r.map((v, w) => ({
        offset: Math.max(0, Math.min(1, Number(i[w] ?? 0) / 255)),
        color: a._ra9828a61e2498f(v, Number(t[w] ?? 1)),
      })),
      b = o === "repeat" ? "repeat" : o === "reflect" ? "mirror-repeat" : "clamp-to-edge",
      _,
      h = a._ra6e896c6eaaf52,
      p = a._r222c304099c965,
      m = (2 * p) / h;
    if (e === "radial") {
      _ = new rd({
        type: "radial",
        center: { x: h / 2, y: h / 2 },
        outerCenter: { x: h / 2, y: h / 2 },
        innerRadius: 0,
        outerRadius: h / 2,
        colorStops: l,
        textureSpace: "global",
        wrapMode: b,
      });
      let v = _i295affcc6e4d03(h, h),
        w = _i5183d3213c4d99(v);
      if (v == null || w == null) throw new Error("Graphics.beginGradientFill requires a native canvas.");
      let I = w.createRadialGradient(h / 2, h / 2, 0, h / 2, h / 2, h / 2);
      for (let C of l) I.addColorStop(C.offset, C.color);
      ((w.fillStyle = I),
        w.fillRect(0, 0, h, h),
        (_.texture = new Texture({ source: new ImageSource({ resource: v, addressMode: b }) })),
        (_.transform = new Ze(
          f.a * m,
          f.b * m,
          f.c * m,
          f.d * m,
          f.tx - p * (f.a + f.c),
          f.ty - p * (f.b + f.d),
        )));
    } else
      ((_ = new rd({
        type: "linear",
        start: { x: 0, y: 0 },
        end: { x: h, y: 0 },
        colorStops: l,
        textureSpace: "global",
        wrapMode: b,
      })),
        _.buildGradient(),
        (_.transform = new Ze(f.a * m, f.b * m, f.c, f.d, f.tx - p * f.a, f.ty - p * f.b)));
    (this._r4e2bd0a87845da.push(_), (this._fill = _), (this._recfbb432421e11 = !0));
  }
  _rf55942823293cc(e, r = null, t = !0, i = !1) {
    let s = e.texture;
    s.source.scaleMode = i ? "linear" : "nearest";
    let o = new FillPattern(s, t ? "repeat" : "no-repeat");
    (o.setTransform(a._r32e18d5d34bddd(r)), (this._fill = o), (this._recfbb432421e11 = !0));
  }
  endFill() {
    this._recfbb432421e11 = !1;
  }
  lineStyle(e = 1, r = 0, t = 1) {
    ((this._r5c303b9ab30ded = e), (this._r04b7557ea588b1 = r), (this._ra6025a44a33e66 = t));
  }
  drawRect(e, r, t, i) {
    if (!(t === 0 && i === 0)) {
      if (t === 0 || i === 0) {
        this.applyStyles(this._rd61f2b2e214fe4.moveTo(e, r).lineTo(e + t, r + i));
        return;
      }
      this.applyStyles(this._rd61f2b2e214fe4.rect(e, r, t, i));
    }
  }
  drawEllipse(e, r, t, i) {
    this.applyStyles(this._rd61f2b2e214fe4.ellipse(e + t / 2, r + i / 2, t / 2, i / 2));
  }
  applyStyles(e) {
    (this._recfbb432421e11 && this._fill != null && e.fill(this._fill),
      this._r5c303b9ab30ded > 0 &&
        e.stroke({
          width: this._r5c303b9ab30ded,
          color: this._r04b7557ea588b1 & 16777215,
          alpha: this._ra6025a44a33e66,
        }));
  }
  static _ra9828a61e2498f(e, r) {
    let t = Math.max(0, Math.min(1, Number.isNaN(r) ? 1 : r)),
      i = (e >>> 16) & 255,
      s = (e >>> 8) & 255,
      o = e & 255;
    return `rgba(${i},${s},${o},${t})`;
  }
  static _r32e18d5d34bddd(e) {
    return e == null ? new Ze() : new Ze(e.a, e.b, e.c, e.d, e.tx, e.ty);
  }
}
