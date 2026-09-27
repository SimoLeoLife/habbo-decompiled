// Estratto da HabboAirLauncher.deobf.js, riga 314887.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/effectbox/EffectBoxOpenDialogView.as
// Nome offuscato: _ic9464bc2f1f10b

class a {
  constructor(e) {
    this.var_17 = e;
    ((this._windowManager = e?.windowManager ?? null), (this._assets = e?.assets ?? null));
  }
  static {
    n(this, "EffectBoxOpenDialogView");
  }
  static const_181 = "header_button_close";
  static const_257 = "cancel";
  static const_300 = "ok";
  _window = null;
  _disposed = !1;
  var_2971 = 0;
  _windowManager;
  _assets;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this.disposed ||
      ((this._disposed = !0),
      this._window?.dispose(),
      (this._window = null),
      (this._assets = null),
      (this._windowManager = null),
      (this.var_17 = null));
  }
  open(e) {
    ((this.var_2971 = e),
      this.setWindowContent(),
      this._window != null && (this._window.visible = !0));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  setWindowContent() {
    if (this._window != null || this._windowManager == null || this._assets == null) return;
    let e = this._assets.getAssetByName("effectbox_xml")?.content;
    e != null &&
      ((this._window = this._windowManager.buildFromXML(e)),
      this.addClickListener(a.const_300),
      this.addClickListener(a.const_257),
      this.addClickListener(a.const_181),
      this._window?.center());
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  onMouseClick = n((e) => {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_257:
        this.close();
        break;
      case a.const_300:
        (this.connection?.send(new class_3808(this.var_2971)), this.close());
        break;
    }
  }, "onMouseClick");
  get connection() {
    return this.var_17?.handler.container?.connection ?? null;
  }
}
