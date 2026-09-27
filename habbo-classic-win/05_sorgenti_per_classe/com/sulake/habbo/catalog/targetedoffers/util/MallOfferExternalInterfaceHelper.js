// Estratto da HabboAirLauncher.deobf.js, riga 187789.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/util/MallOfferExternalInterfaceHelper.as
// Nome offuscato: _ia6eddae2cee010

class a {
  constructor(e) {
    this.var_63 = e;
    ur.available &&
      (ur._r77b8521b16f762(a.GET_HABBO_SHOP_OFFER_RESULT_CALLBACK, this._rbf6075b3487d91),
      ur._r77b8521b16f762(a.GET_HABBO_SHOP_OFFER_FAILED_CALLBACK, this._rbef53104c3c7a6),
      ur.call(a.GET_HABBO_SHOP_OFFER_FUNCTION));
  }
  static {
    n(this, "MallOfferExternalInterfaceHelper");
  }
  static GET_HABBO_SHOP_OFFER_FUNCTION = "TargetedWebOffer.checkOffer";
  static GET_HABBO_SHOP_OFFER_FAILED_CALLBACK = "targetedWebOfferCheckFailed";
  static GET_HABBO_SHOP_OFFER_RESULT_CALLBACK = "targetedWebOfferCheckResponse";
  dispose() {
    (ur.available &&
      (ur._r77b8521b16f762(a.GET_HABBO_SHOP_OFFER_RESULT_CALLBACK, null), ur._r77b8521b16f762(a.GET_HABBO_SHOP_OFFER_FAILED_CALLBACK, null)),
      (this.var_63 = null));
  }
  _rbf6075b3487d91 = n((e) => {
    if (e == null) return;
    let r = new HabboMallOffer(e);
    this.var_63?._ra0cb123153b0ed(r);
  }, "_rbf6075b3487d91");
  _rbef53104c3c7a6 = n(() => {}, "_rbef53104c3c7a6");
}
