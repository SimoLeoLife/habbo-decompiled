// Estratto da HabboAirLauncher.deobf.js, riga 352316.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/FooterPreset.as
// Nome offuscato: _i10ea0408e12f2a

class extends WiredUIPreset {
  static {
    n(this, "FooterPreset");
  }
  _container;
  _splitter;
  var_34;
  var_533;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._container = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this._splitter = this.var_102._ra6e545ffa959b0()),
      (this.var_533 = this.var_102.createButton(this.loc("wiredfurni.ready"), e)));
    let t = this.var_102.createButton(this.loc("cancel"), r);
    ((this.var_34 = this.var_102.createButtonRow([this.var_533, t])),
      (this.var_34.window.x = this.var_40._r7e371558824804),
      (this._container.spacing = this.var_40.sectionSpacing),
      this._container.addListItem(this._splitter.window),
      this._container.addListItem(this.var_34.window));
  }
  set saveButtonDisabled(e) {
    this.var_533.disabled = e;
  }
  set _r594bb92813d0d5(e) {
    this.var_533 != null &&
      this.var_533.window != null &&
      (this.var_533.window.caption = e);
  }
  get window() {
    return this._container;
  }
  set splitterVisible(e) {
    this._splitter.visible = e;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._container.width = e),
      this._splitter.resizeToWidth(e),
      this.var_34.resizeToWidth(e - this.var_40._r7e371558824804 * 2));
  }
  get childPresets() {
    return [this._splitter, this.var_34];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this._splitter = null),
      (this.var_34 = null),
      (this.var_533 = null));
  }
}
