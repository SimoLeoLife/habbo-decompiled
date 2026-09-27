// Extracted from HabboAirLauncher.deobf.js, line 362874.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia4fd956db02ec2

class extends class_3976 {
  static {
    n(this, "UnkSubclassOf_class_3976_a4fd95");
  }
  _botName = null;
  get code() {
    return ActionTypeCodes.BOT_MOVE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._botName = e._r178edc7e663bd7(
      new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.bot.name")),
    )),
      t.addElements(e.createSection(this.l("bot.name"), this._botName)));
  }
  onEditStart(e) {
    this._botName.text = e._r7e8836fc336e43;
  }
  readStringParamFromForm() {
    return this._botName.text;
  }
}
