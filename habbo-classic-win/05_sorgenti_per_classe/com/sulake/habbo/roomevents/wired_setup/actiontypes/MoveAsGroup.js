// Estratto da HabboAirLauncher.deobf.js, riga 363830.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/MoveAsGroup.as
// Nome offuscato: _i1fb25e584533e1

class a extends DefaultActionType {
  static {
    n(this, "MoveAsGroup");
  }
  static OFFSET_MIN = -64;
  static const_822 = 64;
  var_2687 = !0;
  var_3303 = null;
  _r1e04e6d024572a = null;
  get code() {
    return ActionTypeCodes.MOVE_AS_GROUP;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.move_as_group.usage_info}");
    ((this.var_3303 = e.createNamedNumberInput(
      new NumberInputParam(0, a.OFFSET_MIN, a.const_822),
      "${wiredfurni.params.place_furni.offsets.x}",
    )),
      (this._r1e04e6d024572a = e.createNamedNumberInput(
        new NumberInputParam(0, a.OFFSET_MIN, a.const_822),
        "${wiredfurni.params.place_furni.offsets.y}",
      )));
    let s = e.createSimpleListView(!0, [this.var_3303, this._r1e04e6d024572a]);
    t.addElements(i, e.createSection("${wiredfurni.params.place_furni.offsets}", s));
  }
  onEditStart(e) {
    ((this.var_2687 = e.getBoolean(0)),
      (this.var_3303.value = e.getInt(1)),
      (this._r1e04e6d024572a.value = e.getInt(2)));
  }
  readIntParamsFromForm() {
    return [this.var_2687 ? 1 : 0, this.var_3303.value, this._r1e04e6d024572a.value];
  }
  mergedSelections() {
    return [[1, 0]];
  }
  setMergedType(e, r) {
    this.var_2687 = r === Ve.USER_SOURCE;
  }
  getMergedType(e) {
    return this.var_2687 ? Ve.USER_SOURCE : Ve.var_64;
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.mv.0";
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.target_location";
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
