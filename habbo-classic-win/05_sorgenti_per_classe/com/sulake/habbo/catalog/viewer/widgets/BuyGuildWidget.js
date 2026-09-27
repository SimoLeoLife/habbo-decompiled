// Extracted from HabboAirLauncher.deobf.js, line 189222.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BuyGuildWidget.as
// Obfuscated name: _i2034d9f66a97bc

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
      r?.connection?.send(new class_3754()),
      r?.buildersClubEnabled(CatalogType.NORMAL));
  }, "onButtonClicked");
}
