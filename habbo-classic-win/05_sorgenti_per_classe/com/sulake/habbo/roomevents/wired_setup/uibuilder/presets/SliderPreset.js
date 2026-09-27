// Extracted from HabboAirLauncher.deobf.js, line 349376.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/SliderPreset.as
// Obfuscated name: _i06979cb8998f90

class extends WiredUIPreset {
  static {
    n(this, "SliderPreset");
  }
  _container;
  var_295;
  var_1324;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e = 0, r = 1, t = 0) {
    this._container = this.var_102._rd65848eed931f7("container_view");
    let i = this.var_40.createSlider();
    ((this.var_1324 = new UnkClass_078926(i, e, r, t)),
      (this.var_295 = this.var_102.createSimpleListView(
        !1,
        [
          this.var_102._rd2781d694b92e9(
            "left",
            this.var_1324._r8e05f27c2c9bd0.bind(this.var_1324),
          ),
          this._r6c23cd2885b2e2(i),
          this.var_102._rd2781d694b92e9(
            "right",
            this.var_1324._rb0ea2efae16945.bind(this.var_1324),
          ),
        ],
        !0,
      )),
      (this.var_295.spacing = this.var_40._r5996c272a01c79),
      this._container.addChild(this.var_295.window),
      (this.var_295.window.x = this.var_40._ra3ba1f0505ab21),
      (this.var_295.window.y = this.var_40._re06eb3065bb85c));
  }
  set value(e) {
    this.var_1324.setValue(e);
  }
  get value() {
    return this.var_1324.getValue();
  }
  addEventListener(e, r) {
    this.var_1324.addEventListener(e, r);
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._container.width = e),
      this.var_295.resizeToWidth(e - this.var_40._ra3ba1f0505ab21 * 2),
      (this._container.height =
        this.var_295.window.height + 2 * this.var_40._re06eb3065bb85c));
  }
  get childPresets() {
    return [this.var_295];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_295 = null),
      this.var_1324.dispose(),
      (this.var_1324 = null));
  }
}
