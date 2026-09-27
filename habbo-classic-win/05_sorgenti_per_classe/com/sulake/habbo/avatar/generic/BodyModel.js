// Extracted from HabboAirLauncher.deobf.js, line 163334.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/generic/BodyModel.as
// Obfuscated name: _if932d426471cef

class extends CategoryBaseModel {
  static {
    n(this, "BodyModel");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (super.init(),
      this._r5081c654d88ac0(AvatarFigurePartType.HEAD),
      (this.var_217 = !0),
      this._view == null && ((this._view = new H1e(this)), this._view.init()));
  }
  switchCategory(e = "") {
    this._view?.switchCategory(e);
  }
  selectColor(e, r, t) {
    let i = this._categories?.getValue(e) ?? null;
    if (i == null) return;
    if ((i._r2344738a902ffd(r, t), i._r671c04c81d89b9(t)?._ra5c822ed8d6c34)) {
      this.var_63?._rdb48c761d7df2c();
      return;
    }
    (this.var_63?.figureData.savePartSetColourId(e, i.getSelectedColorIds() ?? [], !0),
      this._r92707d5c55ba57(AvatarFigurePartType.HEAD));
  }
  avatarImageReady(e) {
    let r = this.getFaceCategoryData();
    r != null && this.updateIconImage(r, e);
  }
  _r92707d5c55ba57(e) {
    let r = this.getFaceCategoryData();
    r != null && this.updateIconImage(r);
  }
  getFaceCategoryData() {
    let e = this._categories?.getValue(AvatarFigurePartType.HEAD) ?? null;
    return e == null || this.var_63 == null
      ? null
      : (e._r595d9d1c06df1f(this.var_63.figureData.getPartSetId(AvatarFigurePartType.HEAD)),
        e._r45ba5ec99f27d2(this.var_63.figureData._r5e44c31846098f(AvatarFigurePartType.HEAD)),
        e);
  }
  updateIconImage(e, r = null) {
    for (let t of e.parts)
      if (t.partSet != null) {
        let i = this.var_63?.figureData.getFigureString(t.id) ?? "";
        if (r == null || r === i) {
          let s =
            this.var_63?.manager._rf0eb5f07c94cfb._r274f6640e76241(
              i,
              fr.LARGE,
              null,
              this,
            ) ?? null;
          ((t._r145cc0394d677f = s?._rb2bd48e3b4d265(class_2123.HEAD) ?? null), s?.dispose());
        }
      }
  }
}
