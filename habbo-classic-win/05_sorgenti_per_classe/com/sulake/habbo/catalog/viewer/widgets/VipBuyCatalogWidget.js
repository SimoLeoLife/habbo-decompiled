// Extracted from HabboAirLauncher.deobf.js, line 196184.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/VipBuyCatalogWidget.as
// Obfuscated name: _ifb179f54ff3292

class extends CatalogWidget {
  constructor(r, t, i = !1) {
    super(r);
    this.var_2513 = i;
    this._catalog = t;
  }
  static {
    n(this, "VipBuyCatalogWidget");
  }
  var_63 = null;
  _offers = [];
  _catalog;
  get isGift() {
    return this.var_2513;
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
        this.var_63.requestOffers(
          this.var_2513 ? UnkConstants_d2bfaa._r22299e8bff5824 : UnkConstants_d2bfaa._r986d1e6320967a,
        ),
        !0)
      : !1;
  }
  reset() {
    for (let r of this._offers) r.dispose();
    this._offers = [];
  }
  initClubType(r) {
    if (this.disposed) return;
    let t = this._catalog.localization,
      i = this._catalog.getPurse();
    if (i != null && t != null) {
      let o = (i.clubDays ?? 0) * 31 + (i.clubPeriods ?? 0);
      t._r43eae9731f5b27("catalog.vip.extend.info", "days", String(o));
    }
    this._window != null &&
      r === dr.VIP &&
      !this.var_2513 &&
      ((this._window.findChildByName("vip_title").caption = "${catalog.vip.extend.title}"),
      (this._window.findChildByName("vip_info").caption = "${catalog.vip.extend.info}"));
    let s = this._window?.findChildByName("hccenter_link");
    (s != null &&
      this.var_63 != null &&
      ((s.text =
        this.var_63.localization?.getLocalization(
          "catalog.vip.buy.hccenter",
          "catalog.vip.buy.hccenter",
        ) ?? "catalog.vip.buy.hccenter"),
      (s.underline = !0)),
      this.initLinks());
  }
  _r5c7119ba021dc4 = n((r) => {
    this._catalog.utils.showVipBenefits();
  }, "_r5c7119ba021dc4");
  showOffer(r) {
    if (this.disposed || !r.vip) return;
    r.page = this.page;
    let t;
    try {
      t = new VipBuyItem(r, this._catalog, this.var_2513 ? "HabboCatalogGift" : "HabboCatalogBuy");
    } catch {
      ErrorReportStorage.addDebugData("ClubBuyCatalogWidget", `showOffer - new VipBuyItem(${String(r)}) crashed!`);
      return;
    }
    let i = this._window?.findChildByName("item_list_vip");
    (i != null && t.window != null && i.addListItem(t.window), this._offers.push(t));
  }
  initLinks() {
    let r = this._window?.findChildByName("vip_link");
    r != null && (r.addEventListener(u.CLICK, this._r5c7119ba021dc4), (r.mouseThreshold = 0));
  }
}
