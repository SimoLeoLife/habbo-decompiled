// Estratto da HabboAirLauncher.deobf.js, riga 306667.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/BreedPetsResultView.as
// Nome offuscato: _ibd90a20027bec8

class a {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "BreedPetsResultView");
  }
  static ELEM_LIST = "element_list";
  static PREVIEW_LIST = "preview_list";
  static PREVIEW_BUTTONLIST = "preview_buttonlist";
  static ELEM_SEED1_ITEMLIST = "seed1_itemlist";
  static ELEM_SEED2_ITEMLIST = "seed2_itemlist";
  static ELEM_SEED1_BUTTONLIST = "seed1_buttonlist";
  static ELEM_SEED2_BUTTONLIST = "seed2_buttonlist";
  static const_1326 = "header_button_close";
  static const_181 = "close_button";
  static const_150 = "save_button";
  static ELEM_PLACE_BUTTON1 = "place_button1";
  static ELEM_PLACE_BUTTON2 = "place_button2";
  static ELEM_PICK_BUTTON1 = "pick_button1";
  static ELEM_PICK_BUTTON2 = "pick_button2";
  static ELEM_PREVIEW_IMAGE = "preview_image";
  static ELEM_PREVIEW_IMAGE2 = "preview_image2";
  static const_495 = "preview_image_region";
  static ELEM_PREVIEW_IMAGE_REGION2 = "preview_image_region2";
  static ELEM_BUTTON_LIST = "button_list";
  static const_392 = "description";
  static const_1231 = "description_sorry";
  static ELEM_INFO = "info";
  static const_725 = "info_sorry";
  static ELEM_INFO_MUTATE1 = "info_mutate1";
  static ELEM_INFO_MUTATE2 = "info_mutate2";
  static const_300 = "ok_button";
  _window = null;
  var_1271 = !1;
  var_368 = null;
  _resultData2 = null;
  _r32102da953364e = !1;
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    this.disposed ||
      ((this.var_1271 = !0), this._window?.dispose(), (this._window = null));
  }
  open(e, r) {
    ((this.var_368 = e), (this._resultData2 = r), this.setWindowContent(), this.show());
  }
  imageReady(e, r) {
    this.disposed || this.updatePreviewImage(r, e === 1 ? a.ELEM_PREVIEW_IMAGE2 : a.ELEM_PREVIEW_IMAGE);
  }
  imageFailed(e) {}
  close() {
    this.var_17._rae2dc700322ef7(this);
  }
  show() {
    ((this._r32102da953364e = !1), this._window != null && (this._window.visible = !0));
  }
  _rc9003fbab6f83f(e) {
    this.var_368 == null ||
      this._resultData2 == null ||
      ((this.var_368.stuffId === e || this._resultData2.stuffId === e) &&
        (this._r061fada5f3fd3c(), this.show()));
  }
  _r56dbff2aacf496(e) {
    this.var_368 == null ||
      this._resultData2 == null ||
      ((this.var_368.stuffId === e || this._resultData2.stuffId === e) &&
        (this._r061fada5f3fd3c(), this.show()));
  }
  _r061fada5f3fd3c() {
    (this.updateButtons(this.var_368, a.ELEM_PLACE_BUTTON1, a.ELEM_PICK_BUTTON1),
      this.updateButtons(this._resultData2, a.ELEM_PLACE_BUTTON2, a.ELEM_PICK_BUTTON2),
      this.arrangeListItems());
  }
  setWindowContent() {
    if (this.var_368 == null || this._resultData2 == null) return;
    let e = this.var_17.handler?.container?.sessionDataManager ?? null,
      r = e?.getFloorItemData(this.var_368.classId) ?? null,
      t = e?.getFloorItemData(this._resultData2.classId) ?? null;
    (this.var_17.localization?._r43eae9731f5b27(
      "breedpetsresult.widget.seed1.name",
      "name",
      r?.localizedName ?? "",
    ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpetsresult.widget.seed2.name",
        "name",
        t?.localizedName ?? "",
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpetsresult.widget.seed1.description",
        "name",
        this.var_368.userName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpetsresult.widget.seed2.description",
        "name",
        this._resultData2.userName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpetsresult.widget.seed1.raritylevel",
        "level",
        this.var_368.rarityLevel.toString(),
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpetsresult.widget.seed2.raritylevel",
        "level",
        this._resultData2.rarityLevel.toString(),
      ));
    let i = e?.userId ?? 0,
      s = this.var_368.userId === i,
      o = this._resultData2.userId === i,
      d = s || o;
    if (!d) {
      let l =
        this.var_368.userName !== ""
          ? this.var_368.userName
          : (this._resultData2.userName ?? "");
      this.var_17.localization?._r43eae9731f5b27("breedpetsresult.widget.text.sorry", "name", l);
    }
    if (this._window == null) {
      let l = this.var_17.assets?.getAssetByName("breed_pets_result_xml")?.content ?? null;
      if (
        ((this._window = l != null ? this.var_17.windowManager?.buildFromXML(l, 0) : null),
        this._window == null)
      )
        return;
      this.addClickListener(a.const_1326);
    }
    (this._window.center(),
      (this._window.visible = !0),
      this.enableElement(a.ELEM_SEED1_BUTTONLIST, !1),
      this.enableElement(a.ELEM_SEED2_BUTTONLIST, !1),
      this.enableElement(a.ELEM_PLACE_BUTTON1, !1),
      this.enableElement(a.ELEM_PICK_BUTTON1, !1),
      this.enableElement(a.ELEM_PLACE_BUTTON2, !1),
      this.enableElement(a.ELEM_PICK_BUTTON2, !1),
      this.enableElement(a.const_181, !1),
      s && (this.enableElement(a.ELEM_PLACE_BUTTON1, !0), this.enableElement(a.ELEM_SEED1_BUTTONLIST, !0)),
      o && (this.enableElement(a.ELEM_PLACE_BUTTON2, !0), this.enableElement(a.ELEM_SEED2_BUTTONLIST, !0)),
      d && this.enableElement(a.PREVIEW_BUTTONLIST, !0),
      this.enableElement(a.ELEM_SEED2_ITEMLIST, !0),
      this._resultData2.stuffId === -1 && this.enableElement(a.ELEM_SEED2_ITEMLIST, !1),
      this.enableElement(a.const_392, !0),
      this.enableElement(a.ELEM_INFO, !0),
      this.enableElement(a.const_1231, !1),
      this.enableElement(a.ELEM_INFO, !1),
      this.enableElement(a.ELEM_BUTTON_LIST, !1),
      this.enableElement(a.const_181, !1),
      d ||
        (this.enableElement(a.PREVIEW_BUTTONLIST, !1),
        this.enableElement(a.const_392, !1),
        this.enableElement(a.ELEM_INFO, !1),
        this.enableElement(a.const_150, !1),
        this.enableElement(a.ELEM_PLACE_BUTTON1, !1),
        this.enableElement(a.ELEM_PICK_BUTTON1, !1),
        this.enableElement(a.ELEM_PLACE_BUTTON2, !1),
        this.enableElement(a.ELEM_PICK_BUTTON2, !1),
        this.enableElement(a.ELEM_BUTTON_LIST, !0),
        this.enableElement(a.const_1231, !0),
        this.enableElement(a.const_725, !0),
        this.enableElement(a.const_181, !0)),
      this.enableElement(a.ELEM_INFO_MUTATE1, this.var_368._r8680a44650a6c0),
      this.enableElement(a.ELEM_INFO_MUTATE2, this._resultData2._r8680a44650a6c0),
      this.addClickListener(a.const_150),
      this.addClickListener(a.const_181),
      this.addClickListener(a.ELEM_PLACE_BUTTON1),
      this.addClickListener(a.ELEM_PLACE_BUTTON2),
      this.addClickListener(a.ELEM_PICK_BUTTON1),
      this.addClickListener(a.ELEM_PICK_BUTTON2),
      this.addClickListener(a.const_495),
      this.addClickListener(a.ELEM_PREVIEW_IMAGE_REGION2));
    let c = this.resolvePreviewImage(r?.id ?? 0);
    this.updatePreviewImage(c ?? new A(10, 10), a.ELEM_PREVIEW_IMAGE);
    let f = this.resolvePreviewImage(t?.id ?? 0);
    (this.updatePreviewImage(f ?? new A(10, 10), a.ELEM_PREVIEW_IMAGE2),
      this.arrangeListItems(),
      this._window.invalidate());
  }
  resolvePreviewImage(e) {
    return (
      (
        this.var_17.handler?.container?.roomEngine?._r5db1beeb89d785(
          e,
          new k(90, 0, 0),
          64,
          this,
          0,
          null,
          -1,
          -1,
          null,
        ) ?? null
      )?.data ?? null
    );
  }
  arrangeListItems() {
    (this._ra7c3ba1ec002f6(a.ELEM_SEED1_ITEMLIST),
      this._ra7c3ba1ec002f6(a.ELEM_SEED2_ITEMLIST),
      this._ra7c3ba1ec002f6(a.ELEM_SEED1_BUTTONLIST),
      this._ra7c3ba1ec002f6(a.ELEM_SEED2_BUTTONLIST),
      this._ra7c3ba1ec002f6(a.PREVIEW_BUTTONLIST),
      this._ra7c3ba1ec002f6(a.ELEM_BUTTON_LIST),
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
  enableElement(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.visible = r);
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  hide() {
    this._window != null && (this._window.visible = !1);
  }
  onMouseClick = n((e) => {
    if (!(this.var_368 == null || this._resultData2 == null))
      switch (e.target?.name) {
        case a.const_1326:
        case a.const_181:
          this.close();
          break;
        case a.ELEM_PLACE_BUTTON1:
          ((this._r32102da953364e = this._rc5e177849ba0cd(this.var_368.stuffId)),
            this._r32102da953364e && this.close());
          break;
        case a.ELEM_PLACE_BUTTON2:
          ((this._r32102da953364e = this._rc5e177849ba0cd(this._resultData2.stuffId)),
            this._r32102da953364e && this.close());
          break;
        case a.ELEM_PICK_BUTTON1:
          this._rf26be8acfc0771(this.var_368.stuffId);
          break;
        case a.ELEM_PICK_BUTTON2:
          this._rf26be8acfc0771(this._resultData2.stuffId);
          break;
        case a.const_495:
          this._rf7eed423a45996(this.var_368.stuffId);
          break;
        case a.ELEM_PREVIEW_IMAGE_REGION2:
          this._rf7eed423a45996(this._resultData2.stuffId);
          break;
        case a.const_300:
        case a.const_150:
          this.hide();
          break;
      }
  }, "onMouseClick");
  _rf7eed423a45996(e) {
    if (this.findInventoryFloorItemById(e) != null)
      return (this.var_17.handler?.container?.inventory?._rf93ea073fdcb45(class_2106.FURNITURE), !0);
    let t = this._r92361c15cf57c2(e);
    if (t != null) {
      let i = this.var_17.handler?.container?._r2eac8239a09fe7?.roomId ?? 0;
      return (
        this.var_17.handler?.container?.roomEngine?._r5def02e220e83a(
          i,
          t.getId(),
          RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
        ),
        !0
      );
    }
    return !1;
  }
  _rf26be8acfc0771(e) {
    let r = this._r92361c15cf57c2(e);
    return r != null
      ? (this.var_17.handler?.container?.roomEngine?._r9cc46b2b079405(
          r.getId(),
          RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
          RoomObjectOperationEnum.OBJECT_PICKUP,
        ),
        !0)
      : !1;
  }
  _rc5e177849ba0cd(e) {
    let r = this.findInventoryFloorItemById(e);
    return this._r8f79b32ee20188(r);
  }
  _r92361c15cf57c2(e) {
    let r = this.var_17.handler?.container?._r2eac8239a09fe7?.roomId ?? 0;
    return (
      this.var_17.handler?.container?.roomEngine?._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) ?? null
    );
  }
  findInventoryFloorItemById(e) {
    return (this.var_17.handler?.container?.inventory ?? null)?._rc71de7ee01635d(-e) ?? null;
  }
  _r8f79b32ee20188(e) {
    let r = this.var_17.handler?.container?.inventory ?? null;
    return e == null ||
      r == null ||
      e.category === class_1901.FLOOR ||
      e.category === class_1901.WALL_PAPER ||
      e.category === class_1901.LANDSCAPE
      ? !1
      : r._r50430888e52269(e);
  }
  updateButtons(e, r, t) {
    if (this._window == null || e == null) return;
    let i = this.var_17.handler?.container?.sessionDataManager?.userId ?? 0,
      s = e.userId === i,
      o = !1,
      d = !1;
    (this._r92361c15cf57c2(e.stuffId) != null && (d = !0),
      d || (o = this.findInventoryFloorItemById(e.stuffId) != null));
    let f = this._window.findChildByName(r),
      l = this._window.findChildByName(t);
    (f != null && ((f.visible = !1), s && (o || (!o && !d)) && (f.visible = !0)),
      l != null && ((l.visible = !1), s && d && (l.visible = !0)));
  }
}
