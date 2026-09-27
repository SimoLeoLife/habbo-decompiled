// Estratto da HabboAirLauncher.deobf.js, riga 349567.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/combinations/NamedNumberInputPreset.as
// Nome offuscato: _ib8fdbd8e5c0184

class extends WiredUIPreset {
  static {
    n(this, "NamedNumberInputPreset");
  }
  _container;
  var_179;
  _rfaa7395d52e184;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = !1) {
    ((this._container = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this.var_179 = this.var_102.createText(r, new Se(Se.MODE_STRETCH, t))),
      (this.var_179.window.y = this.var_40._re1a23e452323b1),
      (this._rfaa7395d52e184 = this.var_102.createNumberInput(e)),
      (this.var_179.window.y = this.var_40._r67711c14f11b19),
      (this._container.spacing = this.var_40._r7ac8f2f1de8d9e),
      this._container.addListItem(this.var_179.window),
      this._container.addListItem(this._rfaa7395d52e184.window),
      (this._container.height = Math.max(
        this.var_179.window.height,
        this._rfaa7395d52e184.window.height,
      )));
  }
  get value() {
    return this._rfaa7395d52e184.value;
  }
  set value(e) {
    this._rfaa7395d52e184.value = e;
  }
  reset() {
    this._rfaa7395d52e184.reset();
  }
  set _r53e08e0209a3cd(e) {
    this._rfaa7395d52e184._r53e08e0209a3cd = e;
  }
  get _r0ef2c5ada42fb0() {
    return this.var_179.width;
  }
  set _r0ef2c5ada42fb0(e) {
    ((this.var_179.width = e), this._container.arrangeListItems());
  }
  hasStaticWidth() {
    return this._rfaa7395d52e184.hasStaticWidth();
  }
  get staticWidth() {
    if (this.hasStaticWidth()) return this._container.width;
    throw new Error("Named number input has no static width");
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      this.var_179.resizeToWidth(this.var_179.width),
      this._rfaa7395d52e184.resizeToWidth(e - this._rfaa7395d52e184.window.x));
  }
  get childPresets() {
    return [this.var_179, this._rfaa7395d52e184];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_179 = null),
      (this._rfaa7395d52e184 = null));
  }
}
