// Extracted from HabboAirLauncher.deobf.js, line 368679.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_3970.as
// Obfuscated name: _i825591c748786d

class extends DefaultTriggerConf {
  static {
    n(this, "class_3970");
  }
  _botName = null;
  get code() {
    return TriggerConfCodes.BOT_AVATAR_REACHED;
  }
  readStringParamFromForm() {
    return this._botName.text;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this._botName = e._r178edc7e663bd7(
      new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.botname")),
    );
    let i = e.createSection(this.l("bot.name"), this._botName);
    t.addElements(i);
  }
  onEditStart(e) {
    this._botName.text = e._r7e8836fc336e43;
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.users.title.bots";
  }
}
