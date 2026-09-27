// Extracted from HabboAirLauncher.deobf.js, line 192601.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/GuildForumSelectorCatalogWidget.as
// Obfuscated name: _ia3976122ea3d24

class extends Ez {
  static {
    n(this, "GuildForumSelectorCatalogWidget");
  }
  constructor(e, r) {
    super(e, r);
  }
  filterGroupMemberships(e) {
    let r = this.var_1438?.catalog,
      t = r?.sessionDataManager?.userId ?? -1,
      i = r?.sessionDataManager?.hasSecurity(class_1794.EMPLOYEE) ?? !1;
    return e.filter((s) => s._r2bc4b797ee5b8d || s.ownerId === t || i);
  }
  selectGroup(e) {
    (super.selectGroup(e),
      this.events?.dispatchEvent?.(new CatalogWidgetShowWarningTextEvent(e._r2bc4b797ee5b8d ? "${catalog.alert.group_has_forum}" : "")));
  }
}
