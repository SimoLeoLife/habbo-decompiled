// Extracted from HabboAirLauncher.deobf.js, line 245859.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/habbicons/MessengerHabbiconPickerTileView.as
// Obfuscated name: _i251efbe6e7b221

class a {
  constructor(e, r, t, i, s, o) {
    this._entry = r;
    this.var_2669 = t;
    this.var_1310 = o;
    ((this._window = e.clone()),
      this.addWheelListener(this._window),
      this.addWheelListener(this.background),
      this.addWheelListener(this.bitmap));
    let d = this._entry != null;
    if (
      ((this.background.color = d ? a.SLOT_FILLED_COLOR : a.SLOT_EMPTY_COLOR),
      (this.background.blend = d ? 0.85 : 0.4),
      (this._window.mouseThreshold = d ? 0 : 10),
      (this._window.toolTipCaption = d ? this._entry.name : ""),
      this._entry == null)
    ) {
      this.bitmap.visible = !1;
      return;
    }
    (d &&
      (this._window.addEventListener(u.CLICK, this._rd74da87157b7a9),
      this._window.addEventListener(u.OVER, this._r86aeec0df56c3c),
      this._window.addEventListener(u.OUT, this._r479c354def12d1)),
      this.refreshBitmap(),
      this.addUnseenCounter(i, s));
  }
  static {
    n(this, "MessengerHabbiconPickerTileView");
  }
  static SLOT_FILLED_COLOR = 4294967295;
  static SLOT_EMPTY_COLOR = 4292730333;
  static SLOT_FILLED_HOVER_COLOR = 4293848814;
  _window;
  _r52326ad028e633 = null;
  var_1767 = !1;
  _disposed = !1;
  get window() {
    return this._window;
  }
  clearUnseenCounterForHabbicon(e) {
    this._entry != null && this._entry.habbiconId === e && this.removeUnseenCounter();
  }
  dispose() {
    this._disposed ||
      (this.var_1767 &&
        (Dr.removeEventListener(Dr.ASSETS_LOADED, this._ra6bbc57bd6f724), (this.var_1767 = !1)),
      this._window != null &&
        (this._window.parent != null &&
          this._window.parent.removeChild(this._window),
        this.removeWheelListener(this._window),
        this.removeWheelListener(this.background),
        this.removeWheelListener(this.bitmap),
        this._window.removeEventListener(u.CLICK, this._rd74da87157b7a9),
        this._window.removeEventListener(u.OVER, this._r86aeec0df56c3c),
        this._window.removeEventListener(u.OUT, this._r479c354def12d1),
        this.removeUnseenCounter(),
        this.clearBitmap(),
        this._window.dispose(),
        (this._window = null)),
      (this._entry = null),
      (this.var_2669 = null),
      (this.var_1310 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  refreshBitmap() {
    this.clearBitmap();
    let e = Dr.getPreviewBitmap(this._entry.habbiconId, !1);
    if (e == null) {
      ((this.bitmap.bitmap = new A(40, 40, !0, 0)),
        (this.bitmap.visible = !0),
        this.bitmap.invalidate(),
        this.var_1767 ||
          (Dr.addEventListener(Dr.ASSETS_LOADED, this._ra6bbc57bd6f724), (this.var_1767 = !0)));
      return;
    }
    ((this.bitmap.bitmap = e.clone()), (this.bitmap.visible = !0), this.bitmap.invalidate());
  }
  addUnseenCounter(e, r) {
    if (e == null || r == null || !r(this._entry.habbiconId)) return;
    this._r52326ad028e633 = e.createUnseenItemCounter();
    let t = this._r52326ad028e633.findChildByName(class_4005.VALUE_ELEMENT_NAME);
    (t != null && (t.caption = "1"),
      (this._r52326ad028e633.x = this._window.width - this._r52326ad028e633.width - 1),
      (this._r52326ad028e633.y = 1),
      this._window.addChild(this._r52326ad028e633));
  }
  removeUnseenCounter() {
    this._r52326ad028e633 != null &&
      (this._r52326ad028e633.parent != null &&
        this._r52326ad028e633.parent.removeChild(this._r52326ad028e633),
      this._r52326ad028e633.dispose(),
      (this._r52326ad028e633 = null));
  }
  _ra6bbc57bd6f724 = n((e) => {
    (Dr.removeEventListener(Dr.ASSETS_LOADED, this._ra6bbc57bd6f724),
      (this.var_1767 = !1),
      this._disposed || this.refreshBitmap());
  }, "_ra6bbc57bd6f724");
  _rd74da87157b7a9 = n((e) => {
    this.var_2669?.(this._entry.habbiconId, e.shiftKey);
  }, "_rd74da87157b7a9");
  _r86aeec0df56c3c = n((e) => {
    this.background.color = a.SLOT_FILLED_HOVER_COLOR;
  }, "_r86aeec0df56c3c");
  _r479c354def12d1 = n((e) => {
    this.background.color = a.SLOT_FILLED_COLOR;
  }, "_r479c354def12d1");
  addWheelListener(e) {
    e == null ||
      this.var_1310 == null ||
      (e.addEventListener(u.const_974, this.var_1310),
      e.addEventListener(u.WHEEL_HORIZONTAL, this.var_1310));
  }
  removeWheelListener(e) {
    e == null ||
      this.var_1310 == null ||
      (e.removeEventListener(u.const_974, this.var_1310),
      e.removeEventListener(u.WHEEL_HORIZONTAL, this.var_1310));
  }
  clearBitmap() {
    this.bitmap != null &&
      this.bitmap.bitmap != null &&
      (this.bitmap.bitmap.dispose(), (this.bitmap.bitmap = null));
  }
  get bitmap() {
    return this._window.findChildByName("habbicon_icon");
  }
  get background() {
    return this._window.findChildByName("habbicon_item_bg");
  }
}
