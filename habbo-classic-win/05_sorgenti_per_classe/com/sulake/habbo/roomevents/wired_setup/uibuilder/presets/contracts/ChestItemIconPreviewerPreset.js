// Estratto da HabboAirLauncher.deobf.js, riga 349912.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/contracts/ChestItemIconPreviewerPreset.as
// Nome offuscato: _iee639c9c9b110a

class extends WiredUIPreset {
  static {
    n(this, "ChestItemIconPreviewerPreset");
  }
  _window;
  var_183 = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    ((this._window = this.var_40.createProductIconPreviewer()),
      (this.widgetWindow.widget.unknownImageUri = ""));
  }
  set item(e) {
    this.var_183 = e;
    let r = null;
    (e != null && (r = new _i27028f939050ee(e)), (this.widgetWindow.widget.productInfo = r));
  }
  get item() {
    return this.var_183;
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._window.width;
  }
  dispose() {
    this.disposed || (super.dispose(), this._window.dispose(), (this._window = null));
  }
  get widgetWindow() {
    return this._window.findChildByName("icon_preview");
  }
}
