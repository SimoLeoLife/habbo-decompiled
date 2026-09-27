// Extracted from HabboAirLauncher.deobf.js, line 50044.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/utils/PlaneBitmapData.as
// Obfuscated name: _i47495cdaf483e0

class extends Sprite {
  constructor(r, t) {
    super();
    this._scale9Grid = r;
    this._r270ad72a30994f = t;
    ((this._bitmap = new UnkClass_3a5c6f()),
      (this._r95924cff37cc3c = this._r270ad72a30994f.width),
      (this._r27bd3ec1cffb1b = this._r270ad72a30994f.height),
      this.addChild(this._bitmap),
      this.render());
  }
  static {
    n(this, "PlaneBitmapData");
  }
  _bitmap;
  _r0fdc544cbfa4a0 = null;
  _r95924cff37cc3c;
  _r27bd3ec1cffb1b;
  get width() {
    return this._r95924cff37cc3c;
  }
  set width(r) {
    ((this._r95924cff37cc3c = Math.max(1, Math.round(r))), this.render());
  }
  get height() {
    return this._r27bd3ec1cffb1b;
  }
  set height(r) {
    ((this._r27bd3ec1cffb1b = Math.max(1, Math.round(r))), this.render());
  }
  render() {
    this._r0fdc544cbfa4a0?.dispose();
    let r = Math.max(1, this._r95924cff37cc3c),
      t = Math.max(1, this._r27bd3ec1cffb1b),
      i = this._r270ad72a30994f.width,
      s = this._r270ad72a30994f.height,
      o = Math.max(0, Math.min(i, this._scale9Grid.left)),
      d = Math.max(0, Math.min(s, this._scale9Grid.top)),
      c = Math.max(0, i - this._scale9Grid.right),
      f = Math.max(0, s - this._scale9Grid.bottom),
      l = o,
      b = d,
      _ = c,
      h = f;
    if (o + c > r) {
      let C = r / Math.max(1, o + c);
      ((l = Math.round(o * C)), (_ = Math.max(0, r - l)));
    }
    if (d + f > t) {
      let C = t / Math.max(1, d + f);
      ((b = Math.round(d * C)), (h = Math.max(0, t - b)));
    }
    let p = Math.max(0, i - o - c),
      m = Math.max(0, s - d - f),
      v = Math.max(0, r - l - _),
      w = Math.max(0, t - b - h),
      I = new A(r, t, !0, 0);
    (_id8f01656014fbd(I, this._r270ad72a30994f, new D(0, 0, o, d), new D(0, 0, l, b)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(o, 0, p, d), new D(l, 0, v, b)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(o + p, 0, c, d), new D(l + v, 0, _, b)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(0, d, o, m), new D(0, b, l, w)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(o, d, p, m), new D(l, b, v, w)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(o + p, d, c, m), new D(l + v, b, _, w)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(0, d + m, o, f), new D(0, b + w, l, h)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(o, d + m, p, f), new D(l, b + w, v, h)),
      _id8f01656014fbd(I, this._r270ad72a30994f, new D(o + p, d + m, c, f), new D(l + v, b + w, _, h)),
      (this._r0fdc544cbfa4a0 = I),
      (this._bitmap.bitmapData = I));
  }
}
