// Extracted from HabboAirLauncher.deobf.js, line 192057.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/PetsCatalogWidget.as
// Obfuscated name: _i2aa67793cf48f9

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "PetsCatalogWidget");
  }
  _offers = null;
  var_453 = -1;
  _r0cc16a558f9fd9 = 0;
  _availableColors = 0;
  _selectedProductCode = "";
  var_1198 = !1;
  _r54a43947bb7f54 = null;
  _r1fed97381165b2 = [];
  _rc63b0340e99313 = !1;
  _r20003195d951b6 = null;
  var_4783 = -1;
  var_30 = null;
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
      (this._r1fed97381165b2 = []),
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
      ((this.var_453 = this.getPetTypeIndexFromProduct(r.localizationId)), this.var_453 >= 8)
      ? !1
      : (this.updateAvailablePalettes(r.localizationId),
        (this._selectedProductCode = r.localizationId),
        this._r8924e0cdb3a5b4(),
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
  _r8924e0cdb3a5b4() {
    ((this._r1fed97381165b2 = []),
      this.var_453 === 0 || this.var_453 === 1
        ? (this._r1fed97381165b2 = [
            16743226, 16750435, 16764339, 16094464, 16498012, 16704690, 15586304, 16115545, 16513201, 8694111,
            11585939, 14413767, 6664599, 9553845, 12971486, 8358322, 10002885, 13292268, 10780600, 12623573,
            14403561, 12418717, 14327229, 15517403, 14515069, 15764368, 16366271, 11250603, 13948116,
            16777215, 14256481, 14656129, 15848130, 14005087, 14337152, 15918540, 15118118, 15531929, 9764857,
            11258085,
          ])
        : this.var_453 === 2
          ? (this._r1fed97381165b2 = [
              16579283, 15378351, 8830016, 15257125, 9340985, 8949607, 6198292, 8703620, 9889626, 8972045,
              12161285, 13162269, 8620113, 12616503, 8628101, 13827840, 9764857,
            ])
          : this.var_453 === 3 || this.var_453 === 5
            ? (this._r1fed97381165b2 = [16777215, 15658734, 14540253])
            : this.var_453 === 4
              ? (this._r1fed97381165b2 = [16777215, 16053490, 15464440, 16248792, 15396319, 15007487])
              : this.var_453 === 6
                ? (this._r1fed97381165b2 = [16777215, 15658734, 14540253, 16767177, 16770205, 16751331])
                : this.var_453 === 7 &&
                  (this._r1fed97381165b2 = [13421772, 11447982, 16751331, 10149119, 16763290, 16743786]));
  }
  _rd886c8bcbe0933 = n((r = null) => {
    if (this._rc63b0340e99313) return;
    this.events?.dispatchEvent?.(new UnkClass_121d99(this._r7f47dd305b3bb7));
    let t = this._offers?.getWithIndex(0) ?? null;
    (t != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(t)),
      this.events?.dispatchEvent?.(
        new CatalogWidgetColoursEvent(this._r1fed97381165b2.slice(), "ctlg_clr_27x22_1", "ctlg_clr_27x22_2", "ctlg_clr_27x22_3"),
      ));
  }, "_rd886c8bcbe0933");
  _r7f47dd305b3bb7 = n((r) => {
    this.var_1198 ||
      this.getPurchaseParameters() === "" ||
      ((this.var_1198 = !0),
      this._catalog?._r90e0541bd3ebaf(this.var_30?.caption ?? "", 1));
  }, "_r7f47dd305b3bb7");
  onDropMenuEvent = n((r, t) => {
    if (r.type !== y.const_238) return;
    let s = t?.selection ?? -1;
    this._r54a43947bb7f54 == null ||
      s < 0 ||
      s >= this._r54a43947bb7f54.length ||
      ((this._r0cc16a558f9fd9 = s), this.updateImage());
  }, "onDropMenuEvent");
  _rae8e17ddaeb413 = n((r) => {
    this.updateImage();
  }, "_rae8e17ddaeb413");
  onColourIndex = n((r) => {
    ((this._availableColors = r.index),
      (this._availableColors < 0 || this._availableColors >= this._r1fed97381165b2.length) &&
        (this._availableColors = 0),
      this.updateImage());
  }, "onColourIndex");
  _rcbd144938d51bc = n((r) => {
    if (this.var_1198 === !1) return;
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
  _r3a57951023529d = n((r) => {
    r._raeb033db5aa083 === this._selectedProductCode &&
      ((this._r54a43947bb7f54 = this._r0b22f28f729a20(r._rdb6847933cfd17)),
      (this._r0cc16a558f9fd9 = 0),
      this.updatePaletteSelections());
  }, "_r3a57951023529d");
  _r0b22f28f729a20(r) {
    if (r == null) return null;
    let t = [];
    for (let i of r) i.type === this.var_453 && i.sellable && t.push(i);
    return t;
  }
  updatePaletteSelections() {
    let r = this._catalog?.localization,
      t = [];
    for (let s of this._r54a43947bb7f54 ?? [])
      t.push(
        r?.getLocalization(
          this.getRaceLocalizationKey(this.var_453, s.breedId),
          this.getRaceLocalizationKey(this.var_453, s.breedId),
        ) ?? this.getRaceLocalizationKey(this.var_453, s.breedId),
      );
    let i = this.window?.findChildByName("type_drop_menu");
    i != null &&
      (t.length > 1
        ? (i.populate(t), (i.selection = 0), (i.procedure = this.onDropMenuEvent), (i.visible = !0))
        : (i.visible = !1),
      this.updateImage());
  }
  getPetImage() {
    if (
      (this._offers?.getWithIndex(0) ?? null) == null ||
      this._r54a43947bb7f54 == null ||
      this._r0cc16a558f9fd9 >= this._r54a43947bb7f54.length
    )
      return null;
    let t = 16777215;
    this._availableColors >= 0 &&
      this._availableColors < this._r1fed97381165b2.length &&
      (t = this._r1fed97381165b2[this._availableColors] ?? t);
    let i = this._r54a43947bb7f54[this._r0cc16a558f9fd9] ?? null;
    if (i == null) return null;
    let s =
      this._catalog?.roomEngine?.getPetImage(
        this.var_453,
        i.paletteId,
        t,
        new k(90, 0, 0),
        64,
        this,
      ) ?? null;
    return s != null ? ((this.var_4783 = s.id), s.data) : null;
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
  }
  getPurchaseParameters() {
    let r = this.var_30?.caption ?? "";
    if (r.length === 0)
      return (
        this._catalog?.windowManager.alert(
          "${catalog.alert.purchaseerror.title}",
          "${catalog.alert.petname.empty}",
          0,
          (s, o) => {
            s.dispose();
          },
        ),
        ""
      );
    if (
      this._r54a43947bb7f54 == null ||
      this._r0cc16a558f9fd9 >= this._r54a43947bb7f54.length ||
      this._availableColors >= this._r1fed97381165b2.length
    )
      return "";
    let t = this._r1fed97381165b2[this._availableColors] ?? 16777215,
      i = this._r54a43947bb7f54[this._r0cc16a558f9fd9] ?? null;
    return i == null
      ? ""
      : `${r}
${i.paletteId}
${this.addZeroPadding(t.toString(16).toUpperCase(), 6)}`;
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
      let d = 2,
        c = new A(i.width * d, i.height * d, !0, 16777215);
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
      ((this._r54a43947bb7f54 = this._r0b22f28f729a20(this._catalog?._r01481f204d0f88(r) ?? null)),
      (this._r0cc16a558f9fd9 = 0),
      this._r54a43947bb7f54 != null && this.updatePaletteSelections());
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
}
