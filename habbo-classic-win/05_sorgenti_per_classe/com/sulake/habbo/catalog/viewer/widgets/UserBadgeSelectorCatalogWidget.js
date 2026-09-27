// Estratto da HabboAirLauncher.deobf.js, riga 195976.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/UserBadgeSelectorCatalogWidget.as
// Nome offuscato: _i2c643871886e24

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
    this._excludedBadges =
      this._catalog?.getProperty("badge.display.excluded.badgeCodes").split(",") ?? [];
  }
  static {
    n(this, "UserBadgeSelectorCatalogWidget");
  }
  static BADGE_GRID_ITEM_NAME = "badgeGridItem";
  static MAX_SEARCH_STRING_LENGTH = 40;
  _r3e30777a814fac = null;
  _gridItemLayout = null;
  _rbd95be0cb8014b = null;
  var_3388 = null;
  _excludedBadges = [];
  _re12d1d69845155 = [];
  _rbb9b1231ba476b = [];
  var_2618 = "";
  _r2c64a736b48b30 = null;
  init() {
    if (!super.init()) return !1;
    this._r3e30777a814fac = this._window?.findChildByName("badgeGrid");
    let t = this.page?.viewer.catalog?.assets.getAssetByName("badgeGridItem");
    return (
      (this._gridItemLayout = t?.content ?? null),
      this._window != null && (this._window.procedure = this._r28589daa706453),
      this._r1e5b4d07d64808(),
      this.applyBadgeFilter(!1),
      this.updateSearchUiState(),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      (this.var_3388 = new class_3784(this._r465f9c44f46d85)),
      this._catalog?.connection?.addMessageEvent(this.var_3388),
      !0
    );
  }
  dispose() {
    (this.var_3388 != null &&
      (this._catalog?.connection?.removeMessageEvent(this.var_3388),
      (this.var_3388 = null)),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      this._window != null &&
        this._window.procedure === this._r28589daa706453 &&
        (this._window.procedure = null),
      (this._catalog = null),
      (this._excludedBadges = []),
      (this._re12d1d69845155 = []),
      (this._rbb9b1231ba476b = []),
      (this._r2c64a736b48b30 = null),
      (this._rbd95be0cb8014b = null),
      (this._r3e30777a814fac = null),
      (this._gridItemLayout = null),
      super.dispose());
  }
  _r1e5b4d07d64808() {
    ((this._re12d1d69845155 =
      this._catalog?.inventory?._r014ae8d052c574(this._excludedBadges) ?? []),
      this._rbd95be0cb8014b != null &&
        !this._re12d1d69845155.includes(this._rbd95be0cb8014b) &&
        (this._rbd95be0cb8014b = null),
      this._r96e8d62dc43757());
  }
  _r96e8d62dc43757() {
    this._r2c64a736b48b30 = {};
    for (let r of this._re12d1d69845155) this._r2c64a736b48b30[r] = this.buildBadgeSearchText(r);
  }
  _r3a5181f55e3196() {
    if (this._r3e30777a814fac == null) return;
    this._r3e30777a814fac._rbb4c26d068856f();
    let r = 0;
    for (let t of this._rbb9b1231ba476b)
      this._r3e30777a814fac.addGridItem(this.createGridItem(t, r++));
    this._rd13d26dd9ad81d();
  }
  _rd886c8bcbe0933 = n((r) => {
    let t = this.page?.offers[0] ?? null;
    t != null &&
      (this.events?.dispatchEvent?.(new _ic4d6c8d627ab4e(CatalogWidgetEventEnum.EXTRA_PARAM_REQUIRED_FOR_BUY)), this.events?.dispatchEvent?.(new _idfee6137b0eb86(t)));
  }, "_rd886c8bcbe0933");
  createGridItem(r, t) {
    let s = this.page?.viewer.catalog?.windowManager.buildFromXML(this._gridItemLayout);
    if (s == null) throw new Error("Badge grid item template is missing.");
    let o = s.findChildByName("badgeWidget")?.widget;
    return (
      o != null && ((o.type = Wo.NORMAL), (o.badgeId = r)),
      (s.id = t),
      (s.name = a.BADGE_GRID_ITEM_NAME),
      (s.procedure = this._r3849fe0bdb52e1),
      s
    );
  }
  setBadgeGridItemSelectionBg(r, t) {
    let s = this._r3e30777a814fac?.getGridItemAt(r)?.findChildByName("bg");
    s != null && (s.style = t ? 0 : 2);
  }
  _rd13d26dd9ad81d() {
    if (this._rbd95be0cb8014b == null || this._rbb9b1231ba476b == null) return;
    let r = this._rbb9b1231ba476b.indexOf(this._rbd95be0cb8014b);
    r >= 0 && this.setBadgeGridItemSelectionBg(r, !0);
  }
  _re2e00cad2c8ded(r = !0) {
    if (this._rbd95be0cb8014b != null && this._rbb9b1231ba476b != null) {
      let t = this._rbb9b1231ba476b.indexOf(this._rbd95be0cb8014b);
      t >= 0 && this.setBadgeGridItemSelectionBg(t, !1);
    }
    ((this._rbd95be0cb8014b = null),
      r &&
        (this.events?.dispatchEvent?.(new SetExtraPurchaseParameterEvent("")),
        this.page?.dispatchWidgetEvent?.(new _iaea7174beb96ef(this.getPreviewerStuffData("")))));
  }
  _raa48691e3c44e6(r) {
    if (!(this._rbb9b1231ba476b == null || r < 0 || r >= this._rbb9b1231ba476b.length)) {
      if (this._rbd95be0cb8014b != null) {
        let t = this._rbb9b1231ba476b.indexOf(this._rbd95be0cb8014b);
        t >= 0 && this.setBadgeGridItemSelectionBg(t, !1);
      }
      ((this._rbd95be0cb8014b = this._rbb9b1231ba476b[r] ?? null),
        this.setBadgeGridItemSelectionBg(r, !0),
        this.events?.dispatchEvent?.(new SetExtraPurchaseParameterEvent(this._rbd95be0cb8014b ?? "")),
        this.page?.dispatchWidgetEvent?.(new _iaea7174beb96ef(this.getPreviewerStuffData(this._rbd95be0cb8014b))));
    }
  }
  _rec59187c13dd75(r) {
    let t = r;
    for (; t != null;) {
      if (t.name === a.BADGE_GRID_ITEM_NAME) return t;
      t = t.parent;
    }
    return null;
  }
  _r3849fe0bdb52e1 = n((r, t) => {
    if (r.type !== u.CLICK) return;
    let i = this._rec59187c13dd75(t);
    i != null && this._raa48691e3c44e6(i.id);
  }, "_r3849fe0bdb52e1");
  getPreviewerStuffData(r) {
    let t = ["0", r ?? "", "", ""],
      i = new ao();
    return (i._rd51ff77b1b0bee(t), i);
  }
  _r28589daa706453 = n((r, t) => {
    if (((t ??= r.target), r.type === u.CLICK))
      t?.name === "search_placeholder"
        ? this.focusSearchInput()
        : (t?.name === "cancel_search_btn" || t?.parent?.name === "cancel_search_btn") &&
          this.clearSearch();
    else if (r.type === y.WINDOW_EVENT_CHANGE) {
      let i = t;
      if (i == null || i.name !== "search_input") return;
      (i.text.length > a.MAX_SEARCH_STRING_LENGTH && (i.text = i.text.substring(0, a.MAX_SEARCH_STRING_LENGTH)),
        (i.scrollH = 0),
        (this.var_2618 = this.normalizeSearchText(i.text)),
        this.applyBadgeFilter(),
        this.updateSearchUiState());
    } else
      r.type === sr.const_1081 &&
        t?.name === "search_input" &&
        r?.keyCode === 27 &&
        this.clearSearch();
  }, "_r28589daa706453");
  focusSearchInput() {
    let r = this._window?.findChildByName("search_input");
    r != null && (r.focus(), r._r1c386c8571c5d9(0, r.text.length));
  }
  clearSearch() {
    let r = this._window?.findChildByName("search_input");
    (r != null && ((r.text = ""), (r.scrollH = 0)),
      (this.var_2618 = ""),
      this.applyBadgeFilter(),
      this.updateSearchUiState());
  }
  applyBadgeFilter(r = !0) {
    this._rbb9b1231ba476b = [];
    for (let t of this._re12d1d69845155) this._red0517bc113d67(t) && this._rbb9b1231ba476b.push(t);
    (r &&
      this._rbd95be0cb8014b != null &&
      !this._rbb9b1231ba476b.includes(this._rbd95be0cb8014b) &&
      this._re2e00cad2c8ded(),
      this._r3a5181f55e3196());
  }
  _red0517bc113d67(r) {
    return this.var_2618 === ""
      ? !0
      : (this._r2c64a736b48b30?.[r] ?? "").indexOf(this.var_2618) >= 0;
  }
  buildBadgeSearchText(r) {
    return r == null || this._catalog == null || this._catalog.localization == null
      ? ""
      : this.normalizeSearchText(
          `${r} ${this._catalog.localization.getBadgeName(r)} ${this._catalog.localization.getBadgeDesc(r)}`,
        );
  }
  normalizeSearchText(r) {
    return r == null ? "" : r.toLowerCase();
  }
  updateSearchUiState() {
    if (this._window == null) return;
    let r = this._window.findChildByName("search_input"),
      t = this._window.findChildByName("search_placeholder"),
      i = this._window.findChildByName("cancel_search_btn"),
      s = r != null && r.text.length > 0;
    (t != null && (t.visible = !s), i != null && (i.visible = s));
  }
  _r465f9c44f46d85 = n((r) => {
    (this._r1e5b4d07d64808(), this.applyBadgeFilter(), this.updateSearchUiState());
  }, "_r465f9c44f46d85");
}
