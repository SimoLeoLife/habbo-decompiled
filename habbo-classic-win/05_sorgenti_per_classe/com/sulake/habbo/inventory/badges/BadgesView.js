// Estratto da HabboAirLauncher.deobf.js, riga 234812.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/badges/BadgesView.as
// Nome offuscato: _if5a97aedc2b227

class a {
  constructor(e, r, t) {
    this.var_38 = e;
    this._windowManager = r;
  }
  static {
    n(this, "BadgesView");
  }
  static GRID_UPDATE_DELAY_MS = 100;
  static GRID_ITEMS_PER_UPDATE = 25;
  static _r149109d8bb42b7 = 0;
  static FILTER_NORMAL_BADGES = 1;
  static FILTER_ACHIEVEMENTS = 2;
  static _r537d457f3b31d5 = -1;
  static const_743 = -2;
  _view = null;
  _r392513e0aca402 = null;
  _disposed = !1;
  var_217 = !1;
  var_605 = null;
  var_3575 = a._r149109d8bb42b7;
  _ignoreBadgeFilterEvents = !1;
  var_1264 = a._r537d457f3b31d5;
  _rb55207e129ba20 = [a._r537d457f3b31d5];
  _ignoreBadgeRarityFilterEvents = !1;
  get disposed() {
    return this._disposed;
  }
  get isVisible() {
    return this._view != null && this._view.parent != null && this._view.visible;
  }
  _rd6235c3b063492(e) {
    return this.var_38?._rd6235c3b063492(e) ?? !1;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._windowManager = null),
      (this.var_38 = null),
      this.var_605?.dispose(),
      (this.var_605 = null),
      (this._r392513e0aca402 = null),
      this._view?.dispose(),
      (this._view = null));
  }
  getWindowContainer() {
    return (
      this.var_217 || this.init(),
      this._view == null || this._view.disposed ? null : this._view
    );
  }
  updateAll(e) {
    (this.var_38?._r28332e477e8c67(), this.updateListViews(e), this.updateActionView());
  }
  updateActionView() {
    if (!this.var_217 || this._view == null || this._view.disposed) return;
    let e = this._view.findChildByName("wearBadge_button");
    if (e == null) return;
    let r = this.var_38?._r070a63d30cc5cb() ?? null;
    if (r == null) {
      ((e.caption = "${inventory.badges.wearbadge}"),
        e.disable(),
        this.clearSelectedBadgeDetails(),
        this.setBadgeImageVisible(!1));
      return;
    }
    ((e.caption = r._r780270c6ffe49b ? "${inventory.badges.clearbadge}" : "${inventory.badges.wearbadge}"),
      this.updateSelectedBadgeDetails(r));
    let i = this._view.findChildByName("badge_image")?.widget;
    (i != null && (i.badgeId = r.badgeId),
      this.setBadgeImageVisible(!0),
      (this.var_38?.getBadges(zm.BADGES_ACTIVE) ?? []).length >=
        (this.var_38?._rd6597db707bc29() ?? 0) && !r._r780270c6ffe49b
        ? e.disable()
        : e.enable());
  }
  init() {
    if (
      ((this._view = this.var_38?.controller.view?._r1f685677bdb2bd(class_2106.BADGES) ?? null),
      this._view == null)
    )
      return;
    ((this._view.procedure = (o, d) => this.windowEventProc(o, d)), (this._view.visible = !1));
    let e = this._view.findChildByName("wearBadge_button");
    e?.addEventListener(u.CLICK, (o) => this._rcdf026c3e3426b(o));
    let r = this._view.findChildByName("inactive_items"),
      t = this._view.findChildByName("item_grid_pages");
    (r != null && (this.var_605 = new O7e(this, r, t)),
      (this._r392513e0aca402 = this._view.findChildByName("active_items")));
    let i = this._view.findChildByName("filter"),
      s = this._view.findChildByName("clear_filter_button");
    (i != null && (i.caption = ""),
      s != null && (s.visible = !1),
      this.updateFilterOptions(),
      (this.var_217 = !0),
      a.GRID_UPDATE_DELAY_MS,
      a.GRID_ITEMS_PER_UPDATE);
  }
  updateListViews(e) {
    if (!this.var_217 || this._view == null || this._view.disposed) return;
    (this._r392513e0aca402?.removeGridItems(),
      this.var_605?.setFilter(
        this.var_3575,
        this.var_1264,
        e ?? this.getSearchTerm(),
      ),
      this.var_605?._r2a2b5de73dae58(
        this.var_38?.getBadges(zm.BADGES_INACTIVE) ?? [],
      ));
    let r = this.var_38?.getBadges(zm.BADGES_ACTIVE) ?? [];
    if (this._r392513e0aca402 != null)
      for (let t of r) {
        let i = t.window;
        i != null && this._r392513e0aca402.addGridItem(i);
      }
  }
  setBadgeName(e) {
    if (this._view == null || this._view.disposed) return;
    let r = this._view.findChildByName("badgeName");
    r != null && (r.text = e ?? "");
  }
  clearSelectedBadgeDetails() {
    (this.setBadgeName(null),
      this.setTextDetail("badgeDescription", null, !1),
      this.setBadgeRarityDetail(vt.COMMON, !1),
      this.setTextDetail("badgeOwnerCount", null, !1));
  }
  updateSelectedBadgeDetails(e) {
    (this.setBadgeName(e.badgeName),
      this.setTextDetail(
        "badgeDescription",
        e.badgeDescription,
        e.badgeDescription != null && e.badgeDescription !== "",
      ),
      this.setBadgeRarityDetail(e.badgeRarityId, !0),
      this.setTextDetail(
        "badgeOwnerCount",
        this.var_38?.controller.localization?.getLocalizationWithParams(
          "badge.owner_count",
          "",
          "count",
          ka._r141535094129a5(e.ownerCount),
        ) ?? "",
        ka.shouldShowOwnerCount(e.ownerCount),
      ));
  }
  setBadgeImageVisible(e) {
    let r = this._view?.findChildByName("badge_image");
    r != null && (r.visible = e);
  }
  setTextDetail(e, r, t, i = -1) {
    if (this._view == null || this._view.disposed) return;
    let s = this._view.findChildByName(e);
    s != null && ((s.visible = t), (s.text = ""), t && (i >= 0 && (s.textColor = i), (s.text = r ?? "")));
  }
  setBadgeRarityDetail(e, r) {
    if (this._view == null || this._view.disposed) return;
    let t = this._view.findChildByName("badgeRarityTag"),
      i = this._view.findChildByName("badgeRarityBorder"),
      s = this._view.findChildByName("badgeRarity");
    t == null ||
      i == null ||
      s == null ||
      ((t.visible = r),
      (i.visible = r),
      (i.text = ""),
      (s.visible = r),
      (s.text = ""),
      r &&
        ((s.textColor = 16777215),
        (s.text =
          this.var_38?.controller.localization?.getLocalizationWithParams(
            "badge.rarity.badge",
            "",
            "rarity",
            this._r60d0315c341f14(e),
          ) ?? ""),
        (i.text = s.text),
        (t.color = vt.getWhiteBackgroundTagColor(e, this.var_38?.isUncommonBadgeRarityEnabled() ?? !1))));
  }
  _r60d0315c341f14(e) {
    let r = vt.getLabelLocalizationKey(e, this.var_38?.isUncommonBadgeRarityEnabled() ?? !1);
    return this.var_38?.controller.localization?.getLocalization(r, r) ?? r;
  }
  updateFilterOptions() {
    let e = this._view?.findChildByName("filter.options");
    if (e == null) return;
    let r = [
      this.getBadgeFilterLabel(a._r149109d8bb42b7),
      this.getBadgeFilterLabel(a.FILTER_NORMAL_BADGES),
      this.getBadgeFilterLabel(a.FILTER_ACHIEVEMENTS),
    ];
    this._ignoreBadgeFilterEvents = !0;
    try {
      (e.populate(r), (e.selection = this.var_3575));
    } finally {
      this._ignoreBadgeFilterEvents = !1;
    }
    this.updateRarityFilterOptions();
  }
  updateRarityFilterOptions() {
    let e = this._view?.findChildByName("filter.rarity");
    if (e == null) return;
    ((this._rb55207e129ba20 = this._rf6f3d5f2edae00()),
      this._rb55207e129ba20.includes(this.var_1264) || (this.var_1264 = a._r537d457f3b31d5),
      this._r9d52c6151d875c() || (this.var_1264 = a._r537d457f3b31d5));
    let r = this._rb55207e129ba20.map((t) => this.getBadgeRarityFilterLabel(t));
    this._ignoreBadgeRarityFilterEvents = !0;
    try {
      (e.populate(r), (e.selection = Math.max(0, this._rb55207e129ba20.indexOf(this.var_1264))));
    } finally {
      this._ignoreBadgeRarityFilterEvents = !1;
    }
    this._r9d52c6151d875c() ? e.enable() : e.disable();
  }
  windowEventProc(e, r) {
    if (e.type === u.CLICK) {
      if (r.name === "clear_filter_button" && this._view != null) {
        let t = this._view.findChildByName("filter");
        (t != null && (t.caption = ""), (r.visible = !1), this.updateAll(null));
      }
      return;
    }
    if (e.type === sr.const_900 && r.name === "filter" && this._view != null) {
      let t = e,
        i = this._view.findChildByName("clear_filter_button");
      (i != null && (i.visible = r.caption.length > 0),
        t.keyCode === 27
          ? ((r.caption = ""), i != null && (i.visible = !1), this.updateAll(null))
          : t.keyCode === 13 && this.updateAll(r.caption));
      return;
    }
    if (e.type === y.const_238)
      switch (r.name) {
        case "filter.options": {
          if (this._ignoreBadgeFilterEvents) break;
          let t = this.getSelectedBadgeFilter(r);
          t !== this.var_3575 && ((this.var_3575 = t), this.updateAll(null));
          break;
        }
        case "filter.rarity": {
          if (this._ignoreBadgeRarityFilterEvents) break;
          let t = this.getSelectedBadgeRarityFilter(r);
          t !== this.var_1264 && ((this.var_1264 = t), this.updateAll(null));
          break;
        }
      }
  }
  _rcdf026c3e3426b(e) {
    let r = this.var_38?._r070a63d30cc5cb() ?? null;
    r != null && this.var_38?._r0a19c06f3dca2c(r.badgeId);
  }
  getSelectedBadgeFilter(e) {
    if (e == null) return a._r149109d8bb42b7;
    let r = e.selection;
    return ((r < a._r149109d8bb42b7 || r > a.FILTER_ACHIEVEMENTS) && (r = a._r149109d8bb42b7), r);
  }
  getBadgeFilterLabel(e) {
    switch (e) {
      case a._r149109d8bb42b7:
        return (
          this.var_38?.controller.localization?.getLocalization("inventory.badges.filter.all") ??
          ""
        );
      case a.FILTER_NORMAL_BADGES:
        return (
          this.var_38?.controller.localization?.getLocalization(
            "inventory.badges.filter.normal_badges",
          ) ?? ""
        );
      case a.FILTER_ACHIEVEMENTS:
        return (
          this.var_38?.controller.localization?.getLocalization(
            "inventory.badges.filter.achievements",
          ) ?? ""
        );
      default:
        return "";
    }
  }
  _rf6f3d5f2edae00() {
    let e = this.var_38?._r08d57fe7a51c0c() ?? [];
    return (
      this.var_38?._r2ee6103fd26564() && e.unshift(a.const_743),
      e.unshift(a._r537d457f3b31d5),
      e
    );
  }
  getSelectedBadgeRarityFilter(e) {
    if (e == null || this._rb55207e129ba20.length === 0) return a._r537d457f3b31d5;
    let r = e.selection;
    return (
      (r < 0 || r >= this._rb55207e129ba20.length) && (r = 0),
      this._rb55207e129ba20[r] ?? a._r537d457f3b31d5
    );
  }
  _r9d52c6151d875c() {
    return this._rb55207e129ba20.length > 2;
  }
  getBadgeRarityFilterLabel(e) {
    if (e === a._r537d457f3b31d5)
      return (
        this.var_38?.controller.localization?.getLocalization(
          "inventory.badges.filter.rarity.all",
        ) ?? ""
      );
    if (e === a.const_743)
      return (
        this.var_38?.controller.localization?.getLocalization(
          "inventory.badges.filter.rarity.common",
        ) ?? ""
      );
    let r = vt.getLocalizationKey(e, this.var_38?.isUncommonBadgeRarityEnabled() ?? !1);
    return r.length > 0 ? (this.var_38?.controller.localization?.getLocalization(r, r) ?? r) : "";
  }
  getSearchTerm() {
    return this._view == null || this._view.disposed
      ? ""
      : (this._view.findChildByName("filter")?.caption ?? "");
  }
}
