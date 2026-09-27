// Extracted from HabboAirLauncher.deobf.js, line 185932.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purchase/RentConfirmationWindow.as
// Obfuscated name: _i9df63e77cf2591

class a {
  constructor(e) {
    this._catalog = e;
    ((this._offerMessageEvent = new class_2577(this._r6f0fdd304f17e0)),
      this._catalog.connection?.addMessageEvent(this._offerMessageEvent));
  }
  static {
    n(this, "RentConfirmationWindow");
  }
  static MODE_INFOSTAND = 1;
  static MODE_INVENTORY = 2;
  static MODE_CATALOGUE = 3;
  _disposed = !1;
  _offerMessageEvent = null;
  _window = null;
  _rbc127a8636f18d = !1;
  _id = -1;
  var_86 = null;
  _mode = 0;
  var_4081 = -1;
  var_5104 = -1;
  dispose() {
    this._disposed ||
      (this.close(),
      this._offerMessageEvent != null &&
        (this._catalog.connection?.removeMessageEvent(this._offerMessageEvent),
        (this._offerMessageEvent = null)),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  show(e, r, t = -1, i = -1, s = !1) {
    (this.close(),
      (this.var_86 = e),
      (this.var_4081 = t),
      (this.var_5104 = i),
      s
        ? (this._mode = a.MODE_CATALOGUE)
        : (this._mode = this.var_4081 > -1 ? a.MODE_INFOSTAND : a.MODE_INVENTORY));
    let o = e.type === class_1803.PRODUCT_TYPE_ITEM;
    this._catalog.connection?.send(new UnkMessageComposer_3args_39ec6e(o, e.fullName, r));
  }
  imageReady(e, r) {
    this._window != null &&
      e === this._id &&
      (this._window.findChildByName("image").bitmap = r);
  }
  imageFailed(e) {}
  _r6f0fdd304f17e0 = n((e) => {
    if (this.var_86 == null) return;
    let r = e.getParser();
    if (this.var_86.fullName !== r.furniTypeName) return;
    if (
      ((this._rbc127a8636f18d = r.buyout),
      this._catalog.getPurse().credits < r.priceInCredits)
    ) {
      this._catalog.showNotEnoughCreditsAlert();
      return;
    }
    if (this._catalog.getPurse().getActivityPointsForType(r.activityPointType) < r.priceInActivityPoints) {
      this._catalog.showNotEnoughActivityPointsAlert(r.activityPointType);
      return;
    }
    if (
      ((this._window = this._catalog.windowManager.buildFromXML(
        this._catalog.assets.getAssetByName("rent_confirmation")?.content,
      )),
      this._window == null)
    )
      return;
    (r.priceInCredits > 0
      ? ((this._window.findChildByName("price_amount").caption = r.priceInCredits.toString()),
        (this._window.findChildByName("price_type").assetUri = "toolbar_credit_icon_0"))
      : (this._window.findChildByName("price_amount").caption = r.priceInActivityPoints.toString()),
      this._rbc127a8636f18d &&
        ((this._window.caption = "${rent.confirmation.title.buyout}"),
        (this._window.findChildByName("rental_description").visible = !1),
        (this._window.findChildByName("ok_button").caption =
          "${catalog.purchase_confirmation.buy}")),
      (this._window.findChildByName("furni_name").caption = this.var_86.localizedName),
      this._window.findChildByName("content_list")?.arrangeListItems(),
      this._window.center(),
      (this._window.procedure = this.windowProcedure));
    let t = null;
    switch (this.var_86.type) {
      case class_1803.PRODUCT_TYPE_STUFF:
        t =
          this._catalog.roomEngine?._r5db1beeb89d785(
            this.var_86.id,
            new k(90, 0, 0),
            64,
            this,
          ) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        t =
          this._catalog.roomEngine?._r3ac60c12dafe70(
            this.var_86.id,
            new k(90, 0, 0),
            64,
            this,
          ) ?? null;
        break;
      default:
        break;
    }
    t != null && ((this._window.findChildByName("image").bitmap = t.data), (this._id = t.id));
  }, "_r6f0fdd304f17e0");
  windowProcedure = n((e, r) => {
    let t = e,
      i = r;
    if (!(t?.type !== u.CLICK || this._window == null || i == null))
      switch (i.name) {
        case "cancel_button":
        case "header_button_close":
          this.close();
          break;
        case "ok_button":
          switch (this._mode) {
            case a.MODE_INFOSTAND:
              this._catalog.connection?.send(
                new UnkMessageComposer_3args_361537(
                  this.var_86?.type === class_1803.PRODUCT_TYPE_ITEM,
                  this.var_4081,
                  this._rbc127a8636f18d,
                ),
              );
              break;
            case a.MODE_INVENTORY:
              this._catalog.connection?.send(new UnkMessageComposer_2args_d8a23b(this.var_5104, this._rbc127a8636f18d));
              break;
            case a.MODE_CATALOGUE:
              this.var_86 != null &&
                this._catalog._r68884ca8198b66(this.var_86.rentOfferId);
              break;
          }
          this.close();
          break;
        default:
          break;
      }
  }, "windowProcedure");
  close() {
    this._window != null &&
      (this._window.dispose(), (this._window = null), (this._id = -1));
  }
}
