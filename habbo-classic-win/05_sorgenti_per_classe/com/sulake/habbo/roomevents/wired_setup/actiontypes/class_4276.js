// Estratto da HabboAirLauncher.deobf.js, riga 362756.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4276.as
// Nome offuscato: _ifb47d4b30a7ade

class extends class_3976 {
  static {
    n(this, "class_4276");
  }
  _botName = null;
  var_2960 = null;
  get code() {
    return ActionTypeCodes.BOT_FOLLOW_AVATAR;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._botName = e._r178edc7e663bd7(
      new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.bot.name")),
    )),
      (this.var_2960 = e.createRadioGroup([
        new RadioButtonParam(1, this.l("start.following")),
        new RadioButtonParam(0, this.l("stop.following")),
      ])));
    let i = e.createSimpleListView(!0, [this._botName, this.var_2960]);
    t.addElements(e.createSection(this.l("bot.name"), i));
  }
  onEditStart(e) {
    ((this._botName.text = e._r7e8836fc336e43),
      (this.var_2960.selected = e.intParams[0] ?? 0));
  }
  readStringParamFromForm() {
    return this._botName.text;
  }
  readIntParamsFromForm() {
    return [this.var_2960.selected];
  }
}
