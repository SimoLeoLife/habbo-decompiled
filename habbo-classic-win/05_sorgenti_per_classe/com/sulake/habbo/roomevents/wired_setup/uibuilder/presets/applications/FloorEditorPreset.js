// Extracted from HabboAirLauncher.deobf.js, line 352092.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/applications/FloorEditorPreset.as
// Obfuscated name: _iea880e61f5b3bb

class extends WiredUIPreset {
  static {
    n(this, "FloorEditorPreset");
  }
  _container;
  var_122;
  var_3449;
  var_3607;
  var_3870;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this.var_3449 = e), (this.var_3607 = r));
    let t = this.var_102._rd65848eed931f7("border_view");
    ((t.color = this.var_40._r60aa9c8a95196d),
      (this.var_3870 = this.var_102._rf9d5676b014871(this.var_3607, 5, t)),
      (this.var_122 = this.var_102.createSimpleListView(!0, [
        this.var_3449,
        this.var_3870,
      ])),
      (this.var_122.spacing = this.var_40._r249f7dc0054eba),
      (this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      this._container.addChild(this.var_122.window));
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      this.var_122.resizeToWidth(e),
      (this._container.width = e),
      (this._container.height = this.var_122.window.height));
  }
  get childPresets() {
    return [this.var_122];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_122 = null),
      (this.var_3449 = null),
      (this.var_3607 = null),
      (this.var_3870 = null));
  }
}
