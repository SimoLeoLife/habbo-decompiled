// Extracted from HabboAirLauncher.deobf.js, line 316241.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/credit/CreditFurniWidget.as
// Obfuscated name: _i8ef1c1be6a1569

class a extends RoomWidgetBase {
  static {
    n(this, "CreditFurniWidget");
  }
  static _rd7f6a323d840d1 = 100;
  static _r8634183c488b34 = 100;
  _window = null;
  var_2280 = -1;
  var_3563 = 0;
  _r3a80157e0698f7 = !1;
  constructor(e, r, t, i) {
    super(e, r, t, i);
  }
  dispose() {
    (this.hideInterface(), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetCreditFurniUpdateEvent.UPDATE_CREDIT_FURNI, this._r89f0690ee52550), super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e?.removeEventListener?.(RoomWidgetCreditFurniUpdateEvent.UPDATE_CREDIT_FURNI, this._r89f0690ee52550);
  }
  _r89f0690ee52550 = n((e) => {
    (this.hideInterface(),
      (this.var_2280 = e.objectId),
      (this.var_3563 = e._r065c0ef6de5bd5),
      (this._r3a80157e0698f7 = e._r5ca93599defdd6),
      this.showInterface());
  }, "_r89f0690ee52550");
  showInterface() {
    if (this.var_2280 === -1) return;
    this._window != null && (this._window.dispose(), (this._window = null));
    let e = this._r3a80157e0698f7
        ? "nft.creditfurni.redeem.description"
        : "widgets.furniture.credit.redeem.value",
      r = this.localizations?.getLocalizationWithParams(e, "", "value", String(this.var_3563)) ?? "",
      t = this.localizations?.getLocalization("nft.creditfurni.redeem.prompt") ?? "",
      i = this.assets?.getAssetByName("credit_redeem");
    if (
      i == null ||
      ((this._window = this.windowManager?.createWindow(
        "creditfurniui_container",
        "",
        HabboWindowType.CONTAINER,
        HabboWindowStyle.DEFAULT,
        class_2094._r4884ed3c10147b | class_2094._r26338c8d88c4e5,
        new D(a._rd7f6a323d840d1, a._r8634183c488b34, 2, 2),
        null,
        0,
      )),
      this._window == null)
    )
      return;
    (this._window.buildFromXML(i.content),
      (this._window.background = !0),
      (this._window.color = 33554431));
    let s = this._window.findChildByName("exchange_text");
    s != null && (s.caption = this._r3a80157e0698f7 ? `${r} ${t}` : r);
    let o = this._window.findChildByName("cancel");
    (o?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      (o = this._window.findChildByName("exchange")),
      o?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      (o = this._window.findChildByName("link")),
      o != null && ((o.visible = !this._r3a80157e0698f7), o.addEventListener(u.CLICK, this._r7972d0b08e8494)),
      (o = this._window.findChildByTag("close")),
      o != null && (o.procedure = this.onWindowClose),
      this._window.addEventListener(u.CLICK, this._r7972d0b08e8494));
  }
  hideInterface() {
    (this._window != null && (this._window.dispose(), (this._window = null)),
      (this.var_2280 = -1),
      (this.var_3563 = 0));
  }
  _r594970296f380e() {
    if (this.var_2280 !== -1 && this._r1515e6bde00451 != null) {
      let e = new RoomWidgetCreditFurniRedeemMessage(RoomWidgetCreditFurniRedeemMessage.const_274, this.var_2280);
      (this._r1515e6bde00451.RoomWidgetLetUserInMessage(e), this.hideInterface());
    }
  }
  _r7972d0b08e8494 = n((e) => {
    switch (e.target?.name ?? "") {
      case "link": {
        let i = this.localizations?.getLocalization("widget.furni.info.url") ?? "";
        i.startsWith("http") && Ae.navigateToURL(i, "habboMain");
        break;
      }
      case "exchange":
        this._r594970296f380e();
        break;
      case "cancel":
      case "close":
        this.hideInterface();
        break;
    }
  }, "_r7972d0b08e8494");
  onWindowClose = n((e, r) => {
    e.type === u.CLICK && this.hideInterface();
  }, "onWindowClose");
}
