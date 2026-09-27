// Extracted from HabboAirLauncher.deobf.js, line 355276.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/AbstractUbuntuWiredUI.as
// Obfuscated name: _ie2256911de4c76

class {
  static {
    n(this, "AbstractUbuntuWiredUI");
  }
  var_412 = null;
  var_1486;
  _roomEvents;
  var_102;
  _disposed = !1;
  _r3246bbffdeec2c = !1;
  constructor(e, r) {
    ((this._roomEvents = e),
      (this.var_102 = r),
      (this.var_1486 = this.createFooterPreset()));
  }
  createFooterPreset() {
    return this.wiredCtrl.createFooterPreset(
      () => this._rf7f875b488f891(),
      () => this._rf4d9b06810c6a7(),
    );
  }
  get _r43e1962e8d351e() {
    return this.var_1486;
  }
  _rf7f875b488f891 = n(() => {}, "_rf7f875b488f891");
  _rf4d9b06810c6a7 = n(() => {
    this.hide();
  }, "_rf4d9b06810c6a7");
  isShowing() {
    return (
      this.var_412 != null &&
      this.var_412.window.parent != null &&
      this.var_412.window.visible
    );
  }
  get _r32af89215a7dfa() {
    return 0;
  }
  showFrame() {
    if (!this.isShowing()) {
      let e = this._roomEvents.windowManager.getDesktop(1);
      (e?.addChild(this.var_412.window),
        (!this._r7ca22be67cc55c || !this._r3246bbffdeec2c) &&
          (this.var_412.window.center(),
          (this.var_412.window.x += this._r32af89215a7dfa),
          (this._r3246bbffdeec2c = !0)));
    }
    this.var_412.window.activate();
  }
  get window() {
    return this.var_412.window;
  }
  _r1edc5ca8baf0a7() {
    this._r3246bbffdeec2c = !1;
  }
  get _r7ca22be67cc55c() {
    return !1;
  }
  get isBoundToParentRect() {
    return !1;
  }
  hide() {
    this.hideFrame();
  }
  hideFrame() {
    if (this.isShowing()) {
      let e = this._roomEvents.windowManager.getDesktop(1);
      e?.removeChild(this.var_412.window);
    }
  }
  set framePreset(e) {
    ((this.var_412 = e), this.isBoundToParentRect && e.window.setParamFlag(N.const_1323, !0));
  }
  get framePreset() {
    return this.var_412;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get localization() {
    return this._roomEvents.localization;
  }
  get wiredCtrl() {
    return this.var_102;
  }
  dispose() {
    this._disposed ||
      (this.var_412.dispose(),
      (this.var_412 = null),
      (this.var_1486 = null),
      (this._roomEvents = null),
      (this.var_102 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
}
