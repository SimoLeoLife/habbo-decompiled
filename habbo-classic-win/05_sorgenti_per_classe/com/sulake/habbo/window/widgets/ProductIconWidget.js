// Extracted from HabboAirLauncher.deobf.js, line 151230.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/ProductIconWidget.as
// Obfuscated name: _i589f80f45efe53

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("product_icon_xml")?.content,
    )),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      this.clearPreviewer());
  }
  static {
    n(this, "ProductIconWidget");
  }
  static TYPE = "product_icon";
  var_2128 = -1;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  var_1387 = null;
  var_1119 = 1;
  get productInfo() {
    return this.var_1387;
  }
  set productInfo(e) {
    ((this.var_1387 = e), this.previewImage(e));
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  get iterator() {
    return Lt.INSTANCE;
  }
  previewImage(e) {
    if (e == null) {
      this.setUnknownImage();
      return;
    }
    switch (e.productTypeId) {
      case class_3169.UNKNOWN:
        this.setUnknownImage();
        break;
      case class_3169.CLOTHING:
      case class_3169.const_254: {
        let r =
          this._windowManager?.sessionDataManager?.getFloorItemData(parseInt(e.itemTypeId, 10)) ?? null;
        if (r == null) {
          this.clearPreviewer();
          break;
        }
        this.imageResult = this._windowManager?.roomEngine?._r65a31a885a1252(r.id, this) ?? null;
        break;
      }
      case class_3169.const_545: {
        let r =
          this._windowManager?.sessionDataManager?.getWallItemData(parseInt(e.itemTypeId, 10)) ?? null;
        if (r == null) {
          this.clearPreviewer();
          break;
        }
        class_4120.categoryMapping("I", r.id) === 1
          ? (this.imageResult =
              this._windowManager?.roomEngine?.getWallItemDataByName(r.id, this, e.extraData) ?? null)
          : this.clearPreviewer();
        break;
      }
      case class_3169.const_123: {
        let r = new UnkClass_694584();
        ((r.data = this._windowManager?.catalog?.getPixelEffectIcon(parseInt(e.itemTypeId, 10)) ?? null),
          (this.imageResult = r));
        break;
      }
      case class_3169.BADGE:
        this._r79242dc896c7f5 = e.itemTypeId;
        break;
      case class_3169.PET:
        this._r44ea08ed7186b6 = e._r48777043299a0c;
        break;
      case class_3169.BOT:
        this._r426703d05ab7f8 = e._r8884fd63e7a9b7;
        break;
      case class_3169.const_134:
        this._r21e2442cdd44e4 = parseInt(e.itemTypeId, 10) | 0;
        break;
      case class_3169.CHAT_STYLE: {
        let r = parseInt(e.itemTypeId, 10),
          t = new UnkClass_694584();
        ((t.data =
          this._windowManager?._rafd5b9130c4bfd?.chatStyleLibrary?._r22c9347ecec607(r)?._r270592cedf0213 ??
          null),
          (this.imageResult = t));
        break;
      }
      case class_3169.CURRENCY: {
        let r = parseInt(e.itemTypeId, 10),
          t = et.getIconStyleFor(r, this._windowManager?.context.configuration ?? null, !0);
        if (t === 0) {
          this.clearPreviewer();
          break;
        }
        this._re18dc9526154a8 = t;
        break;
      }
      default:
        this.clearPreviewer();
        break;
    }
  }
  clearPreviewer() {
    ((this.var_2128 = -1),
      this.productPreviewBitmap != null && (this.productPreviewBitmap.visible = !1),
      this.badgeImageWidget != null && (this.badgeImageWidget.visible = !1),
      this.petImageWidget != null && (this.petImageWidget.visible = !1),
      this.unknownImageWindow != null && (this.unknownImageWindow.visible = !1),
      this.iconWindow != null && (this.iconWindow.visible = !1),
      Dr.removeEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773));
  }
  set imageResult(e) {
    (this.clearPreviewer(), e != null && ((this.var_2128 = e.id), this.setPreviewImage(e.data)));
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
  setUnknownImage() {
    (this.clearPreviewer(), this.unknownImageWindow != null && (this.unknownImageWindow.visible = !0));
  }
  set _r426703d05ab7f8(e) {
    this.clearPreviewer();
    let r = this._windowManager?.avatarRenderer;
    if (e == null || e.length === 0 || r == null) {
      this.setUnknownImage();
      return;
    }
    let t = r._r274f6640e76241(e, fr.LARGE, null, this);
    if (t == null) {
      this.setUnknownImage();
      return;
    }
    t.setDirection(class_2123.HEAD, UnkConstants_6c0c96._r09e15429d8bd81);
    let i = t._rb2bd48e3b4d265(class_2123.HEAD);
    if ((t.dispose(), i == null)) {
      this.setUnknownImage();
      return;
    }
    (this.setPreviewImage(i), i.dispose());
  }
  set _r21e2442cdd44e4(e) {
    this.clearPreviewer();
    let r = Dr.getPreviewBitmap(e, !1);
    if (r == null) {
      Dr.addEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773);
      let t = new A(40, 40, !1, 9408399);
      (this.setPreviewImage(t), t.dispose());
      return;
    }
    this.setPreviewImage(r);
  }
  _r10a570e6c32773 = n(() => {
    if (
      (Dr.removeEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773),
      this.var_1387 == null || this.var_1387.productTypeId !== class_3169.const_134)
    )
      return;
    let e = Dr.getPreviewBitmap(parseInt(this.var_1387.itemTypeId, 10) | 0, !1);
    e != null && this.setPreviewImage(e);
  }, "_r10a570e6c32773");
  avatarImageReady(e) {
    !this._disposed &&
      this.var_1387 != null &&
      this.var_1387.productTypeId === class_3169.BOT &&
      this.var_1387._r8884fd63e7a9b7 === e &&
      (this._r426703d05ab7f8 = e);
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
  set _re18dc9526154a8(e) {
    (this.clearPreviewer(),
      this.iconWindow != null &&
        ((this.iconWindow.visible = !0),
        (this.iconWindow.style = e),
        this.iconWindow.fitToSize()));
  }
  imageReady(e, r) {
    this.var_2128 === e && this.productPreviewBitmap != null && this.setPreviewImage(r);
  }
  imageFailed(e) {}
  set unknownImageUri(e) {
    this.unknownImageWindow != null && (this.unknownImageWindow.assetUri = e);
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this.var_2128 = -1),
      this._rf8f9fc25599fa4?.dispose(),
      Dr.removeEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null));
  }
  get disposed() {
    return this._disposed;
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
  get productPreviewBitmap() {
    return this._rf8f9fc25599fa4?.findChildByName("bitmap");
  }
  get badgeImageWidget() {
    return this._rf8f9fc25599fa4?.findChildByName("badge_image_widget");
  }
  get petImageWidget() {
    return this._rf8f9fc25599fa4?.findChildByName("pet_image_widget");
  }
  get unknownImageWindow() {
    return this._rf8f9fc25599fa4?.findChildByName("unknown_image");
  }
  get iconWindow() {
    return this._rf8f9fc25599fa4?.findChildByName("icon");
  }
}
