// Extracted from HabboAirLauncher.deobf.js, line 364239.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3915.as
// Obfuscated name: _icb03e25b480e87

class a extends DefaultActionType {
  static {
    n(this, "class_3915");
  }
  static _r5ec7229e733fe1 = 0;
  static _re421443d29150b = 1;
  static var_2450 = 0;
  static _r1e4fb5117fc42d = 1;
  static TARGET_ALTITUDE_CUSTOM = 2;
  static OFFSET_MIN = -64;
  static const_822 = 64;
  var_2098 = null;
  _r1107bbde1fb142 = null;
  _offsetCheckboxes = null;
  var_3303 = null;
  _r1e04e6d024572a = null;
  _red0b2f09743ab8 = null;
  var_1247 = null;
  var_4324 = null;
  var_2371 = null;
  var_416 = null;
  _r8c35c556360ec3 = !1;
  get code() {
    return ActionTypeCodes.PLACE_FURNI;
  }
  get hasStateSnapshot() {
    return !0;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.place_furni.usage_info}"),
      s = new Se(Se.MODE_MULTILINE);
    ((s.textColor = r.softTextColor),
      (this.var_2098 = e.createRadioGroup(
        [
          new RadioButtonParam(
            a._r5ec7229e733fe1,
            "${wiredfurni.params.place_furni.target_location.0}",
            null,
            e.createText("${wiredfurni.params.place_furni.target_location.0.info}", s),
          ),
          new RadioButtonParam(a._re421443d29150b, "${wiredfurni.params.place_furni.target_location.1}"),
        ],
        this._rb968b1c81da27b,
      )),
      (this.var_2098.selected = a._r5ec7229e733fe1));
    let o = e.createSection(
      "${wiredfurni.params.place_furni.target_location}",
      this.var_2098,
      Hr.EXPANDED,
    );
    ((this._r1107bbde1fb142 = e.createRadioGroup(
      [
        new RadioButtonParam(a.var_2450, "${wiredfurni.params.place_furni.target_altitude.0}"),
        new RadioButtonParam(a._r1e4fb5117fc42d, "${wiredfurni.params.place_furni.target_altitude.1}"),
        new RadioButtonParam(a.TARGET_ALTITUDE_CUSTOM, "${wiredfurni.params.place_furni.target_altitude.2}"),
      ],
      this._r595a1eca2a3ff2,
    )),
      (this._r1107bbde1fb142.selected = a.var_2450));
    let d = e.createSection(
      "${wiredfurni.params.place_furni.target_altitude}",
      this._r1107bbde1fb142,
      Hr.EXPANDED,
    );
    ((this.var_3303 = e.createNumberInput(new NumberInputParam(0, a.OFFSET_MIN, a.const_822))),
      (this._r1e04e6d024572a = e.createNumberInput(new NumberInputParam(0, a.OFFSET_MIN, a.const_822))),
      (this._red0b2f09743ab8 = e.createNumberInput(new NumberInputParam(0, -8e3, 8e3))),
      (this._offsetCheckboxes = e.createCheckboxGroup([
        new CheckboxOptionParam("${wiredfurni.params.place_furni.offsets.x}", 0, this.var_3303),
        new CheckboxOptionParam("${wiredfurni.params.place_furni.offsets.y}", 1, this._r1e04e6d024572a),
        new CheckboxOptionParam("${wiredfurni.params.place_furni.offsets.altitude}", 2, this._red0b2f09743ab8),
      ])));
    let c = e.createSection(
      "${wiredfurni.params.place_furni.offsets}",
      this._offsetCheckboxes,
      Hr.COLLAPSED,
    );
    ((this.var_2371 = e.createChooseVariableSection(-1, null, a.filterSpawnVariable, this.onSpawnVariableSelected)),
      (this.var_416 = e.createValueOrVariableSection(
        1,
        this.mergedSourceOptions(1),
        "${wiredfurni.params.place_furni.spawn_with_value}",
        -2147483648,
        2147483647,
      )));
    let f = e.createSimpleListView(!0, [this.var_2371, this.var_416]);
    ((this.var_1247 = e.createCheckboxGroup(
      [new CheckboxOptionParam("${wiredfurni.params.place_furni.spawn_with_variable}", 0, null, f)],
      this._r401c4d13d860d8,
    )),
      (this.var_4324 = e.createSection(
        "${wiredfurni.params.place_furni.spawn_with_variable}",
        this.var_1247,
        Hr.COLLAPSED,
      )),
      t.addElements(i, o, d, c, this.var_4324),
      this.updateCustomReferenceSourceState(),
      this.updateSpawnValueState());
  }
  onEditStart(e) {
    ((this._r8c35c556360ec3 = e.getBoolean(0)),
      (this.var_2098.selected = e.getInt(1)),
      (this._r1107bbde1fb142.selected = e.getInt(2)),
      this.updateOffsetField(this.var_3303, this._offsetCheckboxes, 0, e.getInt(3)),
      this.updateOffsetField(this._r1e04e6d024572a, this._offsetCheckboxes, 1, e.getInt(4)),
      this.updateOffsetField(this._red0b2f09743ab8, this._offsetCheckboxes, 2, e.getInt(5)));
    let r = e._r1385185994d461.length > 0 ? e._r1385185994d461[0] : WiredVariable.var_160,
      t = e._r1385185994d461.length > 1 ? e._r1385185994d461[1] : WiredVariable.var_160;
    (this.var_2371.init(e._r09c1c618a6015f._r491f74a2c22d93, r, class_4222.FURNI),
      this.var_416.init(
        e._r09c1c618a6015f._r491f74a2c22d93,
        t,
        e.getInt(9),
        e.getInt(7),
        e.getInt(8),
      ),
      (this.var_1247.get(0).selected = e.getBoolean(6)),
      this.updateCustomReferenceSourceState(),
      this.updateSpawnValueState(),
      this.var_4324.var_982());
  }
  onEditInitialized() {
    (this.var_2371.onEditInitialized(), this.var_416.onEditInitialized());
  }
  readIntParamsFromForm() {
    let e = this.var_1247.get(0).selected && !this.var_416.disabled,
      r = e ? this.var_416.option : 0,
      t = e ? this.var_416.numberValue : 0;
    return [
      this._r8c35c556360ec3 ? 1 : 0,
      this.var_2098.selected,
      this._r1107bbde1fb142.selected,
      this._rca77c2ccecf23d(0, this.var_3303),
      this._rca77c2ccecf23d(1, this._r1e04e6d024572a),
      this._rca77c2ccecf23d(2, this._red0b2f09743ab8),
      this.var_1247.get(0).selected ? 1 : 0,
      r,
      t,
      this.var_416.target,
    ];
  }
  _r4ac8c24e31ca7e() {
    let e = this.var_1247.get(0).selected
        ? this.var_2371.finalizeSelection
        : WiredVariable.var_160,
      t =
        this.var_1247.get(0).selected &&
        !this.var_416.disabled &&
        this.var_416.option === 1
          ? this.var_416.finalizeSelection
          : WiredVariable.var_160;
    return [e, t];
  }
  mergedSelections() {
    return [
      [1, 0],
      [2, 1],
    ];
  }
  setMergedType(e, r) {
    e === 0
      ? (this._r8c35c556360ec3 = r === Ve.USER_SOURCE)
      : e === 1 && (this.var_416.target = r);
  }
  getMergedType(e) {
    return e === 0
      ? this._r8c35c556360ec3
        ? Ve.USER_SOURCE
        : Ve.var_64
      : this.var_416.target;
  }
  isInputSourceDisabled(e, r) {
    return r !== Ve.MERGED_SOURCE
      ? !1
      : e === 0
        ? !this._r2ce9cf365690b7()
        : this.var_416._r0fd1b66bcbf656() ||
          !this.var_1247.get(0).selected ||
          this.var_416.disabled;
  }
  _r0b74b92fc06f4d(e) {
    return e === 1;
  }
  _r0f18641a2be1d6(e) {
    return e === 1 ? [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE] : [];
  }
  get widthModifier() {
    return 1.2;
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.place_furni";
  }
  mergedSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.merged.title.custom_target"
      : "wiredfurni.params.sources.merged.title.variables_reference";
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  _rb968b1c81da27b = n((e) => {
    this.updateCustomReferenceSourceState();
  }, "_rb968b1c81da27b");
  _r595a1eca2a3ff2 = n((e) => {
    this.updateCustomReferenceSourceState();
  }, "_r595a1eca2a3ff2");
  _r401c4d13d860d8 = n((e, r) => {
    e === 0 && this.updateSpawnValueState();
  }, "_r401c4d13d860d8");
  onSpawnVariableSelected = n((e) => {
    this.updateSpawnValueState();
  }, "onSpawnVariableSelected");
  updateCustomReferenceSourceState() {
    this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 0);
  }
  updateSpawnValueState() {
    let e = this.var_2371.selected,
      r = e != null && e.hasValue,
      t = this.var_1247.get(0).selected;
    ((this.var_416.disabled = !t || !r),
      this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 1));
  }
  _r2ce9cf365690b7() {
    return (
      this.var_2098.selected === a._re421443d29150b ||
      this._r1107bbde1fb142.selected === a.TARGET_ALTITUDE_CUSTOM
    );
  }
  _rca77c2ccecf23d(e, r) {
    return this._offsetCheckboxes.get(e).selected ? r.value : 0;
  }
  updateOffsetField(e, r, t, i) {
    ((e.value = i), (r.get(t).selected = i !== 0));
  }
  static filterSpawnVariable(e) {
    return (
      e.variableTarget === class_4222.FURNI &&
      e.canCreateAndDelete &&
      e.variableType === class_3973.var_4355
    );
  }
}
