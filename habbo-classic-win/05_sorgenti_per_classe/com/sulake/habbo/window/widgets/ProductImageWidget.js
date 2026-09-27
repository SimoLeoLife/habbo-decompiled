// Estratto da HabboAirLauncher.deobf.js, riga 150802.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/ProductImageWidget.as
// Nome offuscato: _iabae5a0505acfa

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("product_image_xml")?.content,
    )),
      (this._r507e47cbf50e4c = new O3e(this.effectImageWidget, this._windowManager?.avatarRenderer ?? null)),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        ((this._rf8f9fc25599fa4.width = this.var_220.width),
        (this._rf8f9fc25599fa4.height = this.var_220.height)),
      this.avatarRenderManager());
  }
  static {
    n(this, "ProductImageWidget");
  }
  static TYPE = "product_image";
  static _rc514342bcca4a0 = `${a.TYPE}:${class_3436.const_1133}`;
  var_2128 = -1;
  _disposed = !1;
  _r507e47cbf50e4c = null;
  _rf8f9fc25599fa4 = null;
  var_1387 = null;
  _pivot = Vt.CENTER;
  var_1119 = 1;
  var_4550 = -1;
  var_4851 = "";
  var_873 = 0;
  get productInfo() {
    return this.var_1387;
  }
  set productInfo(e) {
    ((this.var_1387 = e), this.previewImage(e));
  }
  get properties() {
    if (this._disposed) return [];
    let e =
        this._windowManager?.getThemeManager()._r421a2291c74c01(this.var_220?.style ?? 0) ?? null,
      r = [],
      t = e?.get(a._rc514342bcca4a0) ?? null;
    return (t != null && r.push(t.withValue(Vt.PIVOT_NAMES[this._pivot])), r);
  }
  set properties(e) {
    for (let r of e) r.key === a._rc514342bcca4a0 && (this.pivot = Vt.pivotFromName(String(r.value)));
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get pivot() {
    return this._pivot;
  }
  set pivot(e) {
    this._pivot = e;
    let r = this.productPreviewBitmap,
      t = this.badgeImageWidget?.widget;
    (r != null && (r._rc42ef752c39ce9 = e),
      t != null && (t._rc42ef752c39ce9 = e),
      this.placeholderImage != null && (this.placeholderImage._rc42ef752c39ce9 = e),
      this.refresh());
  }
  get blend() {
    return this.var_1119;
  }
  set blend(e) {
    ((this.var_1119 = e),
      this.productPreviewBitmap != null && (this.productPreviewBitmap.blend = e),
      this.unknownImageWindow != null && (this.unknownImageWindow.blend = e),
      this.badgeImageWidget != null &&
        ((this.badgeImageWidget.blend = e), this.badgeImageWidget.widget?.refresh()),
      this.petImageWidget != null &&
        ((this.petImageWidget.blend = e), this.petImageWidget.widget?.refresh()));
  }
  set unknownImageUri(e) {
    this.unknownImageWindow != null && (this.unknownImageWindow.assetUri = e);
  }
  previewImage(e) {
    if (e == null) {
      this.setUnknownImage();
      return;
    }
    if (!this.handlePreviewImageEasterEgg(e))
      switch (e.productTypeId) {
        case class_3169.UNKNOWN:
          this.setUnknownImage();
          break;
        case class_3169.CLOTHING: {
          let r = this._windowManager?.sessionDataManager ?? null,
            t = this._windowManager?.avatarRenderer ?? null;
          if (r == null || t == null) {
            this.clearPreviewer();
            break;
          }
          this._rafdbd40a6f2399 = t._r3e7ac99da303de(r.figure, r.gender, e._r465eb48d84170b);
          break;
        }
        case class_3169.const_254: {
          let r =
            this._windowManager?.sessionDataManager?.getFloorItemData(parseInt(e.itemTypeId, 10)) ??
            null;
          if (r == null) {
            this.clearPreviewer();
            break;
          }
          this.imageResult =
            this._windowManager?.roomEngine?._r5db1beeb89d785(r.id, new k(90, 0, 0), 64, this) ?? null;
          break;
        }
        case class_3169.const_545: {
          let r =
            this._windowManager?.sessionDataManager?.getWallItemData(parseInt(e.itemTypeId, 10)) ??
            null;
          if (r == null) {
            this.clearPreviewer();
            break;
          }
          class_4120.categoryMapping("I", r.id) === 1
            ? (this.imageResult =
                this._windowManager?.roomEngine?._r3ac60c12dafe70(
                  r.id,
                  new k(90),
                  64,
                  this,
                  0,
                  e.extraData,
                ) ?? null)
            : this.clearPreviewer();
          break;
        }
        case class_3169.BADGE:
          this._r79242dc896c7f5 = e.itemTypeId;
          break;
        case class_3169.PET:
          this._r44ea08ed7186b6 = e._r48777043299a0c;
          break;
        case class_3169.CHAT_STYLE: {
          let r = new _i694584ab63ea1c();
          if (
            ((r.data =
              this._windowManager != null
                ? class_4120.createChatItemPreview(this._windowManager, parseInt(e.itemTypeId, 10))
                : null),
            r.data == null)
          ) {
            this.clearPreviewer();
            break;
          }
          this.imageResult = r;
          break;
        }
        case class_3169.const_123:
          if (e.itemTypeId.length === 0) {
            this.clearPreviewer();
            break;
          }
          this._rd7fde06780d033(
            this._windowManager?.sessionDataManager?.figure ?? "",
            parseInt(e.itemTypeId, 10),
          );
          break;
        default:
          this.clearPreviewer();
          break;
      }
  }
  clearPreviewer() {
    ((this.var_2128 = -1),
      this.avatarImageWidget != null && (this.avatarImageWidget.visible = !1),
      this.productPreviewBitmap != null && (this.productPreviewBitmap.visible = !1),
      this.badgeImageWidget != null && (this.badgeImageWidget.visible = !1),
      this.placeholderImage != null && (this.placeholderImage.visible = !1),
      this.petImageWidget != null && (this.petImageWidget.visible = !1),
      this._r507e47cbf50e4c != null && (this._r507e47cbf50e4c.visible = !1),
      this.unknownImageWindow != null && (this.unknownImageWindow.visible = !1));
  }
  avatarRenderManager() {
    (this.clearPreviewer(), this.placeholderImage != null && (this.placeholderImage.visible = !0));
  }
  setUnknownImage() {
    (this.clearPreviewer(), this.unknownImageWindow != null && (this.unknownImageWindow.visible = !0));
  }
  imageReady(e, r) {
    this.var_2128 === e && this.productPreviewBitmap != null && this.setPreviewImage(r);
  }
  imageFailed(e) {}
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._r507e47cbf50e4c?.dispose(),
      (this._r507e47cbf50e4c = null),
      (this.var_2128 = -1),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null));
  }
  get disposed() {
    return this._disposed;
  }
  refresh() {
    this.var_1387 != null && this.previewImage(this.var_1387);
  }
  handlePreviewImageEasterEgg(e) {
    if (
      (e.productTypeId === this.var_4550 && e.itemTypeId === this.var_4851
        ? (this.var_873 += 1)
        : (this.var_873 = 1),
      (this.var_4550 = e.productTypeId),
      (this.var_4851 = e.itemTypeId),
      e.productTypeId === class_3169.CHAT_STYLE)
    ) {
      let r = "";
      if (
        (this.var_873 === 7 && (r = "Evil Frank"),
        this.var_873 === 10 && (r = "Bonne Blonde"),
        this.var_873 === 15 && (r = "Furni fairy"),
        this.var_873 === 22 && (r = "Wacky Wired"),
        this.var_873 === 35 && (r = "Quacky duck"),
        this.var_873 === 70 && (r = "Pixel poo"),
        this.var_873 === 100 && (r = "Bobba filtered"),
        r.length > 0)
      ) {
        let t = new _i694584ab63ea1c();
        return (
          (t.data =
            this._windowManager != null
              ? class_4120.createChatItemPreview(this._windowManager, parseInt(e.itemTypeId, 10), r)
              : null),
          t.data == null ? !1 : ((this.imageResult = t), !0)
        );
      }
    }
    return !1;
  }
  set imageResult(e) {
    (this.clearPreviewer(), e != null && ((this.var_2128 = e.id), this.setPreviewImage(e.data)));
  }
  _rc48513b87295ee(e) {
    e == null ||
      this._rf8f9fc25599fa4 == null ||
      ((e.x = this._rf8f9fc25599fa4.width / 2 - e.width / 2),
      (e.y = this._rf8f9fc25599fa4.height / 2 - e.height / 2));
  }
  set _rafdbd40a6f2399(e) {
    if ((this.clearPreviewer(), this.avatarImageWidget != null)) {
      this.avatarImageWidget.visible = !0;
      let r = this.avatarImageWidget.widget;
      (r != null && (r.figure = e), this._rc48513b87295ee(this.avatarImageWidget));
    }
  }
  set _r79242dc896c7f5(e) {
    if ((this.clearPreviewer(), this.badgeImageWidget != null)) {
      this.badgeImageWidget.visible = !0;
      let r = this.badgeImageWidget.widget;
      r != null && (r.badgeId = e);
    }
  }
  set _r44ea08ed7186b6(e) {
    if ((this.clearPreviewer(), this.petImageWidget != null)) {
      this.petImageWidget.visible = !0;
      let r = this.petImageWidget.widget;
      r != null && (r.figure = e);
    }
  }
  _rd7fde06780d033(e, r) {
    (this.clearPreviewer(),
      this._rc48513b87295ee(this.effectImageWidget),
      this.effectImageWidget != null && (this.effectImageWidget.y += 50),
      this._r507e47cbf50e4c != null &&
        ((this._r507e47cbf50e4c.visible = !0), this._r507e47cbf50e4c.update(e, r)));
  }
  setPreviewImage(e) {
    if (this.productPreviewBitmap != null) {
      if (e == null) {
        this.productPreviewBitmap.visible = !1;
        return;
      }
      ((this.productPreviewBitmap.bitmap = e.clone()), (this.productPreviewBitmap.visible = !0));
    }
  }
  get placeholderImage() {
    return this._rf8f9fc25599fa4?.findChildByName("placeholder_image");
  }
  get productPreviewBitmap() {
    return this._rf8f9fc25599fa4?.findChildByName("product_preview");
  }
  get avatarImageWidget() {
    return this._rf8f9fc25599fa4?.findChildByName("avatar_image_widget");
  }
  get badgeImageWidget() {
    return this._rf8f9fc25599fa4?.findChildByName("badge_image_widget");
  }
  get petImageWidget() {
    return this._rf8f9fc25599fa4?.findChildByName("pet_image_widget");
  }
  get effectImageWidget() {
    return this._rf8f9fc25599fa4?.findChildByName("effect_image_widget");
  }
  get unknownImageWindow() {
    return this._rf8f9fc25599fa4?.findChildByName("unknown_image");
  }
}
