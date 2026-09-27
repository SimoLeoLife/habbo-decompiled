// Extracted from HabboAirLauncher.deobf.js, line 345185.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/AssetButtonRowPreset.as
// Obfuscated name: _i06f0d4500d7992

class extends WiredUIPreset {
  static {
    n(this, "AssetButtonRowPreset");
  }
  _container;
  var_122;
  var_34;
  _elements;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this.var_34 = []), (this._elements = []));
    for (let r of e) {
      let t = this.var_102._r1f621d8be6c92c(r.assetName, r.tooltip, r.onClick);
      if (
        (this.var_34.push(t),
        r.alignRight ? this._elements.push(t.alignRight()) : this._elements.push(t),
        r._r35df7227b5097e)
      ) {
        let i = t.window.height;
        if (i === 0)
          throw new Error("AssetButtonRowPreset requires button height to resolve splitter height");
        let s = new FX(this._roomEvents, this.var_102, this.var_40);
        (s._re7a03a855dfd32(i), this._elements.push(s));
      }
    }
    ((this.var_122 = this.var_102.createSimpleListView(!1, this._elements)),
      (this.var_122.spacing = this.var_40._r7ac8f2f1de8d9e),
      (this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      this._container.addChild(this.var_122.window));
  }
  get buttons() {
    return this.var_34;
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      this.var_122.resizeToWidth(e),
      (this._container.width = this.var_122.window.width),
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
      (this.var_34 = null),
      (this._elements = null));
  }
}
