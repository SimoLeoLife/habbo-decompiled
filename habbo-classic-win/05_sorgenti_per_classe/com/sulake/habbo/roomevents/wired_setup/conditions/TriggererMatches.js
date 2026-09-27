// Estratto da HabboAirLauncher.deobf.js, riga 367083.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/TriggererMatches.as
// Nome offuscato: _i6cfd83d81b1639

class extends DefaultConditionType {
  static {
    n(this, "TriggererMatches");
  }
  var_2841 = null;
  var_2905 = null;
  _r1c6041249d1ff6 = null;
  get code() {
    return ConditionCodes.TRIGGERER_MATCHES;
  }
  get negativeCode() {
    return ConditionCodes.NOT_TRIGGERER_MATCHES;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2841 = e.createRadioGroup([
      new RadioButtonParam(1, this.l("usertype.1")),
      new RadioButtonParam(2, this.l("usertype.2")),
      new RadioButtonParam(4, this.l("usertype.4")),
    ])),
      (this._r1c6041249d1ff6 = e._r178edc7e663bd7(
        new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.avatarname")),
      )),
      (this.var_2905 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("anyavatar")),
        new RadioButtonParam(1, this.l("certainavatar"), null, this._r1c6041249d1ff6),
      ])),
      t.addElements(
        e.createSection(this.l("usertype"), this.var_2841),
        e.createSection(this.l("picktriggerer"), this.var_2905),
      ));
  }
  onEditStart(e) {
    ((this.var_2841.selected = e.intParams[0]),
      e._r7e8836fc336e43 !== ""
        ? ((this.var_2905.selected = 1), (this._r1c6041249d1ff6.text = e._r7e8836fc336e43))
        : ((this.var_2905.selected = 0), (this._r1c6041249d1ff6.text = "")));
  }
  readIntParamsFromForm() {
    return [this.var_2841.selected];
  }
  readStringParamFromForm() {
    return this.var_2905.selected === 1 ? this._r1c6041249d1ff6.text : "";
  }
  userSelectionTitle(e) {
    return `wiredfurni.params.sources.users.title.match.${e}`;
  }
}
