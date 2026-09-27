// Extracted from HabboAirLauncher.deobf.js, line 208671.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/ExpiringCatalogPageWidget.as
// Obfuscated name: _i31a3bcac4ac13c

class a {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "ExpiringCatalogPageWidget");
  }
  static REFRESH_PERIOD_IN_MILLIS = 30 * 1e3;
  _container = null;
  _pageName = "";
  var_4536 = 0;
  var_5831 = "";
  _lastRequestTime = null;
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    ((this._landingView = null), (this._container = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("expiring_catalog_page")),
      !(this._container == null || this._landingView == null) &&
        ((this._container.findChildByName("open_catalog_button").procedure = this._rcf384904514453),
        (this._container.visible = !1),
        this._landingView._rf3db13932bfb60?._r2e106e2349a0b6(
          new class_2991((e) => {
            this.onCatalogPage(e);
          }),
        ),
        HabboLandingView.positionAfterAndStretch(this._container, "page_expiry_title", "hdr_line")));
  }
  refresh() {
    (this._lastRequestTime == null || this._lastRequestTime.getTime() + a.REFRESH_PERIOD_IN_MILLIS < Date.now()) &&
      (this._landingView?.send(new UnkMessageComposer_0args_b21bdb()), (this._lastRequestTime = new Date()));
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  refreshContent() {
    if (this._container == null) return;
    if (this._pageName === "") {
      this._container.visible = !1;
      return;
    }
    ((this._container.visible = !0),
      (this._container.findChildByName("page_header_txt").caption = this.getText(
        "landing.view.pageexpiry",
        `page.${this._pageName}`,
        "header",
      )),
      (this._container.findChildByName("page_desc_txt").caption = this.getText(
        "landing.view.pageexpiry",
        `page.${this._pageName}`,
        "desc",
      )));
    let e = this._container.findChildByName("promo_bitmap");
    (e != null &&
      (e.assetUri =
        this.var_5831.length > 0
          ? "${image.library.url}" + this.var_5831
          : "${image.library.url}reception/catalog_teaser_" + this._pageName + ".png"),
      this.refreshTimer());
  }
  refreshTimer() {
    let r = this._container?.findChildByName("countdown_widget")?.widget;
    r != null && (r.seconds = this.var_4536);
  }
  getText(e, r, t) {
    return "${" + (e + (this.useDefaultLocalization ? "" : "." + r) + "." + t) + "}";
  }
  get useDefaultLocalization() {
    return !1;
  }
  _rcf384904514453 = n((e) => {
    e.type === u.CLICK &&
      (this._landingView?.catalog?.openCatalogPage(this._pageName),
      this._landingView?.tracking?.trackGoogle("landingView", "click_goToExpiringCatalogPage"));
  }, "_rcf384904514453");
  onCatalogPage(e) {
    let r = ClassUtils.getParser(e, class_4014);
    r != null &&
      r != null &&
      ((this._pageName = r.pageName),
      (this.var_4536 = r._r94ef33a3e603b5),
      (this.var_5831 = r.image),
      this.refreshContent());
  }
}
