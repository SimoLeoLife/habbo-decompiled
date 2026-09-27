// Extracted from HabboAirLauncher.deobf.js, line 374299.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/transactions/details/furni_overview/TransactionItemView.as
// Obfuscated name: _i6da95ef5e06665

class a {
  constructor(e, r) {
    this.var_63 = r;
    ((this._window = e.clone()),
      this._window.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._window.addEventListener(u.OUT, this._rc963a69957f690));
  }
  static {
    n(this, "TransactionItemView");
  }
  static TYPE_FURNI = 0;
  static const_872 = 1;
  static TYPE_INCOMPLETE_DATA = 2;
  _disposed = !1;
  _count = 0;
  _type = 0;
  var_828 = null;
  fillRect = null;
  var_1463 = !1;
  _window;
  get window() {
    return this._window;
  }
  get _r996cabff1d71ca() {
    return this.fillRect;
  }
  get disposed() {
    return this._disposed;
  }
  get _re80f488ae2de85() {
    return this._count;
  }
  initialize(e, r, t = null) {
    ((this._count = e),
      (this._type = r),
      (this.var_828 = t),
      (this.fillRect = t == null ? null : new tRe(t)));
    let i = "";
    (this._type === a.TYPE_FURNI
      ? (i = a.getChestBasedItemName(
          this.fillRect,
          this.var_63.localizationManager,
          this.var_63.sessionDataManager,
        ))
      : this._type === a.const_872
        ? (i = "${wiredcontracts.element.type.0}")
        : this._type === a.TYPE_INCOMPLETE_DATA && (i = "${wiredchests.log_details.incomplete_data}"),
      (this._window.toolTipCaption = i),
      this.initializeUI());
  }
  recycle() {
    ((this.var_1463 = !1),
      (this._count = 0),
      (this.var_828 = null),
      (this.fillRect = null));
  }
  dispose() {
    this._disposed ||
      (this._window?.dispose(),
      (this._window = null),
      (this.var_1463 = !1),
      (this._count = 0),
      (this.var_828 = null),
      (this.fillRect = null),
      (this.var_63 = null),
      (this._disposed = !0));
  }
  initializeUI() {
    (a.initChestBasedIconUI(this, this.fillRect),
      (this.coinsIcon.visible = this._type === a.const_872),
      (this.incompleteText.visible = this._type === a.TYPE_INCOMPLETE_DATA),
      this.updateUI(),
      this.updateColoring());
  }
  updateUI() {
    if (this._type === a.TYPE_INCOMPLETE_DATA) {
      ((this.numberContainer.visible = !1),
        (this.incompleteText.fontSize = this._re80f488ae2de85 >= 1e3 ? 12 : 16),
        (this.incompleteText.text = `+${this._re80f488ae2de85}`));
      return;
    }
    this._re80f488ae2de85 > 1
      ? ((this.numberContainer.visible = !0), (this.furniQuantity.text = `${this._re80f488ae2de85}`))
      : (this.numberContainer.visible = !1);
  }
  updateColoring() {
    ((this.focusOutline.visible = !1), (this.border.color = this.var_1463 ? 14079702 : 13355979));
  }
  _rc963a69957f690 = n((e) => {
    ((this.var_1463 = !1), this.updateColoring());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((e) => {
    ((this.var_1463 = !0), this.updateColoring());
  }, "_rb2fb7964bb4ade");
  static initChestBasedIconUI(e, r) {
    if (r == null) {
      ((e.ltdBackgroundBitmap.visible = !1),
        (e.ltdOverlayWidget.visible = !1),
        (e.rarityOverlayWidget.visible = !1),
        (e.furniIcon.visible = !1));
      return;
    }
    e.furniIcon.visible = !0;
    let t = r.stuffData,
      i = t.uniqueSerialNumber > 0;
    if (((e.ltdBackgroundBitmap.visible = i), (e.ltdOverlayWidget.visible = i), i)) {
      let d = e.ltdOverlayWidget.widget;
      d != null && ((d.serialNumber = t.uniqueSerialNumber), (d.seriesSize = t.uniqueSeriesSize));
    }
    let s = r.specialType === class_1901.MONSTERPLANT_SEED;
    if (((e.rarityOverlayWidget.visible = s), s)) {
      let d = e.rarityOverlayWidget.widget;
      d != null && (d.rarityLevel = t.rarityLevel);
    }
    let o = e.furniIcon.widget;
    o != null &&
      (o.productInfo = {
        productTypeId: r.type.isWallItem ? 0 : 1,
        itemTypeId: `${r.type.typeId}`,
        extraData: r.type.legacyPosterId,
        _r48777043299a0c: "",
        _r8884fd63e7a9b7: "",
        _r465eb48d84170b: [],
      });
  }
  static getChestBasedItemName(e, r, t) {
    let i,
      s = e.type;
    if (s.isWallItem) {
      if (e.specialType === class_1901.POSTER && s.legacyPosterId !== "")
        return r.getLocalization(`poster_${s.legacyPosterId}_name`);
      i = t.getWallItemData(s.typeId);
    } else i = t.getFloorItemData(s.typeId);
    return i == null ? "(missing item name)" : i.localizedName;
  }
  get border() {
    return this._window.findChildByName("border");
  }
  get focusOutline() {
    return this._window.findChildByName("outline_focus");
  }
  get ltdBackgroundBitmap() {
    return this._window.findChildByName("unique_item_background_bitmap");
  }
  get coinsIcon() {
    return this._window.findChildByName("coins_icon");
  }
  get incompleteText() {
    return this._window.findChildByName("incomplete_text");
  }
  get furniIcon() {
    return this._window.findChildByName("furni_icon");
  }
  get numberContainer() {
    return this._window.findChildByName("number_container");
  }
  get furniQuantity() {
    return this._window.findChildByName("furni_quantity");
  }
  get ltdOverlayWidget() {
    return this._window.findChildByName("unique_item_overlay_container");
  }
  get rarityOverlayWidget() {
    return this._window.findChildByName("rarity_item_overlay_container");
  }
}
