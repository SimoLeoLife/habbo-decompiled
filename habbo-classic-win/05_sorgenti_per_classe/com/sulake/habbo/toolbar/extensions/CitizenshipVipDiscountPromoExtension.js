// Estratto da HabboAirLauncher.deobf.js, riga 342063.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/CitizenshipVipDiscountPromoExtension.as
// Nome offuscato: _i4ca8c16e8e75c6

class {
  static {
    n(this, "CitizenshipVipDiscountPromoExtension");
  }
  _toolbar;
  _view = null;
  _expanded = !0;
  _originalHeight = 216;
  _r3874c88f71c422 = null;
  constructor(e) {
    this._toolbar = e;
  }
  dispose() {
    this._toolbar != null &&
      (this.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.CLUB_PROMO),
      this.destroyWindow(),
      (this._toolbar = null));
  }
  onClubChanged(e) {
    if (this._toolbar != null)
      if (
        this._toolbar.inventory?._r5336785a0c8883 &&
        this._view == null &&
        this.isExtensionEnabled()
      ) {
        ((this._view = this.createWindow()), this._r3874c88f71c422 != null && this._r715d1b92811c0a());
        let r = this._toolbar.inventory._rb6cef0460c1b1c;
        (r < 1440 &&
          r > 0 &&
          ((this._r3874c88f71c422 = new _i05394ecc0c0c4d(r * 60 * 1e3, 1)),
          this._r3874c88f71c422.addEventListener(DeBouncer._rf33144eac61595, this._r8e85ed0de6252c),
          this._r3874c88f71c422.start()),
          this.assignState(),
          this._toolbar.extensionView?._rf18fdd973c7e53(ToolbarDisplayExtensionIds.VIP_QUESTS) ||
            this._toolbar.extensionView?._ra96f07968c4ed0(
              ToolbarDisplayExtensionIds.CLUB_PROMO,
              this._view,
              class_1954.SLOT_CLUB_PROMO,
            ));
      } else
        (this._toolbar.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.VIP_QUESTS),
          this.destroyWindow());
  }
  get extensionView() {
    return this._toolbar?.extensionView ?? null;
  }
  createWindow() {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    let e = this._toolbar.assets.getAssetByName("vip_discount_promotion_v2_xml"),
      r = this._toolbar.windowManager.buildFromXML(e?.content, 1);
    if (r == null) throw new Error("Failed to construct citizenship VIP discount promo from XML.");
    return (
      r.findChildByName("extend_button")?.addEventListener(u.CLICK, this.onButtonClicked),
      r.findChildByName("minimize_region")?.addEventListener(u.CLICK, this.onMinMax),
      r.findChildByName("maximize_region")?.addEventListener(u.CLICK, this.onMinMax),
      (this._originalHeight = r.height),
      r
    );
  }
  destroyWindow() {
    (this._view?.dispose(), (this._view = null), this._r715d1b92811c0a());
  }
  onButtonClicked = n((e) => {
    this._toolbar?.inventory?.clubLevel === dr.VIP &&
      (this._toolbar.connection?.send(
        new class_2154("DiscountPromo", "citizenshipdiscount", "client.club.extend.discount.clicked"),
      ),
      this._toolbar.connection?.send(new _i40c8cbe3cea2be()));
  }, "onButtonClicked");
  assignState() {
    this._view != null &&
      ((this._view.findChildByName("content_itemlist").visible = this._expanded),
      (this._view.findChildByName("promo_img").visible = this._expanded),
      (this._view.height = this._expanded ? this._originalHeight : 33));
  }
  _r715d1b92811c0a() {
    this._r3874c88f71c422 != null &&
      (this._r3874c88f71c422.stop(),
      this._r3874c88f71c422.removeEventListener(DeBouncer._rf33144eac61595, this._r8e85ed0de6252c),
      (this._r3874c88f71c422 = null));
  }
  _r8e85ed0de6252c = n((e) => {
    (this._toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.CLUB_PROMO), this.destroyWindow());
  }, "_r8e85ed0de6252c");
  isExtensionEnabled() {
    return (
      this._toolbar?.inventory?.clubLevel === dr.VIP &&
      this._toolbar.getBoolean("club.membership.extend.vip.promotion.enabled")
    );
  }
  onMinMax = n((e) => {
    ((this._expanded = !this._expanded), this.assignState());
  }, "onMinMax");
}
