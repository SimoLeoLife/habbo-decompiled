// Extracted from HabboAirLauncher.deobf.js, line 306996.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/ConfirmPetBreedingView.as
// Obfuscated name: _ia489d58983a255

class a {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "ConfirmPetBreedingView");
  }
  static ELEM_LIST = "element_list";
  static PREVIEW_LIST = "preview_list";
  static ELEM_PET1_ITEMLIST = "pet1_itemlist";
  static ELEM_PET2_ITEMLIST = "pet2_itemlist";
  static const_392 = "description";
  static ELEM_REQUEST = "request";
  static const_181 = "header_button_close";
  static const_150 = "save_button";
  static const_170 = "cancel_button";
  static const_300 = "ok_button";
  static BUTTON_LIST = "button_list";
  _window = null;
  var_1271 = !1;
  var_2971 = 0;
  var_2101 = 0;
  _stuffId = 0;
  _rarityCategories = [];
  var_4521 = 0;
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
  open(e, r, t, i, s, o, d) {
    ((this.var_2971 = e),
      (this.var_2101 = r),
      (this._stuffId = t),
      (this._rarityCategories = i),
      (this.var_4521 = s));
    let c = this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(e) ?? null,
      f = this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null;
    c == null ||
      f == null ||
      ((c.petLevel = o),
      (f.petLevel = d),
      this.setWindowContent(c, f),
      this._window != null && (this._window.visible = !0));
  }
  imageReady(e, r) {
    this.disposed || this.updatePreviewImage(r, `breed.${e}`);
  }
  imageFailed(e) {}
  close() {
    this._window != null && (this._window.visible = !1);
  }
  enable() {
    (this.enableElement(a.const_392, !1, !1),
      this.enableElement(a.ELEM_REQUEST, !1, !1),
      this.enableElement(a.const_170, !0, !0),
      this.enableElement(a.const_392, !0, !0),
      this.enableElement(a.const_150, !0, !0));
  }
  disable() {
    (this.enableElement(a.const_392, !1, !1),
      this.enableElement(a.ELEM_REQUEST, !1, !1),
      this.enableElement(a.const_170, !1, !0),
      this.enableElement(a.const_392, !1, !0),
      this.enableElement(a.const_150, !1, !0));
  }
  setWindowContent(e, r) {
    if (
      (this.var_17.localization?._r43eae9731f5b27("breedpets.widget.title", "name", e.name),
      this.var_17.localization?._r43eae9731f5b27("breedpets.widget.pet1.name", "name", e.name),
      this.var_17.localization?._r43eae9731f5b27("breedpets.widget.pet2.name", "name", r.name),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.pet1.description",
        "name",
        e.ownerName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.pet2.description",
        "name",
        r.ownerName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.pet1.level",
        "level",
        e.petLevel.toString(),
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.pet2.level",
        "level",
        r.petLevel.toString(),
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "breedpets.widget.request",
        "name",
        r.ownerName,
      ),
      this._window == null)
    ) {
      let f = this.var_17.assets?.getAssetByName("confirm_pet_breeding_xml")?.content ?? null;
      if (
        ((this._window = f != null ? this.var_17.windowManager?.buildFromXML(f, 0) : null),
        this._window == null)
      )
        return;
      this.addClickListener(a.const_181);
    }
    (this._window.center(),
      (this._window.visible = !0),
      this.addClickListener(a.const_150),
      this.addClickListener(a.const_170),
      this.enable());
    let t = this.resolvePreviewImage(e.figure);
    this.updatePreviewImage(t ?? new A(10, 10), "preview_image");
    let i = this.resolvePreviewImage(r.figure);
    this.updatePreviewImage(i ?? new A(10, 10), "preview_image2");
    let s = this.var_17.assets?.getAssetByName("pet_breeding_pet_preview_xml")?.content ?? null,
      o = s != null ? this.var_17.windowManager?.buildFromXML(s, 0) : null,
      d = 1;
    for (let f of this._rarityCategories) {
      this.var_17.localization?._r43eae9731f5b27(
        `breedpets.confirmation.widget.raritycategory.${d}`,
        "percent",
        f._r191591f86422f9.toString(),
      );
      let l = this._window.findChildByName(`breeds${d}`);
      l?.removeListItems();
      for (let b of f.breeds) {
        if (l == null || o == null) continue;
        let _ = new class_3800([this.var_4521, b].join(" ")),
          h = o.clone();
        if (h == null) continue;
        ((h.name = `breed.${b}`), (h.bitmap = new A(h.width, h.height, !0, 16777215)), l.addListItem(h));
        let p = this.resolvePreviewImage(_.figureString, 64);
        this.updatePreviewImage(p ?? new A(25, 25, !0, 16777215), h.name);
      }
      d++;
    }
    (this.arrangeListItems(),
      this._window.findChildByName("puppy.name.input")?._r1c386c8571c5d9(0, 0),
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
      this._ra7c3ba1ec002f6(a.ELEM_PET1_ITEMLIST),
      this._ra7c3ba1ec002f6(a.ELEM_PET2_ITEMLIST),
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
    t.bitmap = new A(t.width, t.height, !0, 16777215);
    let i = new E((t.width - e.width) / 2, (t.height - e.height) / 2);
    t.bitmap.copyPixels(e, e.rect, i, null, null, !0);
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  enableElement(e, r, t) {
    let i = this._window?.findChildByName(e);
    i != null && ((i.visible = t), r ? i.enable() : i.disable());
  }
  onMouseClick = n((e) => {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_170:
        (this.var_17._rebc4fa7f4414a5(this._stuffId), this.close());
        break;
      case a.const_300:
        this.disable();
        break;
      case a.const_150: {
        let r = this._window?.findChildByName("puppy.name.input")?.caption ?? "";
        if (r.length === 0)
          this.var_17.windowManager?._r3651220a1507f2(
            "${breedpets.confirmation.alert.title}",
            "${breedpets.confirmation.alert.name.required.head}",
            "${breedpets.confirmation.alert.name.required.desc}",
          );
        else {
          let t =
              this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(
                this.var_2971,
              ) ?? null,
            i =
              this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(
                this.var_2101,
              ) ?? null;
          t != null &&
            i != null &&
            (this.var_17._r9bcce1ef12e316(
              this._stuffId,
              r,
              t.webID,
              i.webID,
            ),
            this.disable());
        }
        break;
      }
    }
  }, "onMouseClick");
}
