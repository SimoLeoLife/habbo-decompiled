// Extracted from HabboAirLauncher.deobf.js, line 281713.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneVisualizationLayer.as
// Obfuscated name: _id172d31764c7f1

class a {
  constructor(e, r, t, i = a.DEFAULT_OFFSET) {
    this._ra11ebfd24a2483 = e;
    this._color = r;
    this._align = t;
    this._offset = i;
  }
  static {
    n(this, "PlaneVisualizationLayer");
  }
  static DEFAULT_OFFSET = 0;
  static ALIGN_TOP = 1;
  static ALIGN_BOTTOM = 2;
  static _r3a2eda2df73619 = a.ALIGN_TOP;
  _r117eeea1d6cf8d = !1;
  get disposed() {
    return this._r117eeea1d6cf8d;
  }
  dispose() {
    ((this._r117eeea1d6cf8d = !0), (this._ra11ebfd24a2483 = null));
  }
  clearCache() {}
  render(e, r, t, i, s, o, d, c) {
    let f = this._color >> 16,
      l = (this._color >> 8) & 255,
      b = this._color & 255,
      _ = f < 255 || l < 255 || b < 255;
    if (this._ra11ebfd24a2483 != null) {
      let h = this._ra11ebfd24a2483.render(
        null,
        t,
        i,
        s,
        o,
        d,
        c + this._offset,
        this._align === a.ALIGN_TOP,
      );
      if (h != null) {
        let p = new Jt(h);
        (_ && (p.tint = this._color >>> 0), _ifa78568353bcfc(r, p, !1), p.destroy());
      }
    } else {
      let h = new Jt(Texture.WHITE);
      ((h.tint = this._color >>> 0), (h.width = t), (h.height = i), _ifa78568353bcfc(r, h, !1), h.destroy());
    }
    return r;
  }
  PlaneDrawingData() {
    return this._ra11ebfd24a2483;
  }
  getColor() {
    return this._color;
  }
}
