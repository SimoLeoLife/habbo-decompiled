// Extracted from HabboAirLauncher.deobf.js, line 164516.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/wardrobe/WardrobeSlot.as
// Obfuscated name: _i8fd91e4e86cace

class a {
  static {
    n(this, "WardrobeSlot");
  }
  var_63;
  var_1129 = null;
  var_106 = null;
  var_3915 = !1;
  _view = null;
  _rd2631d6b79ea4f = null;
  var_3882;
  var_1271 = !1;
  constructor(e, r, t, i, s = null, o = null) {
    ((this.var_63 = r), (this.var_3882 = t), this.createView(e), this.update(s, o, i));
  }
  dispose() {
    ((this.var_63 = null),
      (this.var_1129 = null),
      (this.var_106 = null),
      (this._rd2631d6b79ea4f = null),
      this._view?.dispose(),
      (this._view = null),
      (this.var_1271 = !0));
  }
  update(e, r, t) {
    (arguments.length === 3 &&
      ((this.var_1129 = e ?? null),
      (this.var_106 = a._r0b60d22378f14e(r ?? null)),
      (this.var_3915 = t ?? !1)),
      this.updateView());
  }
  updateView() {
    let e = this.var_63;
    if (e == null || this._rd2631d6b79ea4f == null) return;
    let r = null,
      t = !0,
      i = e.manager.getBoolean("zoom.enabled");
    if (this.var_1129 != null && this.var_3915) {
      let f = e.manager._rf0eb5f07c94cfb._r274f6640e76241(
        this.figure,
        i ? fr.LARGE : fr.SMALL,
        this.gender,
        this,
      );
      f != null &&
        (f.setDirection(class_2123.const_252, FigureDataView.PREVIEW_AVATAR_DIRECTION),
        (r = f._rb2bd48e3b4d265(class_2123.const_252, i ? 0.5 : 1)),
        f.dispose());
    } else {
      let f = e.manager.windowManager.assets.getAssetByName("avatar_editor_wardrobe_empty_slot");
      f?.content instanceof A && ((r = f.content), (t = !1));
    }
    if (r == null) return;
    (this._rd2631d6b79ea4f.bitmap?.dispose(),
      (this._rd2631d6b79ea4f.bitmap = new A(
        this._rd2631d6b79ea4f.width,
        this._rd2631d6b79ea4f.height,
        !0,
        0,
      )));
    let s = Math.floor((this._rd2631d6b79ea4f.width - r.width) / 2),
      o = Math.floor((this._rd2631d6b79ea4f.height - r.height) / 2);
    (this._rd2631d6b79ea4f.bitmap.draw(r, new Pe(1, 0, 0, 1, s, o)), t && r.dispose());
    let d = this._view?.findChildByName("set_button");
    d != null && (d.visible = this.var_3915);
    let c = this._view?.findChildByName("get_button");
    c != null && (c.visible = this.var_3915 && this.var_1129 != null);
  }
  avatarImageReady(e) {
    this.updateView();
  }
  get id() {
    return this.var_3882;
  }
  get disposed() {
    return this.var_1271;
  }
  get figure() {
    return this.var_1129 ?? "";
  }
  get gender() {
    return this.var_106 ?? Ra.MALE;
  }
  get view() {
    if (this._view == null) throw new Error("Wardrobe slot view is not available.");
    return this._view;
  }
  createView(e) {
    ((this._view = e.clone()),
      (this._view.procedure = this.eventHandler),
      (this._view.visible = !1),
      (this._rd2631d6b79ea4f = this._view.findChildByName("image")));
  }
  eventHandler = n((e, r) => {
    if (!(e.type !== u.CLICK || this.var_63 == null) && this.var_63._r3d62135cd02425())
      switch (r.name) {
        case "set_button":
          ((this.var_1129 = this.var_63.figureData.parseFigureString()),
            (this.var_106 = this.var_63.gender),
            this.var_63.handler?.saveWardrobeOutfit(this.var_3882, this),
            this.updateView());
          break;
        case "get_button":
        case "get_figure":
          this.var_1129 != null &&
            (this.var_63._r8427368247be40(null),
            this.var_63.loadAvatarInEditor(
              this.var_1129,
              this.gender,
              this.var_63.clubMemberLevel,
            ));
          break;
      }
  }, "eventHandler");
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
