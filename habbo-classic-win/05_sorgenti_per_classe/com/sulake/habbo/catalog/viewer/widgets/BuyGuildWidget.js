// Estratto da HabboAirLauncher.deobf.js, riga 189222.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BuyGuildWidget.as
// Nome offuscato: _i2034d9f66a97bc

class extends CatalogWidget {
  static {
    n(this, "BuyGuildWidget");
  }
  _button = null;
  constructor(e) {
    super(e);
  }
  init() {
    return super.init()
      ? ((this._button = this.window?.findChildByName("start_guild_purchase")),
        this._button?.addEventListener(u.CLICK, this.onButtonClicked),
        !0)
      : !1;
  }
  dispose() {
    (this._button?.removeEventListener(u.CLICK, this.onButtonClicked),
      (this._button = null),
      super.dispose());
  }
  onButtonClicked = n((e) => {
    let r = this.page?.viewer.catalog;
    (ll.getInstance()?.trackGoogle("groupPurchase", "catalogBuyClicked"),
      r?.connection?.send(new _idfd43e03d67b49()),
      r?.buildersClubEnabled(CatalogType.NORMAL));
  }, "onButtonClicked");
}
