// Estratto da HabboAirLauncher.deobf.js, riga 206860.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/CatalogPromoWidget.as
// Nome offuscato: _i98e901db508d47

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "CatalogPromoWidget");
  }
  _container = null;
  _r0eec17f8346fd3 = "";
  _disposed = !1;
  get xmlAssetName() {
    return "catalog_promo";
  }
  initialize() {
    if (
      ((this._container = this._landingView?.getXmlWindow(this.xmlAssetName)),
      this._container == null || this._landingView == null)
    )
      return;
    this._r0eec17f8346fd3 = this._landingView.getProperty("landing.view.catalog.promo.target");
    let e = this._container.findChildByName("picture");
    (e != null && (e.assetUri = this._landingView.getProperty("landing.view.catalog.promo.image.uri")),
      this._container.findChildByName("open_page_button")?.addEventListener(u.CLICK, this._rb9d7633557fc38),
      (this._container.visible = !(this._r0eec17f8346fd3 === "" && (e?.assetUri ?? "") === "")),
      this.setCustomLocalization(
        "catalog_promo_caption",
        "landing.view.catalog.promo.caption",
        this._r0eec17f8346fd3,
      ),
      this.setCustomLocalization("catalog_promo_info", "landing.view.catalog.promo.info", this._r0eec17f8346fd3),
      this.setCustomLocalization("open_page_button", "landing.view.catalog.open.page", this._r0eec17f8346fd3),
      this.setCustomLocalization(
        "catalog_promo_picture_text",
        "landing.view.catalog.promo.picture.text",
        this._r0eec17f8346fd3,
      ),
      this.setCustomLocalization(
        "catalog_promo_title",
        "landing.view.catalog.promo.title",
        this._r0eec17f8346fd3,
      ));
  }
  refresh() {}
  get container() {
    return this._container;
  }
  dispose() {
    this._disposed ||
      ((this._landingView = null),
      this._container?.dispose(),
      (this._container = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  _rb9d7633557fc38 = n(() => {
    this._r0eec17f8346fd3.length > 0 &&
      this._landingView?.catalog?.openCatalogPage(this._r0eec17f8346fd3);
  }, "_rb9d7633557fc38");
  setCustomLocalization(e, r, t) {
    let i = this._landingView?.localizationManager?._r5f04530d38380d?.(`${r}.${t}`) ?? null,
      s = this._container?.findChildByName(e);
    i != null && s != null && (s.caption = `\${${r}.${t}}`);
  }
}
