// Estratto da HabboAirLauncher.deobf.js, riga 164942.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/effects/AvatarEditorGridViewEffects.as
// Nome offuscato: _i9d4fbcbbee44ba

class {
  static {
    n(this, "AvatarEditorGridViewEffects");
  }
  _view;
  _ra18ff78dcc692c = !0;
  var_38 = null;
  var_3180 = "";
  var_815;
  _effectItems = [];
  _r6f10e127997a58;
  var_606;
  constructor(e) {
    ((this._view = e),
      (this.var_815 = this._view.findChildByName("thumbs")),
      (this._r6f10e127997a58 = this._view.findChildByName("content_notification")),
      (this.var_606 = this._view.findChildByName("content_title")));
  }
  dispose() {
    (this.var_815?.dispose(),
      (this.var_815 = null),
      (this.var_38 = null),
      this._view?.dispose(),
      (this._view = null),
      (this._r6f10e127997a58 = null),
      (this.var_606 = null),
      (this._effectItems = []));
  }
  get window() {
    return this._view;
  }
  _r3306bcdc249851(e, r) {
    if (
      ((this.var_38 = e),
      (this.var_3180 = r),
      this._view == null || this.var_815 == null)
    )
      return;
    this._view.visible = !0;
    let t = e.effects;
    if ((this.var_815.removeGridItems(), (this._effectItems = []), t.length === 0))
      (this.var_606 != null && (this.var_606.visible = !0),
        this._r6f10e127997a58 != null && (this._r6f10e127997a58.visible = !0));
    else {
      (this._r6f10e127997a58 != null && (this._r6f10e127997a58.visible = !1),
        this.var_606 != null && (this.var_606.visible = !1));
      let i = e.controller.manager;
      this.addGridItem(new AvatarEditorGridItemEffect(null, i.windowManager, i.assets));
      for (let s of t) this.addGridItem(new AvatarEditorGridItemEffect(s, i.windowManager, i.assets));
    }
    (this.showPalettes(0), (this._ra18ff78dcc692c = !1));
  }
  showPalettes(e) {
    let r = this._view?.findChildByName("palette0"),
      t = this._view?.findChildByName("palette1");
    (r != null && (r.visible = !1), t != null && (t.visible = !1));
  }
  _r23ee56e918d5c7(e, r) {
    e >= 0 && e < this._effectItems.length && (this._effectItems[e].selected = r);
  }
  getGridIndex(e) {
    for (let r = 0; r < this._effectItems.length; r++)
      if (this._effectItems[r].effectType === e) return r;
    return -1;
  }
  addGridItem(e) {
    ((e.window.procedure = this._r6a5663163884f6),
      this._effectItems.push(e),
      this.var_815?.addGridItem(e.window));
  }
  _r6a5663163884f6 = n((e) => {
    if (e.type !== u.DOWN || this.var_815 == null || this.var_38 == null) return;
    let r = this.var_815._r76bcf89cad2fb2(e.window);
    this.var_38.selectPart(this.var_3180, r);
  }, "_r6a5663163884f6");
}
