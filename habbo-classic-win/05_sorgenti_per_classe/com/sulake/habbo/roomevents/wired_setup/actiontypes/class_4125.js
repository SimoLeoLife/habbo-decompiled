// Extracted from HabboAirLauncher.deobf.js, line 362715.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4125.as
// Obfuscated name: _i1972a9895dc399

class a extends class_3976 {
  static {
    n(this, "class_4125");
  }
  static STRING_PARAM_DELIMITER = "	";
  _figureString = "";
  _botName = null;
  _r10a731cfd2a153 = null;
  var_4507 = null;
  get code() {
    return ActionTypeCodes.BOT_CHANGE_FIGURE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._botName = e._r178edc7e663bd7(
      new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.bot.name")),
    )),
      (this._r10a731cfd2a153 = e._r18ca88e24cd033()),
      (this.var_4507 = e.createButton(this.l("capture.figure"), this._rfc1560ada57223)));
    let i = e.createSimpleListView(!0, [this._r10a731cfd2a153.alignCenter(), this.var_4507]);
    t.addElements(
      e.createSection(this.l("bot.name"), this._botName),
      e.createSection(this.l("capture.figure"), i),
    );
  }
  onEditStart(e) {
    let r = e._r7e8836fc336e43.split(a.STRING_PARAM_DELIMITER);
    ((this._botName.text = r.length > 0 ? r[0] : ""),
      (this._figureString = r.length > 1 ? r[1] : ""),
      (this._r10a731cfd2a153.figure = this._figureString));
  }
  readStringParamFromForm() {
    return `${this._botName.text}${a.STRING_PARAM_DELIMITER}${this._figureString}`;
  }
  _rfc1560ada57223 = n(() => {
    ((this._figureString = this._r41f5cc7d3516ce.sessionDataManager.figure),
      (this._r10a731cfd2a153.figure = this._figureString));
  }, "_rfc1560ada57223");
}
