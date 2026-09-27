// Estratto da HabboAirLauncher.deobf.js, riga 357075.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_monitor/WiredMenuMonitorTab.as
// Nome offuscato: _i3c0b158fe4ce87

class a extends WiredMenuDefaultTab {
  static {
    n(this, "WiredMenuMonitorTab");
  }
  static POLL_MONITOR_MS = 500;
  static CLEAR_LOGS_TIMEOUT = 4e3;
  static COLOR_RED = "ff5733";
  static COLOR_ORANGE = "BD7800";
  static COLOR_GREEN = "008000";
  static THRESHOLD_USAGE_1 = 0.3;
  static THRESHOLD_USAGE_2 = 0.7;
  static THRESHOLD_FURNI_1 = 0.6;
  static THRESHOLD_FURNI_2 = 0.85;
  static THRESHOLD_VARS_1 = 0.5;
  static THRESHOLD_VARS_2 = 0.8;
  static LOG_COLUMN_TYPE = "type";
  static var_5806 = "category";
  static var_5323 = "quantity";
  static LOG_COLUMN_LATEST = "latest";
  var_2353;
  var_4508 = 0;
  _rdcbe36e648aec1 = null;
  _r9f651ae55690ea = 0;
  var_1618 = null;
  var_97 = null;
  constructor(e, r) {
    (super(e, r),
      this.createLogTable(),
      this.addMessageEvent(new class_3139((t) => this._rab908800b760ab(t))),
      this.addMessageEvent(new class_2788((t) => this.class_2788(t))),
      this.clearButton.addEventListener(u.CLICK, this._r7e5d4aa03855ee),
      this.logOverviewButton.addEventListener(u.CLICK, this._rdc8ae427938b40),
      this.monitorImage2.addEventListener(u.CLICK, this.onClickMonitor));
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
    this.var_4508 < r - a.POLL_MONITOR_MS && this.requestData();
  }
  _r71adcf720599bb(e) {
    (this._rdcbe36e648aec1 == null && (this._rdcbe36e648aec1 = new WiredErrorInfoView(this.controller)),
      this._rdcbe36e648aec1.initialize(e),
      this._rdcbe36e648aec1.show());
  }
  dispose() {
    this.disposed ||
      (this._rdcbe36e648aec1?.dispose(),
      (this._rdcbe36e648aec1 = null),
      this.var_2353.dispose(),
      (this.var_1618 = null),
      (this.var_97 = null),
      super.dispose());
  }
  isDataReady() {
    return this.var_1618 != null && this.var_97 != null;
  }
  initializeInterface() {
    (this.updateRoomStatsUI(), this._r42d21be06a4070(), this.updateButtonsUI(), this._r3cac9a9e3f3ff0());
  }
  createLogTable() {
    this.var_2353 = new jn(this.controller.windowManager, this.logTableContainer);
    let e = [
      new TableColumn(a.LOG_COLUMN_TYPE, this.loc("wiredmenu.monitor.column.type"), 0.33),
      new TableColumn(a.var_5806, this.loc("wiredmenu.monitor.column.category"), 0.22),
      new TableColumn(a.var_5323, this.loc("wiredmenu.monitor.column.occurrences"), 0.15),
      new TableColumn(a.LOG_COLUMN_LATEST, this.loc("wiredmenu.monitor.column.latest"), 0.3),
    ];
    this.var_2353.initialize(e);
  }
  clearData() {
    ((this.var_1618 = null), (this.var_97 = null));
  }
  requestData() {
    ((this.var_4508 = _ia411d8d8194a3a()), this.controller.send(new class_3289()), this.controller.send(new class_2550()));
  }
  _rab908800b760ab(e) {
    ((this.var_97 = e.getParser().roomStats),
      this._rb1888e9019ee7c ? this.updateLoadingState() : (this.updateRoomStatsUI(), this._r3cac9a9e3f3ff0()));
  }
  class_2788(e) {
    ((this.var_1618 = e.getParser().errors),
      this._rb1888e9019ee7c
        ? this.updateLoadingState()
        : (this._r42d21be06a4070(), this.updateButtonsUI(), this._r3cac9a9e3f3ff0()));
  }
  _r7e5d4aa03855ee = n((e) => {
    (this.clearButton.disable(),
      this.controller.send(new _i6740669a906427()),
      (this._r9f651ae55690ea = _ia411d8d8194a3a()),
      globalThis.setTimeout(this.updateButtonsUI, a.CLEAR_LOGS_TIMEOUT + 500));
  }, "_r7e5d4aa03855ee");
  _rdc8ae427938b40 = n((e) => {
    this.controller._r757a5ebc533593.send(new _i3d9f3af732b347(1, _ifaf38892102cfa.PAGE_SIZE, -1, -1, ""));
  }, "_rdc8ae427938b40");
  updateRoomStatsUI() {
    ((this.statWiredUsageHtml.caption = this.localization.getLocalizationWithParams(
      "wiredmenu.monitor.statistics.usage",
      "",
      "color",
      this._r57905d92e28635,
      "amount",
      this.var_97._rc3eafd82206b2e.toFixed(0),
      "limit",
      this.var_97._rf1ff1e87f648a5.toFixed(0),
    )),
      (this.statHeavyHtml.caption = this.localization.getLocalizationWithParams(
        "wiredmenu.monitor.statistics.is_heavy",
        "",
        "color",
        this.var_97._rd9e38be7eb664e ? a.COLOR_ORANGE : a.COLOR_GREEN,
        "bool",
        this.var_97._rd9e38be7eb664e
          ? this.localization.getLocalization("wiredmenu.bool.yes")
          : this.localization.getLocalization("wiredmenu.bool.no"),
      )),
      (this.statFloorCountHtml.caption = this.localization.getLocalizationWithParams(
        "wiredmenu.monitor.statistics.floorfurni",
        "",
        "color",
        this._re78649de9599eb,
        "amount",
        String(this.var_97._r4e6fabcb10d9dc),
        "limit",
        String(this.var_97._r8da028ff020049),
      )),
      (this.statWallCountHtml.caption = this.localization.getLocalizationWithParams(
        "wiredmenu.monitor.statistics.wallfurni",
        "",
        "color",
        this._rb5547623412e9f,
        "amount",
        String(this.var_97._r832f0e5c699a5a),
        "limit",
        String(this.var_97.floorItemCount),
      )),
      (this.statPermFurniVarsHtml.caption = this.localization.getLocalizationWithParams(
        "wiredmenu.monitor.statistics.perm_furni_vars",
        "",
        "color",
        this.varLimitColor(this.var_97._r533ab027c10403, this.var_97.wallItemCount),
        "amount",
        String(this.var_97._r533ab027c10403),
        "limit",
        String(this.var_97.wallItemCount),
      )),
      (this.statPermUserVarsHtml.caption = this.localization.getLocalizationWithParams(
        "wiredmenu.monitor.statistics.perm_user_vars",
        "",
        "color",
        this.varLimitColor(this.var_97.maxPermanentFurniVariables, this.var_97.permanentFurniVariables),
        "amount",
        String(this.var_97.maxPermanentFurniVariables),
        "limit",
        String(this.var_97.permanentFurniVariables),
      )),
      (this.statPermGlobalVarsHtml.caption = this.localization.getLocalizationWithParams(
        "wiredmenu.monitor.statistics.perm_global_vars",
        "",
        "color",
        this.varLimitColor(this.var_97.maxPermanentUserVariables, this.var_97.permanentUserVariables),
        "amount",
        String(this.var_97.maxPermanentUserVariables),
        "limit",
        String(this.var_97.permanentUserVariables),
      )));
  }
  _r42d21be06a4070() {
    let e = [];
    for (let r of this.var_1618 ?? []) e.push(new eBe(this, r, this.localization));
    this.var_2353._rb800e4dd98c360(e);
  }
  _r3cac9a9e3f3ff0() {
    let e = this._r76728cabb4c950;
    ((this.monitorImage1.visible = !e), (this.monitorImage2.visible = e));
  }
  updateButtonsUI = n(() => {
    we.disableSection(this.logOverviewButton, !this.controller._r0e0f569f7be727);
    let e = _ia411d8d8194a3a() < this._r9f651ae55690ea + a.CLEAR_LOGS_TIMEOUT;
    we.disableSection(this.clearButton, !this.controller.hasWritePermission || e);
  }, "updateButtonsUI");
  get _r57905d92e28635() {
    return a.colorize(
      this.var_97._rc3eafd82206b2e,
      0,
      this.var_97._rf1ff1e87f648a5,
      a.THRESHOLD_USAGE_1,
      a.THRESHOLD_USAGE_2,
    );
  }
  get _re78649de9599eb() {
    return a.colorize(
      this.var_97._r4e6fabcb10d9dc,
      0,
      this.var_97._r8da028ff020049,
      a.THRESHOLD_FURNI_1,
      a.THRESHOLD_FURNI_2,
    );
  }
  get _rb5547623412e9f() {
    return a.colorize(
      this.var_97._r832f0e5c699a5a,
      0,
      this.var_97.floorItemCount,
      a.THRESHOLD_FURNI_1,
      a.THRESHOLD_FURNI_2,
    );
  }
  varLimitColor(e, r) {
    return a.colorize(e, 0, r, a.THRESHOLD_VARS_1, a.THRESHOLD_VARS_2);
  }
  get _r76728cabb4c950() {
    return this.var_97._rd9e38be7eb664e ||
      this._r57905d92e28635 !== a.COLOR_GREEN ||
      this._re78649de9599eb !== a.COLOR_GREEN ||
      this._rb5547623412e9f !== a.COLOR_GREEN
      ? !0
      : this._r02d1e778bc78e6;
  }
  get _r02d1e778bc78e6() {
    for (let e of this.var_1618 ?? []) if (e._r603e2cbbdf146d > 0) return !0;
    return !1;
  }
  onClickMonitor = n((e) => {
    e.localX < 14 ||
      e.localX > 61 ||
      e.localY < 45 ||
      e.localY > 107 ||
      this.controller.send(new class_2888("wf15", e.window.assetUri));
  }, "onClickMonitor");
  static colorize(e, r, t, i, s) {
    let o = Number(e - r) / (t - r);
    return o < i ? a.COLOR_GREEN : o < s ? a.COLOR_ORANGE : a.COLOR_RED;
  }
  get statWiredUsageHtml() {
    return this.container.findChildByName("statistics_usage_html");
  }
  get statHeavyHtml() {
    return this.container.findChildByName("statistics_heavy_html");
  }
  get statFloorCountHtml() {
    return this.container.findChildByName("statistics_floorfurni_html");
  }
  get statWallCountHtml() {
    return this.container.findChildByName("statistics_wallfurni_html");
  }
  get statPermFurniVarsHtml() {
    return this.container.findChildByName("statistics_perm_vars_furni_html");
  }
  get statPermUserVarsHtml() {
    return this.container.findChildByName("statistics_perm_vars_user_html");
  }
  get statPermGlobalVarsHtml() {
    return this.container.findChildByName("statistics_perm_vars_global_html");
  }
  get logTableContainer() {
    return this.container.findChildByName("log_table_container");
  }
  get clearButton() {
    return this.container.findChildByName("clear_log_btn");
  }
  get logOverviewButton() {
    return this.container.findChildByName("log_overview_btn");
  }
  get monitorImage1() {
    return this.container.findChildByName("monitor_image_1");
  }
  get monitorImage2() {
    return this.container.findChildByName("monitor_image_2");
  }
}
