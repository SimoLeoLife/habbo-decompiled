// Estratto da HabboAirLauncher.deobf.js, riga 70888.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/LoaderUI.as
// Nome offuscato: _ica8df658ff5fbf

class a {
  static {
    n(this, "LoaderUI");
  }
  static ubuntu_regular = null;
  static ubuntu_bold = null;
  static ubuntu_italic = null;
  static ubuntu_bold_italic = null;
  static STYLE_ILLUMINA = 1;
  static STYLE_HITCH = 2;
  static ANCHOR_LEFT = "l";
  static ANCHOR_CENTRE = "c";
  static ANCHOR_RIGHT = "r";
  static ANCHOR_TOP = "t";
  static ANCHOR_MIDDLE = "m";
  static ANCHOR_BOTTOM = "b";
  static HITCH_TEXT_BODY_COLOUR = 8309486;
  static HITCH_TEXT_HIGHLIGHT_COLOUR = 16777215;
  static _r2d7f0e51ae277e = new Pf(1, 90, 13751296, 1, 1, 1);
  static _r4261e23c066c09 = new Pf(1, 270, 0, 0.7, 1, 1);
  static createTextField(e, r, t, i = !1, s = !1, o = !1, d = !1, c = "left", f = !1, l = !1) {
    let b = new _i("Ubuntu", r, t, i, d, l),
      _ = new U_();
    return (
      (b.align = c),
      (b.kerning = f),
      (_.embedFonts = !0),
      (_.antiAliasType = ai.ADVANCED),
      (_.defaultTextFormat = b),
      (_.multiline = s),
      (_.wordWrap = s),
      (_.type = o ? eo.INPUT : eo.var_4430),
      (_.selectable = o),
      (_.htmlText = e),
      (_.autoSize = nr.const_27),
      (_.width = _.textWidth),
      (_.height = _.textHeight),
      _
    );
  }
  static addEtching(e, r = !1) {
    e.filters = [r ? a._r4261e23c066c09.clone() : a._r2d7f0e51ae277e.clone()];
  }
  static _ra6a743b365aafe(e, ...r) {
    for (let t = 0; t < Math.floor(r.length / 2); t++) {
      let i = Number(r[t * 2] ?? 0),
        s = r[t * 2 + 1];
      ((s.x = e.x + e.width + i), (e = s));
    }
  }
  static _r96e6aacde321c8(e, ...r) {
    for (let t = 0; t < Math.floor(r.length / 2); t++) {
      let i = Number(r[t * 2] ?? 0),
        s = r[t * 2 + 1];
      ((s.x = e.x - i - s.width), (e = s));
    }
  }
  static _r4784e5a70c8e5c(e, ...r) {
    for (let t = 0; t < Math.floor(r.length / 2); t++) {
      let i = Number(r[t * 2] ?? 0),
        s = r[t * 2 + 1];
      ((s.y = e.y - i - s.height), (e = s));
    }
  }
  static _re6097546621e3d(e, ...r) {
    for (let t = 0; t < Math.floor(r.length / 2); t++) {
      let i = Number(r[t * 2] ?? 0),
        s = r[t * 2 + 1];
      ((s.y = e.y + e.height + i), (e = s));
    }
  }
  static _r9d030f0e992e22(e, r) {
    if (e == null || e.length < 2) return;
    let t = e[0];
    for (let i = 0; i < e.length - 1; i++) {
      let s = e[i + 1];
      ((s.y = t.y + t.height + r), (t = s));
    }
  }
  static _r83a636ece2b8d5(e, r, t, ...i) {
    for (let s of i)
      (t.includes(a.ANCHOR_LEFT) && (s.x = e.x + r),
        t.includes(a.ANCHOR_CENTRE) && (s.x = e.x + Math.trunc((e.width - s.width) / 2)),
        t.includes(a.ANCHOR_RIGHT) && (s.x = e.x + e.width - s.width - r),
        t.includes(a.ANCHOR_TOP) && (s.y = e.y + r),
        t.includes(a.ANCHOR_MIDDLE) && (s.y = e.y + Math.trunc((e.height - s.height) / 2)),
        t.includes(a.ANCHOR_BOTTOM) && (s.y = e.y + e.height - s.height - r));
  }
  static createBalloon(e, r, t, i, s = 16777215, o = "up") {
    t < 0 && (t = Math.trunc((e - 9) / 2));
    let d = O2.block_dark_point_up_png,
      c = null,
      f;
    switch (o) {
      case "up":
        ((c = _i4b01ea81f74ef8("block_dark_point_up_png")),
          (f = new _i3a5c6f457acdad(new A(e, r + c.height, !0, 860986))),
          d._rc2d6cfb3d02830(f, new D(0, c.height, e, r)),
          f.bitmapData?.copyPixels(c, c.rect, new E(t, 0)));
        break;
      case "down":
        ((c = _i4b01ea81f74ef8("block_dark_point_down_png")),
          (f = new _i3a5c6f457acdad(new A(e, r + c.height, !0, 860986))),
          d._rc2d6cfb3d02830(f, new D(0, c.height, e, r)),
          f.bitmapData?.copyPixels(c, c.rect, new E(t, r + c.height)));
        break;
      case "left":
        ((c = _i4b01ea81f74ef8("block_dark_point_left_png")),
          (f = new _i3a5c6f457acdad(new A(e + c.width, r, !0, 16777215))),
          d._rc2d6cfb3d02830(f, new D(c.width, 0, e, r)),
          f.bitmapData?.copyPixels(c, c.rect, new E(0, t - c.width)));
        break;
      case "right":
        ((c = _i4b01ea81f74ef8("block_dark_point_right_png")),
          (f = new _i3a5c6f457acdad(new A(e + c.width, r, !0, 860986))),
          d._rc2d6cfb3d02830(f, new D(0, 0, e, r)),
          f.bitmapData?.copyPixels(c, c.rect, new E(e, t - c.width)));
        break;
      case "none":
      default:
        ((f = new _i3a5c6f457acdad(new A(e, r, !0, 860986))), d._rc2d6cfb3d02830(f, new D(0, 0, e, r)));
        break;
    }
    return (
      f.bitmapData?.colorTransform(
        f.bitmapData.rect,
        new _i4210dc3239901d(((s >> 16) & 255) / 255, ((s >> 8) & 255) / 255, (s & 255) / 255),
      ),
      f
    );
  }
  static createFrame(e, r, t, i = 1) {
    let s = new Sprite(),
      o = i === a.STYLE_HITCH ? a.HITCH_TEXT_BODY_COLOUR : 16777215,
      d = i === a.STYLE_HITCH ? 24 : 40,
      c = a.createTextField(e, d, o, !1, !1, !1, !1);
    if (
      ((s.x = t.x),
      (s.y = t.y),
      i === a.STYLE_ILLUMINA && s.addChild(O2._r7a62f8b171367f.render(t.width, t.height)),
      (c.y = -(d + 8)),
      (c.autoSize = nr.const_27),
      s.addChild(c),
      i === a.STYLE_HITCH && ((c.width = t.width), (c.thickness = 50)),
      r !== "")
    ) {
      let f = a.createTextField(r, 10, 11184810, !0);
      ((f.x = 8), (f.y = -(d + 16)), (f.autoSize = nr.const_27), s.addChild(f));
    }
    return s;
  }
  static _r1c0e6e6b103258(e, r, t) {
    (e.removeChildAt(0), e.addChildAt(O2._r7a62f8b171367f.render(r, t), 0));
  }
  static _r203d00b7beb802(e, r) {
    return _ie2bd349331c380(r, e);
  }
  static createTextBorder() {
    return a._r203d00b7beb802(_i4b01ea81f74ef8("border_text_hitch_png"), new D(10, 10, 10, 10));
  }
}
