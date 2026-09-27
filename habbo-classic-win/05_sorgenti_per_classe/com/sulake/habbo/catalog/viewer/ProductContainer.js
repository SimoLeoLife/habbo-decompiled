// Extracted from HabboAirLauncher.deobf.js, line 172182.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/ProductContainer.as
// Obfuscated name: _i119caa97a40e3e

class a extends Cm {
  constructor(r, t, i) {
    super(i);
    this._offer = r;
    this.var_438 = t;
  }
  static {
    n(this, "ProductContainer");
  }
  static ELEMENT_TOTAL_PRICE_CONTAINER = "totalprice_container";
  static const_335 = "amount_text_left";
  static ELEMENT_AMOUNT_TEXT_RIGHT = "amount_text_right";
  static ELEMENT_CURRENCY_INDICATOR_BITMAP_RIGHT = "currency_indicator_bitmap_right";
  get products() {
    return this.var_438;
  }
  get _r7149a15797e48f() {
    if (this.var_438.length === 0) return null;
    if (this.var_438.length === 1) return this.var_438[0];
    if (
      this.var_438.length === 2 &&
      (this.var_438[0].productType === class_1803.PRODUCT_TYPE_BADGE ||
        this.var_438[1].productType === class_1803.PRODUCT_TYPE_BADGE)
    )
      return this.var_438[0].productType === class_1803.PRODUCT_TYPE_BADGE
        ? this.var_438[1]
        : this.var_438[0];
    let r = sb.stripAddonProducts(this.var_438);
    return r.length > 0 ? r[0] : null;
  }
  get offer() {
    return this._offer;
  }
  dispose() {
    if (!this.disposed) {
      for (let r of this.var_438) r.dispose();
      ((this.var_438 = []), super.dispose());
    }
  }
  get isLazy() {
    return !1;
  }
  initProductIcon(r, t = null) {}
  set view(r) {
    if (((super.view = r), this._view != null)) {
      if (
        this.catalog != null &&
        ((this._offer._rc9fc89e7eb27a7 != null && this._offer._rc9fc89e7eb27a7 !== "") ||
          (this._offer._r4566aec49601a5 != null &&
            this._offer._r4566aec49601a5 !== "")) &&
        (this._offer._r10b16f6e9cda51?.products.length ?? 0) > 1
      )
        this.setAddOnIcon("catalog_icon_badge_included");
      else if ((this._offer._r10b16f6e9cda51?.products.length ?? 0) === 2)
        for (let t of this._offer._r10b16f6e9cda51?.products ?? [])
          t.productType === class_1803.PRODUCT_TYPE_EFFECT &&
            t.productClassId === sb.EFFECT_CLASSID_NINJA_DISAPPEAR &&
            this.setAddOnIcon("catalog_icon_ninja_effect_included");
      (this.setClubIconLevel(this._offer.clubLevel),
        this.catalog?._rfdc38b3042267c(this._offer) && this.setDraggable(!0));
    }
  }
  get view() {
    return super.view;
  }
  imageReady(r, t) {
    this.setIconImage(t, !0);
  }
  imageFailed(r) {}
  setClubIconLevel(r) {
    if (this.view == null) return;
    let t = this.view.findChildByName("clubLevelIcon");
    if (t != null)
      switch (r) {
        case dr.NO_CLUB:
          t.visible = !1;
          break;
        case dr.CLUB:
          ((t.visible = !0), (t.style = 11), (t.x += 3));
          break;
        case dr.VIP:
          ((t.visible = !0), (t.style = 12));
          break;
      }
  }
  avatarImageReady(r) {
    if (!this.disposed) {
      for (let t of this.products)
        if (t.productType === class_1803.PRODUCT_TYPE_RENTABLE_BOT && t.extraParam === r) {
          this.setIconImage(this._r999433e3e1deeb(t.extraParam, this), !0);
          return;
        }
    }
  }
  createCurrencyIndicators(r) {
    if (this._offer.priceInCredits > 0) {
      let i =
        this._offer.priceInActivityPoints > 0
          ? this._view?.findChildByName(a.const_335)
          : this._view?.findChildByName(a.ELEMENT_AMOUNT_TEXT_RIGHT);
      i != null && (i.text = `${this._offer.priceInCredits}`);
    }
    if (this._offer.priceInActivityPoints > 0) {
      let i = this._view?.findChildByName(a.ELEMENT_AMOUNT_TEXT_RIGHT);
      if (i != null) {
        let s = this._view?.findChildByName(a.ELEMENT_CURRENCY_INDICATOR_BITMAP_RIGHT);
        (s != null && (s.style = et.getIconStyleFor(this._offer.activityPointType, r, !1)),
          (i.text = `${this._offer.priceInActivityPoints}`));
      }
    } else if (this._offer.priceInSilver > 0) {
      let i = this._view?.findChildByName(a.ELEMENT_AMOUNT_TEXT_RIGHT);
      if (i != null) {
        let s = this._view?.findChildByName(a.ELEMENT_CURRENCY_INDICATOR_BITMAP_RIGHT);
        (s != null && (s.style = et.getIconStyleFor(et.SILVER, r, !1)),
          (i.text = `${this._offer.priceInSilver}`));
      }
    }
    this._view?.findChildByName(a.ELEMENT_TOTAL_PRICE_CONTAINER)?.arrangeListItems();
  }
  setAddOnIcon(r) {
    let t = this._view?.findChildByName("badge_add_on"),
      s = this.catalog?.assets.getAssetByName(r)?.content;
    t == null || s == null || ((t.bitmap = s), (t.width = s.width), (t.height = s.height));
  }
}
