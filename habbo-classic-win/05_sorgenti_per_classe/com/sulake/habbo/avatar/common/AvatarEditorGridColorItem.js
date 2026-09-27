// Estratto da HabboAirLauncher.deobf.js, riga 165579.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/AvatarEditorGridColorItem.as
// Nome offuscato: _i65f8fee4c0c35c

class a {
  static {
    n(this, "AvatarEditorGridColorItem");
  }
  static SELECTED_ASSET = "avatar_editor_editor_clr_13x21_3";
  static UNSELECTED_ASSET = "avatar_editor_editor_clr_13x21_1";
  static COLORIZATION_ASSET = "avatar_editor_editor_clr_13x21_2";
  var_38;
  _window;
  _rf01d8bdb27ba14;
  var_2619 = !1;
  _border;
  _isDisabledForWearing;
  constructor(e, r, t, i = !1) {
    ((this.var_38 = r),
      (this._window = e),
      (this._rf01d8bdb27ba14 = t),
      (this._isDisabledForWearing = i),
      (this._border = this._window.findChildByTag("BORDER")),
      this.setupColor(),
      this.updateThumbData(),
      this._window.addEventListener?.(u.OVER, this._rad325cc53260a0),
      this._window.addEventListener?.(u.OUT, this.onMousetOut));
  }
  dispose() {
    ((this.var_38 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._rf01d8bdb27ba14 = null),
      (this._border = null));
  }
  get view() {
    return this._window;
  }
  get isSelected() {
    return this.var_2619;
  }
  set isSelected(e) {
    ((this.var_2619 = e),
      this._border != null &&
        (this._border.assetUri = this.var_2619 ? a.SELECTED_ASSET : a.UNSELECTED_ASSET));
  }
  get _r050571dc2ea50e() {
    return this._rf01d8bdb27ba14;
  }
  get _ra5c822ed8d6c34() {
    return this._isDisabledForWearing;
  }
  onMousetOut = n((e) => {
    this._border != null &&
      (this._border.assetUri = this.var_2619 ? a.SELECTED_ASSET : a.UNSELECTED_ASSET);
  }, "onMousetOut");
  _rad325cc53260a0 = n((e) => {
    this._border != null && (this._border.assetUri = a.SELECTED_ASSET);
  }, "_rad325cc53260a0");
  setupColor() {
    let r = this.var_38?.controller.manager.windowManager.assets.getAssetByName(
        a.COLORIZATION_ASSET,
      )?.content,
      t = this._window?.findChildByTag("COLOR_IMAGE");
    if (r == null || t == null || this._rf01d8bdb27ba14 == null) return;
    let i = this._rf01d8bdb27ba14.colorTransform;
    if (i == null) return;
    let s = r.clone();
    ((t.bitmap = new A(s.width, s.height, !0, 0)),
      s.colorTransform(s.rect, i),
      t.bitmap.copyPixels(s, s.rect, new E(0, 0)),
      s.dispose());
  }
  updateThumbData() {
    if (this._window == null || this._window.disposed) return;
    this._border != null && (this._border.assetUri = a.SELECTED_ASSET);
    let e = this._window.findChildByTag("CLUB_ICON");
    e != null && (e.visible = (this._rf01d8bdb27ba14?.clubLevel ?? 0) > 0);
  }
}
