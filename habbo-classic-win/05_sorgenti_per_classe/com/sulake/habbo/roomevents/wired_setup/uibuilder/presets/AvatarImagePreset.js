// Extracted from HabboAirLauncher.deobf.js, line 345242.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/AvatarImagePreset.as
// Obfuscated name: _icd39345c711f38

class extends WiredUIPreset {
  static {
    n(this, "AvatarImagePreset");
  }
  _container;
  _avatarWidget = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    this._container = this.var_102._rd65848eed931f7("avatar_image_view");
    let e = this._container.findChildByName("avatar_image");
    e != null && (this._avatarWidget = e.widget);
  }
  set figure(e) {
    this._avatarWidget != null && (this._avatarWidget.figure = e);
  }
  get figure() {
    return this._avatarWidget == null ? "" : this._avatarWidget.figure;
  }
  get window() {
    return this._container;
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this._avatarWidget = null));
  }
}
