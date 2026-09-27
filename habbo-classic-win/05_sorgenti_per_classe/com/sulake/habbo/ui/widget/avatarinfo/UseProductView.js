// Estratto da HabboAirLauncher.deobf.js, riga 309009.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/UseProductView.as
// Nome offuscato: _ia2d7f49d61d7d0

class a extends AvatarContextInfoButtonView {
  static {
    n(this, "UseProductView");
  }
  static MODE_NORMAL = 0;
  static MODE_SHAMPOO = 1;
  static MODE_CUSTOM_PART = 2;
  static MODE_CUSTOM_PART_SHAMPOO = 3;
  static MODE_SADDLE = 4;
  static MODE_REVIVE = 5;
  static MODE_REBREED = 6;
  static MODE_FERTILIZE = 7;
  _mode = a.MODE_NORMAL;
  var_742 = null;
  get objectId() {
    return this.var_742?.id ?? 0;
  }
  get requestRoomObjectId() {
    return this.var_742?.requestRoomObjectId ?? 0;
  }
  constructor(e) {
    (super(e), (this.var_231 = !1));
  }
  dispose() {
    (this._window != null &&
      (this._window.removeEventListener(u.OVER, this._r846ed7467efd50),
      this._window.removeEventListener(u.OUT, this._r846ed7467efd50)),
      this.var_742?.dispose(),
      (this.var_742 = null),
      super.dispose());
  }
  static setup(e, r, t, i, s, o = !1) {
    ((e.var_742 = o instanceof UseProductItem ? o : null), AvatarContextInfoButtonView.setup(e, r, t, i, s, !1));
  }
  resolveMode() {
    let e = this.widget,
      r = e?.handler?._r2eac8239a09fe7?.roomId ?? 0,
      t = this.var_742?.requestRoomObjectId ?? 0,
      i = e?.handler?.roomEngine?._ra1f5cb56d0c2d8(r, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      s =
        i != null
          ? (e?.handler?.getFurniData(i) ?? null)
          : (e?.handler?.container?.sessionDataManager?.getFloorItemData(t) ?? null);
    if (s != null)
      switch (((this._mode = a.MODE_NORMAL), s.category)) {
        case class_1901.PET_SHAMPOO:
          this._mode = a.MODE_SHAMPOO;
          break;
        case class_1901.PET_CUSTOM_PART:
          this._mode = a.MODE_CUSTOM_PART;
          break;
        case class_1901.PET_CUSTOM_PART_SHAMPOO:
          this._mode = a.MODE_CUSTOM_PART_SHAMPOO;
          break;
        case class_1901.PET_SADDLE:
          this._mode = a.MODE_SADDLE;
          break;
        case class_1901.MONSTERPLANT_REVIVAL:
          this._mode = a.MODE_REVIVE;
          break;
        case class_1901.MONSTERPLANT_REBREED:
          this._mode = a.MODE_REBREED;
          break;
        case class_1901.MONSTERPLANT_FERTILIZE:
          this._mode = a.MODE_FERTILIZE;
          break;
      }
  }
  updateWindow() {
    let e = this.widget;
    if (e?.assets == null || e.windowManager == null) return;
    if ((this.resolveMode(), this.isMinimized)) {
      this.activeView = this._r264c5b40440e9c();
      return;
    }
    if (this._window == null) {
      let t = e.assets.getAssetByName("use_product_menu")?.content ?? null;
      if (
        ((this._window = t != null ? e.windowManager.buildFromXML(t, 0) : null),
        this._window == null)
      )
        return;
      (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
        this._window.addEventListener(u.OUT, this._r846ed7467efd50),
        this._window.findChildByName("minimize")?.addEventListener(u.CLICK, this._r9f300ee1384194),
        this._window.findChildByName("minimize")?.addEventListener(u.OVER, this._r932b323057a22d),
        this._window.findChildByName("minimize")?.addEventListener(u.OUT, this._r932b323057a22d));
    }
    ((this.var_34 = this._window.findChildByName("buttons")),
      this.var_34 != null && (this.var_34.procedure = this._r8b6e9f027ac5db));
    let r = this._window;
    ((r.findChildByName("name").caption = this._userName),
      (r.visible = !1),
      (this.activeView = r),
      this.updateButtons());
  }
  updateButtons() {
    if (!(this._window == null || this.var_34 == null)) {
      this.var_34.autoArrangeItems = !1;
      for (let e = 0; e < this.var_34.numListItems; e++) {
        let r = this.var_34.getListItemAt(e);
        r != null && (r.visible = !1);
      }
      switch (this._mode) {
        case a.MODE_NORMAL:
          this.showButton("use_product");
          break;
        case a.MODE_SHAMPOO:
          this.showButton("use_product_shampoo");
          break;
        case a.MODE_CUSTOM_PART:
          this.showButton("use_product_custom_part");
          break;
        case a.MODE_CUSTOM_PART_SHAMPOO:
          this.showButton("use_product_custom_part_shampoo");
          break;
        case a.MODE_SADDLE:
          this.var_742?.replace
            ? this.showButton("replace_product_saddle")
            : this.showButton("use_product_saddle");
          break;
        case a.MODE_REVIVE:
          this.showButton("revive_monsterplant");
          break;
        case a.MODE_REBREED:
          this.showButton("rebreed_monsterplant");
          break;
        case a.MODE_FERTILIZE:
          this.showButton("fertilize_monsterplant");
          break;
      }
      ((this.var_34.autoArrangeItems = !0), (this.var_34.visible = !0));
    }
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let t = !1;
    if (e.type === u.CLICK) {
      if (r.name === "button")
        switch (((t = !0), r.parent?.name)) {
          case "use_product":
          case "use_product_shampoo":
          case "use_product_custom_part":
          case "use_product_custom_part_shampoo":
          case "use_product_saddle":
          case "replace_product_saddle":
          case "revive_monsterplant":
          case "rebreed_monsterplant":
          case "fertilize_monsterplant":
            this.widget?._r6f9655765d8c38(
              this.var_742?.requestRoomObjectId ?? 0,
              this.var_742?.targetRoomObjectId ?? 0,
              this.var_742?._r1cb34f0789119f ?? -1,
            );
            break;
        }
    } else super._rb8ed727c592c36(e, r);
    t && this.widget?.removeUseProductViews();
  }
  get widget() {
    return this.var_17;
  }
}
