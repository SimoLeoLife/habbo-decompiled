// Extracted from HabboAirLauncher.deobf.js, line 188059.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/ActivityPointDisplayCatalogWidget.as
// Obfuscated name: _i1ba974d768d000

class extends CatalogWidget {
  static {
    n(this, "ActivityPointDisplayCatalogWidget");
  }
  constructor(e) {
    super(e);
  }
  dispose() {
    (this.page?.viewer.catalog?.events.removeEventListener?.(PurseUpdateEvent.const_565, this._ra56eed862289ec),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    this._rd7318259311b4b(CatalogWidgetEnum.ACTIVITY_POINT_DISPLAY);
    let e = this._window?.findChildByName("activity_points_txt");
    return (
      e != null && (e.caption = ""),
      this.page?.viewer.catalog?.events.addEventListener?.(PurseUpdateEvent.const_565, this._ra56eed862289ec),
      this.updateAmount()
    );
  }
  updateAmount() {
    if (this.disposed || this._window == null) return !1;
    let e = this.getActivityPointType();
    if (e < 1 || !et.isVisible(e)) return ((this._window.visible = !1), !1);
    let r = this.page?.viewer.catalog;
    if (r?.localization == null) return !1;
    let t = "catalog.purchase.youractivitypoints";
    (r.localization._r43eae9731f5b27(t, "activitypoints", `${r.getPurse().getActivityPointsForType(e)}`),
      r.localization._r43eae9731f5b27(t, "currencyname", r.getActivityPointName(e)));
    let i = this._window.findChildByName("activity_points_txt");
    i != null && (i.caption = r.localization.getLocalization(t));
    let s = this._window.findChildByName("activity_point_icon");
    return (s != null && (s.style = et.getIconStyleFor(e, r, !0)), (this._window.visible = !0), !0);
  }
  _ra56eed862289ec = n((e) => {
    this.updateAmount();
  }, "_ra56eed862289ec");
  getActivityPointType() {
    if (this.page?.offers == null) return 0;
    for (let e of this.page.offers) if (e.activityPointType > 0) return e.activityPointType;
    return 0;
  }
}
