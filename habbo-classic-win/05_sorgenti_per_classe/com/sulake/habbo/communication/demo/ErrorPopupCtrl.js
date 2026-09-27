// Estratto da HabboAirLauncher.deobf.js, riga 199035.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/demo/ErrorPopupCtrl.as
// Nome offuscato: _i85076ee6779a7f

class extends ue {
  static {
    n(this, "ErrorPopupCtrl");
  }
  var_408 = null;
  _window = null;
  _doNotShowAgain = !1;
  var_1271 = !1;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionData = e;
      }),
    ]);
  }
  get disposed() {
    return this.var_1271;
  }
  initComponent() {}
  dispose() {
    this.var_1271 ||
      ((this.var_1271 = !0),
      this._window != null && this.destroyWindow(),
      (this._windowManager = null),
      (this._localizationManager = null),
      (this._sessionData = null),
      (this._doNotShowAgain = !1),
      super.dispose());
  }
  onError(e, r) {
    if ((!1, this._doNotShowAgain || (this.createWindow(), this._window == null))) return;
    let t = r && e.error != null;
    (this.errorInfoBorder && (this.errorInfoBorder.visible = t),
      this.closeButton && (this.closeButton.visible = t),
      this.messageText && (this.messageText.text = e.error == null ? e.message : e.error.message),
      (this._window.caption = `Error #${e.category}`),
      t && this.errorInfoContents && (this.errorInfoContents.text = _ie0fa8c9e5467b0(this._r64b86e859800dc(e))),
      (this._window.height = this.contentList.height + 56));
  }
  _r64b86e859800dc(e) {
    return (
      `Error ID: ${e.error?.name ?? ""}
Critical: ${e.critical}
Message: ${e.message}
User name: ${this._sessionData?.userName ?? ""}
User id:${this._sessionData?.userId ?? 0}
Hotel: ${this.getProperty(HabboProperty.const_682)}
---------------------

` + (e.error?.stack ?? "")
    );
  }
  get contentList() {
    return this._window?.findChildByName("content_list");
  }
  get messageText() {
    return this._window?.findChildByName("error_msg_text");
  }
  get errorInfoBorder() {
    return this._window?.findChildByName("error_info_border");
  }
  get errorInfoContents() {
    return this._window?.findChildByName("error_info_contents");
  }
  get doNotShowCheckbox() {
    return this._window?.findChildByName("do_not_show_cbx");
  }
  get okButton() {
    return this._window?.findChildByName("ok_button");
  }
  get copyButton() {
    return this._window?.findChildByName("copy_button");
  }
  get closeButton() {
    return this._window?.findChildByName("header_button_close");
  }
  createWindow() {
    if (this.var_408 == null) {
      let r = _i9f7c5b59a8afd4(this.assets, "error_popup")?.content;
      if (r == null) return;
      ((this.var_408 = this._windowManager?.buildModalDialogFromXML(r) ?? null),
        (this._window = this.var_408?.rootWindow),
        this.closeButton?.addEventListener(u.CLICK, this._re855ed59ebd00a),
        this.okButton?.addEventListener(u.CLICK, this._re855ed59ebd00a),
        this.copyButton?.addEventListener(u.CLICK, this._r7b567823d409a2));
    }
    (this._window?.activate(), this._window?.center());
  }
  _r7b567823d409a2 = n(async (e) => {
    let r = this.errorInfoContents?.text ?? "";
    typeof navigator < "u" &&
      navigator.clipboard?.writeText != null &&
      (await navigator.clipboard.writeText(r));
  }, "_r7b567823d409a2");
  _re855ed59ebd00a = n((e) => {
    ((this._doNotShowAgain = this.doNotShowCheckbox?.isSelected ?? !1), this.destroyWindow());
  }, "_re855ed59ebd00a");
  destroyWindow() {
    this.var_408 != null &&
      (this.var_408.dispose(), (this.var_408 = null), (this._window = null));
  }
}
