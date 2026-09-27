// Estratto da HabboAirLauncher.deobf.js, riga 191098.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/MarketPlaceOwnItemsCatalogWidget.as
// Nome offuscato: _ic22ec06fa8f907

class a extends CatalogWidget {
  static {
    n(this, "MarketPlaceOwnItemsCatalogWidget");
  }
  static ITEM_POOL_MAX_SIZE = 2e3;
  static STATUS_SEARCHING = 1;
  static STATUS_LIST_AVAILABLE = 2;
  static MAX_SEARCH_STRING_LENGTH = 40;
  _r2d0177ed538798 = new B();
  _r625c279c8f6cc0 = new B();
  _itemList = null;
  _rfe60cc7621808a = null;
  _offers = null;
  _rb11a464818c63d = new B();
  var_2618 = "";
  var_3055 = Tc.OPEN;
  _ignoreCategorySelectionEvents = !1;
  constructor(e) {
    super(e);
  }
  dispose() {
    if (
      (this.marketPlace?.registerVisualization(null), this._r5a48e434977cdf(), this._r2d0177ed538798 != null)
    ) {
      for (let e of this._r2d0177ed538798.getValues()) e?.dispose();
      (this._r2d0177ed538798.dispose(), (this._r2d0177ed538798 = null));
    }
    if (this._r625c279c8f6cc0 != null) {
      for (let e of this._r625c279c8f6cc0.getValues()) this._r2fe9808fea0161(e);
      (this._r625c279c8f6cc0.dispose(), (this._r625c279c8f6cc0 = null));
    }
    (this._rb11a464818c63d?.dispose(),
      (this._rb11a464818c63d = null),
      this._offers?.dispose(),
      (this._offers = null),
      (this._rfe60cc7621808a = null),
      super.dispose());
  }
  init() {
    if (!super.init() || this.marketPlace?.windowManager == null) return !1;
    this.displayMainView();
    let e = this._window?.findChildByName("item_list");
    if (e == null || this._r2d0177ed538798 == null) return !1;
    (this._r2d0177ed538798.add(_i4e558243c209b2._r7e3fcbc1e80373, e.removeListItem(e.getListItemByName("ongoing_item"))),
      this._r2d0177ed538798.add(_i4e558243c209b2.SOLD, e.removeListItem(e.getListItemByName("sold_item"))),
      this._r2d0177ed538798.add(_i4e558243c209b2.EXPIRED, e.removeListItem(e.getListItemByName("expired_item"))));
    let r = this._window?.findChildByName("search_input");
    return (
      r != null && (r.text = ""),
      this.updateSearchUiState(),
      this.populateCategoryDropMenu(),
      this.marketPlace.registerVisualization(this),
      this.setSelectedCategory(Tc.OPEN),
      !0
    );
  }
  _rd4d60b7cf07f13() {
    this.marketPlace != null &&
      ((this._rfe60cc7621808a = this.marketPlace._rd62f0c7e54490a()), this.applySearchFilter());
  }
  _r872030cd20b464(e) {
    if (!(
      this._itemList == null ||
      this._offers == null ||
      this._rb11a464818c63d == null ||
      e == null
    )) {
      this._itemList.autoArrangeItems = !1;
      for (let r of e) {
        this._offers.remove(r);
        let t = this._rb11a464818c63d.remove(r);
        if (t == null) continue;
        let i = this._itemList.removeListItem(t);
        i != null && this._r04f0869fbcfad1(i);
      }
      ((this._itemList.autoArrangeItems = !0), this.updateListSummary());
    }
  }
  updateStats() {}
  displayMainView() {
    (this._rd7318259311b4b(CatalogWidgetEnum.MARKET_PLACE_OWN_ITEMS),
      this.window != null && (this.window.procedure = this._r28589daa706453),
      (this._itemList = this.window?.findChildByName("item_list")));
  }
  imageReady(e, r) {
    if (
      this.disposed ||
      this.marketPlace == null ||
      r == null ||
      this._itemList == null ||
      this._offers == null
    )
      return;
    let t = [];
    if (this._itemList.groupListItemsWithID(e, t) > 0)
      for (let i of t) {
        if (i == null) continue;
        let s = i.findChildByName("item_image");
        if (s != null) {
          s.bitmap = new A(s.width, s.height, !0, 16777215);
          let o = new E((s.width - r.width) / 2, (s.height - r.height) / 2);
          s.bitmap.copyPixels(r, r.rect, o, null, null, !0);
        }
        i.id = 0;
      }
    for (let i of this._offers.getValues())
      i.imageCallback === e && ((i.imageCallback = 0), (i.image = r));
  }
  imageFailed(e) {}
  showRedeemInfo(e) {
    let r = this.window?.findChildByName("redeem_border");
    r != null && (r.visible = e);
  }
  updateBottomActionButtons(e) {
    if (this.window == null) return;
    let r = this.var_3055 === Tc.OPEN,
      t = this.window.findChildByName("recall_all_button");
    t != null && ((t.visible = r), e && r ? t.enable() : t.disable());
    let i = this.window.findChildByName("mark_as_seen_button");
    i != null && ((i.visible = !r), e && !r ? i.enable() : i.disable());
  }
  applySearchFilter() {
    if (this._rfe60cc7621808a != null) {
      (this._offers?.dispose(), (this._offers = new B()));
      for (let e of this._rfe60cc7621808a.getValues())
        this._red0517bc113d67(e) && this._offers.add(e.offerId, e);
      this.updateList(this._offers);
    }
  }
  updateStatusDisplay(e, r = -1) {
    if (this.marketPlace?.localization == null || this.window == null) return;
    let t = this.window.findChildByName("status_text");
    if (t == null) return;
    let i = "",
      s = this.marketPlace.localization;
    (e === a.STATUS_SEARCHING
      ? (i = s.getLocalization("catalog.marketplace.searching"))
      : e === a.STATUS_LIST_AVAILABLE &&
        (r > 0
          ? ((i = s.getLocalization("catalog.marketplace.items_found")), (i = i.replace("%count%", `${r}`)))
          : (i = s.getLocalization("catalog.marketplace.no_items"))),
      (t.caption = i));
  }
  get marketPlace() {
    return this.page?.viewer.catalog?.marketPlace ?? null;
  }
  updateList(e) {
    if (
      e == null ||
      this.marketPlace?.localization == null ||
      this.window == null ||
      this._itemList == null
    )
      return;
    let r = this.marketPlace.localization;
    this._r5a48e434977cdf();
    let t = e.getKeys();
    if (t != null) {
      for (let i of t) {
        let s = e.getValue(i);
        if (s == null) continue;
        let o = this.claimItemWindow(s.status);
        if (o == null || o.disposed) continue;
        let d = o.findChildByName("item_name");
        d != null &&
          (d.caption =
            this.marketPlace != null ? `\${${this.marketPlace.getNameLocalizationKey(s)}}` : "");
        let c = o.findChildByName("item_desc");
        c != null &&
          (c.caption =
            this.marketPlace != null ? `\${${this.marketPlace.getDescriptionLocalizationKey(s)}}` : "");
        let f = o.findChildByName("item_price");
        if (f != null) {
          let l = r.getLocalization("catalog.marketplace.offer.price_own_item");
          ((l = l.replace("%price%", `${s.price}`)), (f.caption = l));
        }
        if (s.status === _i4e558243c209b2._r7e3fcbc1e80373) {
          let l = o.findChildByName("item_time");
          if (l != null) {
            let b = Math.max(1, s.timeLeftMinutes),
              _ = Math.floor(b / 60),
              p = `${b - _ * 60} ${r.getLocalization("catalog.marketplace.offer.minutes")}`;
            _ > 0 && (p = `${_} ${r.getLocalization("catalog.marketplace.offer.hours")} ${p}`);
            let m = r.getLocalization("catalog.marketplace.offer.time_left");
            ((m = m.replace("%time%", p)), (l.caption = m));
          }
        }
        if (s.status === _i4e558243c209b2.SOLD) {
          let l = o.findChildByName("item_sold");
          l != null &&
            (l.caption = this.getStatusText(
              r,
              s,
              "catalog.marketplace.offer.sold",
              "catalog.marketplace.offer.sold_at",
            ));
        }
        if (s.status === _i4e558243c209b2.EXPIRED) {
          let l = o.findChildByName("item_expired");
          l != null &&
            (l.caption = this.getStatusText(
              r,
              s,
              "catalog.marketplace.offer.expired",
              "catalog.marketplace.offer.expired_at",
            ));
        }
        if (s.image == null) {
          let l = this.getFurniImageResult(s.furniId, s.furniType, s.extraData);
          l != null && (l.data != null ? (s.image = l.data) : ((s.imageCallback = l.id), (o.id = l.id)));
        }
        if (s.image != null) {
          let l = o.findChildByName("item_image");
          if (l != null) {
            let b = new E((l.width - s.image.width) / 2, (l.height - s.image.height) / 2);
            ((l.bitmap = new A(l.width, l.height, !0, 0)), l.bitmap.copyPixels(s.image, s.image.rect, b));
          }
        }
        if (s._r651925293e1d0b) {
          let l = o.findChildByName("unique_item_background_bitmap"),
            b = o.findChildByName("unique_item_overlay_widget"),
            _ = b?.widget;
          (_ != null && ((_.serialNumber = s.stuffData?.uniqueSerialNumber ?? 0), (_.animated = !0)),
            l != null && (l.visible = !0),
            b != null && (b.visible = !0));
        }
        if ((s.stuffData?.rarityLevel ?? -1) >= 0) {
          let l = o.findChildByName("rarity_item_overlay_widget"),
            b = l?.widget;
          l != null &&
            b != null &&
            ((l.visible = !0), (b.rarityLevel = s.stuffData?.rarityLevel ?? 0));
        }
        (this._itemList.addListItem(o),
          this._rb11a464818c63d?.add(s.offerId, o),
          (o.procedure = this.onGridEvent));
      }
      this.updateListSummary();
    }
  }
  updateListSummary() {
    this.marketPlace?.localization == null ||
      this._rfe60cc7621808a == null ||
      this._offers == null ||
      this.window == null ||
      (this.updateStatusDisplay(a.STATUS_LIST_AVAILABLE, this._offers.length),
      this.showRedeemInfo(!0),
      this.updateBottomActionButtons(this._rfe60cc7621808a.length > 0));
  }
  getFurniImageResult(e, r, t = null) {
    return this.page?.viewer.roomEngine == null
      ? null
      : r === 1
        ? this.page.viewer.roomEngine._r65a31a885a1252(e, this)
        : r === 2
          ? this.page.viewer.roomEngine.getWallItemDataByName(e, this, t ?? "")
          : null;
  }
  onGridEvent = n((e, r = null) => {
    if (
      e.type !== u.CLICK ||
      this.marketPlace == null ||
      r == null ||
      this.window == null ||
      r.name !== "pick_button"
    )
      return;
    let t = this.window.findChildByName("item_list");
    if (t == null || e.window?.parent == null || this._offers == null) return;
    let i = t.getListItemIndex(e.window.parent),
      s = this._offers.getWithIndex(i);
    s != null && this.marketPlace._r3733d9b0c15928(s.offerId);
  }, "onGridEvent");
  _r28589daa706453 = n((e, r) => {
    if (((r ??= e.target), e.type === u.CLICK)) {
      if (this.marketPlace == null || r == null) return;
      (r.name === "search_button" && this.performSearch(),
        (r.name === "cancel_search_btn" || r.parent?.name === "cancel_search_btn") && this.clearSearch(),
        r.name === "recall_all_button" &&
          this.marketPlace.windowManager?.confirm(
            "${shop.marketplace.recall.all.button}",
            "${shop.marketplace.recall.all.items}",
            0,
            this._r4fa885915cbf60,
          ),
        r.name === "mark_as_seen_button" &&
          this.marketPlace.windowManager?.confirm(
            "${shop.marketplace.mark.as.seen.button}",
            "${shop.marketplace.mark.as.seen.items}",
            0,
            this._r9664726d339dd2,
          ));
    } else if (e.type === y.WINDOW_EVENT_CHANGE) {
      let t = r;
      if (t == null || t.name !== "search_input") return;
      (t.text.length > a.MAX_SEARCH_STRING_LENGTH && (t.text = t.text.substring(0, a.MAX_SEARCH_STRING_LENGTH)),
        (t.scrollH = 0),
        this.updateSearchUiState());
    } else if (e.type === y.const_238) {
      let t = r;
      if (this._ignoreCategorySelectionEvents || t == null || r?.name !== "offer_category_dropmenu") return;
      let i = this._r77b5834b2f10f4(t.selection);
      i !== this.var_3055 && this.setSelectedCategory(i);
    } else
      e.type === sr.const_1081 &&
        r?.name === "search_input" &&
        e?.keyCode === Fi.ENTER &&
        this.performSearch();
  }, "_r28589daa706453");
  performSearch() {
    if (this.window == null) return;
    let e = this.window.findChildByName("search_input");
    e != null && ((this.var_2618 = this.normalizeSearchText(e.text)), this.applySearchFilter());
  }
  clearSearch() {
    if (this.window == null) return;
    let e = this.window.findChildByName("search_input");
    (e != null && ((e.text = ""), (e.scrollH = 0)),
      (this.var_2618 = ""),
      this.updateSearchUiState(),
      this.applySearchFilter());
  }
  _red0517bc113d67(e) {
    return this.var_2618 === "" ? !0 : this.getOfferSearchText(e).indexOf(this.var_2618) >= 0;
  }
  getOfferSearchText(e) {
    if (e == null || this.marketPlace?.localization == null) return "";
    let r = this.marketPlace.localization,
      t = this.marketPlace.getNameLocalizationKey(e),
      i = this.marketPlace.getDescriptionLocalizationKey(e),
      s = r.getLocalization(t, ""),
      o = r.getLocalization(i, "");
    return this.normalizeSearchText(`${s} ${o}`);
  }
  normalizeSearchText(e) {
    return e == null ? "" : e.toLowerCase();
  }
  updateSearchUiState() {
    if (this.window == null) return;
    let e = this.window.findChildByName("search_input"),
      r = this.window.findChildByName("search_placeholder"),
      t = this.window.findChildByName("cancel_search_btn"),
      i = e != null && e.text.length > 0;
    (r != null && (r.visible = !i), t != null && (t.visible = i));
  }
  getStatusText(e, r, t, i) {
    let s = e.getLocalization(t, "");
    return r == null || Number.isNaN(r.statusTime) || r.statusTime <= 0
      ? s
      : e.getLocalizationWithParams(i, s, "timestamp", this.formatStatusTime(r.statusTime));
  }
  formatStatusTime(e) {
    return new Date(e).toLocaleString();
  }
  populateCategoryDropMenu() {
    if (this.window == null || this.marketPlace?.localization == null) return;
    let e = this.window.findChildByName("offer_category_dropmenu");
    if (e == null) return;
    let r = this.marketPlace.localization,
      t = [
        r.getLocalization("shop.marketplace.own.offers.category.open", "OPEN"),
        r.getLocalization("shop.marketplace.own.offers.category.sold", "SOLD"),
        r.getLocalization("shop.marketplace.own.offers.category.expired", "EXPIRED"),
      ];
    ((this._ignoreCategorySelectionEvents = !0),
      e.populate(t),
      (e.selection = this.getDropMenuSelectionForCategory(this.var_3055)),
      (this._ignoreCategorySelectionEvents = !1));
  }
  setSelectedCategory(e) {
    if (((this.var_3055 = e), this.window != null)) {
      let r = this.window.findChildByName("offer_category_dropmenu");
      if (r != null) {
        let t = this.getDropMenuSelectionForCategory(e);
        r.selection !== t && ((this._ignoreCategorySelectionEvents = !0), (r.selection = t), (this._ignoreCategorySelectionEvents = !1));
      }
    }
    (this.clearCurrentOffersView(), this.updateBottomActionButtons(!1), this.marketPlace?._r6e7099fa61e764(e));
  }
  clearCurrentOffersView() {
    (this._r5a48e434977cdf(),
      this._offers?.dispose(),
      (this._offers = null),
      (this._rfe60cc7621808a = null),
      this.updateStatusDisplay(a.STATUS_SEARCHING),
      this.showRedeemInfo(!1));
  }
  getDropMenuSelectionForCategory(e) {
    switch (e) {
      case Tc.SOLD:
        return 1;
      case Tc.EXPIRED:
        return 2;
      default:
        return 0;
    }
  }
  _r77b5834b2f10f4(e) {
    switch (e) {
      case 1:
        return Tc.SOLD;
      case 2:
        return Tc.EXPIRED;
      default:
        return Tc.OPEN;
    }
  }
  _r5a48e434977cdf() {
    if (this._itemList != null) {
      for (this._itemList.autoArrangeItems = !1; this._itemList.numListItems > 0;)
        this._r04f0869fbcfad1(this._itemList.removeListItemAt(0));
      ((this._itemList.autoArrangeItems = !0), this._rb11a464818c63d?.reset());
    }
  }
  claimItemWindow(e) {
    let r = this._rfbe4e5c810c876(e);
    if (r != null && r.length > 0) return r.pop() ?? null;
    let t = this._r2d0177ed538798?.getValue(e) ?? null;
    return t == null ? null : t.clone();
  }
  _r04f0869fbcfad1(e) {
    if (e == null) return;
    let r = this.getStatusForWindow(e),
      t = this._rfbe4e5c810c876(r);
    if (t == null || t.length >= a.ITEM_POOL_MAX_SIZE) {
      e.dispose();
      return;
    }
    (this.resetPooledWindow(e), t.push(e));
  }
  _rfbe4e5c810c876(e) {
    if (this._r625c279c8f6cc0 == null || e < 0) return null;
    let r = this._r625c279c8f6cc0.getValue(e) ?? null;
    return (r == null && ((r = []), this._r625c279c8f6cc0.add(e, r)), r);
  }
  _r2fe9808fea0161(e) {
    if (e != null) {
      for (let r of e) r?.dispose();
      e.length = 0;
    }
  }
  resetPooledWindow(e) {
    ((e.id = 0), (e.procedure = null));
    let r = e.findChildByName("item_image");
    r != null && (r.bitmap = null);
    let t = e.findChildByName("unique_item_background_bitmap");
    t != null && (t.visible = !1);
    let i = e.findChildByName("unique_item_overlay_widget");
    i != null && (i.visible = !1);
    let s = e.findChildByName("rarity_item_overlay_widget");
    s != null && (s.visible = !1);
  }
  getStatusForWindow(e) {
    if (e == null) return -1;
    switch (e.name) {
      case "ongoing_item":
        return _i4e558243c209b2._r7e3fcbc1e80373;
      case "sold_item":
        return _i4e558243c209b2.SOLD;
      case "expired_item":
        return _i4e558243c209b2.EXPIRED;
      default:
        return -1;
    }
  }
  _r4fa885915cbf60 = n((e, r) => {
    e != null &&
      (e.dispose(),
      !(r?.type !== y.const_1300 || this.marketPlace == null) &&
        this.marketPlace._r514081b502d32b());
  }, "_r4fa885915cbf60");
  _r9664726d339dd2 = n((e, r) => {
    e != null &&
      (e.dispose(),
      !(r?.type !== y.const_1300 || this.marketPlace == null) &&
        this.marketPlace._rb22cc684d94725(this.var_3055));
  }, "_r9664726d339dd2");
}
