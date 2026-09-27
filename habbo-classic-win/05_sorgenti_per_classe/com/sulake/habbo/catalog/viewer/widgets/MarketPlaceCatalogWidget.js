// Extracted from HabboAirLauncher.deobf.js, line 190611.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/MarketPlaceCatalogWidget.as
// Obfuscated name: _iaf13c10bedabc1

class a extends CatalogWidget {
  static {
    n(this, "MarketPlaceCatalogWidget");
  }
  static STATUS_SEARCHING = 1;
  static STATUS_LIST_AVAILABLE = 2;
  static MAX_SEARCH_STRING_LENGTH = 40;
  static MAX_PRICE_STRING_LENGTH = 10;
  static USABLE_USED_TEXT_COLOR = 4291559424;
  static USABLE_UNUSED_TEXT_COLOR = 4280195897;
  _sortTypes = [];
  _r08834ed2cb53db = null;
  _itemList = null;
  Boolean = null;
  _r4b5ad91fc07b1e = null;
  _offers = null;
  _rd6faf3bfdf3657 = 0;
  _dontGetOffers = !1;
  _combineUniques = !0;
  constructor(e) {
    super(e);
  }
  dispose() {
    (this.marketPlace?.registerVisualization(null),
      (this._r08834ed2cb53db = null),
      (this._offers = null),
      (this._itemList = null),
      this.Boolean?.dispose(),
      (this.Boolean = null),
      this._r4b5ad91fc07b1e?.removeEventListener(DeBouncer.addEventListener, this._rcb834213f94008),
      this._r4b5ad91fc07b1e?.stop(),
      (this._r4b5ad91fc07b1e = null),
      super.dispose());
  }
  init() {
    if (!super.init() || this.marketPlace == null) return !1;
    (this.marketPlace.registerVisualization(this), this.displayMainView());
    let e = this._window?.findChildByName("offer_list");
    return (
      (this.Boolean = e?.removeListItem(e.getListItemByName("offer_item"))),
      this.Boolean != null
    );
  }
  _rd4d60b7cf07f13() {
    (this.hideDetails(), this.updateList());
  }
  _r872030cd20b464(e) {}
  updateStats() {
    if (this.marketPlace?.localization == null || this._window == null) return;
    let e = this.marketPlace._re67ea9f06a5cad;
    if (e == null) return;
    let r = this._window.findChildByName("details_container");
    if (r == null || !r.visible) return;
    let t = r.findChildByName("offer_count");
    t != null &&
      (this.marketPlace.localization._r43eae9731f5b27(
        "catalog.marketplace.offer_details.offer_count",
        "count",
        e.offerCount.toString(),
      ),
      (t.visible = !0));
    let s = r.findChildByName("chart_selector")?.getSelected() ?? null;
    if (s == null) return;
    let o = null;
    switch (s.name) {
      case "price_development":
        o = new MarketplaceChart(e._r24b5c39dfd5190, e._recc94ad598552e);
        break;
      case "trade_volume":
        o = new MarketplaceChart(e._r24b5c39dfd5190, e._re3b36cc508f679);
        break;
      default:
        return;
    }
    let d = r.findChildByName("chart_bitmap");
    if (d != null) {
      ((d.bitmap = null), (d.bitmap = new A(d.width, d.height, !0, 16777215)));
      let f = o.draw(d.width, d.height);
      (d.bitmap.draw(f), f.dispose());
    }
    let c = r.findChildByName("chart_title");
    if (c != null) {
      let f;
      (o.available
        ? ((f = `catalog.marketplace.offer_details.chart_title.${s.name}`),
          this.marketPlace.localization._r43eae9731f5b27(f, "days", e._rb567756d4aca7b.toString()))
        : (f = "catalog.marketplace.offer_details.chart_title.not_available"),
        (c.caption = this.marketPlace.localization.getLocalization(f)));
    }
  }
  get marketPlace() {
    return this.page?.viewer.catalog?.marketPlace ?? null;
  }
  displayMainView() {
    ((this._dontGetOffers = !0),
      this._rd7318259311b4b(CatalogWidgetEnum.MARKET_PLACE),
      this.window != null && (this.window.procedure = this._r28589daa706453),
      (this._itemList = this.window?.findChildByName("offer_list")),
      this.selectSearchCategory("search_by_activity"),
      (this._dontGetOffers = !1),
      this.doSearch());
  }
  selectSearchCategory(e) {
    let r = this._window?.findChildByName("search_selector"),
      t = r?._rf1edf3aad44c96(e) ?? null;
    if (t == null) return;
    r?.setSelected(t);
    let i = this._window?.findChildByName("search_container");
    if (i == null) return;
    for (; i.numChildren > 0;) i.removeChildAt(0);
    let s = "";
    switch (e) {
      case "search_by_value":
        ((s = "marketplace_search_simple"), (this._sortTypes = [1, 2]));
        break;
      case "search_by_activity":
        ((s = "marketplace_search_simple"), (this._sortTypes = [3, 4, 5, 6]));
        break;
      case "search_advanced":
        ((s = "marketplace_search_advanced"), (this._sortTypes = [1, 2, 3, 4, 5, 6]));
        break;
      default:
        return;
    }
    let o = this.createWindow(s);
    (o != null && i.addChild(o), this.applyCombineUniquesState());
    let d = this._window?.findChildByName("sort_dropmenu");
    d != null && (d.populate(this.getSortKeys(this._sortTypes)), (d.selection = 0));
  }
  getSortKeys(e) {
    return e.map((r) => `\${catalog.marketplace.sort.${r}}`);
  }
  createWindow(e) {
    let r = this.page?.viewer.catalog,
      i = r?.assets.getAssetByName(e)?.content ?? null;
    return i != null ? r?.windowManager.buildFromXML(i) : null;
  }
  updateStatusDisplay(e, r = -1, t = -1) {
    if (this.marketPlace?.localization == null || this.window == null) return;
    let i = this.window.findChildByName("status_text");
    if (i == null) return;
    let s = "";
    (e === a.STATUS_SEARCHING
      ? (s = this.marketPlace.localization.getLocalization("catalog.marketplace.searching"))
      : e === a.STATUS_LIST_AVAILABLE &&
        (t > 0
          ? ((s = this.marketPlace.localization.getLocalization("catalog.marketplace.items_found")),
            (s = s.replace("%count%", `${t}`)),
            r > 0 &&
              r < t &&
              ((s += `. ${this.marketPlace.localization.getLocalization("catalog.marketplace.items_shown")}.`),
              (s = s.replace("%count%", `${r}`))))
          : (s = this.marketPlace.localization.getLocalization("catalog.marketplace.no_items"))),
      (i.caption = s));
  }
  updateList() {
    let e = this.marketPlace?._r519068b3bc73ed(),
      r = this.marketPlace?.totalItemsFound() ?? 0;
    if (e == null || this._itemList == null || this.Boolean == null) return;
    ((this._offers = e), this._itemList.destroyListItems());
    let t = e.getKeys();
    t != null &&
      (this.updateStatusDisplay(a.STATUS_LIST_AVAILABLE, t.length, r),
      (this._r4b5ad91fc07b1e ??= new UnkEventDispatcherWrapperSubclass_05394e(25)),
      this._r4b5ad91fc07b1e.removeEventListener(DeBouncer.addEventListener, this._rcb834213f94008),
      this._r4b5ad91fc07b1e.addEventListener(DeBouncer.addEventListener, this._rcb834213f94008),
      (this._rd6faf3bfdf3657 = 0),
      this.populateList(),
      this._r4b5ad91fc07b1e.start());
  }
  _rcb834213f94008 = n((e) => {
    this._r4b5ad91fc07b1e != null && this.populateList() && this._r4b5ad91fc07b1e.stop();
  }, "_rcb834213f94008");
  populateList() {
    if (this._offers == null) return !0;
    for (let e = 0; e < 5; e++) {
      if (this._rd6faf3bfdf3657 >= this._offers.length) return !0;
      let r = this._offers.getWithIndex(this._rd6faf3bfdf3657);
      (r != null && this.addListItem(r), this._rd6faf3bfdf3657++);
    }
    return !1;
  }
  addListItem(e) {
    if (
      this._itemList == null ||
      this.Boolean == null ||
      this.marketPlace?.localization == null
    )
      return;
    let r = this.Boolean.clone();
    if (r == null || r.disposed) return;
    let t = r.findChildByName("item_name");
    t != null && (t.caption = `\${${this.marketPlace.getNameLocalizationKey(e)}}`);
    let i = r.findChildByName("item_desc");
    i != null && (i.caption = `\${${this.marketPlace.getDescriptionLocalizationKey(e)}}`);
    let s = r.findChildByName("item_price");
    if (s != null) {
      let c = this.marketPlace.localization.getLocalization(
        "catalog.marketplace.offer.price_public_item",
      );
      ((c = c.replace("%price%", `${e.price}`)),
        (c = c.replace("%average%", e._r4696ae664425c4 !== 0 ? `${e._r4696ae664425c4}` : " - ")),
        (s.caption = c));
    }
    let o = r.findChildByName("offer_count");
    if (o != null) {
      let c = this.marketPlace.localization.getLocalization("catalog.marketplace.offer_count");
      ((c = c.replace("%count%", `${e.offerCount}`)), (o.caption = c));
    }
    let d = r.findChildByName("item_usage_state");
    if (
      (d != null &&
        (e.isUsable
          ? ((d.visible = !0),
            (d.caption = this.marketPlace.localization.getLocalization(
              e._rd59f342c907b0b ? "catalog.marketplace.offer.used" : "catalog.marketplace.offer.unused",
            )),
            (d.textColor = e._rd59f342c907b0b ? a.USABLE_USED_TEXT_COLOR : a.USABLE_UNUSED_TEXT_COLOR))
          : ((d.visible = !1), (d.caption = ""))),
      e.image == null)
    ) {
      let c = this.getFurniImageResult(e.furniId, e.furniType, e.extraData);
      c != null && (c.data != null && (e.image = c.data), (e.imageCallback = c.id), (r.id = c.id));
    }
    if (e.image != null) {
      let c = r.findChildByName("item_image");
      if (c != null) {
        let f = new E((c.width - e.image.width) / 2, (c.height - e.image.height) / 2);
        (c.bitmap == null && (c.bitmap = new A(c.width, c.height, !0, 0)),
          c.bitmap.copyPixels(e.image, e.image.rect, f));
      }
    }
    if (e._r651925293e1d0b) {
      let c = r.findChildByName("unique_item_background_bitmap"),
        f = r.findChildByName("unique_item_overlay_widget"),
        l = f?.widget;
      (l != null && ((l.serialNumber = e.stuffData?.uniqueSerialNumber ?? 0), (l.animated = !0)),
        c != null && (c.visible = !0),
        f != null && (f.visible = !0));
    }
    if ((e.stuffData?.rarityLevel ?? -1) >= 0) {
      let c = r.findChildByName("rarity_item_overlay_widget"),
        f = c?.widget;
      c != null && f != null && ((c.visible = !0), (f.rarityLevel = e.stuffData?.rarityLevel ?? 0));
    }
    (this.marketPlace.isAccountSafetyLocked() && r.findChildByName("buy_button")?.disable(),
      this._itemList.addListItem(r),
      (r.procedure = this.onOfferListEvent));
  }
  imageReady(e, r) {
    if (
      this.disposed ||
      this.marketPlace == null ||
      this._itemList == null ||
      this._offers == null
    )
      return;
    let t = [];
    if (this._itemList.groupListItemsWithID(e, t) > 0)
      for (let i of t) {
        let s = i.findChildByName("item_image");
        if (s != null) {
          s.bitmap = new A(s.width, s.height, !0, 16777215);
          let o = new E((s.width - r.width) / 2, (s.height - r.height) / 2);
          s.bitmap.copyPixels(r, r.rect, o, null, null, !0);
        }
        i.id = 0;
      }
    for (let i of this._offers.getKeys()) {
      let s = this._offers.getValue(i);
      s?.imageCallback === e && ((s.imageCallback = 0), (s.image = r));
    }
  }
  imageFailed(e) {}
  getFurniImageResult(e, r, t = null) {
    return this.page?.viewer.roomEngine == null
      ? null
      : r === 1
        ? this.page.viewer.roomEngine._r65a31a885a1252(e, this)
        : r === 2
          ? this.page.viewer.roomEngine.getWallItemDataByName(e, this, t ?? "")
          : null;
  }
  onOfferListEvent = n((e, r = null) => {
    if (
      e.type !== u.CLICK ||
      this._itemList == null ||
      this.marketPlace == null ||
      r == null ||
      e.window?.parent == null
    )
      return;
    let t = this._itemList.getListItemIndex(e.window.parent),
      s = this.marketPlace._r519068b3bc73ed()?.getWithIndex(t);
    if (s != null)
      switch (r.name) {
        case "buy_button":
          this.marketPlace._r204822acd10e1a(s.offerId);
          break;
        case "more_button":
          this.showDetails(s);
          break;
      }
  }, "onOfferListEvent");
  showDetails(e) {
    if (this._window == null || this.marketPlace?.localization == null) return;
    ((this._r08834ed2cb53db = e), (this._window.getChildAt(0).visible = !1));
    let r = this._window.findChildByName("details_container");
    if (r != null) r.visible = !0;
    else {
      if (((r = this.createWindow("marketplace_offer_details")), r == null)) return;
      (this._window.addChild(r), (r.procedure = this._rfafbb80abef803));
    }
    ((r.findChildByName("item_name").caption = `\${${this.marketPlace.getNameLocalizationKey(e)}}`),
      (r.findChildByName("item_description").caption = `\${${this.marketPlace.getDescriptionLocalizationKey(e)}}`));
    let t = r.findChildByName("item_count");
    if (
      (t != null && (t.visible = !1),
      this.marketPlace.localization._r43eae9731f5b27(
        "catalog.marketplace.offer_details.price",
        "price",
        e.price.toString(),
      ),
      this.marketPlace.localization._r43eae9731f5b27(
        "catalog.marketplace.offer_details.average_price",
        "days",
        this.marketPlace._rccca8d1e540a76.toString(),
      ),
      this.marketPlace.localization._r43eae9731f5b27(
        "catalog.marketplace.offer_details.average_price",
        "average",
        e._r4696ae664425c4 === 0 ? " - " : e._r4696ae664425c4.toString(),
      ),
      e.image == null)
    ) {
      let c = this.getFurniImageResult(e.furniId, e.furniType, e.extraData);
      c?.data != null && ((e.image = c.data), (e.imageCallback = c.id));
    }
    if (e.image != null) {
      let c = r.findChildByName("item_image");
      c != null &&
        ((c.bitmap = new A(c.width, c.height, !0, 0)),
        c.bitmap.draw(
          e.image,
          new Pe(1, 0, 0, 1, (c.width - e.image.width) / 2, (c.height - e.image.height) / 2),
        ));
    }
    let i = r.findChildByName("chart_selector");
    i?.getSelectableAt(0) != null && i.setSelected(i.getSelectableAt(0));
    let s = r.findChildByName("chart_bitmap");
    s != null && (s.bitmap = null);
    let o = r.findChildByName("unique_item_overlay_widget");
    if (e._r651925293e1d0b) {
      let c = o?.widget;
      (c != null &&
        ((c.serialNumber = e.stuffData?.uniqueSerialNumber ?? 0),
        (c.seriesSize = e.stuffData?.uniqueSeriesSize ?? 0)),
        o != null && (o.visible = !0));
    } else o != null && (o.visible = !1);
    let d = r.findChildByName("rarity_item_overlay_widget");
    if ((e.stuffData?.rarityLevel ?? -1) >= 0) {
      let c = d?.widget;
      d != null && c != null && ((d.visible = !0), (c.rarityLevel = e.stuffData?.rarityLevel ?? 0));
    } else d != null && (d.visible = !1);
    (this.marketPlace.isAccountSafetyLocked() && r.findChildByName("buy_button")?.disable(),
      this.marketPlace._rea5d52439a8fab(e));
  }
  hideDetails() {
    if (this._window == null) return;
    this._r08834ed2cb53db = null;
    let e = this._window.findChildByName("details_container");
    (e != null && (e.visible = !1),
      this._window.getChildAt(0) != null && (this._window.getChildAt(0).visible = !0));
  }
  doSearch() {
    if (this.marketPlace == null || this._window == null) return;
    this.updateStatusDisplay(a.STATUS_SEARCHING);
    let e = -1,
      r = -1,
      t = "",
      i = 1,
      s = this._window.findChildByName("min_price_input");
    s != null && (e = s.text === "" ? -1 : parseInt(s.text));
    let o = this._window.findChildByName("max_price_input");
    o != null && (r = o.text === "" ? -1 : parseInt(o.text));
    let d = this._window.findChildByName("search_input");
    d != null && (t = d.text);
    let c = this._window.findChildByName("sort_dropmenu");
    c != null &&
      c.selection >= 0 &&
      c.selection < this._sortTypes.length &&
      (i = this._sortTypes[c.selection]);
    let f = this.getCombineUniquesCheckBox();
    (f != null && (this._combineUniques = f.isSelected),
      this._dontGetOffers || this.marketPlace.requestOffers(e, r, t, i, this._combineUniques));
  }
  _r28589daa706453 = n((e, r = null) => {
    if (e == null || r == null || this.marketPlace == null) return;
    let t = this.marketPlace.localization,
      i = this.window?.findChildByName("search_input");
    if (e.type === y.const_238)
      switch (r.name) {
        case "sort_dropmenu": {
          let o = this._window?.findChildByName("search_selector")?.getSelected() ?? null;
          o != null &&
            (o.name === "search_by_value" || o.name === "search_by_activity") &&
            this.doSearch();
          break;
        }
        case "search_by_value":
        case "search_by_activity":
        case "search_advanced":
          this.selectSearchCategory(r.name);
          break;
        case "combine_uniques_checkbox":
          ((this._combineUniques = this.getCombineUniquesCheckBox()?.isSelected ?? !1),
            this._dontGetOffers || this.doSearch());
          break;
      }
    else if (e.type === y.const_1217)
      r.name === "combine_uniques_checkbox" &&
        ((this._combineUniques = !1), this._dontGetOffers || this.doSearch());
    else if (e.type === u.CLICK)
      switch (r.name) {
        case "search_input":
          t != null &&
            i != null &&
            i.text === t.getLocalization("catalog.marketplace.search_name") &&
            (i.text = "");
          break;
        case "search_button":
          if (t != null && i != null && i.text === t.getLocalization("catalog.marketplace.search_name"))
            return;
          this.doSearch();
          break;
      }
    else if (e.type === y.WINDOW_EVENT_CHANGE) {
      let s = r;
      if (s == null) return;
      let o = 0;
      switch (s.name) {
        case "min_price_input":
        case "max_price_input":
          o = a.MAX_PRICE_STRING_LENGTH;
          break;
        case "search_input":
          o = a.MAX_SEARCH_STRING_LENGTH;
          break;
        default:
          return;
      }
      (s.text.length > o && (s.text = s.text.substring(0, o)), (s.scrollH = 0));
    }
  }, "_r28589daa706453");
  getCombineUniquesCheckBox() {
    return this._window == null
      ? null
      : this._window.findChildByName("combine_uniques_checkbox");
  }
  applyCombineUniquesState() {
    let e = this.getCombineUniquesCheckBox();
    e != null && (e.isSelected = this._combineUniques);
  }
  _rfafbb80abef803 = n((e, r) => {
    if (!(e == null || r == null)) {
      if (e.type === u.CLICK) {
        switch (r.name) {
          case "back_button":
            this.hideDetails();
            break;
          case "buy_button":
            this._r08834ed2cb53db != null &&
              this.marketPlace?._r204822acd10e1a(this._r08834ed2cb53db.offerId);
            break;
        }
        return;
      }
      if (e.type === y.const_238)
        switch (r.name) {
          case "price_development":
          case "trade_volume":
            this.updateStats();
            break;
        }
    }
  }, "_rfafbb80abef803");
}
