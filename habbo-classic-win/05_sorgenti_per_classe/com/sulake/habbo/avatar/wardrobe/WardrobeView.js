// Extracted from HabboAirLauncher.deobf.js, line 164645.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/wardrobe/WardrobeView.as
// Obfuscated name: _i570d6b641941d6

class a {
  static {
    n(this, "WardrobeView");
  }
  static SLOTS_PER_COL = 7;
  _window;
  var_38;
  var_1846 = null;
  var_1289 = null;
  _rb41542923e1bd5 = null;
  constructor(e) {
    this.var_38 = e;
    let r = e.controller.manager.assets.getAssetByName("avatareditor_wardrobe_base");
    ((this._window = r != null ? e.controller.manager.windowManager.buildFromXML(r.content) : null),
      (this.var_1846 = this._window?.findChildByName("slots_columns_list")),
      (this.var_1289 = this.var_1846?.findChildByName("slots_column_template")),
      (this._rb41542923e1bd5 = this.var_1289?.findChildByName("slot_template") ?? null),
      this.var_1289?.removeListItems(),
      this.var_1846?.removeListItems());
    let t = Math.trunc((e.availableSlots + a.SLOTS_PER_COL - 1) / a.SLOTS_PER_COL);
    for (let i = 0; i < t; i += 1) {
      let s = this.var_1289?.clone();
      s != null && this.var_1846?.addListItem(s);
    }
    this._window != null && (this._window.visible = !1);
  }
  dispose() {
    ((this.var_38 = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_1846 = null),
      this.var_1289?.dispose(),
      (this.var_1289 = null),
      this._rb41542923e1bd5?.dispose(),
      (this._rb41542923e1bd5 = null));
  }
  reset() {}
  update() {
    for (let e = 0; e < (this.var_1846?.numListItems ?? 0); e += 1)
      this.var_1846?.getListItemAt(e)?.removeListItems();
    for (let e = 0; e < (this.var_38?.slots.length ?? 0); e++) {
      let r = this.var_38?.slots[e];
      if (r == null) continue;
      let t = Math.trunc(e / a.SLOTS_PER_COL),
        i = this.var_1846?.getListItemAt(t);
      i != null && (i.addListItem(r.view), (r.view.visible = !0));
    }
  }
  getWindowContainer() {
    return this._window;
  }
  get slotTemplate() {
    if (this._rb41542923e1bd5 == null) throw new Error("Wardrobe slot template is not available.");
    return this._rb41542923e1bd5;
  }
}
