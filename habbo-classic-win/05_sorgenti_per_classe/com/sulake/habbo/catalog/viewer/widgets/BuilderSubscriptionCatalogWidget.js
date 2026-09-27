// Estratto da HabboAirLauncher.deobf.js, riga 188311.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BuilderSubscriptionCatalogWidget.as
// Nome offuscato: _ifbf969513add2b

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "BuilderSubscriptionCatalogWidget");
  }
  _r504fee21230341 = "";
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.const_1374, this._r463d72ad464a13),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? ((this._r504fee21230341 = this._catalog.getProperty("builders_club.buy_membership_page")),
        this.updateSubscriptionInfo(),
        (this._window.procedure = this.windowProcedure),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.const_1374, this._r463d72ad464a13),
        !0)
      : !1;
  }
  updateSubscriptionInfo() {
    let r = this._catalog._rc7d5aba394e3cd,
      t = this._window?.findChildByName("subscribe_button"),
      i = this._window?.findChildByName("subscribe_button_sms"),
      s = this._window?.findChildByName("subscribe_button_big"),
      o = this._window?.findChildByName("try_button"),
      d = this._catalog.getCatalogNavigator(CatalogType.BUILDER),
      c = this._catalog.getProperty("builders_club.try_page"),
      f = d?._r9da27393a02c26(c) != null;
    t == null ||
      s == null ||
      o == null ||
      i == null ||
      (r > 0 || !f
        ? ((s.visible = !0), (t.visible = !1), (o.visible = !1), (i.visible = !1))
        : ((s.visible = !1), (t.visible = !1), (o.visible = !0), (i.visible = !1)),
      this._r504fee21230341 !== "" &&
        ((i.visible = !0),
        o.visible || ((i.x = o.x), (i.y = o.y)),
        s.visible && ((s.visible = !1), (t.visible = !1))));
  }
  _r463d72ad464a13 = n((r) => {
    this.updateSubscriptionInfo();
  }, "_r463d72ad464a13");
  windowProcedure = n((r, t) => {
    let i = r,
      s = t;
    if (!(i?.type !== u.CLICK || s == null))
      switch (s.name) {
        case "subscribe_button_big":
        case "subscribe_button":
          Ae.openWebPageAndMinimizeClient(
            this._catalog.getProperty("web.shop.subscription.relative.url"),
          );
          break;
        case "subscribe_button_sms":
          Ae.openWebPageAndMinimizeClient(this._r504fee21230341);
          break;
        case "try_button":
          this._catalog.openCatalogPage(
            this._catalog.getProperty("builders_club.try_page"),
            CatalogType.BUILDER,
          );
          break;
        default:
          break;
      }
  }, "windowProcedure");
}
