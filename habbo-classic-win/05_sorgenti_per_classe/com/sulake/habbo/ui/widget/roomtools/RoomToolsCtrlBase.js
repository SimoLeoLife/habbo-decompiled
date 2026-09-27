// Estratto da HabboAirLauncher.deobf.js, riga 325692.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomToolsCtrlBase.as
// Nome offuscato: _i3027ee33afa33e

class {
  static {
    n(this, "RoomToolsCtrlBase");
  }
  static DISTANCE_FROM_BOTTOM = 55;
  static TOOLBAR_X = -5;
  static const_1320 = 100;
  _window = null;
  var_17;
  _windowManager;
  _assets;
  var_223 = !0;
  _r7aed409c8fbfce = null;
  _rd22a694858e4d1 = !1;
  _rd14b855fd9ebb8;
  constructor(e, r, t) {
    ((this.var_17 = e),
      (this._windowManager = r),
      (this._assets = t),
      (this._rd14b855fd9ebb8 =
        this.handler?.containerRef?.config?.getInteger("room.enter.info.collapse.delay", 5e3) ?? 5e3));
  }
  dispose() {
    (this._window != null &&
      ((this._window.procedure = null),
      this._window.dispose(),
      (this._window = null)),
      this._r7aed409c8fbfce?.reset(),
      (this._r7aed409c8fbfce = null),
      (this._rd22a694858e4d1 = !1),
      (this.var_17 = null));
  }
  setElementVisible(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.visible = r);
  }
  setCollapsed(e) {}
  get isCollapsed() {
    return this.var_223;
  }
  get window() {
    return this._window;
  }
  get handler() {
    return this.var_17?.handler ?? null;
  }
  set visible(e) {
    this._window != null && (this._window.visible = e);
  }
  _r85ef1af7aa9b4b() {
    (this._r61a7436ffcef19(),
      (this._r7aed409c8fbfce = new _i05394ecc0c0c4d(this._rd14b855fd9ebb8, 1)),
      this._r7aed409c8fbfce.addEventListener(DeBouncer.addEventListener, this._r37d18607e42a0d),
      this._r7aed409c8fbfce.start());
  }
  _r999d9c31dd995e() {
    this._rd22a694858e4d1 && this._r85ef1af7aa9b4b();
  }
  _r61a7436ffcef19() {
    (this._r7aed409c8fbfce?.reset(), (this._r7aed409c8fbfce = null), (this._rd22a694858e4d1 = !1));
  }
  _r6f672a0f6ac3b6() {
    this._r7aed409c8fbfce != null && (this._r61a7436ffcef19(), (this._rd22a694858e4d1 = !0));
  }
  _r37d18607e42a0d = n((e) => {
    (this._r61a7436ffcef19(), this.setCollapsed(!0));
  }, "_r37d18607e42a0d");
}
