// Estratto da HabboAirLauncher.deobf.js, riga 250974.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/new_mod_tool_tabs/class_3748.as
// Nome offuscato: _i5e3b284220e097

class extends class_2456 {
  static {
    n(this, "class_3748");
  }
  constructor(e, r) {
    (super(e, r),
      this.getBanRadio.select(),
      this.performBanAction.addEventListener(u.CLICK, this.onBanClick));
  }
  onBanClick = n(() => {
    ((this.usernameInput.text = this.tool.sessionDataManager.userName),
      this.getBanRadio.select(),
      (this.getDurationSelector.selection = this.getDurationSelector.numMenuItems - 1),
      this.tool.windowManager.confirm(
        "${moderation.ban_management.do.title}",
        this.tool.localizationManager.getLocalizationWithParams(
          "moderation.ban_management.do.desc",
          "",
          "action",
          this.getBanRadio.isSelected ? "BAN" : "UNBAN",
          "user",
          this.usernameInput.text,
          "duration",
          String(this.getDurationSelector.enumerateSelection()[this.getDurationSelector.selection] ?? ""),
        ),
        0,
        this._r171637e674ae18,
      ));
  }, "onBanClick");
  _r171637e674ae18 = n((e, r) => {
    (e.dispose(), this.tool._r43032a825e00cd(0));
  }, "_r171637e674ae18");
  get usernameInput() {
    return this.window.findChildByName("ban_username_input");
  }
  get getBanRadio() {
    return this.window.findChildByName("ban_radio");
  }
  get getDurationSelector() {
    return this.window.findChildByName("duration_selector");
  }
  get performBanAction() {
    return this.window.findChildByName("ban_btn");
  }
}
