// Estratto da HabboAirLauncher.deobf.js, riga 355570.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/WiredMenuDefaultTab.as
// Nome offuscato: _i3e178b17bdb928

class {
  constructor(e, r) {
    this.var_63 = e;
    this._container = r;
    let t = this;
    typeof t.update == "function" && this.var_63?.context.registerUpdateReceiver(t, 1);
  }
  static {
    n(this, "WiredMenuDefaultTab");
  }
  var_1271 = !1;
  _messageEvents = [];
  _isActive = !1;
  var_974 = !1;
  _isLoading = !1;
  get disposed() {
    return this.var_1271;
  }
  get controller() {
    return this.var_63;
  }
  get container() {
    return this._container;
  }
  get isActive() {
    return this._isActive;
  }
  get _r71998b0210f450() {
    return this.var_974;
  }
  get _rb1888e9019ee7c() {
    return this._isLoading;
  }
  get localization() {
    return this.var_63.localizationManager;
  }
  loc(e) {
    return this.localization.getLocalization(e, "");
  }
  _rb20ed4d7a429d1() {
    this._isActive = !0;
  }
  setTabInactive() {
    this._isActive = !1;
  }
  _r327228a1fe703e() {
    this.var_974 = !0;
  }
  _r08363b6c12c5ad() {
    ((this.var_974 = !1),
      this._isLoading &&
        this.var_63?.view.loadingContainer &&
        (this.var_63.view.loadingContainer.visible = !1));
  }
  _r7730f6cdc2e2b0() {}
  dispose() {
    if (this.var_1271) return;
    this.removeMessageEvents();
    let e = this;
    (typeof e.update == "function" && this.var_63?.context.removeUpdateReceiver(e),
      (this._container = null),
      (this.var_63 = null),
      (this._isActive = !1),
      (this.var_974 = !1),
      (this._isLoading = !1),
      (this.var_1271 = !0));
  }
  updateLoadingState() {
    let e = this.isDataReady();
    (this._isLoading && e && this.initializeInterface(), (this._isLoading = !e));
    let r = this.var_63.view.loadingContainer;
    this.var_974 &&
      r.visible !== this._isLoading &&
      ((r.visible = this._isLoading),
      (this.var_63.view.window.caption = this.var_63.localizationManager.getLocalization(
        this._isLoading ? "wiredmenu.title.loading" : "wiredmenu.title",
      )));
  }
  isDataReady() {
    return !0;
  }
  initializeInterface() {}
  addMessageEvent(e) {
    (this._messageEvents.push(e), this.var_63.addMessageEvent(e));
  }
  removeMessageEvents() {
    if (this._messageEvents != null) {
      for (let e of this._messageEvents) (this.var_63?.removeMessageEvent(e), e.dispose());
      this._messageEvents = null;
    }
  }
}
