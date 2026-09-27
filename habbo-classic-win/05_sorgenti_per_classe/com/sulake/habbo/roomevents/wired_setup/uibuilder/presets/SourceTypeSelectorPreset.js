// Extracted from HabboAirLauncher.deobf.js, line 347409.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/SourceTypeSelectorPreset.as
// Obfuscated name: _ie6c60bbbdb860c

class extends WiredUIPreset {
  static {
    n(this, "SourceTypeSelectorPreset");
  }
  _window;
  _picker;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._window = this.var_40.createSourceTypeSelector()),
      this._window.tags.indexOf("NEW") !== -1
        ? (this._picker = new NewSourceTypePicker(this._roomEvents, this._window, e.listener))
        : (this._picker = new SourceTypePicker(this._roomEvents, this._window, e.listener)),
      this._picker.initialize(e.ids, e.currentSelection));
  }
  select(e) {
    this._picker.select(e);
  }
  reinit(e, r) {
    this._picker.initialize(e, r);
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._window.width;
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._window.dispose(),
      (this._window = null),
      this._picker.dispose(),
      (this._picker = null));
  }
}
