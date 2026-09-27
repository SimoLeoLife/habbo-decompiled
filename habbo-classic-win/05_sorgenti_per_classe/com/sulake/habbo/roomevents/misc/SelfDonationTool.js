// Extracted from HabboAirLauncher.deobf.js, line 355424.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/misc/SelfDonationTool.as
// Obfuscated name: _ic27a20e22b5c65

class a extends ue {
  static {
    n(this, "SelfDonationTool");
  }
  static ALLOWED_ENVIRONMENT_IDS = ["s1", "s2", "d63", "dev", "local"];
  _roomEvents;
  var_102;
  _view = null;
  var_1271 = !1;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i), (this._roomEvents = e), (this.var_102 = new UbuntuPresetManager(e)));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._communication = e;
        },
        !0,
      ),
    ]);
  }
  initComponent() {
    (this.context._r7e43d9f4706607(this),
      (this._messageEvents = []),
      this._messageEvents.push(new SelfDonationResultMessageEvent((e) => this.onSelfDonationResult(e))));
    for (let e of this._messageEvents) this.addMessageEvent(e);
  }
  get linkPattern() {
    return "selfdonation/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length < 2 || (r[1] === "open" && this.open());
  }
  open() {
    this.var_1271 ||
      !this.isSandboxEnvironment ||
      (this.ensureView(), this._view._ra34ad69490b004());
  }
  onDonate(e, r) {
    let t = this.validate(e, r);
    if (t != null) {
      this._roomEvents.windowManager.alert("${wiredfurni.error.title}", t, 0, null);
      return;
    }
    if (this._communication == null || this._communication.connection == null) {
      this._roomEvents.windowManager.alert(
        "${wiredfurni.error.title}",
        this.localization.getLocalization("selfdonation.no_connection", "Connection is not ready yet."),
        0,
        null,
      );
      return;
    }
    this._communication.connection.send(
      new class_3843(e.isWallItem, e.typeId, e.legacyPosterId, r),
    );
  }
  onSelfDonationResult = n((e) => {
    let r = e.getParser();
    if (r == null) return;
    let t, i;
    switch (r.var_1827) {
      case class_3566.name_8:
        ((t = "selfdonation.result.success"), (i = "selfdonation.success"));
        break;
      case class_3566.const_416:
        ((t = "selfdonation.result.not_allowed"), (i = "selfdonation.fail"));
        break;
      default:
        ((t = "selfdonation.result.failed"), (i = "selfdonation.fail"));
        break;
    }
    let s = this.localization.getLocalization(i, i),
      o = this.localization.getLocalization(t, t);
    this._roomEvents.windowManager.alert(s, o, 0, null);
  }, "onSelfDonationResult");
  validate(e, r) {
    return this.isSandboxEnvironment
      ? e == null
        ? this.localization.getLocalization("selfdonation.select_item", "Select a furniture item first.")
        : r < 1 || r > qX.MAX_AMOUNT
          ? this.localization.getLocalizationWithParams(
              "selfdonation.invalid_amount",
              "Please enter an amount between 1 and %max%.",
              "max",
              `${qX.MAX_AMOUNT}`,
            )
          : this.products(e) == null
            ? this.localization.getLocalization(
                "selfdonation.invalid_item",
                "This item cannot be donated from the sandbox tool.",
              )
            : null
      : this.sandboxWarningText;
  }
  products(e) {
    return this._roomEvents == null || this._roomEvents.sessionDataManager == null || e == null
      ? null
      : e.isWallItem
        ? this._roomEvents.sessionDataManager.getWallItemData(e.typeId)
        : this._roomEvents.sessionDataManager.getFloorItemData(e.typeId);
  }
  ensureView() {
    this._view == null && (this._view = new qX(this, this.var_102));
  }
  get sandboxWarningText() {
    return this.localization.getLocalization(
      "selfdonation.sandbox_only",
      "Self donation only works in the sandbox environment.",
    );
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get localization() {
    return this._roomEvents.localization;
  }
  get isSandboxEnvironment() {
    let e = this.getProperty(HabboProperty.const_682);
    return a.ALLOWED_ENVIRONMENT_IDS.indexOf(e) !== -1;
  }
  dispose() {
    if (!this.var_1271) {
      if (((this.var_1271 = !0), this._messageEvents != null))
        for (let e of this._messageEvents) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        this._view != null && (this._view.dispose(), (this._view = null)),
        (this.var_102 = null),
        (this._roomEvents = null),
        (this._communication = null),
        super.dispose());
    }
  }
  get disposed() {
    return this.var_1271;
  }
  addMessageEvent(e) {
    this._communication?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._communication?._r7668362bf55fdd(e);
  }
}
