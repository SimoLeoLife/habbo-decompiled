// Extracted from HabboAirLauncher.deobf.js, line 143065.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/GradientSkinRenderer.as
// Obfuscated name: _ic9f8c0da247b6d

class a extends SkinRenderer {
  static {
    n(this, "GradientSkinRenderer");
  }
  static SHAPE = new UnkClass_c6b6cd();
  static MATRIX = new Pe();
  static _r22bde844bd148a(e) {
    switch (Qb._r99ce61d7783423(e)) {
      case class_3148.RIGHT:
        return 0;
      case class_3148.DOWN:
        return Math.PI / 2;
      case class_3148.const_27:
        return Math.PI;
      case class_3148.UP:
        return -Math.PI / 2;
      case Qb.DIRECTION_DOWN_RIGHT:
        return Math.PI / 4;
      case Qb.const_607:
        return (3 * Math.PI) / 4;
      case Qb.const_501:
        return (-3 * Math.PI) / 4;
      case Qb.DIRECTION_UP_RIGHT:
        return -Math.PI / 4;
      default:
        return Math.PI / 2;
    }
  }
  static rgbFromColor(e) {
    return e & 16777215;
  }
  static alphaFromColor(e) {
    let r = (e >>> 24) & 255;
    return r === 0 ? 1 : r / 255;
  }
  draw(e, r, t, i, s) {
    !(e instanceof Qb) ||
      t.width <= 0 ||
      t.height <= 0 ||
      a.drawGradient(r, t, e.color1, e.color2, e.mode, e.direction);
  }
  static drawGradient(e, r, t, i, s, o) {
    let d = Qb._reecd3b1e535ad5(s) === Qb.MODE_RADIAL ? "radial" : "linear",
      c = d === "linear" ? this._r22bde844bd148a(o) : 0;
    this.MATRIX._rda5c32980edbf3(r.width, r.height, c, r.x, r.y);
    let f = this.SHAPE.graphics;
    (f.clear(),
      f.beginGradientFill(
        d,
        [this.rgbFromColor(t), this.rgbFromColor(i)],
        [this.alphaFromColor(t), this.alphaFromColor(i)],
        [0, 255],
        this.MATRIX,
        "pad",
        "rgb",
      ),
      f.drawRect(r.x, r.y, r.width, r.height),
      f.endFill(),
      e.fillRect(r, 0),
      e.draw(this.SHAPE, void 0, null, null, r),
      f.clear());
  }
  isStateDrawable(e) {
    return !0;
  }
}
