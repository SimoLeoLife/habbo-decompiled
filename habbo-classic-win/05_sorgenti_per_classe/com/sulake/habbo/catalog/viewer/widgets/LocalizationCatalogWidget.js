// Extracted from HabboAirLauncher.deobf.js, line 190121.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/LocalizationCatalogWidget.as
// Obfuscated name: _ia5a23a7dc47646

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "LocalizationCatalogWidget");
  }
  _rd4f9230a99df4d = new Map();
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._r4edcc6a7ebec3e),
      this._rd4f9230a99df4d.clear(),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? (this.initLocalizables(),
        this.initStaticImages(),
        this.initLinks(),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._r4edcc6a7ebec3e),
        !0)
      : !1;
  }
  _r4edcc6a7ebec3e = n((r) => {}, "_r4edcc6a7ebec3e");
  initLinks() {
    if (!(!this.page?._r122eff707ac5c0 || this._window == null))
      for (let r of this.page.links) {
        let t = this._window.findChildByName(r);
        t != null &&
          (t.setParamFlag(N._re3bd61027cfd94),
          (t.mouseThreshold = 0),
          t.addEventListener(u.CLICK, this._r969f57a5e5b280));
      }
  }
  _r969f57a5e5b280 = n((r) => {
    let t = this._catalog?.localization,
      i = this._catalog,
      s = r.target,
      o = s?.name ?? "",
      d = "";
    switch (this.page?._rf3871e54af1151) {
      case "frontpage3":
        switch (o) {
          case "ctlg_txt3":
            (s?.caption ?? "") !== "" &&
              ((d = this.page.localization._rff5b31f1444eed(6)),
              this.page.viewer.catalog.openCatalogPage(d));
            break;
          case "ctlg_txt7":
            (s?.caption ?? "") !== "" &&
              ((d = this.page.localization._rff5b31f1444eed(10)),
              d.indexOf("http") >= 0
                ? this.openExternalLink(d)
                : d === CatalogPageName.CATALOG_PAGE_CREDITS
                  ? Ae.openWebPageAndMinimizeClient(
                      this._catalog?.getProperty("web.shop.relative.url") ?? "",
                    )
                  : this.page.viewer.catalog.openCatalogPage(d));
            break;
        }
        break;
      case "info_pixels":
        switch (o) {
          case "ctlg_text_5":
            this._catalog?.questEngine?._r771098bda9d4ec();
            break;
          case "ctlg_text_7":
            ((d = this.page.localization._rff5b31f1444eed(7)), this.page.viewer.catalog.openCatalogPage(d));
            break;
        }
        break;
      case "info_credits":
        switch (o) {
          case "ctlg_text_5":
            Ae.openWebPageAndMinimizeClient(
              this._catalog?.getProperty("web.shop.relative.url") ?? "",
            );
            break;
          case "ctlg_text_7":
            ((d = this.page.localization._rff5b31f1444eed(7)), this.page.viewer.catalog.openCatalogPage(d));
            break;
        }
        break;
      case "collectibles":
        o === "ctlg_collectibles_link" &&
          ((d = i?.getProperty("link.format.collectibles") ?? ""), this.openExternalLink(d));
        break;
      case "club1":
        o === "ctlg_text_5" && this.page.viewer.catalog.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB);
        break;
      case "club_buy":
        o === "club_link" && ((d = i?.getProperty("link.format.club") ?? ""), this.openExternalLink(d));
        break;
      case "mad_money":
        o === "ctlg_madmoney_button" &&
          ((d = i?.getProperty("link.format.madmoney") ?? ""), this.openExternalLink(d));
        break;
      case "monkey":
        (o === "ctlg_teaserimg_1_region" || o === "ctlg_special_img_region") &&
          ((d = t?.getLocalization("link.format.monkey", "http://store.apple.com/") ?? ""),
          this.openExternalLink(d));
        break;
      case "niko":
        (o === "ctlg_teaserimg_1_region" || o === "ctlg_special_img_region") &&
          ((d =
            t?.getLocalization("link.format.niko", "http://itunes.apple.com/us/app/niko/id481670205?mt=8") ??
            ""),
          this.openExternalLink(d));
        break;
    }
  }, "_r969f57a5e5b280");
  openExternalLink(r) {
    if (r === "") return;
    (this.page?.viewer.catalog?.windowManager.alert(
      "${catalog.alert.external.link.title}",
      "${catalog.alert.external.link.desc}",
      0,
      this._r16d7d65ecad484,
    ),
      Ae.navigateToURL(r, "habboMain"));
  }
  _r16d7d65ecad484 = n((r, t) => {
    r.dispose();
  }, "_r16d7d65ecad484");
  initStaticImages() {
    if (this._window == null) return;
    let r = [];
    this._window.groupChildrenWithTag("STATIC_IMAGE", r, 10);
    for (let t of r)
      if (t instanceof Object && "bitmap" in t) {
        let i = t.name,
          s = t.name;
        (this._rd4f9230a99df4d.set(s, i),
          this.page?.viewer.catalog?.assets.hasAsset(s)
            ? this.setElementImage(i, s)
            : this.retrieveCatalogImage(s));
      }
  }
  initLocalizables() {
    if (this._catalog?.mainContainer != null) {
      let s = this._catalog.mainContainer.findChildByName(mf.const_234);
      s != null && (s.caption = "");
    }
    this._rd4f9230a99df4d = new Map();
    for (let s = 0; s < (this.page?.localization._r8339ed0082fdb8 ?? 0); s++) {
      let o = this.page.localization._r8d4a4221b320de(s, this.page._rf3871e54af1151),
        d = this.page.localization._rff5b31f1444eed(s).replace(
          /\r\n/g,
          `
`,
        ),
        c = null;
      (o === mf.const_234
        ? (c = this._catalog?.mainContainer?.findChildByName(o) ?? null)
        : (c = this._window?.findChildByName(o) ?? null),
        c != null &&
          ((c.caption = d),
          this._r4fb654e0acb7b2(c) &&
            (c.addEventListener(kd.const_180, this._r49fad46cbd1c25), this.setLinkStyle(c))));
    }
    for (let s = 0; s < (this.page?.localization._re0804bffd78c28 ?? 0); s++) {
      let o = this.page.localization._r2b5d324386dc88(s, this.page._rf3871e54af1151),
        d = this.page.localization._rdf91ea8f2aff55(s);
      o === "" ||
        d === "" ||
        (this._rd4f9230a99df4d.set(d, o),
        this.page?.viewer.catalog?.assets.hasAsset(d)
          ? this.setElementImage(o, d)
          : this.retrieveCatalogImage(d));
    }
    let r =
        this._catalog?.getNodeById?.currentCatalogNavigator(this.page?.pageId ?? 0) ?? null,
      t = this._catalog?.mainContainer?.findChildByName(mf.HEADER_TITLE),
      i = this._catalog?.mainContainer?.findChildByName(mf.const_351);
    (t != null &&
      (t.caption =
        r?.localization ??
        (this.page?.mode === Ju._r0d1a664a7fc91e ? "${catalog.search.header}" : "${catalog.header}")),
      i != null &&
        r != null &&
        (i.assetUri =
          this.page?.mode === Ju._r0d1a664a7fc91e
            ? "common_small_pen"
            : this._catalog?._r28a444d88bee4d === CatalogType.BUILDER
              ? `${this._catalog.imageGalleryHost}icon_193.png`
              : `${this._catalog?.imageGalleryHost ?? ""}${r.iconName}.png`));
  }
  _r49fad46cbd1c25 = n((r) => {
    let t = r;
  }, "_r49fad46cbd1c25");
  setElementImage(r, t) {
    if (this._window == null || this._window.disposed || this.page == null) return;
    let i = this.page.viewer.catalog,
      s =
        r === mf.HEADER_IMAGE
          ? (this._catalog?.mainContainer?.findChildByName(r) ?? null)
          : this._window.findChildByName(r);
    if (s != null)
      if (this._r874d0d52c3eed2(s)) {
        let o = i.assets.getAssetByName(t);
        if (!(o instanceof Qt)) return;
        let d = o.content;
        if (!(d instanceof A)) return;
        (s.bitmap == null && (s.bitmap = new A(s.width, s.height, !0, 16777215)),
          s.bitmap.fillRect(s.bitmap.rect, 16777215));
        let c = Math.floor((s.width - d.width) / 2),
          f = Math.floor((s.height - d.height) / 2);
        s.bitmap.copyPixels(d, d.rect, new E(c, f), null, null, !0);
      } else
        this._r056f44ba546e01(s) &&
          (s.assetUri = `${this._catalog?.getProperty("image.library.catalogue.url") ?? ""}${t}.gif`);
  }
  retrieveCatalogImage(r) {
    if (this.page == null) return;
    let t = this.page.viewer.catalog,
      i = this._rd4f9230a99df4d.get(r) ?? "",
      s =
        i === mf.HEADER_IMAGE
          ? (this._catalog?.mainContainer?.findChildByName(i) ?? null)
          : (this._window?.findChildByName(i) ?? null),
      o = this._catalog?.getProperty("image.library.catalogue.url") ?? "",
      d = `${this._catalog?.getProperty("image.library.url") ?? ""}Top_Story_Images/`,
      c = s?.tags.indexOf("TOP_STORY") !== -1 ? d : o,
      f = new UnkClass_636490(`${c}${r}.gif`);
    t.assets
      .loadAssetFromFile(r, f, "image/gif")
      .addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rdc25f566c08036);
  }
  _rdc25f566c08036 = n((r) => {
    let t = r.target;
    if (t != null) {
      let i = t.assetName,
        s = this._rd4f9230a99df4d.get(i) ?? "";
      this.setElementImage(s, i);
    }
  }, "_rdc25f566c08036");
  setLinkStyle(r) {
    let t = new UnkClass_b0061b();
    (t._r14e5354d420daf("a:link", { textDecoration: "underline", color: "#333333" }),
      t._r14e5354d420daf("a:hover", { color: "#336a95" }),
      t._r14e5354d420daf("a:active", { color: "#41b7d9" }),
      t._r14e5354d420daf(".visited", { textDecoration: "underline" }),
      (r.styleSheet = t));
  }
  _r874d0d52c3eed2(r) {
    return "bitmap" in r;
  }
  _r056f44ba546e01(r) {
    return "assetUri" in r;
  }
  _r4fb654e0acb7b2(r) {
    return "htmlText" in r && "styleSheet" in r;
  }
}
