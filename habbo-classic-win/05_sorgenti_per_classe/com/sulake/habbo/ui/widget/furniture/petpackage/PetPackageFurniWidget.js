// Extracted from HabboAirLauncher.deobf.js, line 318153.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/petpackage/PetPackageFurniWidget.as
// Obfuscated name: _ied0a793609eae6

class extends RoomWidgetBase {
  static {
    n(this, "PetPackageFurniWidget");
  }
  _window = null;
  var_4146 = -1;
  var_344 = -1;
  var_970 = null;
  var_1998 = !1;
  constructor(e, r, t, i) {
    super(e, r, t, i);
  }
  dispose() {
    (this.hideInterface(), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetPetPackageUpdateEvent.const_233, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_RESULT, this._r89f0690ee52550),
      e.addEventListener?.(RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_UPDATE_PET_IMAGE, this._r89f0690ee52550),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetPetPackageUpdateEvent.const_233, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_RESULT, this._r89f0690ee52550),
      e.removeEventListener?.(RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_UPDATE_PET_IMAGE, this._r89f0690ee52550));
  }
  _r89f0690ee52550 = n((e) => {
    switch (e.type) {
      case RoomWidgetPetPackageUpdateEvent.const_233:
        (this.hideInterface(),
          (this.var_344 = e.objectId),
          (this.var_970 = e.image),
          (this.var_4146 = e.typeId),
          this.showInterface(),
          this.showPetImage());
        break;
      case RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_RESULT: {
        if (!this.var_1998) return;
        this.var_1998 = !1;
        let r = e._r008c105caa5e72,
          t = e._r549e697cdd257f,
          i = "bobba";
        switch (r) {
          case 0:
            this.hideInterface();
            return;
          case 1:
            i = "long";
            break;
          case 2:
            i = "short";
            break;
          case 3:
            i = "chars";
            break;
        }
        let s = this.constructErrorMessage(i, t);
        this.windowManager?.alert("${widgets.petpackage.alert.petname.title}", s, 0, (o, d) => o.dispose());
        break;
      }
      case RoomWidgetPetPackageUpdateEvent.OPEN_PET_PACKAGE_UPDATE_PET_IMAGE:
        if (e.objectId !== this.var_344) return;
        ((this.var_970 = e.image), this.showPetImage());
        break;
    }
  }, "_r89f0690ee52550");
  constructErrorMessage(e, r) {
    let t = `catalog.alert.petname.${e}`,
      i = `${t}.additionalInfo`;
    this.localizations?._r43eae9731f5b27(i, "additional_info", r ?? "");
    let s = this.localizations?.getLocalization(t) ?? "",
      o = this.localizations?.getLocalization(i) ?? "";
    return ((r?.length ?? 0) > 0 && o.length > 0 && (s = o), s);
  }
  hideInterface() {
    (this._window?.dispose(),
      (this._window = null),
      (this.var_344 = -1),
      (this.var_1998 = !1),
      (this.var_970 = null));
  }
  showInterface() {
    if (this.var_344 < 0) return;
    let e = this.var_970 != null ? "petpackage" : "petpackage_new",
      r = this.assets?.getAssetByName(e);
    if (r?.content == null) return;
    (this._window?.dispose(),
      (this._window = this.windowManager?.buildFromXML(r.content)),
      this._window?.center(),
      this._window?.header
        ?.findChildByTag("close")
        ?.addEventListener(u.CLICK, this.onWindowClose),
      this._window?.findChildByName("pick_name")?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      this._window?.findChildByName("cancel")?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      this._window?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      this.showPetImage());
  }
  showPetImage() {
    if (this.var_970 == null || this._window == null) return;
    let e = this._window.findChildByName("pet_image");
    if (e == null) return;
    (e.bitmap?.dispose(), (e.bitmap = new A(e.width, e.height, !0, 0)));
    let r = new E((e.width - this.var_970.width) / 2, (e.height - this.var_970.height) / 2);
    e.bitmap.copyPixels(this.var_970, this.var_970.rect, r);
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hideInterface();
  }, "onWindowClose");
  _r7972d0b08e8494 = n((e) => {
    switch (e.target?.name ?? "") {
      case "pick_name":
        this.sendOpenPetPackage();
        break;
      case "cancel":
        this.hideInterface();
        break;
    }
  }, "_r7972d0b08e8494");
  sendOpenPetPackage() {
    if (this.var_1998 || this.var_344 === -1) return;
    let e = this.getName();
    if (e == null || e.length < 1) {
      this.windowManager?.alert(
        "${widgets.petpackage.alert.petname.title}",
        "${catalog.alert.petname.short}",
        0,
        (r, t) => r.dispose(),
      );
      return;
    }
    ((this.var_1998 = !0),
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetOpenPetPackageMessage(RoomWidgetOpenPetPackageMessage.WIDGET_MESSAGE_OPEN_PET_PACKAGE, this.var_344, e)));
  }
  getName() {
    return this._window?.findChildByName("input")?.text ?? null;
  }
}
