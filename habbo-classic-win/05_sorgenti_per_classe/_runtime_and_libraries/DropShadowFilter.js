// Extracted from HabboAirLauncher.deobf.js, line 50118.

class a {
  constructor(e = 4, r = 45, t = 0, i = 1, s = 4, o = 4, d = 1, c = 1, f = !1, l = !1, b = !1) {
    this.distance = e;
    this.angle = r;
    this.color = t;
    this.alpha = i;
    this.blurX = s;
    this.blurY = o;
    this.strength = d;
    this.quality = c;
    this.inner = f;
    this.knockout = l;
    this.hideObject = b;
  }
  static {
    n(this, "DropShadowFilter");
  }
  clone() {
    return new a(
      this.distance,
      this.angle,
      this.color,
      this.alpha,
      this.blurX,
      this.blurY,
      this.strength,
      this.quality,
      this.inner,
      this.knockout,
      this.hideObject,
    );
  }
}
