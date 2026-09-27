// Estratto da HabboAirLauncher.deobf.js, riga 213798.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/LoaderUI.as
// Nome offuscato: _ica8df658ff5fbf

class a {
  static {
    n(this, "LoaderUI");
  }
  static STYLE_ILLUMINA = 1;
  static STYLE_HITCH = 2;
  static HITCH_TEXT_BODY_COLOUR = 8309486;
  static HITCH_TEXT_HIGHLIGHT_COLOUR = 16777215;
  static _r2d7f0e51ae277e = new Pf(1, 90, 13751296, 1, 1, 1);
  static createTextField(e, r, t, i = !1, s = !1, o = !1, d = !1, c = "left") {
    let f = new Pt(),
      l = new _i("Ubuntu", r, t, i, d, !1);
    return (
      (l.align = c),
      (f.defaultTextFormat = l),
      (f.multiline = s),
      (f.wordWrap = s),
      (f.type = o ? eo.INPUT : eo.var_4430),
      (f.selectable = o),
      (f.htmlText = e),
      (f.autoSize = nr.const_27),
      (f.width = f.textWidth),
      (f.height = f.textHeight),
      f
    );
  }
  static addEtching(e) {
    e.filters = [this._r2d7f0e51ae277e];
  }
  static _re6097546621e3d(e, ...r) {
    let t = Math.floor(r.length / 2);
    for (let i = 0; i < t; i++) {
      let s = Number(r[i * 2] ?? 0),
        o = r[i * 2 + 1];
      o != null && ((o.y = e.y + e.height + s), (e = o));
    }
  }
  static _ra6a743b365aafe(e, ...r) {
    let t = Math.floor(r.length / 2);
    for (let i = 0; i < t; i++) {
      let s = Number(r[i * 2] ?? 0),
        o = r[i * 2 + 1];
      o != null && ((o.x = e.x + e.width + s), (e = o));
    }
  }
  static createFrame(e, r, t, i = a.STYLE_ILLUMINA) {
    let s = new Sprite(),
      o = i === a.STYLE_HITCH ? a.HITCH_TEXT_BODY_COLOUR : 16777215,
      d = i === a.STYLE_HITCH ? 24 : 40;
    ((s.x = t.x),
      (s.y = t.y),
      i === a.STYLE_ILLUMINA && s.addChild(CI._r7a62f8b171367f.render(t.width, t.height)));
    let c = a.createTextField(e, d, o, !1, !1, !1, !1);
    if (
      ((c.y = -(d + 8)),
      (c.autoSize = nr.const_27),
      s.addChild(c),
      i === a.STYLE_HITCH && ((c.width = t.width), (c.thickness = 50)),
      r.length > 0)
    ) {
      let f = a.createTextField(r, 10, 11184810, !0);
      ((f.x = 8), (f.y = -(d + 16)), (f.autoSize = nr.const_27), s.addChild(f));
    }
    return s;
  }
  static _r1c0e6e6b103258(e, r, t) {
    (e.numChildren > 0 && e.removeChildAt(0), e.addChildAt(CI._r7a62f8b171367f.render(r, t), 0));
  }
  static _r203d00b7beb802(e, r) {
    let t = new _ic6b6cdf3ccea3d();
    return (
      t.graphics.beginFill(16777215),
      t.graphics.drawRect(0, 0, e.width, e.height),
      t.graphics.endFill(),
      t
    );
  }
  static createBalloon(e, r, t, i, s = 995918, o = "none") {
    let d = new _i3a5c6f457acdad(),
      c = new A(e, r, !0, 860986);
    return (
      (d.bitmapData = c),
      c.colorTransform(c.rect, new _i4210dc3239901d(((s >> 16) & 255) / 255, ((s >> 8) & 255) / 255, (s & 255) / 255)),
      d
    );
  }
  static _rfa63fa1232d9cf(e) {
    switch (e) {
      case "pressed":
        return _i7aee3baccc3600("button_green_pressed_png");
      case "inactive":
        return _i7aee3baccc3600("button_green_inactive_png");
      case "rollover":
        return _i7aee3baccc3600("button_green_rollover_png");
      default:
        return _i7aee3baccc3600("button_green_png");
    }
  }
}
