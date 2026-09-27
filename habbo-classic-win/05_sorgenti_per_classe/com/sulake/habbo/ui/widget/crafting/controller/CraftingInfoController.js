// Extracted from HabboAirLauncher.deobf.js, line 312782.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/controller/CraftingInfoController.as
// Obfuscated name: _i206ea1af068d0a

class a {
  constructor(e) {
    this.var_17 = e;
    this._r834034b605f603 = new CraftingProgressBarController(this.var_17);
  }
  static {
    n(this, "CraftingInfoController");
  }
  static DEBUG_PROGRESSBAR_TESTING_MODE = !1;
  _r834034b605f603;
  dispose() {
    (this._r834034b605f603?.dispose(), (this._r834034b605f603 = null), (this.var_17 = null));
  }
  setState(e, ...r) {
    if (this.var_17?.handler?.container == null) return;
    let t = "",
      i = "",
      s = r;
    r.length > 0 && Array.isArray(r[0]) && (s = r[0]);
    let o = this.var_17.handler.container.localization,
      d;
    switch (e) {
      case class_2920.DEFAULT_VIEW:
        ((t = "${crafting.info.start}"), this.setButtonVisible(!1));
        break;
      case class_2920.const_939:
        (this._r8e04191b96adaa(),
          (t = "${crafting.info.mixer.empty}"),
          this.disableButtonWith("${crafting.status.mixer.notavailable}"));
        break;
      case class_2920.RECIPE_EMPTY:
        (this._r8e04191b96adaa(), (t = "${crafting.info.product.empty}"), this.setButtonVisible(!1));
        break;
      case class_2920.const_485:
        (this._r8e04191b96adaa(), (t = "${crafting.info.mixer.hit}"), this.enableButton());
        break;
      case class_2920.const_729: {
        this._r8e04191b96adaa();
        let l = s[0] ?? 0;
        ((t =
          o?.getLocalization("crafting.info.mixer.hit.plus.others", "crafting.info.mixer.hit.plus.others") ??
          "crafting.info.mixer.hit.plus.others"),
          (t = t.replace("%number%", String(l))),
          this.enableButton());
        break;
      }
      case class_2920.const_586: {
        this._r8e04191b96adaa();
        let l = s[0] ?? 0;
        ((t =
          o?.getLocalization("crafting.info.mixer.others", "crafting.info.mixer.others") ??
          "crafting.info.mixer.others"),
          (t = t.replace("%number%", String(l))),
          this.disableButtonWith("${crafting.status.mixer.notavailable}"));
        break;
      }
      case class_2920.const_1232:
        (this._r8e04191b96adaa(),
          (t = "${crafting.info.mixer.nohit}"),
          this.disableButtonWith("${crafting.status.mixer.notavailable}"));
        break;
      case class_2920.RECIPE_COMPLETE:
        if (((d = s[0] ?? null), d == null)) return;
        (this.requestIconFromRoomEngine(d),
          (t =
            o?.getLocalization("crafting.info.product.complete", "crafting.info.product.complete") ??
            "crafting.info.product.complete"),
          (i = d.localizedName),
          this.enableButton());
        break;
      case class_2920.RECIPE_INCOMPLETE:
        if (((d = s[0] ?? null), d == null)) return;
        (this.requestIconFromRoomEngine(d),
          (t =
            o?.getLocalization("crafting.info.product.incomplete", "crafting.info.product.incomplete") ??
            "crafting.info.product.incomplete"),
          (i = d.localizedName),
          this.disableButtonWith("${crafting.status.recipe.incomplete}"));
        break;
      case class_2920.ITEM_NOT_IN_INVENTORY:
        if (((d = s[0] ?? null), d == null)) return;
        (this.requestIconFromRoomEngine(d),
          (t =
            o?.getLocalization("crafting.info.mixer.notininventory", "crafting.info.mixer.notininventory") ??
            "crafting.info.mixer.notininventory"),
          (t = t.replace("%product%", d.localizedName)));
        break;
      case class_2920.STATE_CRAFTING_RESULT_OK:
        if (((d = s[0] ?? null), d == null)) return;
        (this.requestIconFromRoomEngine(d),
          (t =
            o?.getLocalization("crafting.info.result.ok", "crafting.info.result.ok") ??
            "crafting.info.result.ok"),
          (i = d.localizedName),
          this.setButtonVisible(!1));
        break;
      case class_2920.STATE_WORKING:
        ((t = "${crafting.info.working}"), this.setButtonVisible(!1));
        break;
    }
    let c = this.mainWindow?.findChildByName("info_text1");
    c != null && (c.text = t);
    let f = this.mainWindow?.findChildByName("info_text2");
    (f != null && (f.text = i), !1);
  }
  enableButton() {
    this.setButtonVisible(!0);
    let e = this.mainWindow?.findChildByName("btn_craft");
    e == null ||
      this.var_17 == null ||
      (this.var_17.handler.isOwner
        ? ((e.caption = "${crafting.btn.craft}"), e.enable(), (e.procedure = this.onCraftTriggered))
        : ((e.caption = "${crafting.btn.notowner}"), e.disable()));
  }
  disableButtonWith(e) {
    this.setButtonVisible(!0);
    let r = this.mainWindow?.findChildByName("btn_craft");
    r == null ||
      this.var_17 == null ||
      (this.var_17.handler.isOwner
        ? (r.caption = e)
        : (r.caption = "${crafting.btn.notowner}"),
      r.disable());
  }
  _r54cf4b4cc74722(e, r) {
    r
      ? e === 0
        ? this.setState(class_2920.const_485)
        : this.setState(class_2920.const_729, e)
      : e > 0
        ? this.setState(class_2920.const_586, e)
        : this.setState(class_2920.const_1232);
  }
  onCraftTriggered = n((e, r) => {
    e.type === u.DOWN && this._r075da68885ae2a();
  }, "onCraftTriggered");
  _r8e04191b96adaa() {
    (this.setIconBitmapData(null), this._r9c87d6a18bfa90());
  }
  requestIconFromRoomEngine(e) {
    if (this.var_17?.handler.container?.roomEngine == null) return;
    let r = null;
    switch (e.type) {
      case class_1803.PRODUCT_TYPE_STUFF:
        r = this.var_17.handler.container.roomEngine._r65a31a885a1252(e.id, this);
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        r = this.var_17.handler.container.roomEngine.getWallItemDataByName(e.id, this);
        break;
    }
    r?.data != null && this.imageReady(0, r.data);
  }
  imageReady(e, r) {
    (this.setIconBitmapData(r), this._r9c87d6a18bfa90());
  }
  imageFailed(e) {
    (this.setIconBitmapData(null), this._r9c87d6a18bfa90());
  }
  _r9c87d6a18bfa90() {}
  _r075da68885ae2a() {
    this.var_17?.handler != null &&
      ((this.var_17.handler._r2292b359576f1e = !0),
      this.setButtonVisible(!1),
      this._r834034b605f603?.show());
  }
  _r4815bb5d004544() {
    (this.var_17?.handler != null && (this.var_17.handler._r2292b359576f1e = !1),
      this._r834034b605f603?.hide(),
      this.setButtonVisible(!0));
  }
  _rcc53d01cbe4c97() {
    if ((this._r834034b605f603?.hide(), a.DEBUG_PROGRESSBAR_TESTING_MODE)) {
      this._r4815bb5d004544();
      return;
    }
    this.var_17?._rd685edc1a24b27();
  }
  setIconBitmapData(e) {
    let r = this.mainWindow?.findChildByName("furniture_icon");
    r != null && (r.bitmap = e);
  }
  setButtonVisible(e) {
    let r = this.mainWindow?.findChildByName("btn_craft") ?? null;
    r != null && (r.visible = e);
  }
  get mainWindow() {
    return this.var_17?.window ?? null;
  }
}
