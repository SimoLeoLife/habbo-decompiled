// Estratto da HabboAirLauncher.deobf.js, riga 187815.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/OfferController.as
// Nome offuscato: _icedc1963e9153d

class {
  constructor(e) {
    this._catalog = e;
    (this._catalog?.connection?.addMessageEvent(new _ib78ac2d5d326c5(this._r7a921fd088fe6a)),
      this._catalog?.connection?.addMessageEvent(new _i392f2699762e51(this._r84ff16493c9003)),
      this._catalog?.events.addEventListener?.(PurseUpdateEvent.const_565, this._ra56eed862289ec),
      this._catalog?.sessionDataManager?.addProductsReadyEventListener(this));
  }
  static {
    n(this, "OfferController");
  }
  _offerDialog = null;
  _rcdc6d13d2284e5 = null;
  var_1681 = null;
  var_1963 = null;
  _r5e2f332b756d39 = null;
  _disposed = !1;
  get catalog() {
    if (this._catalog == null) throw new Error("OfferController catalog is not available.");
    return this._catalog;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._r4b29951ea6f2a9(),
      this._r5e2f332b756d39?.dispose(),
      (this._r5e2f332b756d39 = null),
      this._catalog?.events.removeEventListener?.(PurseUpdateEvent.const_565, this._ra56eed862289ec),
      (this._catalog = null));
  }
  productDataReady() {
    this._catalog?.connection?.send(new _i36bbf13b6d5db1());
  }
  _ra0cb123153b0ed(e) {
    if (e.trackingState !== class_3655.REJECTED)
      switch (e.trackingState) {
        case 0:
        case class_3655._r5a042feef68cd3:
        case class_3655.SELECTED:
          this._r21c907afa1db07(e);
          break;
        default:
          this._ra0340cd95f4305(e);
          break;
      }
  }
  _r21c907afa1db07(e) {
    this._rcdc6d13d2284e5 == null &&
      (this._r4b29951ea6f2a9(),
      (this._rcdc6d13d2284e5 = new MallOfferDialogView(this, e)),
      this._catalog?.connection?.send(new _i79593064f96e0f(e.targetedOfferId, class_3655._r5a042feef68cd3)));
  }
  _ra0340cd95f4305(e, r = !1) {
    (this._r4b29951ea6f2a9(), (this.var_1681 = new i5e(this, e)));
  }
  _r87e161c15a332b(e) {
    (this._catalog?.connection?.send(new _i79593064f96e0f(e.targetedOfferId, class_3655._re35e4808dabf45)),
      this._catalog?._r6e81894a74658f(),
      this._ra0340cd95f4305(e));
  }
  _ra55d26082ecac6(e) {
    (this._catalog?.connection?.send(new _i79593064f96e0f(e.targetedOfferId, class_3655.const_122)),
      this._ra0340cd95f4305(e));
  }
  _ra29cfd646939ae(e) {
    (this._r4b29951ea6f2a9(),
      (this.var_1681 = new s5e(this, e)),
      this._catalog?.connection?.send(new _ice9155d1abd6fd(e.id, class_3655.const_122)));
  }
  maximizeOffer(e) {
    if (this._offerDialog != null || (this._r4b29951ea6f2a9(), e.isExpired())) return;
    let r = this.getLayoutOverride(e);
    ((this._offerDialog = new n5e(this, e)),
      r.length > 0 && this._catalog?.assets.hasAsset(r)
        ? this._offerDialog.buildWindow(r)
        : this._offerDialog.buildWindow("targeted_offer_dialog_xml"),
      this._catalog?.connection?.send(new _ice9155d1abd6fd(e.id, class_3655._re35e4808dabf45)));
  }
  _r1dc5f5d80d9851(e, r) {
    (this._catalog?.connection?.send(new _ia5d39536ded6bc(e.id, r)),
      e.purchased(r),
      e._r12cb3a063dbb1e > 0 ? this._ra29cfd646939ae(e) : this._r4b29951ea6f2a9());
  }
  sendLogEvent(e, r = "") {
    this._catalog?.connection?.send(new class_2154("TargetedOffers", "FLASH.UNKNOWN", e, r));
  }
  _r55bf6a6841c7d1(e) {
    (this.sendLogEvent(class_3485.TARGETED_OFFER_OPEN_CREDITS_PAGE_CLICKED, e.identifier), this._catalog?._r6e81894a74658f());
  }
  _ra96f07968c4ed0(e) {
    this._catalog?.toolbar?.extensionView?._ra96f07968c4ed0(
      ToolbarDisplayExtensionIds.TARGETED_OFFER,
      e,
      class_1954.SLOT_TARGETED_OFFER,
    );
  }
  showConfirmation(e, r) {
    this.var_1963 == null && (this._r4b29951ea6f2a9(), (this.var_1963 = new TargetedOfferPurchaseConfirmationView(this, e, r)));
  }
  _r4b29951ea6f2a9() {
    (this._offerDialog?.dispose(),
      (this._offerDialog = null),
      this._rcdc6d13d2284e5?.dispose(),
      (this._rcdc6d13d2284e5 = null),
      this.var_1681 != null &&
        (this._catalog?.toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.TARGETED_OFFER),
        this.var_1681.dispose(),
        (this.var_1681 = null)),
      this.var_1963?.dispose(),
      (this.var_1963 = null));
  }
  _r7a921fd088fe6a = n((e) => {
    let r = ClassUtils.getParser(e, _iaa31d1a268690a);
    if (r == null) return;
    let t = r?.data != null ? new r5e(r.data) : null;
    t != null &&
      (t.trackingState === class_3655.const_122 ? this._ra29cfd646939ae(t) : this.maximizeOffer(t));
  }, "_r7a921fd088fe6a");
  _r84ff16493c9003 = n((e) => {
    (this._r5e2f332b756d39?.dispose(), (this._r5e2f332b756d39 = new f5e(this)));
  }, "_r84ff16493c9003");
  _ra56eed862289ec = n(() => {
    this._offerDialog?.updateButtonStates();
  }, "_ra56eed862289ec");
  getLayoutOverride(e) {
    return this._catalog?.getProperty(`targeted.offer.override.layout.${e.id}`) ?? "";
  }
}
