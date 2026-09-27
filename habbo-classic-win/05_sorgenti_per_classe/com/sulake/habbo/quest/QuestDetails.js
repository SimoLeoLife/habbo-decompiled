// Estratto da HabboAirLauncher.deobf.js, riga 268922.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/QuestDetails.as

class a {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "QuestDetails");
  }
  static HEADER_SIZE = 56;
  static SPACING = 5;
  static TEXT_HEIGHT_SPACING = 5;
  static _ra1d3d052e510fe = new E(8, 8);
  static _ra9074bc76fb9b4 = ["PLACE_ITEM", "PLACE_FLOOR", "PLACE_WALLPAPER", "PET_DRINK", "PET_EAT"];
  var_4172 = !1;
  _rb33d67944824d1 = 0;
  var_3354 = !1;
  var_142 = null;
  _window = null;
  dispose() {
    ((this._questEngine = null),
      (this.var_142 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  onQuest(e) {
    this.var_3354
      ? ((this.var_3354 = !1), this.openDetails(e))
      : this.var_142 == null && this.close();
  }
  _r27f5f0ce8a8093(e) {
    (this.var_142 == null || this.var_142.id === e.id) && this.close();
  }
  onQuestCancelled(e) {
    (this.var_142 == null || this.var_142._r808a32b2f4122c === e) && this.close();
  }
  onRoomExit() {
    this.close();
  }
  showDetails(e) {
    if (
      this._window?.visible &&
      this.var_142 != null &&
      e.id === this.var_142.id
    ) {
      this._window.visible = !1;
      return;
    }
    this.openDetails(e);
  }
  openDetails(e, r = !1) {
    if (this._questEngine == null || ((this.var_142 = e), e == null)) return;
    if (((this.var_4172 = r), this._window == null)) {
      if (
        ((this._window = this._questEngine.getXmlWindow("QuestDetails")),
        this._window == null)
      )
        return;
      let l = this._window.findChildByTag("close");
      (l != null && (l.procedure = (...h) => this._r5a23197639c61f(h[0], h[1])),
        this._window.center());
      let b = this._questEngine._rd4042d1a6a05a1._rddd2ff4cc28b1a.createListEntry(
        (...h) => this._r53b64dc1622d33(h[0], h[1]),
        (...h) => this._re93563365939cf(h[0], h[1]),
      );
      ((b.name = "entry_container"),
        (b.x = a._ra1d3d052e510fe.x),
        (b.y = a._ra1d3d052e510fe.y),
        this._window.content?.addChild(b));
      let _ = this._window.findChildByName("link_region");
      _ != null && (_.procedure = (...h) => this.onLinkProc(h[0], h[1]));
    }
    let t = this._window.findChildByName("entry_container");
    if (t == null) return;
    this._questEngine._rd4042d1a6a05a1._rddd2ff4cc28b1a.refreshEntryDetails(t, e);
    let i = this.var_142.waitPeriodSeconds > 0,
      s = t.findChildByName("hint_txt"),
      o = this.getTextHeight(s);
    s != null &&
      (i ||
        ((s.caption = this._questEngine.getQuestHint(e)),
        (s.height = s.textHeight + a.TEXT_HEIGHT_SPACING),
        s.initializeLinkStyle(),
        s.addEventListener(kd.const_180, (...l) => this._r49fad46cbd1c25(l[0]))),
      (s.visible = !i));
    let d = this.getTextHeight(s) - o,
      c = this.setupLink("link_region", (s?.y ?? 0) + (s?.height ?? 0) + a.SPACING),
      f = t.findChildByName("quest_container");
    (f != null && (f.height += d + c),
      this._questEngine._rd4042d1a6a05a1._rddd2ff4cc28b1a.setEntryHeight(t),
      (this._window.height = t.height + a.HEADER_SIZE),
      (this._window.visible = !0),
      this._window.activate());
  }
  update(e) {
    if (
      this._window == null ||
      !this._window.visible ||
      this._questEngine == null ||
      this.var_142 == null ||
      ((this._rb33d67944824d1 -= e), this._rb33d67944824d1 > 0)
    )
      return;
    ((this._rb33d67944824d1 = v5.REFRESH_PERIOD_IN_MSECS),
      this._questEngine._rd4042d1a6a05a1._rddd2ff4cc28b1a.refreshDelay(
        this._window,
        this.var_142,
      ) && this.openDetails(this.var_142, this.var_4172));
  }
  set openForNextQuest(e) {
    this.var_3354 = e;
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  _r49fad46cbd1c25(e) {
    let r = e;
    r != null && Ae.openWebPageAndMinimizeClient(r.link);
  }
  setupLink(e, r) {
    if (this._window == null) return 0;
    let t = this._r1ff6c5b9ee7078(),
      i = !t && this.hasNavigatorLink(),
      s = !t && !i && this.hasRoomLink(),
      o = t || i || s,
      d = this._window.findChildByName(e);
    if (d == null) return 0;
    d.y = r;
    let c = 0;
    (o && !d.visible && (c = a.SPACING + d.height),
      !o && d.visible && (c = -a.SPACING - d.height),
      (d.visible = o));
    let f = d.findChildByName("link_catalog"),
      l = d.findChildByName("link_navigator"),
      b = d.findChildByName("link_room");
    return (f != null && (f.visible = t), l != null && (l.visible = i), b != null && (b.visible = s), c);
  }
  _r1ff6c5b9ee7078() {
    return (
      this.var_142 != null &&
      this.var_142.waitPeriodSeconds < 1 &&
      a._ra9074bc76fb9b4.indexOf(this.var_142.type) > -1
    );
  }
  hasNavigatorLink() {
    if (this._questEngine == null || this.var_142 == null) return !1;
    let e = this._questEngine.getCampaignLocalizationKey(`${this.var_142.hasLocalizedValue()}.searchtag`),
      r = this._questEngine.getCampaignLocalizationKey(`${this.var_142.hasLocalizedValue()}.searchtag`);
    return this.var_142.waitPeriodSeconds < 1 && (e || r);
  }
  hasRoomLink() {
    return (
      this._questEngine != null &&
      this.var_142 != null &&
      this.var_142.waitPeriodSeconds < 1 &&
      this._questEngine.isSeasonalQuest(this.var_142) &&
      this._questEngine._re5489d4bee8b81()
    );
  }
  getTextHeight(e) {
    return e?.visible ? e.height : 0;
  }
  _r5a23197639c61f(e, r) {
    e.type === u.CLICK && this._window != null && (this._window.visible = !1);
  }
  onLinkProc(e, r = null) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      this.var_142 == null ||
      (this._r1ff6c5b9ee7078()
        ? this._questEngine.openCatalog(this.var_142)
        : this.hasNavigatorLink()
          ? this._questEngine._r52fa4af48d31b1(this.var_142)
          : this._questEngine._r32b882492d068c());
  }
  _r53b64dc1622d33(e, r) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      this.var_142 == null ||
      (this._questEngine.currentlyInRoom
        ? this._questEngine.send(new _i8f295e4bca1993(this.var_142.id))
        : this._questEngine.send(new _i38e25d5014ab83(this.var_142.id)),
      this._window != null && (this._window.visible = !1),
      this._questEngine._rd4042d1a6a05a1._rab30f8aab18f93?.close(),
      this.var_4172 &&
        this._questEngine.isSeasonalQuest(this.var_142) &&
        this._questEngine._r32b882492d068c());
  }
  _re93563365939cf(e, r) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      this.var_142 == null ||
      this._questEngine.send(new _i198dc87a94b54e(this.var_142.id));
  }
}
