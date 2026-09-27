// Extracted from HabboAirLauncher.deobf.js, line 307292.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/NestBreedingSuccessView.as
// Obfuscated name: _id2bda7e35b8871

class a {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "NestBreedingSuccessView");
  }
  static const_181 = "header_button_close";
  static const_170 = "cancel_button";
  static const_300 = "button.ok";
  _window = null;
  var_1271 = !1;
  var_3113 = 0;
  var_3123 = 0;
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    this.disposed ||
      ((this.var_1271 = !0), this._window?.dispose(), (this._window = null));
  }
  open(e, r) {
    ((this.var_3113 = e), (this.var_3123 = r));
    let t = this.var_17.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(e) ?? null;
    t != null &&
      (this.setWindowContent(t.name, t.figure),
      this._window != null && (this._window.visible = !0));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  imageReady(e, r) {
    this.disposed || this.updatePreviewImage(r, "pet_image");
  }
  imageFailed(e) {}
  setWindowContent(e, r) {
    if (this._window == null) {
      let i = this.var_17.assets?.getAssetByName("nestBreedingSuccess_xml")?.content ?? null;
      if (
        ((this._window = i != null ? this.var_17.windowManager?.buildFromXML(i, 0) : null),
        this._window == null)
      )
        return;
      this.addClickListener(a.const_181);
    }
    (this._window.center(),
      (this._window.visible = !0),
      this.addClickListener(a.const_300),
      (this._window.findChildByName("pet.name").caption = e),
      (this._window.findChildByName("pet.raritycategory").caption =
        `\${breedpets.nestbreeding.success.raritycategory.${this.var_3123}}`));
    let t = this.resolvePreviewImage(r);
    (this.updatePreviewImage(t ?? new A(10, 10), "pet_image"), this._window.invalidate());
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
  onMouseClick = n((e) => {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_170:
      case a.const_300:
        this.close();
        break;
    }
  }, "onMouseClick");
}
