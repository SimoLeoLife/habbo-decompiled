// Estratto da HabboAirLauncher.deobf.js, riga 145405.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/AlertDialog.as
// Nome offuscato: _id25cdd9db61705

class a {
  static {
    n(this, "AlertDialog");
  }
  static LIST_BUTTONS = "_alert_button_list";
  static const_427 = "_alert_button_ok";
  static const_688 = "_alert_button_cancel";
  static BUTTON_CUSTOM = "_alert_button_custom";
  static const_259 = "header_button_close";
  var_606 = "";
  var_3375 = "";
  _disposed = !1;
  _callback = null;
  _window;
  var_408 = null;
  constructor(e, r, t, i, s, o, d) {
    (d
      ? ((this.var_408 = e.buildModalDialogFromXML(r)),
        (this._window = this.var_408?.rootWindow))
      : (this._window = e.buildFromXML(r, 2)),
      s === HabboAlertDialogFlag.NULL && (s = HabboAlertDialogFlag.const_427 | HabboAlertDialogFlag.TEXT_TITLE | HabboAlertDialogFlag.const_291));
    let c = this._window?.findChildByName(a.LIST_BUTTONS);
    (c != null &&
      ((s & HabboAlertDialogFlag.const_427) === 0 && c.getListItemByName(a.const_427)?.dispose(),
      (s & HabboAlertDialogFlag.const_688) === 0 && c.getListItemByName(a.const_688)?.dispose(),
      (s & HabboAlertDialogFlag.BUTTON_CUSTOM) === 0 && c.getListItemByName(a.BUTTON_CUSTOM)?.dispose()),
      this._window != null &&
        ((this._window.procedure = (...f) => {
          let [l, b] = f;
          this.dialogEventProc(l, b);
        }),
        this._window.center()),
      (this.title = t),
      (this.summary = i),
      (this.callback = o));
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this.var_408 != null &&
        !this.var_408.disposed &&
        (this.var_408.dispose(), (this.var_408 = null), (this._window = null)),
      this._window != null &&
        !this._window.disposed &&
        (this._window.dispose(), (this._window = null)),
      (this._callback = null),
      (this._disposed = !0));
  }
  dialogEventProc(e, r) {
    if (e.type !== u.CLICK) return;
    let t = null;
    switch (r.name) {
      case a.const_427:
        this._callback != null
          ? ((t = y.allocate(y.const_1300, null, null)), this._callback(this, t), t.recycle())
          : this.dispose();
        break;
      case a.const_259:
      case a.const_688:
        this._callback != null
          ? ((t = y.allocate(y.const_204, null, null)), this._callback(this, t), t.recycle())
          : this.dispose();
        break;
    }
  }
  getButtonCaption(e) {
    let r = null;
    if (!this._disposed && this._window != null)
      switch (e) {
        case HabboAlertDialogFlag.const_427:
          r = this._window.findChildByName(a.const_427);
          break;
        case HabboAlertDialogFlag.const_688:
          r = this._window.findChildByName(a.const_688);
          break;
        case HabboAlertDialogFlag.BUTTON_CUSTOM:
          r = this._window.findChildByName(a.BUTTON_CUSTOM);
          break;
      }
    return r != null ? new _iada4b60c6952bf(r.caption, r.toolTipCaption, r.visible) : null;
  }
  _r3fecca3423f155(e, r) {
    let t = null;
    if (!this._disposed && this._window != null)
      switch (e) {
        case HabboAlertDialogFlag.const_427:
          t = this._window.findChildByName(a.const_427);
          break;
        case HabboAlertDialogFlag.const_688:
          t = this._window.findChildByName(a.const_688);
          break;
        case HabboAlertDialogFlag.BUTTON_CUSTOM:
          t = this._window.findChildByName(a.BUTTON_CUSTOM);
          break;
      }
    t != null && ((t.caption = r.text), (t.toolTipCaption = r._rc92761910dde34), (t.visible = r.visible));
  }
  set title(e) {
    ((this.var_606 = e),
      this._window != null && (this._window.caption = this.var_606));
  }
  get title() {
    return this.var_606;
  }
  set summary(e) {
    if (((this.var_3375 = e), this._window != null)) {
      let r = this._window.findChildByTag("DESCRIPTION");
      r != null && (r.text = this.var_3375);
    }
  }
  get summary() {
    return this.var_3375;
  }
  set _r3d7b1775b50b97(e) {
    this._window != null && (this._window.color = e);
  }
  get _r3d7b1775b50b97() {
    return this._window?.color ?? 0;
  }
  set callback(e) {
    this._callback = e;
  }
  get callback() {
    return this._callback;
  }
}
