// Extracted from HabboAirLauncher.deobf.js, line 357006.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_monitor/WiredErrorInfoView.as
// Obfuscated name: _ib12f3521ec35e9

class {
  constructor(e) {
    this.var_63 = e;
    ((this._window = this.var_63.windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("error_info_view_xml").content,
      1,
    )),
      this.closeButton.addEventListener(u.CLICK, this.onWindowClose));
  }
  static {
    n(this, "WiredErrorInfoView");
  }
  _disposed = !1;
  _window;
  get disposed() {
    return this._disposed;
  }
  initialize(e) {
    ((this.errorName.text = e.errorName),
      (this.typeIcon.assetUri = `icon_wired_${e.category.toLowerCase()}_png`),
      (this.errorText.text = this.var_63.localizationManager.getLocalization(
        `wiredmenu.error_info.${e._rb51a2ad9d52a4d}`,
      )),
      (this._window.height = this.contentsContainer.height + 48));
  }
  show() {
    if (
      ((this._window.x = Math.max(this._window.x, 0)),
      (this._window.y = Math.max(this._window.y, 0)),
      this._window != null && this._window.parent == null)
    ) {
      let e = this.var_63.windowManager.getDesktop(1);
      e?.addChild(this._window);
    }
    this._window.activate();
  }
  dispose() {
    this._disposed ||
      (this.hide(),
      this._window?.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this._disposed = !0));
  }
  hide() {
    if (this._window != null && this._window.parent != null) {
      let e = this.var_63.windowManager.getDesktop(1);
      e?.removeChild(this._window);
    }
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get errorName() {
    return this._window.findChildByName("error_name");
  }
  get errorText() {
    return this._window.findChildByName("error_text");
  }
  get contentsContainer() {
    return this._window.findChildByName("contents");
  }
  get typeIcon() {
    return this._window.findChildByName("type_icon");
  }
}
