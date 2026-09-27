// Estratto da HabboAirLauncher.deobf.js, riga 171995.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/Product.as
// Nome offuscato: _ie0b7b3c9091503

class a extends Cm {
  constructor(r, t, i, s, o, d, c, f = !1, l = 0, b = 0) {
    super(c);
    this.var_422 = r;
    this.var_3117 = t;
    this.var_645 = i;
    this.var_2692 = s;
    this.var_1920 = o;
    this.var_689 = d;
    this.var_4560 = f;
    this._r35a3fba15d2a9b = l;
    this.var_3861 = b;
  }
  static {
    n(this, "Product");
  }
  static EFFECT_CLASSID_NINJA_DISAPPEAR = 108;
  var_445 = null;
  get productType() {
    return this.var_422;
  }
  get productClassId() {
    return this.var_3117;
  }
  set extraParam(r) {
    this.var_645 = r;
  }
  get extraParam() {
    return this.var_645;
  }
  get productCount() {
    return this.var_2692;
  }
  get productData() {
    return this.var_1920;
  }
  get furnitureData() {
    return this.var_689;
  }
  get _r651925293e1d0b() {
    return this.var_4560;
  }
  get _raba7e4532bd54d() {
    return this._r35a3fba15d2a9b;
  }
  get _r807decfd331c6c() {
    return this.var_3861;
  }
  set _r807decfd331c6c(r) {
    this.var_3861 = r;
  }
  dispose() {
    this.disposed ||
      (this.catalog?.sessionDataManager?.events.removeEventListener?.(
        Ho.BADGE_READY,
        this._r919c0ab2a93eac,
      ),
      Dr.removeEventListener(Dr.ASSETS_LOADED, this._r163610b1a99c63),
      (this.var_422 = ""),
      (this.var_3117 = 0),
      (this.var_645 = ""),
      (this.var_2692 = 0),
      (this.var_1920 = null),
      (this.var_689 = null),
      (this.var_445 = null),
      super.dispose());
  }
  static stripAddonProducts(r) {
    return r.length === 1
      ? r
      : r.filter(
          (t) =>
            t.productType !== class_1803.PRODUCT_TYPE_BADGE &&
            !(t.productType === class_1803.PRODUCT_TYPE_EFFECT && t.productClassId === a.EFFECT_CLASSID_NINJA_DISAPPEAR) &&
            t.productType !== class_1803.PRODUCT_TYPE_CHAT_STYLE,
        );
  }
  initIcon(r, t = null, i = null, s = null, o = null, d = null, c = null) {
    if (this.disposed) return null;
    let f = null,
      l = null,
      b = t ?? this,
      _ = s?.page?.viewer.roomEngine ?? r.offer.page?.viewer.roomEngine ?? this.catalog?.roomEngine ?? null;
    if (_ == null || this.catalog == null) return null;
    switch (this.var_422) {
      case class_1803.PRODUCT_TYPE_STUFF:
        l = _._r65a31a885a1252(this.var_3117, b, null, d);
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        if (s != null && this.var_689 != null) {
          let h = "";
          switch (this.var_689.className) {
            case "floor":
              h = ["th", this.var_689.className, s.product?.extraParam ?? ""].join("_");
              break;
            case "wallpaper":
              h = ["th", "wall", s.product?.extraParam ?? ""].join("_");
              break;
            case "landscape":
              h = [
                "th",
                this.var_689.className,
                (s.product?.extraParam ?? "").replace(".", "_"),
                "001",
              ].join("_");
              break;
            default:
              l = _.getWallItemDataByName(this.var_3117, b, this.var_645);
              break;
          }
          h !== "" && this.catalog._rd02236672e019d(o, h, c);
        } else l = _.getWallItemDataByName(this.var_3117, b, this.var_645);
        break;
      case class_1803.PRODUCT_TYPE_EFFECT:
        ((f = this.catalog.getPixelEffectIcon(this.var_3117)), b === this && this.setIconImage(f, !0));
        break;
      case class_1803.PRODUCT_TYPE_CLUB:
        f = this.catalog.getSubscriptionProductIcon(this.var_3117);
        break;
      case class_1803.PRODUCT_TYPE_BADGE:
        (this.catalog.sessionDataManager?.events.addEventListener?.(
          Ho.BADGE_READY,
          this._r919c0ab2a93eac,
        ),
          (f = this.catalog.sessionDataManager?.getBadgeImage(this.var_645) ?? null),
          (this.var_445 = r));
        break;
      case class_1803.PRODUCT_TYPE_RENTABLE_BOT:
        ((f = this._r999433e3e1deeb(this.var_645, i)), this.setIconImage(f, !1));
        break;
      case class_1803.PRODUCT_TYPE_CHAT_STYLE:
        f =
          this.catalog._rafd5b9130c4bfd?.chatStyleLibrary
            ?._r22c9347ecec607(Number(this.var_645))
            ?._r270592cedf0213?.clone() ?? null;
        break;
      case class_1803.PRODUCT_TYPE_HABBICON:
        ((f = this.getHabbiconPreviewBitmap()),
          f == null &&
            (Dr.addEventListener(Dr.ASSETS_LOADED, this._r163610b1a99c63),
            (f = new A(40, 40, !1, 9408399))),
          b === this && this.setIconImage(f, !0));
        break;
      default:
        break;
    }
    return (l != null && ((f = l.data), b === this && this.setIconImage(f, !0)), f);
  }
  imageReady(r, t) {
    this.disposed || this.setIconImage(t, !0);
  }
  _r163610b1a99c63 = n((r) => {
    if (this.disposed || this.var_422 !== class_1803.PRODUCT_TYPE_HABBICON) return;
    let t = this.getHabbiconPreviewBitmap();
    t != null &&
      (this.setIconImage(t, !0), Dr.removeEventListener(Dr.ASSETS_LOADED, this._r163610b1a99c63));
  }, "_r163610b1a99c63");
  getHabbiconPreviewBitmap() {
    let r = Dr.getPreviewBitmap(Number(this.var_645) | 0, !1);
    return r != null ? r.clone() : null;
  }
  imageFailed(r) {}
  get isColorable() {
    return (this.var_689?.fullName?.indexOf("*") ?? -1) !== -1;
  }
  set view(r) {
    if (r != null && ((super.view = r), this.var_2692 > 1)) {
      let t = this._view?.findChildByName("multiContainer");
      t != null && (t.visible = !0);
      let i = this._view?.findChildByName("multiCounter");
      i != null && (i.text = `x${this.productCount}`);
    }
  }
  get view() {
    return super.view;
  }
  _r919c0ab2a93eac = n((r) => {
    this.disposed ||
      (this.var_422 === class_1803.PRODUCT_TYPE_BADGE &&
        r.badgeId === this.var_645 &&
        (this.var_445?.setIconImage(r.badgeImage, !1),
        this.catalog?.sessionDataManager?.events.removeEventListener?.(
          Ho.BADGE_READY,
          this._r919c0ab2a93eac,
        )));
  }, "_r919c0ab2a93eac");
}
