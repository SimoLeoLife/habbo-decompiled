// Estratto da HabboAirLauncher.deobf.js, riga 308583.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/UseProductConfirmationView.as
// Nome offuscato: _ic70f9e8832b057

class a {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "UseProductConfirmationView");
  }
  static _r99f8f2c261c4ff = -1;
  static _r3c842e8e2bd1c6 = 0;
  static PRODUCT_PAGE_CUSTOM_PART = 1;
  static PRODUCT_PAGE_CUSTOM_PART_SHAMPOO = 2;
  static PRODUCT_PAGE_SADDLE = 3;
  static PRODUCT_PAGE_REVIVE = 4;
  static PRODUCT_PAGE_REBREED = 5;
  static PRODUCT_PAGE_FERTILIZE = 6;
  static const_181 = "header_button_close";
  static const_150 = "save_button";
  static const_257 = "cancel_text";
  static const_300 = "ok_button";
  static const_495 = "preview_image_region";
  _window = null;
  var_1271 = !1;
  _r4bc9d9ca27f4a2 = -1;
  var_2101 = -1;
  var_3216 = 0;
  var_689 = null;
  _r7982e3490a9f12 = null;
  get disposed() {
    return this.var_1271;
  }
  get _r7891a81652af2d() {
    return this._r4bc9d9ca27f4a2;
  }
  get targetRoomObjectId() {
    return this.var_2101;
  }
  dispose() {
    this.disposed ||
      (this._window?.dispose(),
      (this._window = null),
      (this.var_689 = null),
      (this._r7982e3490a9f12 = null),
      (this.var_1271 = !0));
  }
  open(e, r, t) {
    let i = this.var_17.handler?._r2eac8239a09fe7?.roomId ?? 0,
      s = this.var_17.handler?.roomEngine?._ra1f5cb56d0c2d8(i, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    if (
      (s != null
        ? ((this.var_689 = this.var_17.handler?.getFurniData(s) ?? null),
          (this._r4bc9d9ca27f4a2 = s.getId()))
        : ((this.var_689 =
            this.var_17.handler?.container?.sessionDataManager?.getFloorItemData(e) ?? null),
          (this._r4bc9d9ca27f4a2 = t)),
      (this.var_2101 = r),
      (this._r7982e3490a9f12 =
        this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null),
      this.var_689 == null || this._r7982e3490a9f12 == null)
    )
      return;
    let o = a._r99f8f2c261c4ff;
    switch (this.var_689.category) {
      case class_1901.PET_SHAMPOO:
        o = a._r3c842e8e2bd1c6;
        break;
      case class_1901.PET_CUSTOM_PART:
        o = a.PRODUCT_PAGE_CUSTOM_PART;
        break;
      case class_1901.PET_CUSTOM_PART_SHAMPOO:
        o = a.PRODUCT_PAGE_CUSTOM_PART_SHAMPOO;
        break;
      case class_1901.PET_SADDLE:
        o = a.PRODUCT_PAGE_SADDLE;
        break;
      case class_1901.MONSTERPLANT_REVIVAL:
        o = a.PRODUCT_PAGE_REVIVE;
        break;
      case class_1901.MONSTERPLANT_REBREED:
        o = a.PRODUCT_PAGE_REBREED;
        break;
      case class_1901.MONSTERPLANT_FERTILIZE:
        o = a.PRODUCT_PAGE_FERTILIZE;
        break;
      default:
        break;
    }
    o !== a._r99f8f2c261c4ff &&
      (this.setWindowContent(o),
      this._window?.center(),
      this._window != null && (this._window.visible = !0));
  }
  imageReady(e, r) {
    this.disposed || (this.var_3216 === e && (this.updatePreviewImage(r), (this.var_3216 = 0)));
  }
  imageFailed(e) {}
  setWindowContent(e) {
    if (this.var_689 == null || this._r7982e3490a9f12 == null) return;
    if (
      (this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.title",
        "name",
        this._r7982e3490a9f12.name,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.title.monsterplant",
        "name",
        this._r7982e3490a9f12.name,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.title.monsterplant_rebreed",
        "name",
        this._r7982e3490a9f12.name,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.title.monsterplant_fertilize",
        "name",
        this._r7982e3490a9f12.name,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.monsterplant.plant.name",
        "name",
        this._r7982e3490a9f12.name,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.monsterplant.plant.raritylevel",
        "level",
        String(this._r7982e3490a9f12.rarityLevel),
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.monsterplant.plant.description",
        "name",
        this._r7982e3490a9f12.ownerName,
      ),
      this._window == null)
    ) {
      let o = "use_product_widget_frame_xml";
      switch (e) {
        case a.PRODUCT_PAGE_REVIVE:
          o = "use_product_widget_frame_monsterplant_xml";
          break;
        case a.PRODUCT_PAGE_REBREED:
          o = "use_product_widget_frame_monsterplant_rebreed_xml";
          break;
        case a.PRODUCT_PAGE_FERTILIZE:
          o = "use_product_widget_frame_monsterplant_fertilize_xml";
          break;
      }
      let d = this.var_17.assets?.getAssetByName(o)?.content ?? null;
      ((this._window = d != null ? this.var_17.windowManager?.buildFromXML(d, 0) : null),
        this.addClickListener(a.const_181));
    }
    if (this._window == null) return;
    (this.var_17.localization?._r43eae9731f5b27(
      "useproduct.widget.text.saddle",
      "productName",
      this.var_689.localizedName,
    ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.text.custompart",
        "productName",
        this.var_689.localizedName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.text.custompartshampoo",
        "productName",
        this.var_689.localizedName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.text.shampoo",
        "productName",
        this.var_689.localizedName,
      ),
      this.var_17.localization?._r43eae9731f5b27(
        "useproduct.widget.text.revive_monsterplant",
        "productName",
        this.var_689.localizedName,
      ));
    let r = this._window,
      t = r.content;
    if (t == null) return;
    for (; t.numChildren > 0;) t.removeChildAt(0);
    let i = this.createWindow(e);
    (i != null && t.addChild(i),
      r.resizeToFitContent(),
      this.addClickListener(a.const_495),
      this.addClickListener(a.const_150),
      this.addClickListener(a.const_257));
    let s = this.resolvePreviewImage(this.var_689) ?? new A(10, 10);
    (this.updatePreviewImage(s), this._window.invalidate());
  }
  createWindow(e) {
    let r = "";
    switch (e) {
      case a._r3c842e8e2bd1c6:
        r = "use_product_controller_shampoo_xml";
        break;
      case a.PRODUCT_PAGE_CUSTOM_PART:
        r = "use_product_controller_custom_part_xml";
        break;
      case a.PRODUCT_PAGE_CUSTOM_PART_SHAMPOO:
        r = "use_product_controller_custom_part_shampoo_xml";
        break;
      case a.PRODUCT_PAGE_SADDLE:
        r = "use_product_controller_saddle_xml";
        break;
      case a.PRODUCT_PAGE_REVIVE:
        r = "use_product_controller_revive_monsterplant_xml";
        break;
      case a.PRODUCT_PAGE_REBREED:
        r = "use_product_controller_rebreed_monsterplant_xml";
        break;
      case a.PRODUCT_PAGE_FERTILIZE:
        r = "use_product_controller_fertilize_monsterplant_xml";
        break;
      default:
        throw new Error(`Invalid type for Use Product View content creation: ${e}`);
    }
    let t = this.var_17.assets?.getAssetByName(r)?.content ?? null;
    return t != null ? this.var_17.windowManager?.buildFromXML(t, 0) : null;
  }
  resolvePreviewImage(e) {
    if (e == null || this._r7982e3490a9f12 == null) return null;
    let r = new class_3800(this._r7982e3490a9f12.figure),
      t = e._r2bdd6e3cc1f573.split(" "),
      i = null,
      s = null;
    switch (e.category) {
      case class_1901.PET_SHAMPOO: {
        if (t.length < 2) break;
        let o = t[1] ?? "",
          d =
            this.var_17.handler?.roomEngine?._r7c3a409976ffaf(
              Number.parseInt(t[0] ?? "-1", 10),
              o,
            ) ?? [],
          c = this.var_17.handler?.roomEngine?._r9c502eedb73502(
            Number.parseInt(t[0] ?? "-1", 10),
            r.paletteId,
          ),
          f = r.paletteId;
        for (let l of d)
          if (c != null && l.breed === c.breed) {
            f = Number.parseInt(l.id, 10);
            break;
          }
        s =
          this.var_17.handler?.roomEngine?.getPetImage(
            r.typeId,
            f,
            r.color,
            new k(90),
            64,
            this,
            !0,
            0,
            r.customParts,
          ) ?? null;
        break;
      }
      case class_1901.PET_CUSTOM_PART: {
        if (t.length < 4) break;
        let o = (t[1] ?? "").split(","),
          d = (t[2] ?? "").split(","),
          c = (t[3] ?? "").split(","),
          f = [];
        for (let l = 0; l < o.length; l++) {
          let b = Number.parseInt(o[l] ?? "-1", 10),
            _ = r.getCustomPart(b),
            h = Number.parseInt(c[l] ?? "-1", 10);
          (_ != null && (h = _.paletteId), f.push(new PetCustomPart(b, Number.parseInt(d[l] ?? "-1", 10), h)));
        }
        s =
          this.var_17.handler?.roomEngine?.getPetImage(
            r.typeId,
            r.paletteId,
            r.color,
            new k(90),
            64,
            this,
            !0,
            0,
            f,
          ) ?? null;
        break;
      }
      case class_1901.PET_CUSTOM_PART_SHAMPOO: {
        if (t.length < 3) break;
        let o = (t[1] ?? "").split(","),
          d = (t[2] ?? "").split(","),
          c = [];
        for (let f = 0; f < o.length; f++) {
          let l = Number.parseInt(o[f] ?? "-1", 10),
            _ = r.getCustomPart(l)?.partId ?? -1;
          c.push(new PetCustomPart(l, _, Number.parseInt(d[f] ?? "-1", 10)));
        }
        s =
          this.var_17.handler?.roomEngine?.getPetImage(
            r.typeId,
            r.paletteId,
            r.color,
            new k(90),
            64,
            this,
            !0,
            0,
            c,
          ) ?? null;
        break;
      }
      case class_1901.PET_SADDLE: {
        if (t.length < 4) break;
        let o = (t[1] ?? "").split(","),
          d = (t[2] ?? "").split(","),
          c = (t[3] ?? "").split(","),
          f = [];
        for (let l = 0; l < o.length; l++)
          f.push(
            new PetCustomPart(
              Number.parseInt(o[l] ?? "-1", 10),
              Number.parseInt(d[l] ?? "-1", 10),
              Number.parseInt(c[l] ?? "-1", 10),
            ),
          );
        for (let l of r.customParts) o.indexOf(String(l.layerId)) === -1 && f.push(l);
        s =
          this.var_17.handler?.roomEngine?.getPetImage(
            r.typeId,
            r.paletteId,
            r.color,
            new k(90),
            64,
            this,
            !0,
            0,
            f,
          ) ?? null;
        break;
      }
      case class_1901.MONSTERPLANT_REBREED:
      case class_1901.MONSTERPLANT_REVIVAL:
      case class_1901.MONSTERPLANT_FERTILIZE: {
        let o = "rip",
          d = this._r03f497a576ad65(this._r7982e3490a9f12._r2fdf1f24b1e612);
        if (
          d != null &&
          ((o = d.getStringToStringMap()?.getString(RoomObjectVariableEnum.AVATAR_POSTURE) ?? o), o === "rip")
        ) {
          let c = this._r7982e3490a9f12.petLevel;
          o = c < 7 ? `grw${c}` : "std";
        }
        s =
          this.var_17.handler?.roomEngine?.getPetImage(
            r.typeId,
            r.paletteId,
            r.color,
            new k(90),
            64,
            this,
            !0,
            0,
            r.customParts,
            o,
          ) ?? null;
        break;
      }
      default:
        break;
    }
    return (s != null && ((this.var_3216 = s.id), (i = s.data)), i);
  }
  _r03f497a576ad65(e) {
    let r = this.var_17.handler?.roomEngine?.activeRoomId ?? 0;
    return this.var_17.handler?.roomEngine?._ra1f5cb56d0c2d8(r, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null;
  }
  updatePreviewImage(e) {
    if (this._window == null || e == null) return;
    let r = this._window.findChildByName("preview_image");
    if (r == null) return;
    r.bitmap == null ? (r.bitmap = new A(r.width, r.height, !0, 0)) : r.bitmap.fillRect(r.bitmap.rect, 0);
    let t = this.var_17.assets?.getAssetByName("use_product_preview_bg_png")?.content;
    t != null && r.bitmap.copyPixels(t, t.rect, new E(0, 0));
    let i = new E((r.width - e.width) / 2, (r.height - e.height) / 2);
    r.bitmap.copyPixels(e, e.rect, i, null, null, !0);
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  addClickListener(e) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, this.onMouseClick);
  }
  onMouseClick = n((e) => {
    switch (e.target?.name) {
      case a.const_495:
        this._r7982e3490a9f12 != null &&
          this._rb461be1369dc19(this._r7982e3490a9f12._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
        break;
      case a.const_181:
      case a.const_257:
      case a.const_300:
        this.close();
        break;
      case a.const_150:
        (this._r7982e3490a9f12 != null &&
          this.var_17._r1515e6bde00451?.RoomWidgetLetUserInMessage(
            new RoomWidgetUseProductMessage(RoomWidgetUseProductMessage.PET_PRODUCT, this._r4bc9d9ca27f4a2, this._r7982e3490a9f12.webID),
          ),
          this.close());
        break;
    }
  }, "onMouseClick");
  _rb461be1369dc19(e, r) {
    let t = this._r92361c15cf57c2(e, r);
    if (t != null) {
      let i = this.var_17.handler?.container?._r2eac8239a09fe7?.roomId ?? 0;
      return (
        this.var_17.handler?.container?.roomEngine?._r5def02e220e83a(i, t.getId(), r),
        !0
      );
    }
    return !1;
  }
  _r92361c15cf57c2(e, r) {
    let t = this.var_17.handler?.container?._r2eac8239a09fe7?.roomId ?? 0;
    return this.var_17.handler?.container?.roomEngine?._ra1f5cb56d0c2d8(t, e, r) ?? null;
  }
}
