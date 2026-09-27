// Extracted from HabboAirLauncher.deobf.js, line 315815.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/contextmenu/PurchasableClothingConfirmationView.as
// Obfuscated name: _i5388f65d6e31c9

class a {
  constructor(e) {
    this.var_17 = e;
    ((this._windowManager = e?.windowManager ?? null), (this._assets = e?.assets ?? null));
  }
  static {
    n(this, "PurchasableClothingConfirmationView");
  }
  static PRODUCT_PAGE_UKNOWN = -1;
  static PRODUCT_PAGE_CLOTHING = 0;
  static const_181 = "header_button_close";
  static const_150 = "save_button";
  static const_257 = "cancel_text";
  static const_300 = "ok_button";
  static const_1223 = "avatar_preview";
  _window = null;
  var_1271 = !1;
  _r4bc9d9ca27f4a2 = -1;
  var_689 = null;
  _newFigureString = "";
  _windowManager;
  _assets;
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    this.var_1271 = !0;
  }
  open(e) {
    let r = this.var_17?.handler._r2eac8239a09fe7?.roomId ?? 0,
      t = this.var_17?.handler.roomEngine?._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    if (t == null) return;
    ((this.var_689 = this.var_17?.handler.getFurniData(t) ?? null),
      (this._r4bc9d9ca27f4a2 = t.getId()));
    let i = a.PRODUCT_PAGE_UKNOWN,
      s = [];
    switch (this.var_689?.category) {
      case class_1901.FIGURE_PURCHASABLE_SET: {
        i = a.PRODUCT_PAGE_CLOTHING;
        let o = this.var_689._r2bdd6e3cc1f573.split(",");
        for (let d of o) {
          let c = Number.parseInt(d, 10);
          this.var_17?.handler.container?._rf0eb5f07c94cfb?.isValidFigureSetForGender(
            c,
            this.var_17.handler.container.sessionDataManager?.gender ?? "",
          ) && s.push(c);
        }
        break;
      }
      default:
        break;
    }
    if (
      ((this._newFigureString =
        this.var_17?.handler.container?._rf0eb5f07c94cfb?._r3e7ac99da303de(
          this.var_17.handler.container.sessionDataManager?.figure ?? "",
          this.var_17.handler.container.sessionDataManager?.gender ?? "",
          s,
        ) ?? ""),
      this.var_17?.handler.container?.inventory?._r01343b6551981a(
        this.var_689?.className ?? "",
      ))
    ) {
      this.var_17.handler.container.connection?.send(
        new UnkMessageComposer_2args_4a93ef(
          this._newFigureString,
          this.var_17.handler.container.sessionDataManager?.gender ?? "",
        ),
      );
      return;
    }
    (this.setWindowContent(i), this._window != null && (this._window.visible = !0));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  setWindowContent(e) {
    if (
      this.var_17 == null ||
      this._windowManager == null ||
      this._assets == null ||
      this.var_689 == null
    )
      return;
    if (
      (this.var_17.localizations?._r43eae9731f5b27(
        "useproduct.widget.title.bind_clothing",
        "name",
        this.var_689.localizedName,
      ),
      this._window == null)
    ) {
      let t = this._assets.getAssetByName("use_product_widget_frame_plant_seed_xml")?.content;
      if (t == null) return;
      ((this._window = this._windowManager.buildFromXML(t)),
        this.addClickListener(a.const_181),
        this._window?.center());
    }
    (this._window != null &&
      (this._window.caption = "${useproduct.widget.title.bind_clothing}"),
      this.var_17.localizations?._r43eae9731f5b27(
        "useproduct.widget.text.bind_clothing",
        "productName",
        this.var_689.localizedName,
      ));
    let r = this._window;
    if (r?.content != null) {
      r.content.numChildren > 0 && r.content.removeChildAt(0);
      let t = this.createWindow(e);
      t != null && r.content.addChild(t);
    }
    switch (e) {
      case a.PRODUCT_PAGE_CLOTHING:
        (this.addClickListener(a.const_150), this.addClickListener(a.const_257));
        break;
      default:
        throw new Error(`Invalid type for use product confirmation content apply: ${e}`);
    }
    (this.refreshAvatar(), this._window?.invalidate());
  }
  createWindow(e) {
    let r = null;
    switch (e) {
      case a.PRODUCT_PAGE_CLOTHING:
        r = "use_product_controller_purchasable_clothing_xml";
        break;
      default:
        throw new Error(`Invalid type for view content creation: ${e}`);
    }
    let t = this._assets?.getAssetByName(r)?.content;
    return t == null ? null : this._windowManager?.buildFromXML(t);
  }
  refreshAvatar() {
    let r = this._window?.findChildByName(a.const_1223)?.widget;
    r != null && (r.figure = this._newFigureString);
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  onMouseClick = n((e) => {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_257:
      case a.const_300:
        this.close();
        break;
      case a.const_150:
        (this.var_17?.handler._raf456ff3cb6d8e(
          this._r4bc9d9ca27f4a2,
          this.var_689?.className ?? "",
          this._newFigureString,
          this.var_17?.handler.container?.sessionDataManager?.gender ?? "",
        ),
          this.close());
        break;
    }
  }, "onMouseClick");
}
