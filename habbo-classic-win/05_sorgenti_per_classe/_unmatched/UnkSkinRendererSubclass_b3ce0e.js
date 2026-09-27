// Extracted from HabboAirLauncher.deobf.js, line 143420.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib3ce0ed8ca3c47

class a extends SkinRenderer {
  static {
    n(this, "UnkSkinRendererSubclass_b3ce0e");
  }
  _matrix = new Pe();
  static _ra811840eb0c796 = new UnkClass_4210dc(0, 0, 0, 1, 255, 255, 255, 0);
  constructor(e) {
    super(e);
  }
  parse(e, r, t) {
    class_3390._ra4faf552afe968(class_3390.parseCSS(String(e.content)));
  }
  draw(e, r, t, i, s) {
    let o = e,
      d = e,
      c = o.textField;
    if (
      ((this._matrix.tx = o.margins.left),
      (this._matrix.ty = o.margins.top),
      d.autoSize === nr.RIGHT
        ? (this._matrix.tx = Math.floor(e.width - c.width - o.margins.right))
        : d.autoSize === nr.CENTER && (this._matrix.tx = Math.floor(e.width / 2 - c.width / 2)),
      (Number(d.etchingColor) & 4278190080) !== 0)
    ) {
      ((a._ra811840eb0c796.redOffset = (d.etchingColor >> 16) & 255),
        (a._ra811840eb0c796.greenOffset = (d.etchingColor >> 8) & 255),
        (a._ra811840eb0c796.blueOffset = d.etchingColor & 255),
        (a._ra811840eb0c796.alphaMultiplier = ((d.etchingColor >> 24) & 255) / 255));
      let f = SkinRenderer.ETCHING_POSITION.get(String(d.etchingPosition));
      f != null &&
        ((this._matrix.tx += f.x),
        (this._matrix.ty += f.y),
        r.draw(c, this._matrix, a._ra811840eb0c796, null, null, !1),
        (this._matrix.tx -= f.x),
        (this._matrix.ty -= f.y));
    }
    r.draw(c, this._matrix, e.dynamicStyleColor ?? null, null, null, !1);
  }
  isStateDrawable(e) {
    return e === 0;
  }
}
