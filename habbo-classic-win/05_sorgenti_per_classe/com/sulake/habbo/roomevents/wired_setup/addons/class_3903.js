// Estratto da HabboAirLauncher.deobf.js, riga 360870.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_3903.as
// Nome offuscato: _i13cfc0def33842

class extends DefaultAddonType {
  static {
    n(this, "class_3903");
  }
  var_2699 = null;
  _r4e31d95d7b703f = null;
  _r23b68d3022d72b = null;
  _rbd96fe7375fd47 = null;
  _bunnyHopCheckbox = null;
  var_3118 = null;
  _rc2a07e8efbdf18 = null;
  var_2915 = null;
  var_924 = null;
  _enableCustomAnimationTime = null;
  _animationTime = null;
  var_1482 = null;
  var_3498 = null;
  var_2838 = null;
  _internalVariables = null;
  get code() {
    return AddonCodes.PROJECTILE;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  _rece4d5962a87b5 = n((...e) => {
    let r = e[0];
    r != null && this.onDirectionalIdSet(r.id);
  }, "_rece4d5962a87b5");
  onDirectionalIdSet(e) {
    ((this._r23b68d3022d72b.assetUri = `wired_misc_directional_system_${e}_png`),
      this._r4294af0daf7815._ra0bf1c6a404ceb(Ve.USER_SOURCE, 1));
  }
  newDirectionStateChanged = n((e, r) => {
    ((this.var_2838.disabled = !r), this._r4294af0daf7815._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 0));
  }, "newDirectionStateChanged");
  _rf1acc7c515f81e = n((e) => {
    ((this.var_924.disabled = e === 0),
      this._r4294af0daf7815._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 1));
  }, "_rf1acc7c515f81e");
  onShooterDirectionCheckboxChanged = n((e, r) => {
    this._r4294af0daf7815._ra0bf1c6a404ceb(Ve.USER_SOURCE, 1);
  }, "onShooterDirectionCheckboxChanged");
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.projectile.usage_info}");
    ((this._r4e31d95d7b703f = e._r066cec9fb0ddf0(
      new DropdownParam(
        "${wiredfurni.params.projectile.directional_system}",
        [
          new ExpandableDropdownOption(0, "${wiredfurni.params.projectile.directional_system.0}"),
          new ExpandableDropdownOption(1, "${wiredfurni.params.projectile.directional_system.1}"),
          new ExpandableDropdownOption(2, "${wiredfurni.params.projectile.directional_system.2}"),
          new ExpandableDropdownOption(3, "${wiredfurni.params.projectile.directional_system.3}"),
        ],
        this._rece4d5962a87b5,
      ),
      "${wiredfurni.params.projectile.directional_system}",
    )),
      (this._r23b68d3022d72b = e.createBitmapWrapperPreset("wired_misc_directional_system_1_png")),
      (this._bunnyHopCheckbox = e.createCheckboxGroup([new CheckboxOptionParam("${wiredfurni.params.projectile.bunny_hop}")])),
      (this._rbd96fe7375fd47 = e.createCheckboxGroup(
        [new CheckboxOptionParam("${wiredfurni.params.projectile.change_shooter_direction}", 0, null, this._bunnyHopCheckbox)],
        this.onShooterDirectionCheckboxChanged,
      )));
    let s = e.createSimpleListView(!0, [
      this._r4e31d95d7b703f,
      this._r23b68d3022d72b.alignCenter(),
      this._rbd96fe7375fd47,
    ]);
    s.spacing = 10;
    let o = new CheckboxOptionParam("${wiredfurni.params.projectile.new_direction_enabled}");
    ((o.extra2 = s), (this.var_2699 = e.createCheckboxGroup([o], this.newDirectionStateChanged)));
    let d = e.createSection(
      "${wiredfurni.params.projectile.direction}",
      this.var_2699,
      Hr.EXPANDED,
    );
    this._rc2a07e8efbdf18 = e.createNamedNumberInput(
      new NumberInputParam(0, -1e3, 1e3),
      "${wiredfurni.params.projectile.animation_trajectory.trajectory.1.extra}",
    );
    let c = new Se(Se.MODE_MULTILINE);
    c.textColor = r.softTextColor;
    let f = e.createText("${wiredfurni.params.projectile.animation_trajectory.trajectory.0.info}", c);
    this.var_3118 = e.createRadioGroup([
      new RadioButtonParam(0, "${wiredfurni.params.projectile.animation_trajectory.trajectory.0}", null, f),
      new RadioButtonParam(
        1,
        "${wiredfurni.params.projectile.animation_trajectory.trajectory.1}",
        null,
        this._rc2a07e8efbdf18,
      ),
    ]);
    let l = e.createSection(
      "${wiredfurni.params.projectile.animation_trajectory.trajectory}",
      this.var_3118,
    );
    this.var_2915 = e.createRadioGroup(
      [
        new RadioButtonParam(0, "${wiredfurni.params.projectile.animation_trajectory.distance.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.projectile.animation_trajectory.distance.1}"),
        new RadioButtonParam(2, "${wiredfurni.params.projectile.animation_trajectory.distance.2}"),
      ],
      this._rf1acc7c515f81e,
    );
    let b = e.createSection(
      "${wiredfurni.params.projectile.animation_trajectory.distance}",
      this.var_2915,
    );
    this.var_924 = e.createValueOrVariableSection(
      1,
      this.mergedSourceOptions(1),
      "${wiredfurni.params.projectile.animation_trajectory.distance_selection}",
      -64,
      64,
    );
    let _ = e.createSimpleListView(!0, [l, b, this.var_924]),
      h = e.createSection("${wiredfurni.params.projectile.animation_trajectory}", _, Hr.COLLAPSED);
    ((this._animationTime = e.createValueOrVariableSection(
      0,
      this.mergedSourceOptions(0),
      "${wiredfurni.params.projectile.time_per_tile}",
      1,
      1e5,
    )),
      (this.var_1482 = e.createCheckboxGroup([
        new CheckboxOptionParam("${wiredfurni.params.projectile.distance_x}", 0),
        new CheckboxOptionParam("${wiredfurni.params.projectile.distance_y}", 1),
        new CheckboxOptionParam("${wiredfurni.params.projectile.distance_z}", 2),
      ])));
    let p = e.createSection("${wiredfurni.params.projectile.distance_options}", this.var_1482);
    this.var_3498 = e.createNamedNumberInput(
      new NumberInputParam(0, 0, 1e5),
      "${wiredfurni.params.projectile.increase_speed}",
    );
    let m = e.createSection("${wiredfurni.params.projectile.increase_speed.title}", this.var_3498),
      v = e.createSimpleListView(!0, [this._animationTime, p, m]),
      w = new CheckboxOptionParam("${wiredfurni.params.projectile.override_animation_time}");
    ((w.extra2 = v), (this._enableCustomAnimationTime = e.createCheckboxGroup([w])));
    let I = e.createSection(
      "${wiredfurni.params.projectile.animation_time}",
      this._enableCustomAnimationTime,
      Hr.COLLAPSED,
    );
    this.var_2838 = e.createSliderSection(
      "wiredfurni.params.projectile.rotation_offset",
      "offset",
      SliderSection.CONVERTER_ECHO,
      0,
      7,
      1,
      !1,
      Hr.COLLAPSED,
    );
    let C = [
      new SubVariableParam(0, "animation.tiles_travelled", !0),
      new SubVariableParam(1, "animation.user_collisions", !0),
      new SubVariableParam(2, "animation.furni_collisions", !0),
      new SubVariableParam(3, "animation.position.x"),
      new SubVariableParam(4, "animation.position.y"),
      new SubVariableParam(5, "animation.position.altitude"),
      new SubVariableParam(6, "animation.is_travelling", !0),
    ];
    this._internalVariables = e.createSubVariableCreator("wiredfurni.params.projectile.variable.", C);
    let W = e.createSection(
      "${wiredfurni.params.projectile.projectile.variables}",
      this._internalVariables,
      Hr.COLLAPSED,
    );
    t.addElements(i, d, h, I, this.var_2838, W, e._ra6e545ffa959b0());
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0],
      t = e._r1385185994d461[1],
      i = e.getBoolean(0),
      s = e.getInt(1),
      o = e.getBoolean(2),
      d = e.getInt(3),
      c = e.getInt(4),
      f = e.getInt(5),
      l = e.getBoolean(6),
      b = e.getBoolean(7),
      _ = e.getBoolean(8),
      h = e.getInt(9),
      p = e.getInt(10),
      m = e.getInt(11),
      v = e.getBoolean(12),
      w = e.getBoolean(13),
      I = e.getInt(14),
      C = e.getInt(15),
      W = e.getInt(16),
      R = e.getInt(17),
      T = e.getInt(18);
    ((this.var_2699.get(0).selected = i),
      (this._r4e31d95d7b703f.selectedId = s),
      (this._enableCustomAnimationTime.get(0).selected = o),
      this._animationTime.init(e._r09c1c618a6015f._r491f74a2c22d93, r, f, d, c),
      (this.var_1482.get(0).selected = l),
      (this.var_1482.get(1).selected = b),
      (this.var_1482.get(2).selected = _),
      (this.var_3498.value = h),
      (this.var_2838.value = p),
      (this._internalVariables.mask = m),
      (this._rbd96fe7375fd47.get(0).selected = v),
      (this._bunnyHopCheckbox.get(0).selected = w),
      (this.var_2915.selected = I),
      this.var_924.init(e._r09c1c618a6015f._r491f74a2c22d93, t, R, C, W),
      (this.var_3118.selected = T === 0 ? 0 : 1),
      (this._rc2a07e8efbdf18.value = T),
      this.newDirectionStateChanged(0, i),
      this.onDirectionalIdSet(s),
      this._rf1acc7c515f81e(I));
  }
  onEditInitialized() {
    this._animationTime.onEditInitialized();
  }
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this.var_2699.get(0).selected ? 1 : 0),
      e.push(this._r4e31d95d7b703f.selectedId),
      e.push(this._enableCustomAnimationTime.get(0).selected ? 1 : 0),
      e.push(this._animationTime.option),
      e.push(this._animationTime.numberValue),
      e.push(this._animationTime.target),
      e.push(this.var_1482.get(0).selected ? 1 : 0),
      e.push(this.var_1482.get(1).selected ? 1 : 0),
      e.push(this.var_1482.get(2).selected ? 1 : 0),
      e.push(this.var_3498.value),
      e.push(this.var_2838.value),
      e.push(this._internalVariables.mask),
      e.push(this._rbd96fe7375fd47.get(0).selected ? 1 : 0),
      e.push(this._bunnyHopCheckbox.get(0).selected ? 1 : 0),
      e.push(this.var_2915.selected),
      e.push(this.var_924.option),
      e.push(this.var_924.numberValue),
      e.push(this.var_924.target),
      e.push(this.var_3118.selected === 1 ? this._rc2a07e8efbdf18.value : 0),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this._animationTime.finalizeSelection, this.var_924.finalizeSelection];
  }
  get widthModifier() {
    return 1.3;
  }
  get _r401186d17e05f2() {
    return !1;
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.projectile";
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.users.title.shooter";
  }
  mergedSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.merged.title.variable_time_per_tile"
      : "wiredfurni.params.sources.merged.title.variable_animation_distance";
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE
      ? e === 0
        ? !this.var_2699.get(0).selected || this._animationTime._r0fd1b66bcbf656()
        : this.var_2915.selected === 0 || this.var_924._r0fd1b66bcbf656()
      : r === Ve.USER_SOURCE
        ? !this._rbd96fe7375fd47.get(0).selected || !this.var_2699.get(0).selected
        : !1;
  }
  mergedSelections() {
    return [
      [1, 0],
      [2, 2],
    ];
  }
  setMergedType(e, r) {
    if (e === 0) {
      this._animationTime.target = r;
      return;
    }
    this.var_924.target = r;
  }
  getMergedType(e) {
    return e === 0 ? this._animationTime.target : this.var_924.target;
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
