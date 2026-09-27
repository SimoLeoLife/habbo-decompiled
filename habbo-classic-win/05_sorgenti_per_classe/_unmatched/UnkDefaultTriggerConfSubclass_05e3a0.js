// Extracted from HabboAirLauncher.deobf.js, line 368797.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i05e3a070fc9882

class a extends DefaultTriggerConf {
  static {
    n(this, "UnkDefaultTriggerConfSubclass_05e3a0");
  }
  static SIGN_ACTION_CODE = 10;
  static DANCE_ACTION_CODE = 11;
  _actionDropdown = null;
  var_2671 = null;
  var_2502 = null;
  _signDropdown = null;
  _danceDropdown = null;
  var_2494 = null;
  var_2673 = null;
  get code() {
    return TriggerConfCodes.var_5885;
  }
  onEditStart(e) {
    ((this._actionDropdown.selectedId = e.intParams[0]),
      this._r55ba102255cf5c(e._r7e8836fc336e43));
  }
  readStringParamFromForm() {
    let e = this._re536f491136f6d();
    if (e != null && e.hasExtra) {
      let r = this._r336ac6e8919d5a(e.code);
      if (r !== -1) return e._r0846225a9e5a5b(r);
    }
    return "";
  }
  readIntParamsFromForm() {
    let e = this._re536f491136f6d();
    return [e == null ? 0 : e.code];
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this._actionDropdown = e.createDropdown(
      new DropdownParam(this.loc("wiredfurni.tooltip.action"), this.buildActionOptions(), (...d) => {
        this.onActionSelected(d[0]);
      }),
    );
    let i = e.createSection(this.l("action_selection"), this._actionDropdown);
    this._signDropdown = e.createDropdown(
      new DropdownParam(this.loc("wiredfurni.tooltip.sign"), this.buildSignOptions()),
    );
    let s = new CheckboxOptionParam(this.l("sign_filter"), 0);
    ((s.extra2 = this._signDropdown),
      (this.var_2671 = e.createCheckboxGroup([s])),
      (this.var_2494 = e.createSection(this.l("sign_selection"), this.var_2671)),
      (this._danceDropdown = e.createDropdown(
        new DropdownParam(this.loc("wiredfurni.tooltip.dance"), this.buildDanceOptions()),
      )));
    let o = new CheckboxOptionParam(this.l("dance_filter"), 0);
    ((o.extra2 = this._danceDropdown),
      (this.var_2502 = e.createCheckboxGroup([o])),
      (this.var_2673 = e.createSection(this.l("dance_selection"), this.var_2502)),
      (this.var_2494.visible = !1),
      (this.var_2673.visible = !1),
      t.addElements(i, this.var_2494, this.var_2673));
  }
  onActionSelected(e) {
    this._r55ba102255cf5c();
  }
  _r55ba102255cf5c(e = "") {
    let r = this._re536f491136f6d();
    if (r == null || !r.hasExtra) {
      ((this.var_2494.visible = !1), (this.var_2673.visible = !1));
      return;
    }
    let t = r.code === a.SIGN_ACTION_CODE,
      i = r.code === a.DANCE_ACTION_CODE;
    ((this.var_2494.visible = t),
      (this.var_2673.visible = i),
      t &&
        (e === ""
          ? ((this.var_2671.get(0).selected = !1), (this._signDropdown.selectedId = -1))
          : ((this.var_2671.get(0).selected = !0),
            (this._signDropdown.selectedId = r._r804c778b0da0d0(e)))),
      i &&
        (e === ""
          ? ((this.var_2502.get(0).selected = !1), (this._danceDropdown.selectedId = -1))
          : ((this.var_2502.get(0).selected = !0),
            (this._danceDropdown.selectedId = r._r804c778b0da0d0(e)))));
  }
  _re536f491136f6d() {
    return a.getActionByCode(this._actionDropdown.selectedId);
  }
  static getActionByCode(e) {
    for (let r of ph.allWiredUserActions) if (e === r.code) return r;
    return null;
  }
  _r336ac6e8919d5a(e) {
    return e === a.SIGN_ACTION_CODE
      ? this.var_2671.get(0).selected
        ? this._signDropdown.selectedId
        : -1
      : e === a.DANCE_ACTION_CODE && this.var_2502.get(0).selected
        ? this._danceDropdown.selectedId
        : -1;
  }
  buildActionOptions() {
    return ph.allWiredUserActions.map((e) => new ExpandableDropdownOption(e.code, this.l(`action.${e.code}`)));
  }
  buildSignOptions() {
    let e = [];
    for (let r = 0; r <= 17; r += 1) e.push(new ExpandableDropdownOption(r, this.l(`action.sign.${r}`)));
    return e;
  }
  buildDanceOptions() {
    let e = [];
    for (let r = 1; r <= 4; r += 1) e.push(new ExpandableDropdownOption(r, this.l(`action.dance.${r}`)));
    return e;
  }
}
