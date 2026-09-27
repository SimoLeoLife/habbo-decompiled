// Estratto da HabboAirLauncher.deobf.js, riga 349636.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/combinations/NamedTextInputPreset.as
// Nome offuscato: _i0cf8b438738ec0

class extends WiredUIPreset {
  static {
    n(this, "NamedTextInputPreset");
  }
  _container;
  var_179;
  _rf730b0a4a1550c;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = !1) {
    ((this._container = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this.var_179 = this.var_102.createText(r, new Se(Se.MODE_STRETCH, t))),
      (this.var_179.window.y = this.var_40._re1a23e452323b1),
      (this._rf730b0a4a1550c = this.var_102._r178edc7e663bd7(e)),
      (this.var_179.window.y = this.var_40._r67711c14f11b19),
      (this._container.spacing = this.var_40._r7ac8f2f1de8d9e),
      this._container.addListItem(this.var_179.window),
      this._container.addListItem(this._rf730b0a4a1550c.window),
      (this._container.height = Math.max(
        this.var_179.window.height,
        this._rf730b0a4a1550c.window.height,
      )));
  }
  get text() {
    return this._rf730b0a4a1550c.text;
  }
  set text(e) {
    this._rf730b0a4a1550c.text = e;
  }
  addEventListener(e, r) {
    this._rf730b0a4a1550c.addEventListener(e, r);
  }
  removeEventListener(e, r) {
    this._rf730b0a4a1550c.removeEventListener(e, r);
  }
  hasStaticWidth() {
    return this._rf730b0a4a1550c.hasStaticWidth();
  }
  get staticWidth() {
    if (this.hasStaticWidth()) return this._container.width;
    throw new Error("Text input has no static width");
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      this.var_179.resizeToWidth(this.var_179.width),
      this._rf730b0a4a1550c.resizeToWidth(e - this._rf730b0a4a1550c.window.x));
  }
  get childPresets() {
    return [this.var_179, this._rf730b0a4a1550c];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_179 = null),
      (this._rf730b0a4a1550c = null));
  }
}
