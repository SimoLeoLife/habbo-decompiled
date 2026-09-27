// Estratto da HabboAirLauncher.deobf.js, riga 248019.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/SendMsgsCtrl.as
// Nome offuscato: _if79b6691783178

class a {
  constructor(e, r, t, i) {
    this._main = e;
    this.var_805 = r;
    this._targetUserName = t;
    this.var_3372 = i;
  }
  static {
    n(this, "SendMsgsCtrl");
  }
  static TOPIC_ID_NOT_SELECTED = -999;
  _frame = null;
  _msgSelect = null;
  var_966 = null;
  _disposed = !1;
  _r3fdab2e9a61f2e = !0;
  get disposed() {
    return this._disposed;
  }
  show() {
    ((this._frame = this._main.getXmlWindow("send_msgs")),
      this._frame != null &&
        ((this._frame.caption = `Msg To: ${this._targetUserName}`),
        this._frame.findChildByName("send_message_but")?.addEventListener(u.CLICK, this._rcdb35c48ab5882),
        (this.var_966 = this._frame.findChildByName("message_input")),
        this.var_966 && (this.var_966.procedure = this._r31bde35de2b894),
        (this._msgSelect = this._frame.findChildByName("msgTemplatesSelect")),
        this.prepareMessageSelection(this._msgSelect),
        this._msgSelect && (this._msgSelect.procedure = this._r13452c04680e57),
        this._frame.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
        (this._frame.visible = !0)));
  }
  getType() {
    return WindowTracker.const_868;
  }
  getId() {
    return this._targetUserName;
  }
  getFrame() {
    return this._frame;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._frame?.destroy(),
      (this._frame = null),
      (this._msgSelect = null),
      (this.var_966 = null));
  }
  prepareMessageSelection(e) {
    e?.populate(this._main.initMsg?._r866c55804a6f43 ?? []);
  }
  _r13452c04680e57 = n((e) => {
    if (e.type !== y.const_238) return;
    let r =
      this._main.initMsg?._r866c55804a6f43?.[this._msgSelect?.selection ?? -1];
    r != null &&
      this.var_966 != null &&
      ((this._r3fdab2e9a61f2e = !1), (this.var_966.text = r));
  }, "_r13452c04680e57");
  _rcdb35c48ab5882 = n((e) => {
    if (e.type === u.CLICK) {
      if (this._r3fdab2e9a61f2e || (this.var_966?.text ?? "") === "") {
        this._main.windowManager.alert(
          "Alert",
          "You must input a message to the user",
          0,
          this._r9d8a83a2f57c04,
        );
        return;
      }
      (this._main.connection?.send(
        new _i645e3c079f9dd6(
          this.var_805,
          this.var_966?.text ?? "",
          a.TOPIC_ID_NOT_SELECTED,
          this.var_3372?.issueId ?? ku.const_20,
        ),
      ),
        this.dispose());
    }
  }, "_rcdb35c48ab5882");
  onClose = n((e) => {
    e.type === u.CLICK && this.dispose();
  }, "onClose");
  _r31bde35de2b894 = n((e) => {
    e.type !== y.const_962 ||
      !this._r3fdab2e9a61f2e ||
      this.var_966 == null ||
      ((this.var_966.text = ""), (this._r3fdab2e9a61f2e = !1));
  }, "_r31bde35de2b894");
  _r9d8a83a2f57c04 = n((e) => {
    e.dispose();
  }, "_r9d8a83a2f57c04");
}
