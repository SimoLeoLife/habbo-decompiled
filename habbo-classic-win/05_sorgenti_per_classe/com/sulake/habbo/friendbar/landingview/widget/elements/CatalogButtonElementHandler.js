// Estratto da HabboAirLauncher.deobf.js, riga 207631.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/CatalogButtonElementHandler.as
// Nome offuscato: _i3dccb769edfdb1

class extends class_4383 {
  static {
    n(this, "CatalogButtonElementHandler");
  }
  _pageName = "";
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i), (this._pageName = t[2] ?? ""));
  }
  onClick() {
    (this._pageName.length > 0
      ? this.landingView.catalog?.openCatalogPage(this._pageName)
      : this.landingView.catalog?.openCatalogPage(""),
      this.landingView.tracking?.trackGoogle("landingView", "click_genericcatalog"));
  }
}
