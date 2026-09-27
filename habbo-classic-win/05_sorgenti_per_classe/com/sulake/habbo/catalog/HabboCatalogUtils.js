// Estratto da HabboAirLauncher.deobf.js, riga 182827.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/HabboCatalogUtils.as
// Nome offuscato: _i94df5b47c0dd52

class a {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "HabboCatalogUtils");
  }
  static BADGE_CHATSTYLE_WIDGET_NAME = "HCU_dynamic_badge";
  static PRICE_CREDIT = "credit";
  static PRICE_SILVER = "silver";
  static PRICE_ACTIVITY_POINT = "activityPoint";
  static DEFAULT_ACTIVITY_POINTS_PRICE_COLOR = 9032648;
  _disposed = !1;
  _re6e8672e698fd9 = [];
  _r2aff5e64e1d822 = 0;
  _r69f0c3572f8571 = new Map();
  _rc8344fb92bc799 = !1;
  _rfe81552616cb38 = !1;
  _rdec9d12f37ad8d = !1;
  var_1952 = null;
  get disposed() {
    return this._disposed;
  }
  get _rbf728fddc728fb() {
    return this._re6e8672e698fd9;
  }
  get _r9219dbc9eee1f2() {
    return this._r2aff5e64e1d822;
  }
  dispose() {
    this._disposed ||
      (this.var_1952?.dispose(),
      (this.var_1952 = null),
      (this._catalog = null),
      this._r69f0c3572f8571.clear(),
      (this._disposed = !0));
  }
  createWindow(e, r = 1, t = null) {
    if (this._catalog?.windowManager == null || this._catalog.assets == null) return null;
    let i = this._catalog.assets.getAssetByName(e);
    if (i?.content == null) return null;
    let s = this._catalog.windowManager.buildFromXML(i.content, r, t),
      o = s;
    if (o != null) {
      let d = [];
      o.groupChildrenWithTag("bitmap", d, -1);
      for (let c of d) {
        let f = c;
        f != null && ((f.disposesBitmap = !1), this.setCatalogItemImage(f, f.bitmapAssetName));
      }
    }
    return s;
  }
  _ra10ac9ff6556f3(e, r, t = 1, i = !1, s = !1) {
    if (r == null) return;
    let o = this._r84c53a3edabeae(r, t, i);
    this._r0f0eff6051d02d(e, o, i, s, !1);
  }
  showPriceOnProduct(e, r, t, i, s, o, d, c = !1, f = !1) {
    if (
      (t != null && (r.removeChild(t), t.dispose()),
      this._catalog?._r28a444d88bee4d === "BUILDERS_CLUB" ||
        ((t = this.createWindow("priceDisplayWidget")), t == null))
    )
      return null;
    r.addChild(t);
    let l = r.findChildByName("price_box_new");
    if (l != null) {
      this._ra10ac9ff6556f3(l, e, 1, c, f);
      let b = r.findChildByName("room_canvas_container");
      (b == null && (b = i),
        b != null &&
          ((t.x = b.x + b.width + s - t.width),
          o ? (t.y = b.y + d) : (t.y = b.y + b.height - (t.height + d))),
        e.priceInActivityPoints === 0 && (t.color = 14992765),
        e.priceInCredits === 0 &&
          (e.activityPointType === et.DUCKET
            ? (t.color = 11257559)
            : et.isSeasonal(e.activityPointType)
              ? (t.color = this.getSeasonalCurrencyPriceColor(e.activityPointType))
              : (t.color = a.DEFAULT_ACTIVITY_POINTS_PRICE_COLOR)),
        e.priceInSilver > 0 && (t.color = 15790320));
    }
    return t;
  }
  getSeasonalCurrencyPriceColor(e) {
    if (!et.isSeasonal(e)) return a.DEFAULT_ACTIVITY_POINTS_PRICE_COLOR;
    let r = this._catalog?.getProperty(`seasonalcurrency.id.${e}`) ?? "";
    if (r === "") return a.DEFAULT_ACTIVITY_POINTS_PRICE_COLOR;
    let t = this._catalog?.getProperty(`seasonalcurrency.${r}.color`) ?? "";
    return t === ""
      ? a.DEFAULT_ACTIVITY_POINTS_PRICE_COLOR
      : qn.hexToUint(this._catalog?.getProperty(`seasonalcurrency.preset.${t}.border`) ?? "");
  }
  showExtraOnProduct(e, r, t, i, s, o = !0, d = !0) {
    let c = t.findChildByName(a.BADGE_CHATSTYLE_WIDGET_NAME);
    if (c == null) {
      if (((c = this.createWindow("badgeDisplayWidget")), c == null)) return;
      c.name = a.BADGE_CHATSTYLE_WIDGET_NAME;
    }
    let f = c.findChildByName("asset_image"),
      l = c.findChildByName("badge_image"),
      b = l?.widget,
      _ = c.findChildByName("chat_style");
    if (e === class_3169.CHAT_STYLE) {
      if (
        (f != null && (f.assetUri = "catalogue_chatstyle_background"),
        l != null && (l.visible = !1),
        _ != null)
      ) {
        _.visible = !0;
        let h =
          this._catalog?._rafd5b9130c4bfd?.chatStyleLibrary
            ?._r22c9347ecec607(Number.parseInt(r, 10))
            ?._r270592cedf0213?.clone() ?? null;
        _.bitmap = h;
      }
    } else
      e === class_3169.BADGE &&
        (f != null && (f.assetUri = "catalogue_badge_background"),
        l != null && (l.visible = !0),
        _ != null && (_.visible = !1),
        b != null && (b.badgeId = r));
    (f != null && ((c.width = f.width), (c.height = f.height)),
      t.windowIsChild(c) || t.addChild(c),
      (c.x = d ? i : t.width - c.width - i),
      (c.y = o ? s : t.height - c.height - s));
  }
  _r63d751f989e2d8(e) {
    let r = e.findChildByName(a.BADGE_CHATSTYLE_WIDGET_NAME);
    r != null && e.removeChild(r);
  }
  showAssetImageAsBadgeOnProduct(e, r, t, i, s = !0, o = !0) {
    let d = r.findChildByName(a.BADGE_CHATSTYLE_WIDGET_NAME);
    if (d == null) {
      if (((d = this.createWindow("badgeDisplayWidget")), d == null)) return;
      d.name = a.BADGE_CHATSTYLE_WIDGET_NAME;
    }
    let c = d.findChildByName("chat_style"),
      f = d.findChildByName("badge_image");
    (c != null && (c.visible = !1), f != null && (f.visible = !1));
    let l = d.findChildByName("badge_image");
    (l != null && ((l.assetUri = e), (d.width = l.width), (d.height = l.height)),
      r.windowIsChild(d) || r.addChild(d),
      (d.x = o ? t : r.width - d.width - t),
      (d.y = s ? i : r.height - d.height - i));
  }
  openLink(e) {
    e !== "" &&
      (this._catalog?.windowManager.alert(
        "${catalog.alert.external.link.title}",
        "${catalog.alert.external.link.desc}",
        0,
        this.onExternalLinkAlertClose,
      ),
      Ae.openWebPage(e, "habboMain"));
  }
  _rfcca586527c6d5(e, r, t) {
    return r * t;
  }
  resolveBundleDiscountFlatPriceSteps() {
    ((this._re6e8672e698fd9 = []), (this._r2aff5e64e1d822 = 0));
    for (let e = 0; e < 99; e++) {
      let r = this._rfcca586527c6d5(!0, 1, e),
        t = this._rfcca586527c6d5(!0, 1, e + 1);
      r === t && (this._re6e8672e698fd9.push(e), (this._r2aff5e64e1d822 = e));
    }
  }
  spinnerValueChangedEventTrack() {
    this._rc8344fb92bc799 ||
      (ll.getInstance().trackEventLog("Catalog", "spinnerValueChanged", "client.bundle.discounts"),
      (this._rc8344fb92bc799 = !0));
  }
  bundlesInfoShownEventTrack() {
    this._rfe81552616cb38 ||
      (ll.getInstance().trackEventLog("Catalog", "bundlesInfoOpened", "client.bundle.discounts"),
      (this._rfe81552616cb38 = !0));
  }
  discountShownEventTrack() {
    this._rdec9d12f37ad8d ||
      (ll.getInstance().trackEventLog("Catalog", "discountItemShown", "client.bundle.discounts"),
      (this._rdec9d12f37ad8d = !0));
  }
  _r79cad450bdc61b(e, r, t) {
    if (this._catalog == null) return;
    let i = null;
    switch (e) {
      case class_1803.PRODUCT_TYPE_STUFF:
        i = this._catalog.roomEngine?._r65a31a885a1252(r, this) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        i = this._catalog.roomEngine?.getWallItemDataByName(r, this) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_EFFECT:
        t.bitmap = this._catalog.getPixelEffectIcon(r);
        break;
      case class_1803.PRODUCT_TYPE_CLUB:
        t.bitmap = this._catalog.getSubscriptionProductIcon(r);
        break;
      default:
        break;
    }
    if (i != null && ((t.bitmap = i.data), i.id !== 0)) {
      let s = this._r69f0c3572f8571.get(i.id) ?? [];
      (s.push(t), this._r69f0c3572f8571.set(i.id, s));
    }
  }
  imageReady(e, r) {
    let t = this._r69f0c3572f8571.get(e);
    if (t != null) {
      for (let i of t) i.bitmap = r;
      this._r69f0c3572f8571.delete(e);
    }
  }
  imageFailed(e) {}
  setCatalogItemImage(e, r) {
    if (e == null) return;
    let i = this._catalog?.assets.getAssetByName(r)?.content;
    if (i == null) return;
    (e.bitmap != null && (e.bitmap.dispose(), (e.bitmap = null)),
      e.bitmap == null && (e.bitmap = new A(e.width, e.height, !0, 0)));
    let s = (e.width - i.width) * 0.5,
      o = (e.height - i.height) * 0.5;
    e.bitmap.draw(i, new Pe(1, 0, 0, 1, s, o));
  }
  _r2e9d1df5e796c1(e, r) {
    let t = new B();
    return (
      e.priceInCredits > 0 &&
        t.add(a.PRICE_CREDIT, {
          amount: this._rfcca586527c6d5(e.bundlePurchaseAllowed, e.priceInCredits, r),
        }),
      e.priceInActivityPoints > 0 &&
        t.add(a.PRICE_ACTIVITY_POINT, {
          amount: this._rfcca586527c6d5(e.bundlePurchaseAllowed, e.priceInActivityPoints, r),
          activityPointType: e.activityPointType,
        }),
      e.priceInSilver > 0 && t.add(a.PRICE_SILVER, { amount: e.priceInSilver }),
      t.length === 0 && t.add(a.PRICE_CREDIT, { amount: 0 }),
      t
    );
  }
  _r98742a906d6f96(e) {
    return this._r8b868dc408320d(e) + this._r8ba01653d415a5(e) + this._r9ddbe8751153b4(e);
  }
  showVipBenefits() {
    if (this._catalog != null) {
      if (this._catalog.getBoolean("catalog.vip.benefits.enabled")) {
        (this.var_1952 == null || this.var_1952.disposed) &&
          (this.var_1952 = new VipBenefitsWindow(this._catalog));
        return;
      }
      this.openLink(this._catalog.getProperty("link.format.club"));
    }
  }
  static buildersClub(e) {
    return e.indexOf("builders_club") === 0 || e.indexOf("loyalty_bc") === 0;
  }
  static replaceCenteredImage(e, r, t = null) {
    e.bitmap == null ? (e.bitmap = new A(e.width, e.height, !0, 0)) : e.bitmap.fillRect(e.bitmap.rect, 0);
    let i = e.bitmap,
      s = t ?? r.rect;
    (i.copyPixels(r, s, new E((i.width - s.width) / 2, (i.height - s.height) / 2), null, null, !0),
      e.invalidate());
  }
  onExternalLinkAlertClose = n((...e) => {
    (e[0] ?? null)?.dispose?.();
  }, "onExternalLinkAlertClose");
  _r0f0eff6051d02d(e, r, t, i, s) {
    let o = this.createPriceContainer(e);
    if (o == null) return;
    let d = 0;
    for (; d < r.length; d++) this.renderPriceItem(o, d, r[d], t, i, s);
    let c = d * 2 + 2;
    for (; o.numListItems > c;) o.removeListItemAt(c - 1);
    e.addChild(o);
  }
  renderPriceItem(e, r, t, i, s, o) {
    let d = e.getListItemByName(`amount_${r}`),
      c = e.getListItemByName(`unit_${r}`);
    d == null ||
      c == null ||
      ((d.text = o ? "" : `${r > 0 ? "+ " : ""}${t.amount}`),
      (c.style = et.getIconStyleFor(t.unit, this._catalog, !0, s)),
      (c.width = i && s ? 53 : 22),
      c.fitToSize());
  }
  createPriceContainer(e) {
    let r = this.createWindow("price_display");
    if (e == null || r == null) return null;
    for (; e.numChildren > 0;) e.removeChildAt(0)?.dispose();
    return r;
  }
  _r84c53a3edabeae(e, r, t) {
    let i = -1,
      s = [];
    return (
      e.priceInCredits > 0 &&
        ((i = t ? (this._catalog?.getSeasonalCurrencyActivityPointType() ?? -1) : -1),
        s.push({ amount: this._rfcca586527c6d5(e.bundlePurchaseAllowed, e.priceInCredits, r), unit: i })),
      e.priceInActivityPoints > 0 &&
        s.push({
          amount: this._rfcca586527c6d5(e.bundlePurchaseAllowed, e.priceInActivityPoints, r),
          unit: e.activityPointType,
        }),
      e.priceInSilver > 0 && s.push({ amount: e.priceInSilver, unit: et.SILVER }),
      e._r6a2e5e87fafd63 > 0 && s.push({ amount: e._r6a2e5e87fafd63, unit: et.EMERALD }),
      s.length === 0 && s.push({ amount: 0, unit: -1 }),
      s
    );
  }
  _r8b868dc408320d(e) {
    let r = this._catalog?._rc94facdba94e66 ?? null;
    return r == null || r._rc509faa5d3ff7c <= 0 ? 0 : Math.floor(e / r._rc509faa5d3ff7c) * r._r80e381ab0e3e80;
  }
  _r8ba01653d415a5(e) {
    let r = this._catalog?._rc94facdba94e66 ?? null;
    if (r == null || r._rc509faa5d3ff7c <= 0) return 0;
    let t = 0,
      i = Math.floor(e / r._rc509faa5d3ff7c);
    return (
      i >= r._r38f3c77216f185 &&
        (e % r._rc509faa5d3ff7c === r._rc509faa5d3ff7c - 1 && t++, (t += i - r._r38f3c77216f185)),
      t
    );
  }
  _r9ddbe8751153b4(e) {
    let r = this._catalog?._rc94facdba94e66 ?? null,
      t = 0;
    if (r != null) for (let i of r._r04b4b3924f6329) e >= i && t++;
    return t;
  }
}
