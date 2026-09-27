// Estratto da HabboAirLauncher.deobf.js, riga 191864.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/PetPreviewCatalogWidget.as
// Nome offuscato: _i607368b696b61c

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "PetPreviewCatalogWidget");
  }
  static PET_TYPE_ID = 15;
  static BREED = 1;
  static COLOR = 16777215;
  static PALETTE_ID = 2;
  static PART_ID = -1;
  _productName = null;
  _r7d1cf1d30ba5de = null;
  var_172 = null;
  _r584d7b88735477 = new E();
  var_3216 = 0;
  _gridItemLayout = null;
  _r20003195d951b6 = null;
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      (this._catalog = null),
      (this._r20003195d951b6 = null),
      (this._productName = null),
      (this._r7d1cf1d30ba5de = null),
      (this.var_172 = null),
      (this._gridItemLayout = null),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    ((this._productName = this._window?.findChildByName("ctlg_product_name") ?? null),
      (this._r7d1cf1d30ba5de = this._window?.findChildByName("ctlg_description") ?? null),
      (this.var_172 = this._window?.findChildByName("ctlg_teaserimg_1")),
      this._productName != null && (this._productName.caption = ""),
      this._r7d1cf1d30ba5de != null && (this._r7d1cf1d30ba5de.caption = ""),
      this.var_172 != null &&
        (this._r584d7b88735477 = new E(this.var_172.x, this.var_172.y)));
    let r = this.page?.viewer.catalog,
      t = r?.assets.getAssetByName("gridItem");
    this._gridItemLayout = t?.content ?? null;
    let i =
      r?.roomEngine?.getPetImage(
        a.PET_TYPE_ID,
        a.PALETTE_ID,
        a.COLOR,
        new k(90, 0, 0),
        64,
        this,
        !0,
        0,
      ) ?? null;
    return (
      i != null && (this.setPreviewImage(i.data, !0, new E(0, 0)), (this.var_3216 = i.id)),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      !0
    );
  }
  imageReady(r, t) {
    if (!(this.disposed || this.page?.offers == null)) {
      if (this.var_3216 === r) {
        (this.setPreviewImage(t, !0), (this.var_3216 = 0));
        return;
      }
      for (let i of this.page.offers) {
        let s = i;
        if (s.previewCallbackId === r) {
          (this.setPreviewImage(t, !0), (s.previewCallbackId = 0));
          break;
        }
      }
    }
  }
  imageFailed(r) {}
  _raaed999dcb0c8a = n((r) => {
    let t = r.offer,
      i = this.page?.viewer.catalog.getProductData(t.localizationId),
      s = i != null ? `\${${i.name}}` : `\${${t.localizationId}}`,
      o = i != null ? `\${${i.description}}` : `\${${t.localizationId}}`;
    (this._productName != null && (this._productName.caption = s),
      this._r7d1cf1d30ba5de != null &&
        ((this._r7d1cf1d30ba5de.caption = o),
        (this._r7d1cf1d30ba5de.y =
          (this._productName?.y ?? this._r7d1cf1d30ba5de.y) + (this._productName?.height ?? 0) + 5)),
      this._catalog != null &&
        this._window != null &&
        (this._r20003195d951b6 = this._catalog.utils.showPriceOnProduct(
          t,
          this._window,
          this._r20003195d951b6,
          this.var_172,
          -6,
          !0,
          6,
        )));
    let d = null,
      c = new E(0, 0);
    (db.hasProductImage(t.localizationId)
      ? (d = this._r12036bab4d3f95(db.PRODUCT_IMAGES[t.localizationId]))
      : (d = this._r8f9d3231cba630(t)),
      this.setPreviewImage(d, !0, c),
      this._window?.invalidate());
  }, "_raaed999dcb0c8a");
  _r8f9d3231cba630(r) {
    let t = this.page?.viewer.catalog?.roomEngine ?? null,
      i = r.product,
      s = i?.furnitureData;
    if (i == null || s == null || s._r2bdd6e3cc1f573 == null || t == null) return null;
    let d = s._r2bdd6e3cc1f573.split(" ");
    if (d.length < 1) return null;
    let c = parseInt(d[0] ?? "0", 10),
      f = null;
    switch (s.category) {
      case class_1901.PET_SHAMPOO: {
        if (d.length < 2) break;
        let l = d[1] ?? "",
          b = t._r7c3a409976ffaf(c, l),
          _ = -1;
        for (let p of b)
          if (p.breed === a.BREED) {
            _ = parseInt(p.id, 10);
            break;
          }
        let h = [];
        if (c === class_3447.const_862) {
          let p = t._r58b39b996d47ea(c, "hair"),
            m = t._r58b39b996d47ea(c, "tail"),
            v = p != null ? parseInt(p.id, 10) : -1,
            w = m != null ? parseInt(m.id, 10) : -1;
          h = [new PetCustomPart(2, -1, v), new PetCustomPart(3, -1, w)];
        }
        f = t.getPetImage(c, _, a.COLOR, new k(90, 0, 0), 64, this, !0, 0, h);
        break;
      }
      case class_1901.PET_CUSTOM_PART: {
        if (d.length < 4) break;
        let l = (d[1] ?? "").split(","),
          b = (d[2] ?? "").split(","),
          _ = (d[3] ?? "").split(","),
          h = [];
        for (let p = 0; p < l.length; p++)
          h.push(new PetCustomPart(parseInt(l[p] ?? "-1", 10), parseInt(b[p] ?? "-1", 10), parseInt(_[p] ?? "-1", 10)));
        f = t.getPetImage(c, a.PALETTE_ID, a.COLOR, new k(90, 0, 0), 64, this, !0, 0, h);
        break;
      }
      case class_1901.PET_CUSTOM_PART_SHAMPOO: {
        if (d.length < 3) break;
        let l = (d[1] ?? "").split(","),
          b = (d[2] ?? "").split(","),
          _ = [];
        for (let h = 0; h < l.length; h++)
          _.push(new PetCustomPart(parseInt(l[h] ?? "-1", 10), a.PART_ID, parseInt(b[h] ?? "-1", 10)));
        f = t.getPetImage(c, a.PALETTE_ID, a.COLOR, new k(90, 0, 0), 64, this, !0, 0, _);
        break;
      }
      case class_1901.PET_SADDLE: {
        if (d.length < 4) break;
        let l = [new PetCustomPart(parseInt(d[1] ?? "-1", 10), parseInt(d[2] ?? "-1", 10), parseInt(d[3] ?? "-1", 10))];
        f = t.getPetImage(c, a.PALETTE_ID, a.COLOR, new k(90, 0, 0), 64, this, !0, 0, l);
        break;
      }
    }
    return f != null ? ((r.previewCallbackId = f.id), f.data) : null;
  }
  _r12036bab4d3f95(r) {
    return this.page?.viewer.catalog?.assets.getAssetByName(r)?.content ?? null;
  }
  setPreviewImage(r, t, i = null) {
    if (this.var_172 == null || this.window?.disposed) {
      r?.dispose();
      return;
    }
    let s = r,
      o = t;
    (s == null && ((s = new A(1, 1)), (o = !0)),
      this.var_172.bitmap == null &&
        (this.var_172.bitmap = new A(
          this.var_172.width,
          this.var_172.height,
          !0,
          16777215,
        )),
      this.var_172.bitmap.fillRect(this.var_172.bitmap.rect, 16777215));
    let d = new E((this.var_172.width - s.width) / 2, (this.var_172.height - s.height) / 2);
    (this.var_172.bitmap.copyPixels(s, s.rect, d, null, null, !0),
      this.var_172.invalidate(),
      (this.var_172.x = this._r584d7b88735477.x),
      (this.var_172.y = this._r584d7b88735477.y),
      i != null && ((this.var_172.x += i.x), (this.var_172.y += i.y)),
      o && s.dispose());
  }
}
