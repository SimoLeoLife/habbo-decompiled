// Estratto da HabboAirLauncher.deobf.js, riga 365841.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_3953.as
// Nome offuscato: _i301c59dbc08295

class a extends DefaultConditionType {
  static {
    n(this, "class_3953");
  }
  static REQUEST_TIMEOUT = 5;
  _r7246940c0b8636 = [];
  var_433 = -1;
  var_4837 = 0;
  var_2705 = null;
  _groupDropdown = null;
  get code() {
    return ConditionCodes.ACTOR_IS_GROUP_MEMBER;
  }
  get negativeCode() {
    return ConditionCodes.NOT_ACTOR_IS_GROUP_MEMBER;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._groupDropdown = e.createDropdown(new DropdownParam(this.loc("wiredfurni.tooltip.group"), []))),
      (this.var_2705 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("grouptype.0")),
        new RadioButtonParam(1, this.l("grouptype.1"), null, this._groupDropdown),
      ])),
      t.addElements(e.createSection(this.l("groupselection"), this.var_2705)));
  }
  readStringParamFromForm() {
    if (this.var_2705.selected !== 1) return "";
    let e = this._groupDropdown.selected;
    return e == null ? "" : e.id.toString();
  }
  onEditStart(e) {
    ((this.var_433 = e._r7e8836fc336e43 === "" ? -1 : Number(e._r7e8836fc336e43)),
      this._r59ccf8a09e0742(this._r7246940c0b8636),
      this._rabd0908fce4e71(),
      e._r7e8836fc336e43 !== ""
        ? (this.var_2705.selected = 1)
        : (this.var_2705.selected = 0));
  }
  _rabd0908fce4e71() {
    let e = Date.now();
    e > this.var_4837 + 1e3 * a.REQUEST_TIMEOUT &&
      ((this.var_4837 = e), this._r41f5cc7d3516ce.send(new _i7e48847e87b1ec()));
  }
  _r59ccf8a09e0742(e) {
    let r = [];
    this._r7246940c0b8636 = e;
    for (let t of this._r7246940c0b8636) r.push(new ExpandableDropdownOption(t.groupId, t.groupName));
    this._groupDropdown.reinit(r, this.var_433);
  }
  _r9cafa9a1789cdf(e) {
    this._r59ccf8a09e0742(e.guilds);
  }
}
