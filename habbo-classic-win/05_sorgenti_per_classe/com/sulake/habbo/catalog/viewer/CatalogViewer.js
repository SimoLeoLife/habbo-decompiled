// Extracted from HabboAirLauncher.deobf.js, line 196607.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/CatalogViewer.as
// Obfuscated name: _i677805113378f9

class {
  constructor(e, r, t = "") {
    this._catalog = e;
    this._container = r;
    this._r8873f92b5650f9 = t;
  }
  static {
    n(this, "CatalogViewer");
  }
  var_225 = null;
  _r3e2f9f00a2a434 = !1;
  _rc14dd6dffe50df = 0;
  get roomEngine() {
    return this._catalog?.roomEngine ?? null;
  }
  get catalog() {
    if (this._catalog == null) throw new Error("CatalogViewer catalog is not available.");
    return this._catalog;
  }
  get _r28a444d88bee4d() {
    return this._r8873f92b5650f9;
  }
  get currentPage() {
    return this.var_225;
  }
  get mainContainer() {
    return this._container?.parent ?? null;
  }
  get _r8bf0e1ea3f9bbc() {
    return this._container?.tags ?? [];
  }
  get _r5362ff11d47b63() {
    return this._rc14dd6dffe50df;
  }
  dispose() {
    (this._rdf35ad8b4c0287(),
      (this._catalog = null),
      (this._container = null),
      (this._r8873f92b5650f9 = ""));
  }
  showCatalogPage(e, r, t, i, s, o) {
    if (this.var_225 != null) {
      if (!this._r3e2f9f00a2a434 && this.var_225.pageId === e) {
        s > -1 && this.var_225._rdee997211ca56c(s);
        return;
      }
      this._rdf35ad8b4c0287();
    }
    let d = new Ju(this, e, r, t, i, this.catalog, o);
    ((this.var_225 = d),
      (this._rc14dd6dffe50df = e > qu.DUMMY_PAGE_ID_FOR_OFFER_SEARCH ? e : this._rc14dd6dffe50df),
      d.window != null &&
        this._container != null &&
        (this._container.addChild(d.window),
        (d.window.height = this._container.height),
        (this._container.width = d.window.width),
        this._container.parent != null &&
          (this._container.x = this._container.parent.width - this._container.width - 8),
        this.setLeftPaneVisibility(this._container.x >= 130),
        (this._container.visible = !0)),
      (this._r3e2f9f00a2a434 = !1),
      d._rdee997211ca56c(s));
  }
  _rdf35ad8b4c0287() {
    this.var_225 != null &&
      (this._container != null &&
        this.var_225.window?.parent === this._container &&
        (this._container.removeChild(this.var_225.window), this._container.invalidate()),
      this.var_225.dispose(),
      (this.var_225 = null));
  }
  _rce6d875880eb9d() {
    this.var_225?.closed();
  }
  dispatchWidgetEvent(e) {
    return this.var_225?.dispatchWidgetEvent(e) ?? !1;
  }
  getCurrentLayoutCode() {
    return this.var_225?._rf3871e54af1151 ?? "";
  }
  showSearchResults(e) {
    this._rdf35ad8b4c0287();
    let r = new Ju(
      this,
      -1,
      "default_3x3",
      new mf(["catalog_header_roombuilder", "credits_v3_teaser"], ["${catalog.search.results}"]),
      e,
      this.catalog,
      !1,
      Ju._r0d1a664a7fc91e,
    );
    ((this.var_225 = r),
      r.window != null &&
        this._container != null &&
        (this._container.addChild(r.window),
        (r.window.width = this._container.width),
        (r.window.height = this._container.height),
        (this._container.visible = !0)));
  }
  _r7ef29dad214b22() {
    this._r3e2f9f00a2a434 = !0;
  }
  setLeftPaneVisibility(e) {
    let r = this.mainContainer;
    if (r == null) return;
    let t = r.findChildByName("navigationContainer");
    t != null && (t.visible = e);
    let i = r.findChildByName("searchContainer");
    i != null && (i.visible = e);
  }
}
