// Estratto da HabboAirLauncher.deobf.js, riga 315597.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/contextmenu/MonsterPlantSeedConfirmationView.as
// Nome offuscato: _ic6e943c372520c

class a {
  constructor(e) {
    this.var_17 = e;
    ((this._windowManager = e?.windowManager ?? null), (this._assets = e?.assets ?? null));
  }
  static {
    n(this, "MonsterPlantSeedConfirmationView");
  }
  static PRODUCT_PAGE_UKNOWN = -1;
  static _r0496d06347ad66 = 0;
  static const_181 = "header_button_close";
  static const_150 = "save_button";
  static const_257 = "cancel_text";
  static const_300 = "ok_button";
  _window = null;
  var_1271 = !1;
  _r4bc9d9ca27f4a2 = -1;
  var_3216 = 0;
  var_689 = null;
  _windowManager;
  _assets;
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    this.disposed ||
      ((this.var_1271 = !0),
      this._window?.dispose(),
      (this._window = null),
      (this.var_689 = null),
      (this._assets = null),
      (this._windowManager = null),
      (this.var_17 = null));
  }
  open(e) {
    let r = this.var_17?.handler._r2eac8239a09fe7?.roomId ?? 0,
      t = this.var_17?.handler.roomEngine?._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    t != null &&
      ((this.var_689 = this.var_17?.handler.getFurniData(t) ?? null),
      (this._r4bc9d9ca27f4a2 = t.getId()));
    let i = a.PRODUCT_PAGE_UKNOWN;
    switch (this.var_689?.category) {
      case class_1901.MONSTERPLANT_SEED:
        i = a._r0496d06347ad66;
        break;
      default:
        break;
    }
    (this.setWindowContent(i), this._window != null && (this._window.visible = !0));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  imageReady(e, r) {
    !this.disposed && this.var_3216 === e && (this.updatePreviewImage(r), (this.var_3216 = 0));
  }
  imageFailed(e) {}
  setWindowContent(e) {
    if (
      this.var_17 == null ||
      this._windowManager == null ||
      this._assets == null ||
      this.var_689 == null
    )
      return;
    let r = new A(10, 10);
    if (
      (this.var_17.localizations?._r43eae9731f5b27(
        "useproduct.widget.title.plant_seed",
        "name",
        this.var_689.localizedName,
      ),
      this._window == null)
    ) {
      let i = this._assets.getAssetByName("use_product_widget_frame_plant_seed_xml")?.content;
      if (i == null) return;
      ((this._window = this._windowManager.buildFromXML(i)),
        this.addClickListener(a.const_181),
        this._window?.center());
    }
    this.var_17.localizations?._r43eae9731f5b27(
      "useproduct.widget.text.plant_seed",
      "productName",
      this.var_689.localizedName,
    );
    let t = this._window;
    if (t?.content != null) {
      t.content.numChildren > 0 && t.content.removeChildAt(0);
      let i = this.createWindow(e);
      i != null && t.content.addChild(i);
    }
    switch (e) {
      case a._r0496d06347ad66:
        (this.addClickListener(a.const_150),
          this.addClickListener(a.const_257),
          (r = this.resolvePreviewImage(this.var_689) ?? r));
        break;
      default:
        throw new Error(`Invalid type for use product confirmation content apply: ${e}`);
    }
    (this.updatePreviewImage(r), this._window?.invalidate());
  }
  createWindow(e) {
    let r = null;
    switch (e) {
      case a._r0496d06347ad66:
        r = "use_product_controller_plant_seed_xml";
        break;
      default:
        throw new Error(`Invalid type for view content creation: ${e}`);
    }
    let t = this._assets?.getAssetByName(r)?.content;
    return t == null ? null : this._windowManager?.buildFromXML(t);
  }
  resolvePreviewImage(e) {
    let r = null;
    switch (e.category) {
      case class_1901.MONSTERPLANT_SEED:
        r =
          this.var_17?.handler.roomEngine?._r5db1beeb89d785(
            this.var_689?.id ?? 0,
            new k(90, 0, 0),
            64,
            this,
            0,
            "",
            -1,
            -1,
            null,
          ) ?? null;
        break;
      default:
        break;
    }
    return r != null ? ((this.var_3216 = r.id), r.data) : null;
  }
  updatePreviewImage(e) {
    this._window == null ||
      e == null ||
      (this.setPreviewImage("preview_image_bg"), this.setPreviewImage("preview_image"));
  }
  setPreviewImage(e) {
    if (this._window == null || this._assets == null) return;
    let r = this._window.findChildByName(e);
    if (r == null) return;
    let t = this._assets.getAssetByName(r.bitmapAssetName);
    t != null && ((r.disposesBitmap = !1), (r.bitmap = t.content));
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
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
          new RoomWidgetUseProductMessage(RoomWidgetUseProductMessage.MONSTERPLANT_SEED, this._r4bc9d9ca27f4a2),
        ),
          this.close());
        break;
    }
  }, "onMouseClick");
}
