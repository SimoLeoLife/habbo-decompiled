// Extracted from HabboAirLauncher.deobf.js, line 195734.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/TrophyCatalogWidget.as
// Obfuscated name: _if4471440bae020

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "TrophyCatalogWidget");
  }
  static GOLD = 16763904;
  static SILVER = 13421772;
  static BRONZE = 13395456;
  var_172 = null;
  _rac876ecf968310 = new Map();
  var_464 = 0;
  var_1268 = "g";
  _r20003195d951b6 = null;
  dispose() {
    (this._rac876ecf968310.clear(),
      (this._catalog = null),
      (this._r20003195d951b6 = null),
      (this.var_172 = null),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    ((this.var_172 = this.window?.findChildByName("ctlg_teaserimg_1")),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.COLOUR_INDEX, this.onColourIndex),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.TEXT_INPUT, this._rc16b0510b888b4),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933));
    let r = this.window?.findChildByName("ctlg_nextmodel_button"),
      t = this.window?.findChildByName("ctlg_prevmodel_button");
    (r?.addEventListener(u.CLICK, this._rd670e3c08abaa5),
      t?.addEventListener(u.CLICK, this._rcbb3204cda2947));
    for (let i of this.page?.offers ?? []) {
      let s = i,
        o = this._r8a0df03a75a62d(s.localizationId),
        d = this.getTrophyTypeFromProduct(s.localizationId),
        c = this._rac876ecf968310.get(o);
      (c == null && ((c = new Map()), this._rac876ecf968310.set(o, c)), c.set(d, s));
    }
    if (
      (this.page?.offers.length ?? 0) === 1 &&
      (r != null && (r.visible = !1),
      t != null && (t.visible = !1),
      (this.page?.offers[0] ?? null)?.product?.isColorable === !1)
    ) {
      let s = this.window?.parent?.findChildByName("colourGridWidget");
      s != null && (s.visible = !1);
    }
    return !0;
  }
  imageReady(r, t) {
    if (!(this.disposed || this.page?.offers == null))
      for (let i of this.page.offers) {
        let s = i;
        if (s.previewCallbackId === r) {
          ((s.previewCallbackId = 0), this.setPreviewImage(t, !0));
          break;
        }
      }
  }
  imageFailed(r) {}
  _rd886c8bcbe0933 = n((r) => {
    let t = [a.GOLD, a.SILVER, a.BRONZE],
      i = this._r84852882fc76ee();
    (i != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(i)),
      this.events?.dispatchEvent?.(new CatalogWidgetColoursEvent(t, "ctlg_clr_40x32_1", "ctlg_clr_40x32_2", "ctlg_clr_40x32_3")));
  }, "_rd886c8bcbe0933");
  _rae8e17ddaeb413 = n((r) => {
    let t = r.offer,
      i = t.product,
      s = this.page?.viewer.roomEngine ?? null;
    if (db.hasProductImage(t.localizationId))
      this._r4b44d982118740(db.PRODUCT_IMAGES[t.localizationId]);
    else {
      let o =
        i == null || s == null
          ? null
          : (s._r5db1beeb89d785(i.productClassId, new k(2, 0, 0), 64, this, 0, i.extraParam) ?? null);
      ((t.previewCallbackId = o?.id ?? 0), this.setPreviewImage(o?.data ?? null, !0));
    }
    this._catalog != null &&
      this.window != null &&
      (this._r20003195d951b6 = this._catalog.utils.showPriceOnProduct(
        t,
        this.window,
        this._r20003195d951b6,
        this.var_172,
        0,
        !1,
        0,
      ));
  }, "_rae8e17ddaeb413");
  onColourIndex = n((r) => {
    switch (r.index) {
      case 0:
        this.var_1268 = "g";
        break;
      case 1:
        this.var_1268 = "s";
        break;
      case 2:
        this.var_1268 = "b";
        break;
    }
    let t = this._r84852882fc76ee();
    t != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(t));
  }, "onColourIndex");
  _rc16b0510b888b4 = n((r) => {
    this.events?.dispatchEvent?.(new SetExtraPurchaseParameterEvent(r.text));
  }, "_rc16b0510b888b4");
  _r8a0df03a75a62d(r) {
    let t = this.getTrophyTypeFromProduct(r);
    return t.length > 0 ? r.slice(0, r.length - 1 - t.length) : r;
  }
  getTrophyTypeFromProduct(r) {
    if (r.indexOf("prizetrophy_2011_") !== -1) return "";
    let t = r.lastIndexOf("_") + 1;
    if (t <= 0) return "";
    let i = r.substring(t);
    return i.length > 1 || (i !== "g" && i !== "s" && i !== "b") ? "" : i;
  }
  _r84852882fc76ee() {
    let t = [...this._rac876ecf968310.values()][this.var_464] ?? null;
    return t == null ? null : (t.get(this.var_1268) ?? [...t.values()][0] ?? null);
  }
  _rd670e3c08abaa5 = n((r) => {
    let t = [...this._rac876ecf968310.values()];
    (this.var_464++, this.var_464 >= t.length && (this.var_464 = 0));
    let i = this._r84852882fc76ee();
    i != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(i));
  }, "_rd670e3c08abaa5");
  _rcbb3204cda2947 = n((r) => {
    let t = [...this._rac876ecf968310.values()];
    (this.var_464--, this.var_464 < 0 && (this.var_464 = t.length - 1));
    let i = this._r84852882fc76ee();
    i != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(i));
  }, "_rcbb3204cda2947");
  setPreviewImage(r, t) {
    if (this.window == null || this.window.disposed || this.var_172 == null) {
      r?.dispose();
      return;
    }
    let i = r,
      s = t;
    (i == null && ((i = new A(1, 1)), (s = !0)),
      this.var_172.bitmap == null &&
        (this.var_172.bitmap = new A(
          this.var_172.width,
          this.var_172.height,
          !0,
          16777215,
        )),
      this.var_172.bitmap.fillRect(this.var_172.bitmap.rect, 16777215));
    let o = new E((this.var_172.width - i.width) / 2, (this.var_172.height - i.height) / 2);
    (this.var_172.bitmap.copyPixels(i, i.rect, o, null, null, !0),
      this.var_172.invalidate(),
      s && i.dispose());
  }
  _r4b44d982118740(r) {
    let i = this.page?.viewer.catalog?.assets.getAssetByName(r);
    if (i == null) {
      this._r9097fa16041e30(r);
      return;
    }
    this.setPreviewImage(i.content, !1);
  }
  _r9097fa16041e30(r) {
    let t = this.page?.viewer.catalog;
    if (t == null) return;
    t.assets
      .loadAssetFromFile(r, new UnkClass_636490(`${t.imageGalleryHost}${r}.gif`), "image/gif")
      .addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rbd9d54e2af9eac);
  }
  _rbd9d54e2af9eac = n((r) => {
    let t = r.target;
    t != null && this._r4b44d982118740(t.assetName);
  }, "_rbd9d54e2af9eac");
}
