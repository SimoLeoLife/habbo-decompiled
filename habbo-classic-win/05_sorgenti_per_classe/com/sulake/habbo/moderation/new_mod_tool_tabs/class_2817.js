// Estratto da HabboAirLauncher.deobf.js, riga 250925.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/new_mod_tool_tabs/class_2817.as
// Nome offuscato: _ia61d2b231afb56

class a extends class_2456 {
  static {
    n(this, "class_2817");
  }
  static A = 50;
  static B = 40;
  _r51e373b23c5413 = !1;
  _r9d1f44990928ca = !1;
  constructor(e, r) {
    (super(e, r), this.sendWarningButton.addEventListener(u.CLICK, this.onSendWarningClick));
  }
  onSendWarningClick = n(() => {
    this.warningInput.length < a.A
      ? (this.tool.windowManager.alert(
          "${moderation.warning.send.warn_title}",
          this.tool.localizationManager.getLocalizationWithParams(
            "moderation.warning.send.validation_short",
            "",
            "x",
            `${a.A}`,
          ),
          0,
          this._rf2446fe764dd10,
        ),
        (this._r51e373b23c5413 = !0))
      : this.warningInput.length > a.B &&
        (this.tool.windowManager.alert(
          "${moderation.warning.send.warn_title}",
          this.tool.localizationManager.getLocalizationWithParams(
            "moderation.warning.send.validation_long",
            "",
            "x",
            `${a.B}`,
          ),
          0,
          this._rf2446fe764dd10,
        ),
        (this._r9d1f44990928ca = !0));
  }, "onSendWarningClick");
  _rf2446fe764dd10 = n((e, r) => {
    (e.dispose(), this._r51e373b23c5413 && this._r9d1f44990928ca && this.tool._r43032a825e00cd(2));
  }, "_rf2446fe764dd10");
  get warningInput() {
    return this.window.findChildByName("warning_input");
  }
  get sendWarningButton() {
    return this.window.findChildByName("send_warning_btn");
  }
}
