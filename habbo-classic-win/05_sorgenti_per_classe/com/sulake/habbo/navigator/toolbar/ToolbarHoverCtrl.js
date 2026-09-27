// Extracted from HabboAirLauncher.deobf.js, line 258439.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/toolbar/ToolbarHoverCtrl.as
// Obfuscated name: _i2623d462349c2d

class a {
  constructor(e) {
    this._navigator = e;
    ((this._window = this._navigator?.getXmlWindow("toolbar_hover")),
      (this.var_122 = this._window?.findChildByName(a.ITEM_LIST)),
      (this._simpleItemBase = this.var_122?.getListItemByTag(a.SIMPLE_ITEM_TAG)),
      this.var_122 != null &&
        this._simpleItemBase != null &&
        this.var_122.removeListItem(this._simpleItemBase),
      this._window?.addEventListener(u.OVER, this._r6e609f920dda0f),
      this._window?.addEventListener(u.HOVERING, this._r6e609f920dda0f),
      this._window?.addEventListener(u.OUT, this.onHoverOutWindow),
      this.addSimpleItem("navigator", "${navigator.title}", this.onNavigatorClick),
      this.addSimpleItem("home", "${toolbar.icon.label.exitroom.home}", this.onHomeClick),
      this.addSimpleItem("favorites", "${navigator.navisel.myfavourites}", this.onFavouritesClick),
      this.addSimpleItem("create", "${navigator.createroom.create}", this.onCreateRoomClick),
      this.addSimpleItem("history", "${navigator.navisel.visitedrooms}", this.onHistoryClick),
      this.addSimpleItem("frequent", "${navigator.navisel.frequentvisits}", this.onFrequentHistoryClick));
  }
  static {
    n(this, "ToolbarHoverCtrl");
  }
  static ITEM_BG_COLOR_OVER = 7433577;
  static ITEM_BG_COLOR_OUT = 5723213;
  static ITEM_LIST = "item_list";
  static SIMPLE_ITEM_TAG = "SIMPLE_ITEM";
  _disposed = !1;
  _window;
  var_122;
  _simpleItemBase;
  _r47808c1711e81e = null;
  var_845 = !1;
  dispose() {
    ((this._disposed = !0),
      this._r47808c1711e81e?.reset(),
      (this._r47808c1711e81e = null),
      (this._navigator = null));
  }
  show(e) {
    (this.stopHideTimeout(),
      this._window != null &&
        ((this._window.visible = !0), (this._window.position = e)));
  }
  hideDelayed() {
    this._disposed || this.var_845 || this._r885e4ddc9d00ff();
  }
  _re0d292f8d798ae() {
    this._disposed ||
      (this.stopHideTimeout(),
      (this.var_845 = !1),
      this._window != null && (this._window.visible = !1));
  }
  hide() {
    this._disposed ||
      this.var_845 ||
      (this.stopHideTimeout(),
      (this.var_845 = !1),
      this._window != null && (this._window.visible = !1));
  }
  addSimpleItem(e, r, t) {
    if (this.var_122 == null || this._simpleItemBase == null) return;
    let i = this._simpleItemBase.clone();
    i.name = e;
    let s = i.getChildByName("text");
    (s != null && (s.text = r),
      i.addEventListener(u.CLICK, t),
      i.addEventListener(u.OVER, this._r7e7a92912d1789),
      i.addEventListener(u.OUT, this._r7e7a92912d1789),
      this.var_122.addListItem(i));
  }
  _r885e4ddc9d00ff() {
    if (this._r47808c1711e81e == null) {
      ((this._r47808c1711e81e = new UnkEventDispatcherWrapperSubclass_05394e(500, 1)),
        this._r47808c1711e81e.addEventListener(DeBouncer._rf33144eac61595, this._red3043a24f00c2),
        this._r47808c1711e81e.start());
      return;
    }
    (this._r47808c1711e81e.reset(), this._r47808c1711e81e.start());
  }
  stopHideTimeout() {
    this._r47808c1711e81e?.running && this._r47808c1711e81e.reset();
  }
  onNavigatorClick = n(() => {
    (this._navigator?._r52fa4af48d31b1(),
      this._navigator?._r38c44cbd7deb08(),
      this._re0d292f8d798ae());
  }, "onNavigatorClick");
  onHomeClick = n(() => {
    let e = this._navigator?.data._r3dfd89b26af6cd ?? -1;
    e > -1 && (this._navigator?._r32d169e0ccf735(e), this._re0d292f8d798ae());
  }, "onHomeClick");
  onFavouritesClick = n(() => {
    (this._navigator?.showFavouriteRooms(), this._re0d292f8d798ae());
  }, "onFavouritesClick");
  onCreateRoomClick = n(() => {
    (this._navigator?.send(new UnkMessageComposer_0args_2d3a5a()), this._re0d292f8d798ae());
  }, "onCreateRoomClick");
  onHistoryClick = n(() => {
    (this._navigator?.showHistoryRooms(), this._re0d292f8d798ae());
  }, "onHistoryClick");
  onFrequentHistoryClick = n(() => {
    (this._navigator?.showFrequentRooms(), this._re0d292f8d798ae());
  }, "onFrequentHistoryClick");
  _red3043a24f00c2 = n((e) => {
    this.hide();
  }, "_red3043a24f00c2");
  _r7e7a92912d1789 = n((...e) => {
    let r = e[0],
      i = r.target?.findChildByName("background");
    if (i != null) {
      let s = r.type === u.OVER;
      ((i.color = s ? a.ITEM_BG_COLOR_OVER : a.ITEM_BG_COLOR_OUT), this.onHoverOutWindow(r));
    }
  }, "_r7e7a92912d1789");
  _r6e609f920dda0f = n(() => {
    this.var_845 = !0;
  }, "_r6e609f920dda0f");
  onHoverOutWindow = n((...e) => {
    let r = e[0];
    if (this._window?.hitTestGlobalPoint(new E(r.stageX, r.stageY))) {
      this.var_845 = !0;
      return;
    }
    ((this.var_845 = !1), this.hideDelayed());
  }, "onHoverOutWindow");
}
