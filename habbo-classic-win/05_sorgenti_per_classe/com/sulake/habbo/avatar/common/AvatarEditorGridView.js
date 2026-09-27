// Estratto da HabboAirLauncher.deobf.js, riga 164763.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/AvatarEditorGridView.as
// Nome offuscato: _i1de3fe29df8cdd

class a {
  static {
    n(this, "AvatarEditorGridView");
  }
  static REMOVE_ITEM = "REMOVE_ITEM";
  static GET_MORE = "GET_MORE";
  static MAX_COLOR_LAYERS = 2;
  _view;
  var_38 = null;
  var_815;
  var_962;
  var_3180 = "";
  _r6f10e127997a58;
  var_606;
  constructor(e) {
    ((this._view = e),
      (this.var_815 = this._view.findChildByName("thumbs")),
      (this.var_962 = [
        this._view.findChildByName("palette0"),
        this._view.findChildByName("palette1"),
      ]),
      (this._r6f10e127997a58 = this._view.findChildByName("content_notification")),
      (this.var_606 = this._view.findChildByName("content_title")),
      this._r6f10e127997a58 != null && (this._r6f10e127997a58.visible = !1),
      this.var_606 != null && (this.var_606.visible = !1));
  }
  dispose() {
    (this.var_815?.dispose(), (this.var_815 = null));
    for (let e of this.var_962) e?.dispose();
    ((this.var_962 = []),
      (this.var_38 = null),
      this._view?.dispose(),
      (this._view = null),
      (this._r6f10e127997a58 = null),
      (this.var_606 = null));
  }
  get window() {
    return this._view == null || this._view.disposed ? null : this._view;
  }
  _r3306bcdc249851(e, r) {
    let t = e._red12f777c0d8a3(r);
    if (!(t == null || this._view == null || this.var_815 == null)) {
      if (
        ((this._view.visible = !0),
        (this.var_38 = e),
        (this.var_3180 = r),
        this.var_815.removeGridItems(),
        t.parts.length === 0)
      ) {
        (this.var_606 != null && (this.var_606.visible = !0),
          this._r6f10e127997a58 != null && (this._r6f10e127997a58.visible = !0),
          this.showPalettes(0));
        return;
      }
      (this.var_606 != null && (this.var_606.visible = !1),
        this._r6f10e127997a58 != null && (this._r6f10e127997a58.visible = !1));
      for (let i of this.var_962) i?.removeGridItems();
      for (let i of t.parts)
        (i.view != null &&
          (this.var_815.addGridItem(i.view),
          i.view.addEventListener?.(u.CLICK, this._rf12a35c2ac24ac)),
          i.isSelected && this.showPalettes(i._ra31833029c75f7));
      for (let i = 0; i < a.MAX_COLOR_LAYERS; i++) {
        let s = t.getPalette(i),
          o = this.var_962[i];
        if (!(s == null || o == null))
          for (let d of s)
            d.view != null && (o.addGridItem(d.view), (d.view.procedure = this._raff0e01142f6a6));
      }
    }
  }
  showPalettes(e) {
    let r = this._view?.findChildByName("palette0"),
      t = this._view?.findChildByName("palette1");
    if (r == null || t == null || this.var_815 == null) return;
    let i = this.var_815.width,
      s = Math.trunc((this.var_815.width - 10) / 2);
    e <= 0
      ? ((r.visible = !1), (t.visible = !1))
      : e === 1
        ? ((r.width = i), (r.visible = !0), (t.visible = !1))
        : ((r.width = s), (t.width = s), (t.x = r.right + 10), (r.visible = !0), (t.visible = !0));
  }
  _rf12a35c2ac24ac = n((e) => {
    if (this.var_815 == null || this.var_38 == null) return;
    let r = e.window,
      t;
    switch (e.target?.name) {
      case a.REMOVE_ITEM:
        ((t = this.var_815._r76bcf89cad2fb2(r)),
          this.var_38.selectPart(this.var_3180, t));
        break;
      case a.GET_MORE:
        this.var_38.controller.manager.catalog?.openCatalogPage(
          this.var_38.controller.manager.getProperty("catalog.clothes.page"),
        );
        break;
      default:
        ((t = this.var_815._r76bcf89cad2fb2(r)),
          this.var_38.selectPart(this.var_3180, t));
        break;
    }
  }, "_rf12a35c2ac24ac");
  _raff0e01142f6a6 = n((e) => {
    if (e.type !== u.CLICK || this.var_38 == null) return;
    let r = e.window;
    for (let t = 0; t < a.MAX_COLOR_LAYERS; t++) {
      let s = this.var_962[t]?._r76bcf89cad2fb2(r) ?? -1;
      if (s > -1) {
        this.var_38.selectColor(this.var_3180, s, t);
        return;
      }
    }
  }, "_raff0e01142f6a6");
}
