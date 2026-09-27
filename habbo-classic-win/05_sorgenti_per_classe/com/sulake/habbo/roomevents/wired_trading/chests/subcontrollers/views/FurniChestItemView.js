// Extracted from HabboAirLauncher.deobf.js, line 372838.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/subcontrollers/views/FurniChestItemView.as
// Obfuscated name: _ibcdf8492d286d9

class a {
  static {
    n(this, "FurniChestItemView");
  }
  static NOT_HOVERED_COLOR = 13355979;
  static var_5812 = 14079702;
  _disposed = !1;
  _storages = null;
  var_1921 = null;
  _active = !1;
  var_1463 = !1;
  _window;
  constructor(e) {
    ((this._window = e.clone()),
      this._window.addEventListener(u.CLICK, this.onClick),
      this._window.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._window.addEventListener(u.OUT, this._rc963a69957f690));
  }
  get window() {
    return this._window;
  }
  initialize(e, r) {
    ((this.var_1921 = e), (this._storages = r), this.initializeUI());
  }
  get _re80f488ae2de85() {
    return this._storages == null || this._storages.length === 0
      ? 0
      : this._storages.length;
  }
  peek() {
    return this._storages == null || this._storages.length === 0
      ? null
      : this._storages[0];
  }
  remove(e) {
    let r = this._storages.indexOf(e);
    (r !== -1 && this._storages.splice(r, 1), this.updateUI());
  }
  add(e) {
    (this._storages.push(e), this.updateUI());
  }
  initializeUI() {
    let e = this.peek();
    e != null && (a.initChestBasedIconUI(this, e), this.updateUI(), this.updateColoring());
  }
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
    o != null && (o.productInfo = new UnkClass_27028f__(r.type));
  }
  updateUI() {
    this._re80f488ae2de85 > 1
      ? ((this.numberContainer.visible = !0), (this.furniQuantity.text = String(this._re80f488ae2de85)))
      : (this.numberContainer.visible = !1);
  }
  updateColoring() {
    ((this.focusOutline.visible = this._active),
      (this.border.color = this.var_1463 ? a.var_5812 : a.NOT_HOVERED_COLOR));
  }
  _rc963a69957f690 = n(() => {
    ((this.var_1463 = !1), this.updateColoring());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n(() => {
    ((this.var_1463 = !0), this.updateColoring());
  }, "_rb2fb7964bb4ade");
  onClick = n(() => {
    this.var_1921?.selectItemView(this);
  }, "onClick");
  activate() {
    ((this._active = !0), this.updateColoring());
  }
  deactivate() {
    ((this._active = !1), this.updateColoring());
  }
  recycle() {
    ((this._storages = null),
      (this._active = !1),
      (this.var_1463 = !1),
      (this.var_1921 = null));
  }
  get _r996cabff1d71ca() {
    return this.peek();
  }
  dispose() {
    this._disposed ||
      ((this._storages = null),
      this._window?.dispose(),
      (this._window = null),
      (this._active = !1),
      (this.var_1463 = !1),
      (this.var_1921 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
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
