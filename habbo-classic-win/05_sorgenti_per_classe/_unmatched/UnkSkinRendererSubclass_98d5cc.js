// Extracted from HabboAirLauncher.deobf.js, line 143131.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i98d5cc49941e9c

class a extends SkinRenderer {
  static {
    n(this, "UnkSkinRendererSubclass_98d5cc");
  }
  _matrix = new Pe();
  _ra1ea265f01eb7d = null;
  _r9c63208665f3e6 = null;
  static _ra811840eb0c796 = new UnkClass_4210dc(0, 0, 0, 1, 255, 255, 255, 0);
  constructor(e) {
    super(e);
  }
  draw(e, r, t, i, s) {
    let o = e,
      d = o.textStyle;
    (d !== this._ra1ea265f01eb7d || this._r9c63208665f3e6 == null) &&
      ((this._r9c63208665f3e6 = mj._rdeb03a341a147b(d)), (this._ra1ea265f01eb7d = d));
    let c = this._r9c63208665f3e6;
    ((this._matrix.tx = o._rf11c0f6fe581c6),
      (this._matrix.ty = o._r5dac723dc49ec3),
      (this._matrix.a = 1),
      (this._matrix.b = 0),
      (this._matrix.c = 0),
      (this._matrix.d = 1),
      (c.text = o.text));
    let f = Number(d.color);
    if (
      ((c.textColor = o._rc41f4931ad3b11 ? o.textColor : f),
      (c.antiAliasType = ai.ADVANCED),
      (c.gridFitType = ad.PIXEL),
      o.vertical &&
        ((this._matrix.a = 0),
        (this._matrix.b = -1),
        (this._matrix.c = 1),
        (this._matrix.d = 0),
        (this._matrix.ty += o.height)),
      (Number(d.etchingColor) & 4278190080) !== 0)
    ) {
      ((a._ra811840eb0c796.redOffset = (Number(d.etchingColor) >> 16) & 255),
        (a._ra811840eb0c796.greenOffset = (Number(d.etchingColor) >> 8) & 255),
        (a._ra811840eb0c796.blueOffset = Number(d.etchingColor) & 255));
      let l = SkinRenderer.ETCHING_POSITION.get(String(d.etchingPosition));
      l != null &&
        (o.vertical
          ? ((this._matrix.tx += l.y),
            (this._matrix.ty -= l.x),
            r.draw(c, this._matrix, a._ra811840eb0c796, null, null, !1),
            (this._matrix.tx -= l.y),
            (this._matrix.ty += l.x))
          : ((this._matrix.tx += l.x),
            (this._matrix.ty += l.y),
            r.draw(c, this._matrix, a._ra811840eb0c796, null, null, !1),
            (this._matrix.tx -= l.x),
            (this._matrix.ty -= l.y)));
    }
    (r.draw(c, this._matrix, e.dynamicStyleColor ?? null, null, null, !1),
      o.vertical &&
        ((this._matrix.a = 1),
        (this._matrix.b = 0),
        (this._matrix.c = 0),
        (this._matrix.d = 1),
        (this._matrix.ty -= o.height)),
      (c.textColor = f));
  }
  isStateDrawable(e) {
    return e === 0;
  }
}
