// Extracted from HabboAirLauncher.deobf.js, line 143387.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibf588340460e00

class a extends SkinRenderer {
  static {
    n(this, "UnkSkinRendererSubclass_bf5883");
  }
  static _rd6eb78cdffc19e =
    Xl.SIDE_TOP | Xl.SIDE_RIGHT | Xl.SIDE_BOTTOM | Xl.SIDE_LEFT;
  draw(e, r, t, i, s) {
    if (!(e instanceof Xl) || t.width <= 0 || t.height <= 0 || (r.fillRect(t, 0), e.strokeThickness <= 0))
      return;
    let o = Math.trunc(Math.max(1, Math.round(e.strokeThickness))),
      d = e._rad360b721a1819;
    if (d === a._rd6eb78cdffc19e && e.radius > 0) {
      Ry.drawRoundRectStroke(r, t.x, t.y, t.width, t.height, e.radius, o, e.color);
      return;
    }
    Ry.drawRectStrokeSides(
      r,
      t.x,
      t.y,
      t.width,
      t.height,
      o,
      e.color,
      (d & Xl.SIDE_TOP) !== 0,
      (d & Xl.SIDE_RIGHT) !== 0,
      (d & Xl.SIDE_BOTTOM) !== 0,
      (d & Xl.SIDE_LEFT) !== 0,
    );
  }
  isStateDrawable(e) {
    return !0;
  }
}
