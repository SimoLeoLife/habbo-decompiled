// Extracted from HabboAirLauncher.deobf.js, line 355747.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_chests/WiredMenuChestsTab.as
// Obfuscated name: _i9d5e780f303299

class a extends WiredMenuDefaultTab {
  static {
    n(this, "WiredMenuChestsTab");
  }
  static POLL_PREVIEW_MS = 2e4;
  static var_5930 = 500;
  static LOG_COLUMN_TYPE = "type";
  static LOG_COLUMN_USERNAME = "username";
  static LOG_COLUMN_WITHDRAWS = "withdraws";
  static name_9 = "deposits";
  static TRANSACTIONS_PREVIEW_AMOUNT = 10;
  static TRANSACTIONS_FIRST_PAGE = 1;
  var_1938;
  var_5173 = 0;
  var_2007 = !1;
  var_4508 = 0;
  var_1598 = null;
  constructor(e, r) {
    (super(e, r),
      this.createTransactionTable(),
      this.addMessageEvent(new class_3304((t) => this.class_3304(t))),
      this.lockYourChestsButton.addEventListener(u.CLICK, this._r0ee25b57a37353),
      this.unlockYourChestsButton.addEventListener(u.CLICK, this._rfe3d6bad57a1b2),
      this.lockAllChestsButton.addEventListener(u.CLICK, this._r8ea13be66a2e06),
      this.viewInDetailButton.addEventListener(u.CLICK, this.onViewInDetailClick));
  }
  _r327228a1fe703e() {
    (super._r327228a1fe703e(), this.clearData(), this.updateLoadingState(), this.requestData());
  }
  _r7730f6cdc2e2b0() {
    this.updateButtonsUI();
  }
  update(e) {
    if (!this._r71998b0210f450) return;
    let r = _ia411d8d8194a3a();
    (this.var_4508 < r - a.POLL_PREVIEW_MS && this.requestData(),
      !this._rb1888e9019ee7c &&
        this.var_2007 &&
        this.var_5173 < r - a.var_5930 &&
        ((this.var_2007 = !1), this.updateButtonsUI()));
  }
  dispose() {
    this.disposed || (this.var_1938.dispose(), (this.var_1598 = null), super.dispose());
  }
  isDataReady() {
    return this.var_1598 != null;
  }
  initializeInterface() {
    (this._r1a0bf053c97ca0(), this.updateButtonsUI());
  }
  class_3304(e) {
    let r = e.getParser().logs;
    r?.amount === a.TRANSACTIONS_PREVIEW_AMOUNT &&
      r.currentPage === a.TRANSACTIONS_FIRST_PAGE &&
      r._rebc2df37e3490e === class_3240.var_5887 &&
      ((this.var_1598 = r.logs ?? []),
      this._rb1888e9019ee7c ? this.updateLoadingState() : this._r1a0bf053c97ca0());
  }
  createTransactionTable() {
    this.var_1938 = new jn(this.controller.windowManager, this.transactionsTableViewContainer);
    let e = [
      new TableColumn(a.LOG_COLUMN_TYPE, this.loc("wiredmenu.chests.room_logs.column.type"), 0.28),
      new TableColumn(a.LOG_COLUMN_USERNAME, this.loc("wiredmenu.chests.room_logs.column.username"), 0.24),
      new TableColumn(a.LOG_COLUMN_WITHDRAWS, this.loc("wiredmenu.chests.room_logs.column.withdraws"), 0.24),
      new TableColumn(a.name_9, this.loc("wiredmenu.chests.room_logs.column.deposits"), 0.24),
    ];
    this.var_1938.initialize(e);
  }
  clearData() {
    this.var_1598 = null;
  }
  updateButtonsUI() {
    (we.disableSection(this.lockYourChestsButton, !this.controller.hasWritePermission || this.var_2007),
      we.disableSection(this.unlockYourChestsButton, !this.controller.hasWritePermission || this.var_2007),
      we.disableSection(
        this.lockAllChestsButton,
        !this.controller._r7443e8b7432aa8() || this.var_2007,
      ));
  }
  _r1a0bf053c97ca0() {
    we.disableSection(this.transactionsTableViewContainer, (this.var_1598?.length ?? 0) === 0);
    let e = [];
    for (let r of this.var_1598 ?? []) e.push(new TransactionPreviewTableObject(this, r));
    this.var_1938._rb800e4dd98c360(e);
  }
  requestData() {
    ((this.var_4508 = _ia411d8d8194a3a()), this.controller.send(new UnkMessageComposer_2args_7be3e6(a.TRANSACTIONS_PREVIEW_AMOUNT, a.TRANSACTIONS_FIRST_PAGE)));
  }
  _r0ee25b57a37353 = n((e) => {
    (this.controller.send(new UnkMessageComposer_2args_703229(!0, !1)), this._r778a6e8c790bd3());
  }, "_r0ee25b57a37353");
  _rfe3d6bad57a1b2 = n((e) => {
    (this.controller.send(new UnkMessageComposer_2args_703229(!1, !1)), this._r778a6e8c790bd3());
  }, "_rfe3d6bad57a1b2");
  _r8ea13be66a2e06 = n((e) => {
    this.controller._r41f5cc7d3516ce.windowManager.confirm(
      "${wiredmenu.chests.chest_control.lock_all.warning.title}",
      "${wiredmenu.chests.chest_control.lock_all.warning.desc}",
      0,
      this._rfec1971bf2a836,
    );
  }, "_r8ea13be66a2e06");
  _rfec1971bf2a836 = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 && (this.controller.send(new UnkMessageComposer_2args_703229(!0, !0)), this._r778a6e8c790bd3()));
  }, "_rfec1971bf2a836");
  _r778a6e8c790bd3() {
    ((this.var_2007 = !0),
      (this.var_5173 = _ia411d8d8194a3a()),
      this._rb1888e9019ee7c || this.updateButtonsUI());
  }
  onViewInDetailClick = n((e) => {
    this.controller.send(new UnkMessageComposer_2args_7be3e6(TransactionConfig.PAGE_SIZE, 1));
  }, "onViewInDetailClick");
  get lockYourChestsButton() {
    return this.container.findChildByName("lock_own_button");
  }
  get unlockYourChestsButton() {
    return this.container.findChildByName("unlock_own_button");
  }
  get lockAllChestsButton() {
    return this.container.findChildByName("lock_all_button");
  }
  get transactionsTableViewContainer() {
    return this.container.findChildByName("logs_table_container");
  }
  get viewInDetailButton() {
    return this.container.findChildByName("view_in_detail_button");
  }
}
