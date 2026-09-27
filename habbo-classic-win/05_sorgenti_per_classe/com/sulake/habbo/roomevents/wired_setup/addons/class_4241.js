// Extracted from HabboAirLauncher.deobf.js, line 361480.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4241.as
// Obfuscated name: _ieeb3d17e706413

class a extends DefaultAddonType {
  static {
    n(this, "class_4241");
  }
  static MODE_MANUAL = 0;
  static MODE_LINEAR = 1;
  static MODE_EXPONENTIAL = 2;
  _reb4ffd4e5ef431 = null;
  _r852b7761c70bcd = null;
  _ra692ad9a209ef6 = null;
  _r493cb47b41422d = null;
  var_2055 = null;
  _r9b45f5c1ab04c1 = null;
  var_2359 = null;
  var_726 = null;
  _rda9b81ad0d4c4d = null;
  _cachedIntParams = null;
  var_4661 = null;
  get code() {
    return AddonCodes.VARIABLE_LEVEL_UP;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = "wiredfurni.params.levelup.",
      s = [],
      o = new RadioButtonParam(1, this.loc(i + "mode.1"));
    ((this._ra692ad9a209ef6 = e.createNamedNumberInput(new NumberInputParam(100, 1, 1e5, 35), this.loc(i + "step_size"))),
      (this._r493cb47b41422d = e.createNamedNumberInput(new NumberInputParam(50, 2, 1e5, 20), this.loc(i + "max_level"))),
      (o.extra2 = e.createSimpleListView(!0, [this._ra692ad9a209ef6, this._r493cb47b41422d])));
    let d = new RadioButtonParam(2, this.loc(i + "mode.2"));
    ((this.var_2055 = e.createNamedNumberInput(new NumberInputParam(100, 1, 1e5, 35), this.loc(i + "first_level_xp"))),
      (this._r9b45f5c1ab04c1 = e.createNamedNumberInput(new NumberInputParam(20, 1, 1e5, 35), this.loc(i + "increase_factor"))),
      (this.var_2359 = e.createNamedNumberInput(new NumberInputParam(50, 2, 1e5, 20), this.loc(i + "max_level"))),
      (d.extra2 = e.createSimpleListView(!0, [
        this.var_2055,
        this._r9b45f5c1ab04c1,
        this.var_2359,
      ])));
    let c = new RadioButtonParam(0, this.loc(i + "mode.0"));
    ((this._r852b7761c70bcd = e._r1cb85c1e1927d4(
      new TextAreaParam(60, -1, -1, 30, 1e3, "", this.loc(i + "interpolation_placeholder"), "0123456789=\r"),
    )),
      (c.extra2 = this._r852b7761c70bcd),
      s.push(o, d, c),
      (this._reb4ffd4e5ef431 = e.createRadioGroup(s)));
    let f = e.createSection(this.loc(i + "mode"), this._reb4ffd4e5ef431, Hr.EXPANDED);
    this.var_726 = e.createLevelXpPreview([1, 2, 3, 5, 10, 20]);
    let l = e.createSection(this.loc(i + "preview"), this.var_726, Hr.COLLAPSED),
      b = [
        new SubVariableParam(0, "current_level"),
        new SubVariableParam(1, "current_xp"),
        new SubVariableParam(2, "progress"),
        new SubVariableParam(3, "progress_percentage"),
        new SubVariableParam(4, "xp_required"),
        new SubVariableParam(5, "xp_remaining"),
        new SubVariableParam(6, "is_maxed"),
        new SubVariableParam(7, "max_level"),
      ];
    this._rda9b81ad0d4c4d = e.createSubVariableCreator(i + "subvariable.", b);
    let _ = e.createSection(
      this.loc("wiredfurni.params.create_subvariables"),
      this._rda9b81ad0d4c4d,
      Hr.EXPANDED,
    );
    t.addElements(f, l, _);
  }
  onEditStart(e) {
    let r = e.getInt(0),
      t = e.getInt(1),
      i = e.getInt(2),
      s = e.getInt(3),
      o = e.getInt(4),
      d = e._r7e8836fc336e43;
    ((this._rda9b81ad0d4c4d.mask = r),
      (this._reb4ffd4e5ef431.selected = t),
      this._r852b7761c70bcd.reset(),
      this._r493cb47b41422d.reset(),
      this.var_2359.reset(),
      this._ra692ad9a209ef6.reset(),
      this.var_2055.reset(),
      this._r9b45f5c1ab04c1.reset(),
      t === a.MODE_MANUAL
        ? (this._r852b7761c70bcd.text = d)
        : t === a.MODE_LINEAR
          ? ((this._ra692ad9a209ef6.value = i), (this._r493cb47b41422d.value = s))
          : t === a.MODE_EXPONENTIAL &&
            ((this.var_2055.value = i),
            (this._r9b45f5c1ab04c1.value = s),
            (this.var_2359.value = o)),
      this._r41f5cc7d3516ce.context.registerUpdateReceiver(this, 0));
  }
  _r879e385d197fa5() {
    this._r41f5cc7d3516ce.context.removeUpdateReceiver(this);
  }
  readIntParamsFromForm() {
    let e = [];
    e.push(this._rda9b81ad0d4c4d.mask);
    let r = this._reb4ffd4e5ef431.selected;
    return (
      e.push(r),
      r === a.MODE_LINEAR
        ? (e.push(this._ra692ad9a209ef6.value), e.push(this._r493cb47b41422d.value))
        : r === a.MODE_EXPONENTIAL &&
          (e.push(this.var_2055.value),
          e.push(this._r9b45f5c1ab04c1.value),
          e.push(this.var_2359.value)),
      e
    );
  }
  readStringParamFromForm() {
    return this._reb4ffd4e5ef431.selected === a.MODE_MANUAL ? this._r852b7761c70bcd.text : "";
  }
  update(e) {
    if (this.var_726 == null) return;
    let r = this.readIntParamsFromForm(),
      t = this.readStringParamFromForm();
    if (
      this._cachedIntParams == null ||
      !we.compareIntArrays(this._cachedIntParams, r) ||
      this.var_4661 !== t
    ) {
      let s = this.simulateLevelUpper(),
        o = [];
      if (s != null)
        for (let d of this.var_726._r75e6ecdd9240ab) {
          if (d <= 0 || d > s.maxLevel) break;
          o.push(s.xpForLevel(d));
        }
      this.var_726.setPreviewXps(o);
    }
    ((this._cachedIntParams = r), (this.var_4661 = t));
  }
  simulateLevelUpper() {
    let e = this._reb4ffd4e5ef431.selected;
    if (e === a.MODE_MANUAL) {
      let r = this._rf0531d6511c130();
      return r == null ? null : new LBe(r);
    }
    return e === a.MODE_LINEAR
      ? new LinearLevelUpper(this._ra692ad9a209ef6.value, this._r493cb47b41422d.value)
      : e === a.MODE_EXPONENTIAL
        ? new ExponentialLevelUpper(this.var_2055.value, this._r9b45f5c1ab04c1.value, this.var_2359.value)
        : null;
  }
  _rf0531d6511c130() {
    let e = this.readStringParamFromForm(),
      r = new B(),
      t = e.split(`
`),
      i = 1,
      s = 0;
    for (let o of t) {
      let d = o.split("=", 2);
      if (d.length < 2) continue;
      let c = Number(d[0]),
        f = Number(d[1]);
      if (!(!Number.isFinite(c) || !Number.isFinite(f))) {
        if (c <= i || f <= s) return null;
        (r.add(c, f), (i = c), (s = f));
      }
    }
    return r;
  }
  dispose() {}
  get disposed() {
    return !1;
  }
}
