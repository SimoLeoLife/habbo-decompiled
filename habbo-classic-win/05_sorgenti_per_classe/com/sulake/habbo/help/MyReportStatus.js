// Estratto da HabboAirLauncher.deobf.js, riga 232034.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/MyReportStatus.as
// Nome offuscato: _i381836e1bfde2b

class a {
  constructor(e) {
    this._habboHelp = e;
  }
  static {
    n(this, "MyReportStatus");
  }
  static COLUMN_REPORT_DATE = "report_date";
  static COLUMN_REPORTED_ACCOUNT = "account";
  static COLUMN_REASON = "reason";
  static COLUMN_APPEAL_STATUS = "appeal_status";
  _disposed = !1;
  _window = null;
  var_778 = null;
  _shownObject = null;
  _re7455af72df1d7 = !1;
  _r4b8f9097129fa8 = null;
  dispose() {
    this._disposed ||
      (this.var_778?.dispose(),
      (this.var_778 = null),
      this._window?.dispose(),
      (this._window = null),
      this._r4b8f9097129fa8?.dispose(),
      (this._r4b8f9097129fa8 = null),
      (this._shownObject = null),
      (this._re7455af72df1d7 = !1),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  openWindow(e) {
    if (
      (this.dispose(),
      (this._disposed = !1),
      (this._window = this._habboHelp?.getXmlWindow("my_reports")),
      this._window == null)
    )
      return;
    ((this._r4b8f9097129fa8 = this._window.findChildByName("status_info_bubble")),
      this._r4b8f9097129fa8 != null &&
        (this._window.desktop.addChild(this._r4b8f9097129fa8),
        (this._r4b8f9097129fa8.visible = !1),
        this.appealButton?.addEventListener(u.CLICK, this._rf9fcd99ec514f3)),
      this._window.center(),
      (this._window.procedure = this._r4d2fcea4870df2),
      this.createTable());
    let r = ClassUtils.getParser(e, _i8af71596138e4f);
    r != null && this.setTableObjects(r?.messages ?? null);
  }
  createTable() {
    if (
      this._window == null ||
      this._habboHelp?.windowManager == null ||
      this.reportsTableContainer == null
    )
      return;
    this.var_778 = new jn(this._habboHelp.windowManager, this.reportsTableContainer);
    let e = [
      new TableColumn(
        a.COLUMN_REPORT_DATE,
        this.localize("report.status.col.report_date"),
        0.26,
        nr.const_27,
      ),
      new TableColumn(
        a.COLUMN_REPORTED_ACCOUNT,
        this.localize("report.status.col.reported_account"),
        0.18,
        nr.const_27,
      ),
      new TableColumn(
        a.COLUMN_REASON,
        this.localize("report.status.col.reason"),
        0.38,
        nr.const_27,
      ),
      new TableColumn(
        a.COLUMN_APPEAL_STATUS,
        this.localize("report.status.col.appeal_status"),
        0.18,
        nr.const_27,
      ),
    ];
    (this.var_778.initialize(e, !0, !1),
      (this.var_778._r18be0eedd62c32 = this._r3a07c1e0b7974a));
  }
  setTableObjects(e) {
    if (this.var_778 == null) return;
    let t = [...(e ?? [])]
      .sort((i, s) => (i.creationTime > s.creationTime ? -1 : i.creationTime < s.creationTime ? 1 : 0))
      .map((i) => new ReportStatusTableObject(this, i));
    this.var_778._rb800e4dd98c360(t);
  }
  localize(e, r) {
    return this._habboHelp?.localization?.getLocalization(e, r ?? e) ?? r ?? e;
  }
  _rf0ec4e6755079b(e) {
    ((this._re7455af72df1d7 = !this._re7455af72df1d7),
      this._rc4fbb919dbe299(this._re7455af72df1d7 ? e : null));
  }
  _r4d2fcea4870df2 = n((e, r) => {
    this._disposed ||
      this._window == null ||
      e.type !== u.CLICK ||
      r == null ||
      (r.name === "header_button_close" && this.dispose());
  }, "_r4d2fcea4870df2");
  _r3a07c1e0b7974a = n((e) => {
    e != null && this._shownObject !== e && this._re7455af72df1d7 && this._rc4fbb919dbe299(e);
  }, "_r3a07c1e0b7974a");
  _rc4fbb919dbe299(e) {
    e !== this._shownObject &&
      ((this._shownObject = e),
      this._r4b8f9097129fa8 != null &&
        ((this._r4b8f9097129fa8.visible = this._shownObject != null),
        this._r4b8f9097129fa8.visible && (this.refreshBubbleUI(), this.relocateBubbleAndFocus())));
  }
  refreshBubbleUI() {
    if (this._shownObject == null) return;
    let e = this._shownObject.message,
      r = e.var_5609 !== class_2564.var_5820,
      t = r ? e.var_4534 !== -1 : e.var_5583 !== -1,
      i = r ? (t ? _ifdbb4e26d4980d_(e.var_4534) : "-") : t ? _ifdbb4e26d4980d_(e.var_5583) : "-",
      s = r ? "report.status.info.appealed" : "report.status.info.reported",
      o = "";
    if (
      (t
        ? ((o = e.var_4927 ? "report.status.info.action" : "report.status.info.no_action"),
          (this.actionDescText.text = this.localize(
            this.getActionExplanation(e.var_4927, e.var_5388, e.var_5609),
          )))
        : ((o = "report.status.info.sanction_pending"), (this.actionDescText.text = "")),
      (this.actionText.text = this.localize(o)),
      (this.createdKeyText.text = this.localize(s)),
      (this.reportedDateText.text = _ifdbb4e26d4980d_(r ? e.var_4819 : e.creationTime)),
      (this.decisionDateText.text = i),
      e.var_5609 === class_2564.var_5820 && t && !e.var_4927
        ? this.appealButton?.enable()
        : this.appealButton?.disable(),
      this.sanctionInfoText != null)
    )
      if (e.var_4927) {
        let c = this._habboHelp?.getProperty("zendesk.url") ?? "";
        ((this.sanctionInfoText.text =
          this._habboHelp?.localization?.getLocalizationWithParams(
            "report.status.info.sanction_help",
            "",
            "url",
            c,
          ) ?? ""),
          this.sanctionInfoText.initializeLinkStyle(),
          this.sanctionInfoText.addEventListener(kd.const_180, this._r49fad46cbd1c25));
      } else this.sanctionInfoText.text = "";
  }
  _r49fad46cbd1c25 = n((e) => {
    e instanceof kd && Ae.openWebPageAndMinimizeClient(e.link);
  }, "_r49fad46cbd1c25");
  _rf9fcd99ec514f3 = n((e) => {
    this._shownObject != null &&
      (this._habboHelp?._rb13ed3a89b85ae(new _iec400ba3827765(this._shownObject.message.id)),
      this.appealButton?.disable());
  }, "_rf9fcd99ec514f3");
  getActionExplanation(e, r, t) {
    return t === class_2564.var_5884
      ? "report.status.info.appeal.action"
      : t === class_2564.var_5916
        ? "report.status.info.appeal.no_action"
        : r
          ? e
            ? "report.status.info.auto_moderated.action"
            : "report.status.info.auto_moderated.no_action"
          : e
            ? "report.status.info.manually_moderated.action"
            : "report.status.info.manually_moderated.no_action";
  }
  relocateBubbleAndFocus() {
    if (this.var_778 == null || this._shownObject == null || this._r4b8f9097129fa8 == null)
      return;
    let e = this.var_778._rbadc159da0ce22(this._shownObject);
    e != null &&
      ((this._r4b8f9097129fa8.position = new E(
        e.x + e.width - 2,
        e.y + e.height / 2 - this._r4b8f9097129fa8.height / 2,
      )),
      this._r4b8f9097129fa8.activate());
  }
  get reportsTableContainer() {
    return this._window?.findChildByName("reports_table_cont");
  }
  get reportedDateText() {
    return this._r4b8f9097129fa8?.findChildByName("reported_date_txt");
  }
  get decisionDateText() {
    return this._r4b8f9097129fa8?.findChildByName("decision_date_txt");
  }
  get createdKeyText() {
    return this._r4b8f9097129fa8?.findChildByName("created_key_txt");
  }
  get actionText() {
    return this._r4b8f9097129fa8?.findChildByName("action_txt");
  }
  get actionDescText() {
    return this._r4b8f9097129fa8?.findChildByName("action_desc_txt");
  }
  get appealButton() {
    return this._r4b8f9097129fa8?.findChildByName("appeal_button");
  }
  get sanctionInfoText() {
    return this._r4b8f9097129fa8?.findChildByName("sanction_info_txt");
  }
}
