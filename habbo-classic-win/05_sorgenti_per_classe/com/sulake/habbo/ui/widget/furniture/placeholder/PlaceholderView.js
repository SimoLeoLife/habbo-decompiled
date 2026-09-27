// Estratto da HabboAirLauncher.deobf.js, riga 318292.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/placeholder/PlaceholderView.as
// Nome offuscato: _ib5ef6ab1488e70

class {
  constructor(e, r) {
    this.var_997 = e;
    this._windowManager = r;
  }
  static {
    n(this, "PlaceholderView");
  }
  _window = null;
  dispose() {
    (this._window?.dispose(), (this._window = null));
  }
  _r383c01d7789bff() {
    this._window != null && this._window.visible
      ? this.hide()
      : this.showWindow();
  }
  showWindow() {
    (this._window == null && this.createWindow(),
      this._window != null &&
        ((this._window.visible = !0), (this._window.x = 200)));
  }
  hide() {
    this._window != null && (this._window.visible = !1);
  }
  createWindow() {
    let e =
      this.var_997?.getAssetByName("placeholder_xml") ??
      this.var_997?.getAssetByName("placeholder");
    if (
      e?.content == null ||
      this._windowManager == null ||
      ((this._window = this._windowManager.createWindow(
        "habbohelp_window",
        "",
        HabboWindowType.CONTAINER,
        HabboWindowStyle.NULL,
        class_2094._r4884ed3c10147b | class_2094._r26338c8d88c4e5,
        new D(-300, 300, 10, 10),
        null,
      )),
      this._window == null)
    )
      return;
    (this._window.buildFromXML(e.content),
      this._window.tags.push("habbo_help_window"),
      (this._window.background = !0),
      (this._window.color = 33554431));
    let r = this._window.findChildByTag("close");
    r != null && (r.procedure = this.onWindowClose);
  }
  onWindowClose = n((e, r) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
}
