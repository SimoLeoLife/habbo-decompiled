// Extracted from HabboAirLauncher.deobf.js, line 190448.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/LoyaltyVipBuyCatalogWidget.as

class extends CatalogWidget {
  static {
    n(this, "LoyaltyVipBuyCatalogWidget");
  }
  var_63 = null;
  _offers = [];
  _catalog;
  constructor(e, r) {
    (super(e), (this._catalog = r));
  }
  get isGift() {
    return !1;
  }
  dispose() {
    (this.var_63?._ra1964c3621bd2d(this),
      (this.var_63 = null),
      this.reset(),
      super.dispose());
  }
  init() {
    return super.init()
      ? ((this._offers = []),
        (this.var_63 = this._catalog._r5a5819a5decf89()),
        this.var_63.registerVisualization(this),
        this.var_63.requestOffers(UnkConstants_d2bfaa._rb2c7506df019d4),
        !0)
      : !1;
  }
  reset() {
    for (let e of this._offers) e.dispose();
    this._offers = [];
  }
  initClubType(e) {
    if (this.disposed) return;
    let r = this._catalog.localization,
      t = this._catalog.getPurse();
    if (t != null && r != null) {
      let s = (t.clubDays ?? 0) * 31 + (t.clubPeriods ?? 0);
      r._r43eae9731f5b27("catalog.vip.extend.info", "days", String(s));
    }
    this._window != null &&
      e === dr.VIP &&
      (this._window.findChildByName("vip_title") &&
        (this._window.findChildByName("vip_title").caption = "${catalog.vip.extend.title}"),
      this._window.findChildByName("vip_info") &&
        (this._window.findChildByName("vip_info").caption = "${catalog.vip.extend.info}"));
    let i = this._window?.findChildByName("vip_link");
    i != null &&
      ((i.underline = !0), i.addEventListener(u.CLICK, this._r5c7119ba021dc4), (i.mouseThreshold = 0));
  }
  _r5c7119ba021dc4 = n((e) => {
    this._catalog.utils.showVipBenefits();
  }, "_r5c7119ba021dc4");
  showOffer(e) {
    if (this.disposed || !e.vip) return;
    e.page = this.page;
    let r;
    try {
      r = new VipBuyItem(e, this._catalog, "HabboCatalogBuy");
    } catch {
      ErrorReportStorage.addDebugData("LoyaltyVipBuyCatalogWidget", `showOffer - new VipBuyItem(${String(e)}) crashed!`);
      return;
    }
    let t = this._window?.findChildByName("item_list_vip");
    (t != null && r.window != null && t.addListItem(r.window), this._offers.push(r));
  }
}
