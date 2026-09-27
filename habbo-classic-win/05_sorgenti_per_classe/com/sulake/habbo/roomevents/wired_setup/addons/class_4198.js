// Estratto da HabboAirLauncher.deobf.js, riga 361789.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4198.as
// Nome offuscato: _i48c423b070c8d6

class a extends DefaultAddonType {
  static {
    n(this, "class_4198");
  }
  static var_5691 = 0;
  static TYPE_CREATION_TIME = 1;
  static TYPE_LAST_UPDATE_TIME = 2;
  _modeDropdown = null;
  _rda9b81ad0d4c4d = null;
  _rd45ab914d29953 = null;
  get code() {
    return AddonCodes.VARIABLE_TIME_UTIL;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this._modeDropdown = e.createDropdown(
      new DropdownParam(this.l("choose_type"), [
        new ExpandableDropdownOption(a.var_5691, this.l("time_util.mode.0")),
        new ExpandableDropdownOption(a.TYPE_CREATION_TIME, this.l("time_util.mode.1")),
        new ExpandableDropdownOption(a.TYPE_LAST_UPDATE_TIME, this.l("time_util.mode.2")),
      ]),
    );
    let i = e.createSection(this.l("choose_type"), this._modeDropdown),
      s = [
        new SubVariableParam(1, "milliseconds_of_seconds"),
        new SubVariableParam(2, "seconds_of_minute"),
        new SubVariableParam(3, "minute_of_hour"),
        new SubVariableParam(4, "hour_of_day"),
        new SubVariableParam(5, "day_of_week"),
        new SubVariableParam(6, "day_of_month"),
        new SubVariableParam(7, "day_of_year"),
        new SubVariableParam(8, "week_of_year"),
        new SubVariableParam(9, "month_of_year"),
        new SubVariableParam(10, "year"),
      ];
    this._rda9b81ad0d4c4d = e.createSubVariableCreator("wiredfurni.params.time_util.subvariable.", s);
    let o = e.createSection(
        this.loc("wiredfurni.params.create_subvariables"),
        this._rda9b81ad0d4c4d,
        Hr.EXPANDED,
      ),
      d = [
        new SubVariableParam(20, "millisecond"),
        new SubVariableParam(21, "second"),
        new SubVariableParam(22, "minute"),
        new SubVariableParam(23, "hour"),
        new SubVariableParam(24, "day"),
        new SubVariableParam(25, "week"),
        new SubVariableParam(26, "month"),
      ];
    this._rd45ab914d29953 = e.createSubVariableCreator("wiredfurni.params.time_util.subvariable.", d);
    let c = e.createSection(
      this.l("create_subvariables.advanced"),
      e.createSimpleListView(!0, [e.createText(this.l("time_util.advanced_info")), this._rd45ab914d29953]),
      Hr.COLLAPSED,
    );
    t.addElements(i, o, c);
  }
  onEditStart(e) {
    let r = e.getInt(0),
      t = e.getInt(1);
    ((this._rda9b81ad0d4c4d.mask = r & 65535), (this._rd45ab914d29953.mask = r & 4294901760));
    let s = e._r09c1c618a6015f._ree814418559ffa?.variables ?? [],
      o = [];
    (this._r947ffe44d940c3(s, t) && o.push(new ExpandableDropdownOption(a.var_5691, this.l("time_util.mode.0"))),
      this._rb235ef3953786f(s, t) && o.push(new ExpandableDropdownOption(a.TYPE_CREATION_TIME, this.l("time_util.mode.1"))),
      this._r4a4a3618fa94d7(s, t) && o.push(new ExpandableDropdownOption(a.TYPE_LAST_UPDATE_TIME, this.l("time_util.mode.2"))),
      this._modeDropdown.reinit(o, t));
  }
  readIntParamsFromForm() {
    return [this._rda9b81ad0d4c4d.mask | this._rd45ab914d29953.mask, this._modeDropdown.selectedId];
  }
  _rb235ef3953786f(e, r) {
    if (r === a.TYPE_CREATION_TIME || e.length === 0) return !0;
    for (let t of e) if (t.canReadCreationTime) return !0;
    return !1;
  }
  _r4a4a3618fa94d7(e, r) {
    if (r === a.TYPE_LAST_UPDATE_TIME || e.length === 0) return !0;
    for (let t of e) if (t.canReadLastUpdateTime) return !0;
    return !1;
  }
  _r947ffe44d940c3(e, r) {
    if (r === a.var_5691 || e.length === 0) return !0;
    for (let t of e) if (t.hasValue) return !0;
    return !1;
  }
}
