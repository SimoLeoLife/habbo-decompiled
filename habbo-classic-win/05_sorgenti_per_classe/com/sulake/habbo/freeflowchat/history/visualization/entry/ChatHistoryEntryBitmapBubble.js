// Estratto da HabboAirLauncher.deobf.js, riga 201503.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/history/visualization/entry/ChatHistoryEntryBitmapBubble.as
// Nome offuscato: _ib15910b44066e4

class {
  static {
    n(this, "ChatHistoryEntryBitmapBubble");
  }
  _bitmap;
  _overlap;
  var_3834;
  var_3203;
  var_2440;
  _r1756e3ca6c65ce;
  _userName;
  constructor(e, r, t, i, s, o = null) {
    ((this._overlap = o ?? new D()),
      (this.var_3834 = e.userId),
      (this.var_3203 = t),
      (this.var_2440 = e.roomId));
    let d = new Pt();
    ((d.defaultTextFormat = vi.TEXT_FORMAT_TIMESTAMP),
      (d.text = _i225e565f532fa6()),
      (d.thickness = -15),
      (d.sharpness = 80),
      (d.antiAliasType = "advanced"),
      (d.embedFonts = !0),
      (d.gridFitType = "pixel"));
    let c = s.height,
      f = vi.TIMESTAMP_FIXED_WIDTH,
      l = Math.max(vi._r3e80a945d479d8, vi._r3e80a945d479d8 + this._overlap.top);
    this._bitmap = new A(f + s.width, c, !0, 0);
    try {
      (this._bitmap.draw(d, new Pe(1, 0, 0, 1, 0, l)),
        this._bitmap.copyPixels(s, s.rect, new E(f, 0)));
    } catch (b) {
      throw (this._bitmap.dispose(), b);
    } finally {
      d.dispose();
    }
    ((this._r1756e3ca6c65ce = r), (this._userName = i));
  }
  get bitmap() {
    return this._bitmap;
  }
  get overlap() {
    return this._overlap;
  }
  get _rc86f77becaebea() {
    return this.var_3834;
  }
  get webId() {
    return this.var_3203;
  }
  get roomId() {
    return this.var_2440;
  }
  get _r19c47ac0426f2a() {
    return this._r1756e3ca6c65ce;
  }
  get userName() {
    return this._userName;
  }
}
