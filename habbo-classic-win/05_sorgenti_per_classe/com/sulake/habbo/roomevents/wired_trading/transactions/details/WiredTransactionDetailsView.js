// Estratto da HabboAirLauncher.deobf.js, riga 374534.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/transactions/details/WiredTransactionDetailsView.as
// Nome offuscato: _i2cb4068e1db3a1

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("transaction_details_xml").content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      this.closeButton.addEventListener(u.CLICK, this.onClose),
      this.extraInfoButton.addEventListener(u.CLICK, this.onExtraButtonClick),
      (this.var_2015 = new jee(this.var_63, this.withdrawalsContainer)),
      (this._rf55d862f137990 = new jee(this.var_63, this.depositsContainer)),
      (this._r184b0340ca7b0a = this._window.findChildByName("extra_info_bubble")),
      this._window.desktop.addChild(this._r184b0340ca7b0a),
      (this._r184b0340ca7b0a.visible = !1),
      this._r184b0340ca7b0a.addEventListener(y.const_210, this._r7b73c2d0eeb79d));
  }
  static {
    n(this, "WiredTransactionDetailsView");
  }
  static PROPERTY_TRANSACTION_TYPE = "transaction_type";
  static PROPERTY_TIMESTAMP = "timestamp";
  static PROPERTY_ROOM_ID = "room_id";
  static PROPERTY_CHEST_IDS = "chest_ids";
  static PROPERTY_USERNAME = "username";
  static PROPERTY_EXTRA = "extra";
  static DESKTOP_WINDOW_LAYER = 1;
  _disposed = !1;
  var_2015;
  _rf55d862f137990;
  _window;
  _r184b0340ca7b0a;
  get disposed() {
    return this._disposed;
  }
  hide() {
    if (this.isShowing()) {
      let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      (e?.removeChild(this._window), this.clear());
    }
  }
  show() {
    if (!this.isShowing()) {
      let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      e != null && (e.addChild(this._window), this._window.center());
    }
  }
  clear() {
    ((this._r184b0340ca7b0a.visible = !1), this.var_2015.clear(), this._rf55d862f137990.clear());
  }
  isShowing() {
    return this._window.parent != null;
  }
  updateUI() {
    if (this.var_63.details == null) return;
    let e = this.var_63.details,
      r = e._r2c99812064dbc2;
    ((this._r3ff1a085d560e3(a.PROPERTY_TRANSACTION_TYPE).text = this.loc(
      `wired_transactions.type.${r._r3a0a691d948b48}`,
    )),
      (this._r3ff1a085d560e3(a.PROPERTY_TIMESTAMP).text = r._r7b6f1526b2d3b9),
      (this._r3ff1a085d560e3(a.PROPERTY_ROOM_ID).text = `${r.flatId}`),
      (this._r3ff1a085d560e3(a.PROPERTY_CHEST_IDS).text = e._rbe205cea74d983.join(", ")),
      (this._r3ff1a085d560e3(a.PROPERTY_USERNAME).text = r.userName),
      (this._r3ff1a085d560e3(a.PROPERTY_EXTRA).text = r._r77c24ce0abc845 === "" ? "-" : r._r77c24ce0abc845),
      this.var_2015.itemsInitialize(
        r.withdrawFurniCount,
        e._rdfeb07c237e6b3,
        r._r18acd6f116ae77,
        e._r431988e817bf43,
      ),
      this._rf55d862f137990.itemsInitialize(
        r.depositFurniCount,
        e._r85141b69102c4a,
        r._r8e2adacf7fbd03,
        e._r431988e817bf43,
      ),
      (this._r184b0340ca7b0a.visible = !1),
      this._window.activate());
  }
  loc(e) {
    return this.var_63.localizationManager.getLocalization(e, e);
  }
  dispose() {
    this._disposed ||
      (this._r184b0340ca7b0a?.dispose(),
      (this._r184b0340ca7b0a = null),
      this.var_2015?.dispose(),
      this._rf55d862f137990?.dispose(),
      (this.var_2015 = null),
      (this._rf55d862f137990 = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r7b73c2d0eeb79d = n((e) => {
    this._r184b0340ca7b0a.visible = !1;
  }, "_r7b73c2d0eeb79d");
  onExtraButtonClick = n((e) => {
    ((this._r184b0340ca7b0a.visible = !0), a._r42c6332c17af4b(this._r184b0340ca7b0a, this.extraInfoButton));
  }, "onExtraButtonClick");
  static _r42c6332c17af4b(e, r) {
    let t = new D();
    (r.getGlobalRectangle(t),
      (e.position = new E(t.x + t.width + 3, t.y + 1 + t.height / 2 - e.height / 2)),
      e.activate());
  }
  _r3ff1a085d560e3(e) {
    return this.getPairWindow(e).getListItemAt(1);
  }
  getPairWindow(e) {
    return this._window.findChildByName(`${e}_pair`);
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get withdrawalsContainer() {
    return this._window.findChildByName("withdrawals_container");
  }
  get depositsContainer() {
    return this._window.findChildByName("deposits_container");
  }
  get extraInfoButton() {
    return this._window.findChildByName("extra_info_button");
  }
}
