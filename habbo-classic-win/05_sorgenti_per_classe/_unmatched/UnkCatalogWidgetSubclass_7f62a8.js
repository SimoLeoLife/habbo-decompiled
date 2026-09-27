// Extracted from HabboAirLauncher.deobf.js, line 192574.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7f62a883adbdc9

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this.var_1438 = t;
  }
  static {
    n(this, "UnkCatalogWidgetSubclass_7f62a8");
  }
  init() {
    return super.init()
      ? (this._rd7318259311b4b(CatalogWidgetEnum.GUILD_BADGE_VIEW),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.GUILD_SELECTED, this._r4de96d8a4a5cf2),
        !0)
      : !1;
  }
  dispose() {
    (this.disposed ||
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.GUILD_SELECTED, this._r4de96d8a4a5cf2),
      (this.var_1438 = null)),
      super.dispose());
  }
  _r4de96d8a4a5cf2 = n((r) => {
    if (this.disposed) return;
    let t = this._window?.findChildByName("badge")?.widget;
    t != null && ((t.badgeId = r._rc9fc89e7eb27a7), (t.groupId = r.guildId));
  }, "_r4de96d8a4a5cf2");
}
