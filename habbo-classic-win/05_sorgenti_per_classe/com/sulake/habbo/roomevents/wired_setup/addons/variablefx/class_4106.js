// Estratto da HabboAirLauncher.deobf.js, riga 362355.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/class_4106.as
// Nome offuscato: _i757ceb20cfe0c5

class extends DefaultAddonType {
  static {
    n(this, "class_4106");
  }
  _state = null;
  var_1494 = null;
  var_3368 = null;
  var_1472 = null;
  var_2040 = null;
  get categoryId() {
    return -1;
  }
  get inputMode() {
    return So.INPUTS_TYPE_UI_BUILDER;
  }
  get widthModifier() {
    return 1.45;
  }
  getHeaderSourceTypeSelectorParam(e) {
    return new SourceTypeSelectorParam([Ve.var_64, Ve.USER_SOURCE], this, e.getInt(0));
  }
  get headerSourceType() {
    return this._state?.sourceType ?? Ve.USER_SOURCE;
  }
  set sourceType(e) {
    if (this._state == null) return;
    let r = this._state.sourceType !== e;
    ((this._state.sourceType = e),
      this._state.sanitize(),
      this.var_1472?.refreshForState(this._state),
      this.var_2040?.refreshForSourceType(this._state),
      this._r58c377c82ec4b6(this._state, !1),
      r && this._r41f5cc7d3516ce.presetManager._r1c0e6e6b103258());
  }
  buildInputs(e, r, t) {
    let i = this.createTopInfoPreset(e);
    ((this.var_1494 = e.createVariableFxVisualizationSettingsPreset(this)),
      (this.var_3368 = e.createVariableFxValueRangePreset(this)),
      (this.var_1472 = e.createVariableFxVisibilitySettingsPreset(this)),
      (this.var_2040 = e.createVariableFxAdvancedRangePreset(this)),
      i != null && t.addElements(i),
      t.addElements(
        this.var_1494,
        this.var_3368,
        this.var_1472,
        this.var_2040,
      ));
  }
  createTopInfoPreset(e) {
    return null;
  }
  onEditStart(e) {
    let r = (this._state = new GBe());
    ((r.categoryId = this.categoryId),
      this._r1996d0709870de(e.intParams, r),
      this._r0cf26e454fdbfd(e, r),
      (r.overrideMinVariableId = e._r1385185994d461[0]),
      (r.overrideMaxVariableId = e._r1385185994d461[1]),
      (r._r1093f559e954fa = e._r1385185994d461[2]),
      r.sanitize(),
      this.var_1494 != null &&
        (this.var_1494.init(r),
        this.var_3368.init(r),
        this.var_1472.init(r, e._r09c1c618a6015f._r491f74a2c22d93),
        this.var_2040.init(r, e._r09c1c618a6015f._r491f74a2c22d93)));
  }
  _r879e385d197fa5() {
    (super._r879e385d197fa5(), this.var_1472?._r54acab9fc519bc());
  }
  readIntParamsFromForm() {
    let e = [];
    return (this._r325eeba78987d6(e, this._rc9e567fd9176a8()), e);
  }
  _r1996d0709870de(e, r) {
    ((r.sourceType = e[0] | 0),
      (r.visibility = e[1] | 0),
      (r._r09ab560170f112 = e[2] | 0),
      (r.var_620 = e[3] | 0),
      (r._rb94727c3b64fc3 = e[4] !== 0),
      (r.showDuration = e[5] | 0),
      (r.styleId = e[6] | 0),
      (r._r5b3d4f00714e69 = e[7] | 0),
      (r.var_954 = e[8] | 0),
      (r.rendererId = e[9] | 0),
      (r._r528f4963a1a948 = e[11] | 0),
      (r._r5e470edbfdddac = e[13] | 0),
      (r._r16a3bcde5cd330 = e[14] !== 0),
      (r._r8e06fbd9c71180 = e[15] !== 0),
      (r.overrideMinTarget = e[16] | 0),
      (r.overrideMaxTarget = e[17] | 0),
      (r._rfcfc5eaf98a6f8 = e[19] | 0),
      (r.segments = e[20] | 0));
  }
  _r325eeba78987d6(e, r) {
    (e.push(
      r.sourceType,
      r.visibility,
      r._r09ab560170f112,
      r.var_620,
      r._rb94727c3b64fc3 ? 1 : 0,
      r.showDuration,
      r.styleId,
      r._r5b3d4f00714e69,
      r.var_954,
      r.rendererId,
    ),
      we._r42a38bf88649b5(e, r._r528f4963a1a948),
      we._r42a38bf88649b5(e, r._r5e470edbfdddac),
      e.push(r._r16a3bcde5cd330 ? 1 : 0, r._r8e06fbd9c71180 ? 1 : 0, r.overrideMinTarget, r.overrideMaxTarget),
      we._r42a38bf88649b5(e, r._rfcfc5eaf98a6f8),
      e.push(r.segments));
  }
  _r4ac8c24e31ca7e() {
    let e = this._rc9e567fd9176a8(!0);
    return [e.overrideMinVariableId, e.overrideMaxVariableId, e._r1093f559e954fa];
  }
  readStringParamFromForm() {
    return this.writeStringParam(this._rc9e567fd9176a8());
  }
  _r0cf26e454fdbfd(e, r) {}
  writeStringParam(e) {
    return "";
  }
  validate() {
    return this._state != null &&
      VariableFxEditorMetadata._r2c86baf9826707(this._state.categoryId) &&
      this._state._r5e470edbfdddac <= this._state._r528f4963a1a948
      ? this._r41f5cc7d3516ce.localization.getLocalization(
          "wiredfurni.error.variable_fx.value_range",
          "Maximum value must be greater than minimum value.",
        )
      : null;
  }
  _r58c377c82ec4b6(e, r = !0) {
    ((this._state = e), r && this.var_1494?._r124a9694db124c());
  }
  _rc9e567fd9176a8(e = !1) {
    return (
      this.var_1494 != null &&
        (this.var_1494.applyToState(this._state),
        this.var_3368.applyToState(this._state),
        this.var_1472.applyToState(this._state),
        this.var_2040.applyToState(this._state, e),
        this._state.sanitize()),
      this._state
    );
  }
}
