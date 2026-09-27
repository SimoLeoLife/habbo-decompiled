// Extracted from HabboAirLauncher.deobf.js, line 244663.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/WiredTradingModel.as
// Obfuscated name: _ia11eda1c0de509

class a {
  constructor(e, r, t, i, s, o, d, c) {
    this._inventory = e;
    this._communication = t;
    this._localization = o;
    this._notifications = c;
    ((this._rda580f0e3148d1 = new WiredTradingView(this, r, i, s, this._localization, d)),
      (this.var_793 = new WiredTradeRequirementsModel(this)));
  }
  static {
    n(this, "WiredTradingModel");
  }
  static _rd1b45c8681e29d = 0;
  static STATE_READY = 0;
  static STATE_ADDING_ITEMS = 1;
  static STATE_COUNTDOWN = 2;
  static STATE_CONFIRMING = 3;
  static STATE_CONFIRMED = 4;
  var_894 = !1;
  _disposed = !1;
  _state = a.STATE_READY;
  _ownUserNumItems = new B();
  _rf8fb1a967175e5 = 0;
  _r6f81b1b7685616 = 0;
  _re9c2f8f527063c = new B();
  _r1da17d4c15fb01 = 0;
  _r986eb088b819d5 = 0;
  _r109f8ac31651c7 = !1;
  var_3191 = 0;
  var_3159 = 0;
  _tradeStartTime = 0;
  var_793;
  _rda580f0e3148d1;
  get disposed() {
    return this._disposed;
  }
  get inventory() {
    if (this._inventory == null) throw new Error("WiredTradingModel has been disposed.");
    return this._inventory;
  }
  get running() {
    return this.var_894;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    ((this._state = e), this._rda580f0e3148d1?._rc09580d3570ca0());
  }
  get _reac3de971475b5() {
    return this._ownUserNumItems;
  }
  get _rd4b58ad37afd4f() {
    return this._rf8fb1a967175e5;
  }
  get _r3274da186156f8() {
    return this._r6f81b1b7685616;
  }
  get _r4d1c8872890eb3() {
    return this._re9c2f8f527063c;
  }
  get _rdf8a60e8cf6ace() {
    return this._r1da17d4c15fb01;
  }
  get _rd26653288e3b5e() {
    return this._r986eb088b819d5;
  }
  get _r1238571df4d291() {
    return this._r109f8ac31651c7;
  }
  get extra() {
    return this.var_3191;
  }
  get localization() {
    if (this._localization == null) throw new Error("WiredTradingModel has been disposed.");
    return this._localization;
  }
  get _r03057c3ba5278f() {
    return this.var_793;
  }
  get tradeTypeLocalization() {
    return (
      this._localization?.getLocalization(
        this.canAccept() ? "inventory.wired_trading.payment" : "inventory.wired_trading.trade",
      ) ?? ""
    );
  }
  get _r1426b7c44e0fd9() {
    return this.var_793?._r4013f23453854c?._rc4b0045dac224f ?? null;
  }
  get secondsLeft() {
    if (this.var_3159 <= 0 || this._tradeStartTime <= 0) return -1;
    let e = Math.trunc((_ia411d8d8194a3a() - this._tradeStartTime) / 1e3);
    return Math.max(this.var_3159 - e, 0);
  }
  get _rc4b476693b3b17() {
    return !0;
  }
  get _r6d75f838a2611e() {
    return new B();
  }
  get _r1e6236f9a053f8() {
    return this._rda580f0e3148d1;
  }
  onWiredTradeInitiate(e, r, t, i) {
    (t && this.close(!1, !1, !1),
      (this.var_894 = !1),
      this._state !== a.STATE_READY && (this.clear(), (this.state = a.STATE_READY)),
      (this.var_3159 = i),
      (this._tradeStartTime = _ia411d8d8194a3a()),
      this._rda580f0e3148d1?._ra59f122e8b8737(),
      this.var_793?.setRequirements(e, r),
      this._inventory?.toggleInventorySubPage(class_2245.WIRED_TRADING),
      t && this.var_793?._ra83cb240bf3b47());
  }
  requestInitialization() {}
  categorySwitch(e) {}
  subCategorySwitch(e) {
    !this.var_894 && e === class_2245.WIRED_TRADING
      ? this._r01b44431a279d6()
      : this.var_894 &&
        e !== class_2245.WIRED_TRADING &&
        this._state !== a.STATE_READY &&
        this.close(!1, !0);
  }
  closingInventoryView() {
    this.var_894 && this.close(!0, !0);
  }
  _r01b44431a279d6() {
    ((this.var_894 = !0),
      this.clear(),
      (this.state = a.STATE_ADDING_ITEMS),
      this._inventory?.onWiredTradeActiveChanged(),
      this._inventory?.view?.activate(),
      this._inventory?._r9275a8e42af3cc?.updateView());
  }
  requestAddItemsToTrading(e, r, t, i, s, o) {
    this._state === a.STATE_ADDING_ITEMS && this.send(new UnkMessageComposer_2args_f46dd3(!1, e));
  }
  _rd81a68895835ba(e) {}
  _r4a4d211373e306(e) {
    if (this._state !== a.STATE_ADDING_ITEMS) return;
    let t = this._reac3de971475b5.getWithIndex(e)?.peek();
    t != null && this._communication?.connection.send(new UnkMessageComposer_2args_f46dd3(!0, [t.id]));
  }
  _r8a665f94a05feb() {
    return this._state === a.STATE_ADDING_ITEMS
      ? (this.send(new UnkMessageComposer_1args_c0fc28(!1)), (this.state = a.STATE_COUNTDOWN), !0)
      : !1;
  }
  _r484203fde64a5c() {
    this._state === a.STATE_COUNTDOWN && (this.state = a.STATE_CONFIRMING);
  }
  _r9fab3ea8336c25() {
    return this._state === a.STATE_CONFIRMING
      ? (this.send(new UnkMessageComposer_1args_c0fc28(!0)), (this.state = a.STATE_CONFIRMED), !0)
      : !1;
  }
  send(e) {
    this._communication?.connection.send(e);
  }
  close(e, r, t = !0) {
    this.var_894 &&
      (this._rda580f0e3148d1?._r5d88ef79367c8e(),
      this._state !== a.STATE_READY && r && this._r1718fce2f8e038(),
      this.clear(),
      (this.state = a.STATE_READY),
      (this.var_894 = !1),
      this._inventory?.onWiredTradeActiveChanged(),
      e && this._inventory?.toggleInventorySubPage(class_2245.EMPTY),
      t && this._inventory?._r9275a8e42af3cc?.updateView());
  }
  _r1718fce2f8e038() {
    this._communication?.connection.send(new UnkMessageComposer_0args_6f5e4e());
  }
  updateItemGroupMaps(e, r, t, i, s) {
    this._inventory == null ||
      !this.var_894 ||
      ((this._ownUserNumItems = r),
      (this._rf8fb1a967175e5 = e._ra48214168e4114),
      (this._r6f81b1b7685616 = e._r11f090fb8f4bf7),
      (this._re9c2f8f527063c = t),
      (this._r1da17d4c15fb01 = e._r1fb673a3faa136),
      (this._r986eb088b819d5 = e._r821f7b065dcaf4),
      (this._r109f8ac31651c7 = i),
      (this.var_3191 = s),
      this._rda580f0e3148d1?._r6b5281c06cf7e5(),
      this.var_793?.requirementsStateUpdated(),
      this._inventory._r9275a8e42af3cc?._rc4b19b364e6310());
  }
  _rd00cc10f407d56(e) {
    (this._inventory?._r94dcfedd8fb086?.close(!0, !1), this._rda580f0e3148d1?.alertTradeCancelled(e));
  }
  _ra79e055f7fb4e8() {
    this._inventory?._r94dcfedd8fb086?.close(!0, !1);
  }
  updateView() {}
  selectItemById(e) {}
  _r7e20a768d73d22() {
    return this.inventory;
  }
  getWindowContainer() {
    return this._rda580f0e3148d1?.getWindowContainer() ?? null;
  }
  _rae12c5b2a7f2fb() {
    let e = [];
    if (this._ownUserNumItems == null || this._ownUserNumItems.disposed) return e;
    for (let r = 0; r < this._ownUserNumItems.length; r++) {
      let t = this._ownUserNumItems.getWithIndex(r);
      if (t != null)
        for (let i = 0; i < t._rafb6b19888a65c(); i++) {
          let s = t._r7823981d08072b(i);
          s != null && e.push(s.ref);
        }
    }
    return e;
  }
  canAccept() {
    return this.var_793?._r4013f23453854c?.isPaymentOnly() ?? !0;
  }
  dispose() {
    this._disposed ||
      (this.var_793?.dispose(),
      (this.var_793 = null),
      this._rda580f0e3148d1?.dispose(),
      (this._rda580f0e3148d1 = null),
      (this._inventory = null),
      (this._communication = null),
      (this._localization = null),
      (this._notifications = null),
      (this._disposed = !0));
  }
  clear() {
    ((this._ownUserNumItems = new B()),
      (this._r6f81b1b7685616 = 0),
      (this._rf8fb1a967175e5 = 0),
      (this._re9c2f8f527063c = new B()),
      (this._r986eb088b819d5 = 0),
      (this._r1da17d4c15fb01 = 0),
      (this._r109f8ac31651c7 = !1),
      (this.var_3191 = 0),
      this._rda580f0e3148d1?._r6b5281c06cf7e5());
  }
}
