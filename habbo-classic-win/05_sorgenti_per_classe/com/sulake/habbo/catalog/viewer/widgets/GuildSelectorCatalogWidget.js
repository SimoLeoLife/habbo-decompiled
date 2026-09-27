// Estratto da HabboAirLauncher.deobf.js, riga 189635.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/GuildSelectorCatalogWidget.as
// Nome offuscato: _i65008cd54be2f4

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this.var_1438 = t;
  }
  static {
    n(this, "GuildSelectorCatalogWidget");
  }
  static CATALOG_PAGE_LAYOUT_WIDGET_NAME = "guild_selector";
  static const_1115 = "guild_selector_widget_item";
  static GUILD_COLORS_BMP_BORDER_COLOR = 0;
  static GUILD_COLORS_BMP_BORDER_WIDTH = 1;
  static GUILD_COLORS_BMP_HEIGHT = 14;
  static GUILD_COLORS_BMP_WIDTH = 21;
  _r4af4e5ed5e9980 = null;
  _rd5b367ea59c3c1 = [];
  var_2184 = null;
  _membersOnlyInfo = null;
  var_1585 = -1;
  dispose() {
    (this.disposed ||
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      this.page?.dispatchWidgetEvent?.(new StringArrayStuffData(StringArrayStuffData.var_426, "", "", "")),
      this._r4af4e5ed5e9980 != null &&
        ((this._r4af4e5ed5e9980.procedure = null), (this._r4af4e5ed5e9980 = null)),
      (this.var_2184 = null),
      (this._membersOnlyInfo = null),
      this.var_1438 != null &&
        (this.var_1438._rb347c61da64e8d(this), (this.var_1438 = null))),
      super.dispose());
  }
  init() {
    return super.init()
      ? (this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
        this._rd7318259311b4b(CatalogWidgetEnum.GUILD_SELECTOR),
        (this.var_2184 = this.window?.findChildByName("guild_selector") ?? null),
        (this._membersOnlyInfo = this.window?.findChildByName("members_only") ?? null),
        (this.window?.findChildByName("find_groups_button") ?? null)?.addEventListener?.(
          u.CLICK,
          this._rbee2a3222a873e,
        ),
        (this._r4af4e5ed5e9980 = this._window?.findChildByName(a.CATALOG_PAGE_LAYOUT_WIDGET_NAME)),
        this._r4af4e5ed5e9980 != null && (this._r4af4e5ed5e9980.procedure = this._r484ab8a0be82b5),
        this.var_2184 != null && (this.var_2184.visible = !1),
        this._membersOnlyInfo != null && (this._membersOnlyInfo.visible = !1),
        !0)
      : !1;
  }
  _rf81e2a52909f74(r) {
    let t = -1;
    this._rd5b367ea59c3c1 = this.filterGroupMemberships(r);
    let i = r.length > 0;
    (this.events?.dispatchEvent?.(new _i51916ae7f9a707(CatalogWidgetEnum.PURCHASE, i)),
      this.var_2184 != null && (this.var_2184.visible = i),
      this._membersOnlyInfo != null && (this._membersOnlyInfo.visible = !i));
    let s = this._r4af4e5ed5e9980?.numMenuItems ?? 0;
    for (let o = 0; o < s; o++) this._r4af4e5ed5e9980?.removeMenuItemAt(0);
    for (let o = 0; o < this._rd5b367ea59c3c1.length; o++) {
      let d = this._rd5b367ea59c3c1[o];
      (this._r4af4e5ed5e9980?.addMenuItem(this.createDropmenuItemWindow(d)), d.favourite && (t = o));
    }
    this._r4af4e5ed5e9980 != null &&
      (this.var_1585 === -1
        ? t !== -1
          ? (this._r4af4e5ed5e9980.selection = t)
          : this._r4af4e5ed5e9980.numMenuItems > 0 && (this._r4af4e5ed5e9980.selection = 0)
        : (this._r4af4e5ed5e9980.selection = this.var_1585));
  }
  selectFirstOffer() {
    this.page != null &&
      this.page.offers.length > 0 &&
      this.page._rdee997211ca56c(this.page.offers[0].offerId);
  }
  filterGroupMemberships(r) {
    return r;
  }
  selectGroup(r) {
    (this.page?.dispatchWidgetEvent?.(
      new StringArrayStuffData(r.groupId, r.primaryColor, r.secondaryColor, r._rc9fc89e7eb27a7),
    ),
      this.page?.dispatchWidgetEvent?.(
        new _iaea7174beb96ef(this.getPreviewerStuffData(r.groupId, r.primaryColor, r.secondaryColor, r._rc9fc89e7eb27a7)),
      ),
      this.events?.dispatchEvent?.(new SetExtraPurchaseParameterEvent(r.groupId.toString())));
  }
  _rd886c8bcbe0933 = n((r) => {
    (this.var_1438?._r496e7e01380f03(this),
      this.events?.dispatchEvent?.(new _ic4d6c8d627ab4e(CatalogWidgetEventEnum.EXTRA_PARAM_REQUIRED_FOR_BUY)));
  }, "_rd886c8bcbe0933");
  _r484ab8a0be82b5 = n((r, t) => {
    r.type === y.const_238 &&
      this._r4af4e5ed5e9980 != null &&
      (this._r6d2fd773a7dedb(this._r4af4e5ed5e9980.selection),
      (this.var_1585 = this._r4af4e5ed5e9980.selection));
  }, "_r484ab8a0be82b5");
  _r6d2fd773a7dedb(r) {
    if (r > -1) {
      let t = this._rd5b367ea59c3c1[r];
      t != null && this.selectGroup(t);
    }
  }
  _r05afaa620b31f7(r, t) {
    let i = new A(a.GUILD_COLORS_BMP_WIDTH, a.GUILD_COLORS_BMP_HEIGHT, !1, a.GUILD_COLORS_BMP_BORDER_COLOR),
      s = Math.floor(i.width / 2) + 1,
      o = new D();
    ((o.left = a.GUILD_COLORS_BMP_BORDER_WIDTH),
      (o.top = a.GUILD_COLORS_BMP_BORDER_WIDTH),
      (o.right = s),
      (o.bottom = i.height - a.GUILD_COLORS_BMP_BORDER_WIDTH));
    let d = new D();
    return (
      (d.left = s),
      (d.top = a.GUILD_COLORS_BMP_BORDER_WIDTH),
      (d.right = i.width - a.GUILD_COLORS_BMP_BORDER_WIDTH),
      (d.bottom = i.height - a.GUILD_COLORS_BMP_BORDER_WIDTH),
      i.fillRect(o, r),
      i.fillRect(d, t),
      i
    );
  }
  createDropmenuItemWindow(r) {
    let t = this.page?.viewer.catalog,
      i = this._r05afaa620b31f7(parseInt(r.primaryColor, 16), parseInt(r.secondaryColor, 16)),
      o = t?.assets.getAssetByName(a.const_1115)?.content ?? null,
      d = o != null ? t?.windowManager.buildFromXML(o) : null;
    if (d == null) throw new Error("Guild selector item template is missing.");
    let c = d.findChildByName("guild_colors"),
      f = d.findChildByName("guild_name");
    return (c != null && (c.bitmap = i), f != null && (f.caption = r.groupName), d);
  }
  _rbee2a3222a873e = n((r) => {
    this.page?.viewer.catalog?.navigator?.performGuildBaseSearch();
  }, "_rbee2a3222a873e");
  getPreviewerStuffData(r, t, i, s) {
    let o = ["0", r.toString(), s, t, i],
      d = new ao();
    return (d._rd51ff77b1b0bee(o), d);
  }
}
