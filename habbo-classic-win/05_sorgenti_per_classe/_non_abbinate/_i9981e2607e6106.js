// Estratto da HabboAirLauncher.deobf.js, riga 204345.

class a {
  static {
    n(this, "_i9981e2607e6106");
  }
  static TEXT_FORMAT = new _i("Ubuntu", 12, 4294967295);
  static TEXT_FORMAT_TIMESTAMP = new _i("Ubuntu", 12, 4288716960, !1, !0);
  _bitmap;
  _overlap = new D(0, 0, 0, 0);
  constructor(e, r, t, i, s) {
    let o = new Pt();
    o.defaultTextFormat = a.TEXT_FORMAT;
    let d = e.chatType === xr.CHAT_TYPE_SPEAK,
      c = e.chatType === xr.CHAT_TYPE_SHOUT,
      f = !d && !c,
      l = `<font color='#FFFFFF'>${f ? "<i>" : ""}<font color='#${this._rca09d030854bf1(s).toString(16)}'><b>${i}: </b><font color='#FFFFFF'>`;
    ((l += `${c ? "<b>" : ""}${e.text}${c ? "</b>" : ""}`),
      (l += `${f ? "</i>" : ""}</font>`),
      (o.htmlText = l),
      (o.thickness = -15),
      (o.sharpness = 80),
      (o.antiAliasType = "advanced"),
      (o.embedFonts = !0),
      (o.gridFitType = "pixel"),
      (o.cacheAsBitmap = !0));
    let b = new Pt();
    ((b.defaultTextFormat = a.TEXT_FORMAT_TIMESTAMP),
      (b.text = _i225e565f532fa6()),
      (b.thickness = -15),
      (b.sharpness = 80),
      (b.antiAliasType = "advanced"),
      (b.embedFonts = !0),
      (b.gridFitType = "pixel"));
    let _ = o.textHeight + 7,
      h = 20 + b.textWidth + 5;
    if (((this._bitmap = new A(o.textWidth + 20 + h, _, !0, 0)), t != null)) {
      let m = Math.max(0, t.width - 18),
        v = Math.max(0, t.height - _),
        w = new D(m, v, t.width - m, t.height - v);
      this._bitmap.copyPixels(t, w, new E(0, 0));
    }
    (this._bitmap.draw(b, new Pe(1, 0, 0, 1, 18, 2)),
      this._bitmap.draw(o, new Pe(1, 0, 0, 1, h, 2)));
  }
  get overlap() {
    return this._overlap;
  }
  get bitmap() {
    return this._bitmap;
  }
  get _rc86f77becaebea() {
    return -1;
  }
  get webId() {
    return -1;
  }
  get roomId() {
    return -1;
  }
  get _r19c47ac0426f2a() {
    return !1;
  }
  get userName() {
    return "";
  }
  _rca09d030854bf1(e) {
    let r = (e & 16711680) >> 16,
      t = (e & 65280) >> 8,
      i = e & 255;
    return (
      (r = (r / 2 + 128) & 255),
      (t = (t / 2 + 128) & 255),
      (i = (i / 2 + 128) & 255),
      (r << 16) | (t << 8) | i
    );
  }
}
