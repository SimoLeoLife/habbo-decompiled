// Extracted from HabboAirLauncher.deobf.js, line 358839.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/variables_management/detail/PermanentVariableHolderPreviewer.as
// Obfuscated name: _i572072dd32624b

class a {
  constructor(e, r) {
    this._container = e;
    this.var_63 = r;
    (this.clearPreviewer(), this.previewAvatarRegion.addEventListener(u.CLICK, this.onPreviewAvatarClicked));
  }
  static {
    n(this, "PermanentVariableHolderPreviewer");
  }
  _disposed = !1;
  _userId = -1;
  get disposed() {
    return this._disposed;
  }
  clearPreviewer() {
    ((this.previewAvatarWidget.visible = !1), (this.previewPetWidget.visible = !1));
  }
  _r20256ca8da1a8f(e) {
    (this.clearPreviewer(),
      (this.previewPetWidget.visible = !0),
      (this.previewPetWidget.widget.figure = e),
      a.centerContainer(this.previewPetWidget));
  }
  _r19cf6ecad22778(e, r = -1) {
    (this.clearPreviewer(),
      (this.previewAvatarWidget.visible = !0),
      (this.previewAvatarWidget.widget.figure = e),
      a.centerContainer(this.previewAvatarWidget),
      (this._userId = r),
      (this.previewAvatarRegion.visible = r !== -1));
  }
  imageReady(e, r) {}
  imageFailed(e) {}
  dispose() {
    this._disposed ||
      (this.previewAvatarRegion.removeEventListener(u.CLICK, this.onPreviewAvatarClicked),
      (this._userId = -1),
      (this._container = null),
      (this.var_63 = null),
      (this._disposed = !0));
  }
  static centerContainer(e) {
    ((e.x = e.parent.width / 2 - e.width / 2), (e.y = e.parent.height / 2 - e.height / 2));
  }
  onPreviewAvatarClicked = n((e) => {
    this.var_63?.send(new class_2134(this._userId, !0));
  }, "onPreviewAvatarClicked");
  get previewAvatarWidget() {
    return this._container.findChildByName("avatar_preview");
  }
  get previewAvatarRegion() {
    return this._container.findChildByName("avatar_preview_region");
  }
  get previewPetWidget() {
    return this._container.findChildByName("pet_preview");
  }
}
