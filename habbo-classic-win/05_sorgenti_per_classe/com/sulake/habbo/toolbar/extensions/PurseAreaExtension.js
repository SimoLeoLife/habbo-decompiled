// Extracted from HabboAirLauncher.deobf.js, line 342672.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/PurseAreaExtension.as
// Obfuscated name: _id57b9e7142e781

class a {
  static {
    n(this, "PurseAreaExtension");
  }
  static MENU_HELP = "HELP";
  _toolbar;
  _window;
  _ra71029c01155b0;
  _catalog;
  constructor(e, r) {
    if (
      ((this._toolbar = e),
      (this._catalog = r),
      (this._window = e.windowManager.buildFromXML(e.assets.getAssetByName("purse_xml")?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct purse area from XML.");
    ((this._window.procedure = this.windowProcedure),
      (this._ra71029c01155b0 = new dMe(e, this._window)),
      this._catalog.events?.addEventListener?.(Mo.CREDIT_BALANCE, this._rebeb3d9babc151),
      this._catalog.events?.addEventListener?.(Mo.ACTIVITY_POINT_BALANCE, this._r3ce1cb0cbd5dd6),
      this.updateCreditAndPointValues(),
      e.extensionView?._ra96f07968c4ed0(ToolbarDisplayExtensionIds.const_781, this._window, class_1954._r46358799860e01));
    let t = this._window.findChildByName("credit_count");
    (t != null && e.windowManager._rfbca05ed7fc2ff("credit_count", t), this._r8a9678b76585b4());
  }
  get disposed() {
    return this._toolbar == null;
  }
  get _r7861eec6bbb3dc() {
    if (this._ra71029c01155b0 == null) throw new Error("Purse club area is not available.");
    return this._ra71029c01155b0;
  }
  dispose() {
    this.disposed ||
      (this._ra71029c01155b0?.dispose(),
      (this._ra71029c01155b0 = null),
      (this._catalog = null),
      (this._toolbar = null));
  }
  _r6822d89b476fe5(e) {
    let r = this._window?.findChildByName(e);
    if (r != null && this._window != null) {
      let t = r.rectangle;
      return (
        (t.x += this._window.desktop.width - this._window.width),
        (t.y += this._window.y),
        t
      );
    }
    return null;
  }
  _raa4dc20ed68e9a(e) {
    return this._window?.findChildByName(e) ?? null;
  }
  _r8a9678b76585b4() {
    let e = this._catalog?.earnings.showingIndicator ?? !1;
    this.earningsUnseenIndicator != null && (this.earningsUnseenIndicator.visible = e);
  }
  updateCreditAndPointValues() {
    if (this._catalog == null || this._window == null || this._toolbar == null)
      return;
    let e = this._catalog.getPurse(),
      r = this._window.findChildByName("credit_count");
    r != null && (r.caption = e.credits.toString());
    let t = this._window.findChildByName("ducket_count");
    if (
      (t != null && (t.caption = e.getActivityPointsForType(et.DUCKET).toString()),
      this._toolbar.getBoolean("diamonds.enabled"))
    ) {
      let i = this._window.findChildByName("diamond_count");
      i != null && (i.caption = e.getActivityPointsForType(et.const_476).toString());
    } else {
      let i = this._window.findChildByName("diamond_count_button"),
        s = this._window.findChildByName("purse_itemlist");
      i != null && s != null && s.removeListItem(i);
    }
  }
  _rebeb3d9babc151 = n((e) => {
    let r = this._window?.findChildByName("credit_count");
    r != null && (r.caption = e.balance.toString());
  }, "_rebeb3d9babc151");
  _r3ce1cb0cbd5dd6 = n((e) => {
    let r = null;
    switch (e.activityPointType) {
      case et.DUCKET:
        r = this._window?.findChildByName("ducket_count") ?? null;
        break;
      case et.const_476:
        r = this._window?.findChildByName("diamond_count") ?? null;
        break;
    }
    r != null && (r.caption = e.balance.toString());
  }, "_r3ce1cb0cbd5dd6");
  windowProcedure = n((e, r) => {
    if (!(e.type !== u.CLICK || this._toolbar == null || this._catalog == null))
      switch ((this._toolbar.windowManager._r7ff8f726debeae(r.name), r.name)) {
        case "earnings_button":
          this._toolbar.catalog?.openVault();
          break;
        case "hc_join_button":
          this._toolbar.catalog?.openClubCenter();
          break;
        case "help_button":
          this._toolbar._r2b0be5baed9721(a.MENU_HELP);
          break;
        case "settings_button":
          this._toolbar._r690eeac018f022();
          break;
        case "credit_count_button":
          this._catalog._r6e81894a74658f();
          break;
        case "ducket_count_button":
          this._catalog.openCatalogPage(CatalogPageName.CATALOG_PAGE_DUCKETS_INFO);
          break;
        case "diamond_count_button":
          this._catalog.openCatalogPage(CatalogPageName.CATALOG_PAGE_LOYALTY_POINTS_INFO);
          break;
        case "logout_button":
          this._toolbar.reboot();
          break;
      }
  }, "windowProcedure");
  get earningsUnseenIndicator() {
    return this._window?.findChildByName("earnings_unseen_indicator");
  }
}
