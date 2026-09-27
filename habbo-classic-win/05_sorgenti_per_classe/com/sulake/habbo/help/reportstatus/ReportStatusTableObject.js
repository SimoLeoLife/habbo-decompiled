// Extracted from HabboAirLauncher.deobf.js, line 231953.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/reportstatus/ReportStatusTableObject.as
// Obfuscated name: _ie8472a9d6b140a

class {
  constructor(e, r) {
    this._myReportStatus = e;
    this.var_1065 = r;
    this._rc433474b604658 = this.getReportedUserDeleted(this.var_1065.var_5741);
  }
  static {
    n(this, "ReportStatusTableObject");
  }
  _rc433474b604658;
  get identifier() {
    return String(this.var_1065.id);
  }
  isPropertyUpdated(e, r) {
    return !0;
  }
  isUpdated(e) {
    return !0;
  }
  getTableCell(e) {
    switch (e) {
      case u5.COLUMN_REPORT_DATE:
        return new TableCell(TableCell.name_2, _ifdbb4e26d4980d(this.var_1065.creationTime));
      case u5.COLUMN_REPORTED_ACCOUNT:
        return new TableCell(
          TableCell.name_2,
          this._rc433474b604658.userName,
          !1,
          !1,
          null,
          null,
          !1,
          null,
          this._rc433474b604658.textColor,
        );
      case u5.COLUMN_REASON:
        return new TableCell(
          TableCell.name_2,
          this._myReportStatus.localize(`help.cfh.topic.${this.var_1065.var_4899}`),
        );
      case u5.COLUMN_APPEAL_STATUS: {
        let r = new TableCell(TableCell.name_2, this.statusText);
        return (
          this._rc433474b604658.deleted || r.setExtraBtn("icons_info_grey", this._ree66107eed133f),
          r
        );
      }
      default:
        return new TableCell(TableCell.name_2, "");
    }
  }
  get message() {
    return this.var_1065;
  }
  _ree66107eed133f = n(() => {
    this._myReportStatus._rf0ec4e6755079b(this);
  }, "_ree66107eed133f");
  get statusText() {
    return this.var_1065.var_5609 === class_2564.name_10
      ? this._myReportStatus.localize("report.status.state.appealed")
      : this.var_1065.var_5583 !== -1
        ? this._myReportStatus.localize("report.status.state.decided")
        : this._myReportStatus.localize("report.status.state.pending");
  }
  getReportedUserDeleted(e) {
    let r = e == null || e === "";
    return {
      deleted: r,
      userName: r ? this._myReportStatus.localize("report.status.deleted", "Deleted") : e,
      textColor: r ? 13762560 : 0,
    };
  }
}
