// Extracted from HabboAirLauncher.deobf.js, line 191576.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/NewPetsCatalogWidget.as
// Obfuscated name: _i2e49d9857ab96f

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "NewPetsCatalogWidget");
  }
  static NORMAL_SIZE_PETS = [15];
  static MAX_PALETTES = 20;
  _offers = null;
  var_30 = null;
  var_453 = -1;
  _r0cc16a558f9fd9 = -1;
  _selectedProductCode = "";
  var_1198 = !1;
  _rc63b0340e99313 = !1;
  _r54a43947bb7f54 = null;
  _r20003195d951b6 = null;
  var_4783 = -1;
  dispose() {
    this._rc63b0340e99313 ||
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.COLOUR_INDEX, this.onColourIndex),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.APPROVE_NAME_RESULT, this._rcbd144938d51bc),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELLABLE_PET_PALETTES, this._r3a57951023529d),
      (this.var_1198 = !1),
      this._offers?.dispose(),
      (this._offers = null),
      (this._r54a43947bb7f54 = null),
      (this._catalog = null),
      (this._r20003195d951b6 = null),
      (this.var_30 = null),
      (this._rc63b0340e99313 = !0),
      super.dispose());
  }
  init() {
    if (
      !super.init() ||
      ((this.var_1198 = !1),
      (this.var_30 = this.window?.findChildByName("name_input_text") ?? null),
      this.var_30 == null) ||
      ((this.var_30.caption = ""),
      (this._offers = new B()),
      (this.page?.offers.length ?? 0) === 0)
    )
      return !1;
    let r = this.page?.offers[0];
    return r == null ||
      ((this.var_453 = this.getPetTypeIndexFromProduct(r.localizationId)), this.var_453 < 8)
      ? !1
      : ((this._selectedProductCode = r.localizationId),
        this.updateAvailablePalettes(r.localizationId),
        (this._r0cc16a558f9fd9 = (this._r54a43947bb7f54?.length ?? 0) > 0 ? 0 : -1),
        this._offers.add(this.var_453, r),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.COLOUR_INDEX, this.onColourIndex),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.APPROVE_NAME_RESULT, this._rcbd144938d51bc),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.SELLABLE_PET_PALETTES, this._r3a57951023529d),
        !0);
  }
  imageReady(r, t) {
    this.disposed || (r === this.var_4783 && (this.setPreviewImage(t, !0), this._rd886c8bcbe0933()));
  }
  imageFailed(r) {}
  _rd886c8bcbe0933 = n((r = null) => {
    if (this._rc63b0340e99313) return;
    this.events?.dispatchEvent?.(new UnkClass_121d99(this._r7f47dd305b3bb7));
    let t = this._offers?.getWithIndex(0) ?? null;
    (t != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(t)), this.initializePaletteSelection());
  }, "_rd886c8bcbe0933");
  initializePaletteSelection() {
    if (this._r54a43947bb7f54 == null) return;
    let r = [];
    for (let t = 0; t < a.MAX_PALETTES && t < this._r54a43947bb7f54.length; t++) {
      let i = this._r54a43947bb7f54[t];
      if (i == null) continue;
      let s = this._catalog?.roomEngine?._r9c502eedb73502(this.var_453, i.paletteId);
      s != null &&
        (s.primaryColor === s.secondaryColor
          ? r.push([s.primaryColor])
          : r.push([s.primaryColor, s.secondaryColor]));
    }
    this.events?.dispatchEvent?.(new CatalogWidgetMultiColoursEvent(r, "ctlg_clr_27x22_1", "ctlg_clr_27x22_2", "ctlg_clr_27x22_3"));
  }
  onColourIndex = n((r) => {
    this._r50bbe69f04ca20(r.index);
  }, "onColourIndex");
  _r50bbe69f04ca20(r) {
    if ((this._r54a43947bb7f54?.length ?? 0) === 0) return;
    let t = r;
    ((t < 0 || t >= (this._r54a43947bb7f54?.length ?? 0)) && (t = 0),
      (this._r0cc16a558f9fd9 = t),
      this.updateImage());
  }
  getPetLocalization() {
    if (this._r0cc16a558f9fd9 < 0 || this._r54a43947bb7f54 == null) return "";
    let r = this._r54a43947bb7f54[this._r0cc16a558f9fd9] ?? null;
    if (r == null) return "";
    let t = this.getRaceLocalizationKey(this.var_453, r.breedId);
    return this._catalog?.localization?.getLocalization(t, t) ?? t;
  }
  _r7f47dd305b3bb7 = n((r) => {
    this.var_1198 ||
      this.getPurchaseParameters() === "" ||
      ((this.var_1198 = !0),
      this._catalog?._r90e0541bd3ebaf(this.var_30?.caption ?? "", 1));
  }, "_r7f47dd305b3bb7");
  _rae8e17ddaeb413 = n((r) => {
    this.updateImage();
  }, "_rae8e17ddaeb413");
  _rcbd144938d51bc = n((r) => {
    if (!this.var_1198) return;
    this.var_1198 = !1;
    let t = r._r549e697cdd257f;
    switch ((r.result !== 0 && this._catalog?._ra2855e753d5c74(!1), r.result)) {
      case 1:
        this._r107a8ad68289e7("long", t);
        return;
      case 2:
        this._r107a8ad68289e7("short", t);
        return;
      case 3:
        this._r107a8ad68289e7("chars", t);
        return;
      case 4:
        this._r107a8ad68289e7("bobba", t);
        return;
    }
    let i = this.getPurchaseParameters();
    i !== "" &&
      this._catalog?.showPurchaseConfirmation(
        this._offers?.getWithIndex(0) ?? null,
        this.page?.pageId ?? -1,
        i,
        1,
        null,
        null,
        !0,
        null,
        this.getPetImage(),
      );
  }, "_rcbd144938d51bc");
  constructErrorMessage(r, t) {
    let i = this._catalog?.localization;
    if (i == null) return "";
    let s = `catalog.alert.petname.${r}`,
      o = `${s}.additionalInfo`;
    i._r43eae9731f5b27(o, "additional_info", t ?? "");
    let d = i.getLocalization(s),
      c = i.getLocalization(o);
    return ((t?.length ?? 0) > 0 && (c?.length ?? 0) > 0 && (d = c), d);
  }
  _r3a57951023529d = n((r) => {
    r._raeb033db5aa083 === this._selectedProductCode &&
      ((this._r54a43947bb7f54 = this._r0b22f28f729a20(r._rdb6847933cfd17)),
      this.initializePaletteSelection(),
      this._r50bbe69f04ca20(0),
      this.updateImage());
  }, "_r3a57951023529d");
  _r0b22f28f729a20(r) {
    if (r == null) return null;
    let t = [];
    for (let i of r) i.type === this.var_453 && i.sellable && t.push(i);
    return t;
  }
  getPetImage() {
    if (
      (this._offers?.getWithIndex(0) ?? null) == null ||
      this._r0cc16a558f9fd9 < 0 ||
      this._r54a43947bb7f54 == null
    )
      return null;
    let t = this._r54a43947bb7f54[this._r0cc16a558f9fd9] ?? null;
    if (t == null) return null;
    let i = this._catalog?.roomEngine ?? null;
    if (i == null) return null;
    let s = this.var_453,
      o = t.paletteId,
      d = 16777215,
      f = a.NORMAL_SIZE_PETS.indexOf(s) === -1 ? new k(135, 0, 0) : new k(90, 0, 0),
      l = [];
    if (s === 15) {
      let _ = i.getPetLayerIdForTag(s, "hair"),
        h = i.getPetLayerIdForTag(s, "tail"),
        p = i._r58b39b996d47ea(s, "hair"),
        m = i._r58b39b996d47ea(s, "tail"),
        v = p != null ? parseInt(p.id, 10) : -1,
        w = m != null ? parseInt(m.id, 10) : -1;
      l = [new PetCustomPart(_, -1, v), new PetCustomPart(h, -1, w)];
    }
    let b = i.getPetImage(s, o, d, f, 64, this, !0, 0, l);
    return b != null ? ((this.var_4783 = b.id), b.data) : null;
  }
  updateImage() {
    let r = this._offers?.getWithIndex(0) ?? null;
    if (r == null || this._r0cc16a558f9fd9 < 0) return;
    let t = this.getPetImage();
    t != null && this.setPreviewImage(t, !0);
    let i = this.window?.findChildByName("ctlg_teaserimg_1") ?? null;
    this._catalog != null &&
      this._window != null &&
      (this._r20003195d951b6 = this._catalog.utils.showPriceOnProduct(
        r,
        this._window,
        this._r20003195d951b6,
        i,
        -6,
        !1,
        6,
      ));
    let s = this._window?.findChildByName("pet_breed_text");
    s != null && (s.caption = this.getPetLocalization());
  }
  getPurchaseParameters() {
    let r = this.var_30?.caption ?? "";
    if (r.length === 0)
      return (
        this._catalog?.windowManager.alert(
          "${catalog.alert.purchaseerror.title}",
          "${catalog.alert.petname.empty}",
          0,
          (i, s) => {
            i.dispose();
          },
        ),
        ""
      );
    if (this._r0cc16a558f9fd9 < 0 || this._r54a43947bb7f54 == null) return "";
    let t = this._r54a43947bb7f54[this._r0cc16a558f9fd9] ?? null;
    return t == null
      ? ""
      : `${r}
${t.paletteId}
${this.addZeroPadding("FFFFFF", 6)}`;
  }
  setPreviewImage(r, t) {
    if (this.window == null || this.window.disposed) {
      r?.dispose();
      return;
    }
    let i = r,
      s = t;
    i == null && ((i = new A(1, 1)), (s = !0));
    let o = this.window.findChildByName("ctlg_teaserimg_1");
    if (o != null) {
      (o.bitmap == null && (o.bitmap = new A(o.width, o.height, !0, 16777215)),
        o.bitmap.fillRect(o.bitmap.rect, 16777215));
      let d = 1;
      a.NORMAL_SIZE_PETS.indexOf(this.var_453) === -1 && (d = 2);
      let c = new A(i.width * d, i.height * d, !0, 16777215);
      c.draw(i, new Pe(d, 0, 0, d));
      let f = new E((o.width - c.width) / 2, (o.height - c.height) / 2);
      (o.bitmap.copyPixels(c, c.rect, f, null, null, !0), o.invalidate(), c.dispose());
    }
    s && i.dispose();
  }
  getPetTypeIndexFromProduct(r) {
    if (r.length === 0) return 0;
    let t = 0;
    for (t = r.length - 1; t >= 0 && !Number.isNaN(parseInt(r.charAt(t), 10)); t--);
    return t > 0 ? parseInt(r.substring(t + 1), 10) : -1;
  }
  getRaceLocalizationKey(r, t) {
    return `pet.breed.${r}.${t}`;
  }
  addZeroPadding(r, t) {
    let i = r;
    for (; i.length < t;) i = `0${i}`;
    return i;
  }
  updateAvailablePalettes(r) {
    this._r54a43947bb7f54 == null &&
      (this._r54a43947bb7f54 = this._r0b22f28f729a20(this._catalog?._r01481f204d0f88(r) ?? null));
  }
  _r107a8ad68289e7(r, t) {
    this._catalog?.windowManager.alert(
      "${catalog.alert.purchaseerror.title}",
      this.constructErrorMessage(r, t),
      0,
      (i, s) => {
        i.dispose();
      },
    );
  }
}
