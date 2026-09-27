// Extracted from HabboAirLauncher.deobf.js, line 163735.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/wardrobe/Outfit.as

class a {
  static {
    n(this, "Outfit");
  }
  var_63;
  var_1129;
  var_106;
  _view;
  var_1271 = !1;
  constructor(e, r, t) {
    ((this.var_63 = e),
      (this._view = new OutfitView(e.manager.windowManager, e.manager.assets, r !== "")),
      (this.var_1129 = r),
      (this.var_106 = a._r0b60d22378f14e(t)),
      this.update());
  }
  dispose() {
    (this._view?.dispose(),
      (this._view = null),
      (this.var_63 = null),
      (this.var_1129 = ""),
      (this.var_106 = Ra.MALE),
      (this.var_1271 = !0));
  }
  get disposed() {
    return this.var_1271;
  }
  update() {
    let e = this.var_63;
    if (e == null) return;
    let r = e.manager.getBoolean("zoom.enabled"),
      t = e.manager._rf0eb5f07c94cfb._r274f6640e76241(
        this.figure,
        r ? fr.LARGE : fr.SMALL,
        this.var_106,
        this,
      );
    if (t == null) return;
    t.setDirection(class_2123.const_252, FigureDataView.PREVIEW_AVATAR_DIRECTION);
    let i = t._rb09602dca8db26(class_2123.const_252, !0, r ? 0.5 : 1);
    (i != null && (this._view?.update(i), i.dispose()), t.dispose());
  }
  avatarImageReady(e) {
    this.update();
  }
  get figure() {
    return this.var_1129;
  }
  get gender() {
    return this.var_106;
  }
  get view() {
    if (this._view == null) throw new Error("Outfit view is not available.");
    return this._view;
  }
  static _r0b60d22378f14e(e) {
    switch (e) {
      case Ra.MALE:
      case "m":
      case "M":
        return Ra.MALE;
      case Ra.const_140:
      case "f":
      case "F":
        return Ra.const_140;
      default:
        return e;
    }
  }
}
