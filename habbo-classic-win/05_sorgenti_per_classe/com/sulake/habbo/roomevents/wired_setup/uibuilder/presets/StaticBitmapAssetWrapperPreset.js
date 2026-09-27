// Extracted from HabboAirLauncher.deobf.js, line 347767.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/StaticBitmapAssetWrapperPreset.as
// Obfuscated name: _i92cb7f62bc594c

class extends WiredUIPreset {
  static {
    n(this, "StaticBitmapAssetWrapperPreset");
  }
  _container;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._container = this.var_102._rd65848eed931f7("static_bitmap_view")),
      (this._container.assetUri = e));
  }
  get window() {
    return this._container;
  }
  get assetUri() {
    return this._container.assetUri;
  }
  set assetUri(e) {
    this._container.assetUri = e;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  dispose() {
    this.disposed || (super.dispose(), this._container.dispose(), (this._container = null));
  }
}
