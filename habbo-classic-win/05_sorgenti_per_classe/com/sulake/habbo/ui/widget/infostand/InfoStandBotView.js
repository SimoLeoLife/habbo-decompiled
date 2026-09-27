// Estratto da HabboAirLauncher.deobf.js, riga 319700.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandBotView.as
// Nome offuscato: _i127ff8e7a8995e

class {
  static {
    n(this, "InfoStandBotView");
  }
  ITEM_SPACER = 5;
  MOTTO_TEXT_OFFSET = 3;
  MAX_MOTTO_HEIGHT = 50;
  MIN_MOTTO_HEIGHT = 23;
  var_17;
  _window = null;
  _r99fda1d9e9f6a9 = null;
  _border = null;
  _badgeDetails = null;
  constructor(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    ((this.var_17 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._r99fda1d9e9f6a9 = null),
      (this._border = null),
      this._rf0f3e2c3c083d4());
  }
  get window() {
    return this._window;
  }
  update(e) {
    (this.clearBadges(), this.updateInfo(e));
  }
  set name(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("name_text");
    r != null && ((r.text = e), (r.visible = !0));
  }
  set achievementScore(e) {
    if (!this.var_17?.isActivityDisplayEnabled) return;
    let r = this._r99fda1d9e9f6a9?.getListItemByName("score_value");
    r != null && (r.text = String(e));
  }
  set carryItem(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("handitem_txt"),
      t = this._r99fda1d9e9f6a9?.getListItemByName("handitem_spacer");
    if (r == null || t == null || this.var_17 == null) return;
    if (e > 0 && e < 999999) {
      let o =
        this.var_17.localizations?.getLocalization(`handitem${e}`, `handitem${e}`) ??
        `handitem${e}`;
      (this.var_17.localizations?._r43eae9731f5b27("infostand.text.handitem", "item", o),
        (r.text = this.var_17.localizations?.getLocalization("infostand.text.handitem") ?? ""));
    }
    r.height = r.textHeight + this.ITEM_SPACER;
    let i = r.visible,
      s = e > 0 && e < 999999;
    ((r.visible = s),
      (t.visible = s),
      s !== i && this._r99fda1d9e9f6a9?.arrangeListItems(),
      this.updateWindow());
  }
  setFigure(e) {
    let t = this._border?.findChildByName("avatar_image")?.widget;
    t != null && (t.figure = e);
  }
  setMotto(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("motto_container"),
      t = r?.findChildByName("motto_text"),
      i = this._r99fda1d9e9f6a9?.getListItemByName("motto_spacer");
    r == null ||
      t == null ||
      i == null ||
      ((t.text = e ?? ""),
      (t.height = Math.min(t.textHeight + this.ITEM_SPACER, this.MAX_MOTTO_HEIGHT)),
      (t.height = Math.max(t.height, this.MIN_MOTTO_HEIGHT)),
      (r.height = t.height + this.MOTTO_TEXT_OFFSET),
      this.updateWindow());
  }
  setBadge(e, r) {
    let i = this._border?.findChildByName(`badge_${e}`)?.widget;
    i != null && (i.badgeId = r);
  }
  clearBadges() {
    for (let e = 0; e < 5; e++) {
      let t = this._border?.findChildByName(`badge_${e}`)?.widget;
      t != null && (t.badgeId = "");
    }
  }
  updateInfo(e) {
    ((this.name = e.name),
      this.setMotto(e.motto),
      (this.achievementScore = e.achievementScore),
      (this.carryItem = e.carryItem),
      this.setFigure(e.figure),
      this._rbd50241c036b40(e.badges));
  }
  _rbd50241c036b40(e) {
    if (e != null)
      for (let r = 0; r < e.length; r++) {
        let t = e[r];
        typeof t == "string" && this.setBadge(r, t);
      }
  }
  updateWindow() {
    this._r99fda1d9e9f6a9 == null ||
      this._border == null ||
      this._window == null ||
      ((this._r99fda1d9e9f6a9.height = this._r99fda1d9e9f6a9.visibleRegion.height),
      (this._border.height = this._r99fda1d9e9f6a9.height + 20),
      (this._window.width = this._border.width),
      (this._window.height = this._window.visibleRegion.height),
      this.var_17?.refreshContainer());
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("bot_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    ((this._border = this._window.getListItemByName("info_border")),
      (this._r99fda1d9e9f6a9 = this._border?.findChildByName("infostand_element_list")),
      (this._window.name = e),
      this.var_17?.mainContainer.addChild(this._window),
      this._border?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose));
    for (let i = 0; i < 5; i++) {
      let s = this._border?.findChildByName(`badge_${i}`);
      (s?.addEventListener(u.OVER, this._r0713f209362949), s?.addEventListener(u.OUT, this._r8db50ec12dc7d2));
    }
  }
  createBadgeDetails() {
    if (this._badgeDetails != null) return;
    let e = this.var_17?.assets?.getAssetByName("badge_details");
    if (
      e != null &&
      ((this._badgeDetails = this.var_17?.windowManager?.buildFromXML(e.content)),
      this._badgeDetails == null)
    )
      throw new Error("Failed to construct window from XML!");
  }
  _rf0f3e2c3c083d4() {
    (this._badgeDetails?.dispose(), (this._badgeDetails = null));
  }
  onClose = n((e) => {
    this.var_17?.close();
  }, "onClose");
  _r0713f209362949 = n((e) => {
    if (e.window == null) return;
    let r = Number(e.window.name.replace("badge_", ""));
    if (r < 0) return;
    let s = this._border?.findChildByName(`badge_${r}`)?.widget?.badgeId ?? "";
    if (s === "") return;
    this.createBadgeDetails();
    let o = this._badgeDetails?.getChildByName("name"),
      d = this._badgeDetails?.getChildByName("description");
    (o != null && (o.text = this.var_17?.localizations?.getBadgeName(s) ?? ""),
      d != null &&
        ((d.text = this.var_17?.localizations?.getBadgeDesc(s) ?? ""),
        this._badgeDetails != null && (this._badgeDetails.height = d.text === "" ? 40 : 99)));
    let c = new D();
    (e.window.getGlobalRectangle(c),
      this._badgeDetails != null &&
        ((this._badgeDetails.x = c.left - this._badgeDetails.width),
        (this._badgeDetails.y = c.top + (c.height - this._badgeDetails.height) / 2)));
  }, "_r0713f209362949");
  _r8db50ec12dc7d2 = n((e) => {
    this._rf0f3e2c3c083d4();
  }, "_r8db50ec12dc7d2");
}
