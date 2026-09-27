// Estratto da HabboAirLauncher.deobf.js, riga 144236.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/events/CatalogFurniPurchaseEvent.as
// Nome offuscato: _iaf2265046dddcc

class a extends M {
  static {
    n(this, "CatalogFurniPurchaseEvent");
  }
  static CATALOG_FURNI_PURCHASE = "CATALOG_FURNI_PURCHASE";
  var_1507;
  constructor(e, r = !1, t = !1) {
    (super(a.CATALOG_FURNI_PURCHASE, r, t), (this.var_1507 = e));
  }
  get localizationId() {
    return this.var_1507;
  }
}
