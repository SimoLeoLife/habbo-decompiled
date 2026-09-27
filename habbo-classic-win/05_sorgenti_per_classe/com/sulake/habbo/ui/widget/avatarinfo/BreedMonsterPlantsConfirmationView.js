// Estratto da HabboAirLauncher.deobf.js, riga 306356.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/BreedMonsterPlantsConfirmationView.as
// Nome offuscato: _ib449dd467f115e

class a {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "BreedMonsterPlantsConfirmationView");
  }
  static STATE_NORMAL = 0;
  static STATE_REQUESTED = 1;
  static ELEM_LIST = "element_list";
  static PREVIEW_LIST = "preview_list";
  static ELEM_PLANT1_ITEMLIST = "plant1_itemlist";
  static ELEM_PLANT2_ITEMLIST = "plant2_itemlist";
  static const_392 = "description";
  static ELEM_REQUEST = "request";
  static const_181 = "header_button_close";
  static const_150 = "save_button";
  static const_707 = "accept_button";
  static const_170 = "cancel_button";
  static const_300 = "ok_button";
  static BUTTON_LIST = "button_list";
  _window = null;
  var_1271 = !1;
  var_2971 = 0;
  var_2101 = 0;
  _state = a.STATE_NORMAL;
  get disposed() {
    return this.var_1271;
  }
  get requestRoomObjectId() {
    return this.var_2971;
  }
  get targetRoomObjectId() {
    return this.var_2101;
  }
  dispose() {
    this.disposed ||
      ((this.var_1271 = !0), this._window?.dispose(), (this._window = null));
  }
  open(e, r, t) {
    ((this.var_2971 = e),
      (this.var_2101 = r),
      (this._state = t ? a.STATE_REQUESTED : a.STATE_NORMAL));
    let i = this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(e) ?? null,
      s = this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null;
    i == null ||
      s == null ||
      (this.setWindowContent(i, s), this._window != null && (this._window.visible = !0));
  }
  imageReady(e, r) {
    this.disposed || this.updatePreviewImage(r, e === 1 ? "preview_image2" : "preview_image");
  }
  imageFailed(e) {}
  setWindowContent(e, r) {
    if (
      (this.var_17.localization?._r43eae9731f5b27("breedpets.widget.title", "name", e.name),
      this.var_17.localization?._r43eae9731f5b27("breedpets.widget.plant1.name", "name", e.name),
      this.var_17.localization?._r43eae9731f5b27("breedpets.widget.plant2.name", "name", r.name),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.plant1.description",
        "name",
        e.ownerName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.plant2.description",
        "name",
        r.ownerName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.plant1.raritylevel",
        "level",
        e.rarityLevel.toString(),
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.plant2.raritylevel",
        "level",
        r.rarityLevel.toString(),
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.request",
        "name",
        r.ownerName,
      ),
      this._window == null)
    ) {
      let s = this.var_17.assets?.getAssetByName("breed_pets_confirmation_xml")?.content ?? null;
      if (
        ((this._window = s != null ? this.var_17.windowManager?.buildFromXML(s, 0) : null),
        this._window == null)
      )
        return;
      this.addClickListener(a.const_181);
    }
    switch (
      (this._window.center(),
      (this._window.visible = !0),
      this.addClickListener(a.const_150),
      this.addClickListener(a.const_707),
      this.addClickListener(a.const_170),
      this.enableElement(a.const_392, !1),
      this.enableElement(a.ELEM_REQUEST, !1),
      this.enableElement(a.const_150, !1),
      this.enableElement(a.const_707, !1),
      this.enableElement(a.const_170, !0),
      this._state)
    ) {
      case a.STATE_NORMAL:
        (this.enableElement(a.const_392, !0), this.enableElement(a.const_150, !0));
        break;
      case a.STATE_REQUESTED:
        (this.enableElement(a.ELEM_REQUEST, !0), this.enableElement(a.const_707, !0));
        break;
    }
    let t = this.resolvePreviewImage(e.figure);
    this.updatePreviewImage(t ?? new A(10, 10), "preview_image");
    let i = this.resolvePreviewImage(r.figure);
    (this.updatePreviewImage(i ?? new A(10, 10), "preview_image2"),
      this.arrangeListItems(),
      this._window.invalidate());
  }
  resolvePreviewImage(e, r = 64) {
    let t = new class_3800(e);
    return (
      (
        this.var_17.handler?.roomEngine?.getPetImage(
          t.typeId,
          t.paletteId,
          t.color,
          new k(90),
          r,
          this,
          !0,
          0,
          t.customParts,
          "std",
        ) ?? null
      )?.data ?? null
    );
  }
  arrangeListItems() {
    (this._ra7c3ba1ec002f6(a.BUTTON_LIST),
      this._ra7c3ba1ec002f6(a.ELEM_PLANT1_ITEMLIST),
      this._ra7c3ba1ec002f6(a.ELEM_PLANT2_ITEMLIST),
      this._ra7c3ba1ec002f6(a.PREVIEW_LIST),
      this._ra7c3ba1ec002f6(a.ELEM_LIST),
      this._window?.resizeToFitContent());
  }
  _ra7c3ba1ec002f6(e) {
    this._window?.findChildByName(e)?.arrangeListItems();
  }
  updatePreviewImage(e, r) {
    if (this._window == null || e == null) return;
    let t = this._window.findChildByName(r);
    if (t == null) return;
    t.bitmap = new A(t.width, t.height);
    let i = this.var_17.assets?.getAssetByName("breed_pets_preview_bg_png")?.content;
    i != null && t.bitmap.copyPixels(i, i.rect, new E(0, 0));
    let s = new E((t.width - e.width) / 2, (t.height - e.height) / 2);
    t.bitmap.copyPixels(e, e.rect, s, null, null, !0);
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  enableElement(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.visible = r);
  }
  onMouseClick = n((e) => {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_170:
        (this.var_17._r4e102a484ef85d(this.var_2971, this.var_2101), this.close());
        break;
      case a.const_300:
        this.close();
        break;
      case a.const_707:
        (this.close(), this.var_17._r50cc5fa40e6d84(this.var_2971, this.var_2101));
        break;
      case a.const_150:
        (this.var_17._r55a9ce9b4d014d(this.var_2971, this.var_2101),
          (this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(
            this.var_2971,
          )?.ownerId ?? -1) !==
            (this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(
              this.var_2101,
            )?.ownerId ?? -1) &&
            this.var_17.showBreedingPetsWaitingConfirmationAlert(this.var_2971, this.var_2101),
          this.close());
        break;
    }
  }, "onMouseClick");
}
