// Extracted from HabboAirLauncher.deobf.js, line 317696.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/highscore/HighScoreDisplayWidget.as
// Obfuscated name: _i816d1c5f1eb067

class a extends RoomWidgetBase {
  static {
    n(this, "HighScoreDisplayWidget");
  }
  static scoreType = -1;
  static RELATIVE_OFFSET_X = -138;
  static RELATIVE_OFFSET_Y = -400;
  static _rbbd8b9adfd61a8 = ["perteam", "mostwins", "classic", "fastesttime", "longesttime"];
  static CLEARTYPE_LOCALIZATION_KEY_POSTFIX = ["alltime", "daily", "weekly", "monthly"];
  _r24eb3b71d73b8b;
  _rb63197e10e4aa5 = null;
  _re6eb1782045ad0 = null;
  var_2440 = a.scoreType;
  var_3423 = a.scoreType;
  _r5ef7c47a212534 = new E(0, 0);
  constructor(e, r, t = null, i = null) {
    (super(e, r, t, i),
      (e.widget = this),
      (this._r24eb3b71d73b8b = this.windowManager?.createWindow(
        "room_widget_highscore_background_container",
        "",
        class_2090.WINDOW_TYPE_CONTAINER,
        class_2025.WINDOW_STYLE_DEFAULT,
        N._r0122fdb7c42001,
        new D(0, 0, 10, 10),
        null,
        0,
      )),
      this._rb3057684b3ed62(),
      this._r24eb3b71d73b8b.addEventListener(y.const_411, this._rb3057684b3ed62));
  }
  get mainWindow() {
    return this._r24eb3b71d73b8b;
  }
  dispose() {
    (this._rb63197e10e4aa5 != null && this.destroyWindow(),
      this._r24eb3b71d73b8b.removeEventListener(y.const_411, this._rb3057684b3ed62),
      this._r24eb3b71d73b8b.dispose(),
      super.dispose());
  }
  open(e, r, t) {
    this._rb63197e10e4aa5 != null && this.destroyWindow();
    let i = !1;
    if (t.clearType !== a.scoreType && t.SCORETYPE_LOCALIZATION_KEY_POSTFIX !== a.scoreType) {
      i = (a._rbbd8b9adfd61a8[t.SCORETYPE_LOCALIZATION_KEY_POSTFIX] ?? "").indexOf("time") >= 0;
      let c = this.handler.container?.localization ?? this.localizations,
        f =
          c?.getLocalization(`high.score.display.cleartype.${a.CLEARTYPE_LOCALIZATION_KEY_POSTFIX[t.clearType]}`) ?? "",
        l =
          c?.getLocalization(`high.score.display.scoretype.${a._rbbd8b9adfd61a8[t.SCORETYPE_LOCALIZATION_KEY_POSTFIX]}`) ?? "";
      (c?._r43eae9731f5b27("high.score.display.caption", "cleartype", f),
        c?._r43eae9731f5b27("high.score.display.caption", "scoretype", l));
    }
    if (
      ((this.var_2440 = r),
      (this.var_3423 = e),
      this.createWindow(),
      this._re6eb1782045ad0 == null || this._rb63197e10e4aa5 == null)
    )
      return;
    let s = this.handler.container?.localization ?? this.localizations,
      o = this._rb63197e10e4aa5.findChildByName("score_header");
    o != null &&
      ((o.caption =
        s?.getLocalization(i ? "high.score.display.time.header" : "high.score.display.score.header") ?? ""),
      o.invalidate());
    let d = this._rb63197e10e4aa5.findChildByName("entries");
    if (d != null) {
      for (let c of t.entries) {
        let f = this._re6eb1782045ad0.clone(),
          l = f.getChildByName("usernames"),
          b = f.getChildByName("score");
        l != null && (l.caption = this.getUserNameList(c.users));
        let _ = i
          ? c.score >= 3600
            ? a.scoreToTime(c.score, 3)
            : a.scoreToTime(c.score, 2)
          : c.score.toString();
        (b != null && (b.caption = _), d.addListItem(f));
      }
      d.invalidate();
    }
  }
  setRelativePositionToRoomObjectAt(e, r) {
    this._rb63197e10e4aa5 != null &&
      ((this._rb63197e10e4aa5.x = e + a.RELATIVE_OFFSET_X),
      (this._rb63197e10e4aa5.y = r + a.RELATIVE_OFFSET_Y));
  }
  get isOpen() {
    return this._rb63197e10e4aa5 != null && this._rb63197e10e4aa5.visible;
  }
  get roomId() {
    return this.var_2440;
  }
  get _r113316b8f49e75() {
    return this.var_3423;
  }
  close() {
    this.destroyWindow();
  }
  get handler() {
    return this._handler;
  }
  _rb3057684b3ed62 = n((e) => {
    ((this._r24eb3b71d73b8b.width = this._r24eb3b71d73b8b.desktop.width),
      (this._r24eb3b71d73b8b.height = this._r24eb3b71d73b8b.desktop.height));
  }, "_rb3057684b3ed62");
  createWindow() {
    let e = this.assets?.getAssetByName("high_score_display_xml");
    if (e?.content == null) return;
    let r = this.windowManager?.buildFromXML(e.content);
    r != null &&
      ((this._re6eb1782045ad0 = r.findChildByName("entry_template")),
      r.findChildByName("entries")?.removeListItem(this._re6eb1782045ad0),
      (this._rb63197e10e4aa5 = r),
      (this._rb63197e10e4aa5.x = this._r5ef7c47a212534.x),
      (this._rb63197e10e4aa5.y = this._r5ef7c47a212534.y),
      this._r24eb3b71d73b8b.addChild(r));
  }
  destroyWindow() {
    this._rb63197e10e4aa5 != null &&
      (this._r24eb3b71d73b8b.removeChild(this._rb63197e10e4aa5),
      (this._r5ef7c47a212534.x = this._rb63197e10e4aa5.x),
      (this._r5ef7c47a212534.y = this._rb63197e10e4aa5.y),
      this._rb63197e10e4aa5.dispose(),
      (this._rb63197e10e4aa5 = null),
      (this.var_2440 = a.scoreType),
      (this.var_3423 = a.scoreType));
  }
  getUserNameList(e) {
    return e.join(", ");
  }
  static scoreToTime(e, r) {
    let t = [60, 60, 24];
    if (r < 1 || r > t.length) return e.toString();
    let i = "",
      s = e;
    for (let o = 0; o < r; o++) {
      let d;
      (o === r - 1 ? (d = s.toString()) : ((d = String(s % t[o])), (s = Math.floor(s / t[o]))),
        d.length < 2 && o < 2 && (d = `0${d}`),
        (i = `${d}:${i}`));
    }
    return i.substring(0, i.length - 1);
  }
}
