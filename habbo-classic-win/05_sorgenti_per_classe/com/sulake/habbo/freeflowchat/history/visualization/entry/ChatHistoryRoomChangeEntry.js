// Estratto da HabboAirLauncher.deobf.js, riga 201563.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/history/visualization/entry/ChatHistoryRoomChangeEntry.as
// Nome offuscato: _i1ebfe190e14cde

class a {
  static {
    n(this, "ChatHistoryRoomChangeEntry");
  }
  static TOP_MARGIN_HEIGHT = 4;
  _bitmap;
  _overlap = new D(0, 0, 0, 0);
  constructor(e, r) {
    let t = new Pt();
    ((t.defaultTextFormat = vi.TEXT_FORMAT),
      (t.htmlText = e?.roomName ?? "null"),
      (t.width = t.textWidth + 5),
      (t.height = t.textHeight + 5),
      (t.thickness = -15),
      (t.sharpness = 80),
      (t.antiAliasType = "advanced"),
      (t.embedFonts = !0),
      (t.gridFitType = "pixel"));
    let i = new Pt();
    ((i.defaultTextFormat = vi.TEXT_FORMAT_TIMESTAMP),
      (i.text = _i225e565f532fa6()),
      (i.width = i.textWidth + 5),
      (i.height = i.textHeight + 5),
      (i.thickness = -15),
      (i.sharpness = 80),
      (i.antiAliasType = "advanced"),
      (i.embedFonts = !0),
      (i.gridFitType = "pixel"),
      (this._bitmap = new A(
        vi._r9451e682e5f0c3,
        t.textHeight + 5 + vi.const_1005 + a.TOP_MARGIN_HEIGHT,
        !0,
        0,
      )));
    try {
      let s = r.getRoomChangeBitmap();
      (s != null &&
        this._bitmap.copyPixels(s, s.rect, new E(vi.TIMESTAMP_FIXED_WIDTH, 1 + a.TOP_MARGIN_HEIGHT)),
        this._bitmap.draw(i, new Pe(1, 0, 0, 1, 0, a.TOP_MARGIN_HEIGHT)),
        this._bitmap.draw(t, new Pe(1, 0, 0, 1, vi.TIMESTAMP_FIXED_WIDTH + 20, a.TOP_MARGIN_HEIGHT)));
    } catch (s) {
      throw (this._bitmap.dispose(), s);
    } finally {
      (t.dispose(), i.dispose());
    }
  }
  get bitmap() {
    return this._bitmap;
  }
  get overlap() {
    return this._overlap;
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
}
