// Extracted from HabboAirLauncher.deobf.js, line 363014.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2fe20cf05799ab

class extends class_3976 {
  static {
    n(this, "UnkSubclassOf_class_3976_2fe20c");
  }
  _botName = null;
  get code() {
    return ActionTypeCodes.BOT_TELEPORT;
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
