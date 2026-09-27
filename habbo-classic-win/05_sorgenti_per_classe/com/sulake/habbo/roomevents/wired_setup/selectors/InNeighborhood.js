// Extracted from HabboAirLauncher.deobf.js, line 367715.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/InNeighborhood.as
// Obfuscated name: _i2c535a8880e615

class a extends DefaultSelectorType {
  static {
    n(this, "InNeighborhood");
  }
  static DRAW_MODES = ["add_tile", "remove_tile", "set_root_tile"];
  _drawMode = "add_tile";
  var_610 = null;
  _r5e21b43d6abe8a = null;
  var_2687 = !1;
  var_5065 = null;
  _rcd7f54f35d3a27 = null;
  var_2541 = null;
  var_2864 = null;
  _drawButtonsByMode = {};
  _preferBigMode = !1;
  _r55bfaba6960bb8 = !1;
  _floor = null;
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  onInit(e) {
    (super.onInit(e), this.setRootTileInternal(0, 0, !1));
    let r = cY.parseSpiralVector([], lh.RADIUS);
    this._r5e21b43d6abe8a = new lh(r, !this._preferBigMode, this.onDrawingChanged);
  }
  onEditStart(e) {
    ((this._r55bfaba6960bb8 = this._preferBigMode),
      (this.var_2687 = e.getBoolean(0)),
      this.setRootTileInternal(e.intParams[1], e.intParams[2], !0),
      this.setMode("add_tile"));
    let r = cY.parseSpiralVector(e.intParams.slice(3), lh.RADIUS);
    ((this._r5e21b43d6abe8a = new lh(r, !this._r55bfaba6960bb8, this.onDrawingChanged)),
      !this._r55bfaba6960bb8 &&
        !this._r5e21b43d6abe8a.smallModeAllowed() &&
        ((this._r5e21b43d6abe8a.smallMode = !1), (this._r55bfaba6960bb8 = !0)),
      this._rcd7f54f35d3a27 != null &&
        (this._rcd7f54f35d3a27.setFloor(this._r5e21b43d6abe8a),
        this._rcd7f54f35d3a27.setMode(this._drawMode)),
      this.updateResolutionButtonUI(),
      this._r4294af0daf7815._r1c0e6e6b103258());
  }
  readIntParamsFromForm() {
    return [this.var_2687 ? 1 : 0, this.var_610.x, this.var_610.y].concat(
      cY._rd218278419de58(this._r5e21b43d6abe8a._r223f1e7a35055c, lh.RADIUS),
    );
  }
  updateResolutionButtonUI() {
    ((this._floor.disabled = !this._r5e21b43d6abe8a.smallModeAllowed()),
      (this._floor.assetName = this._r55bfaba6960bb8 ? "reduce_image" : "enlarge_image"));
  }
  setMode(e) {
    ((this._drawMode = e),
      this._rcd7f54f35d3a27 != null && this._rcd7f54f35d3a27.setMode(this._drawMode));
    for (let r of a.DRAW_MODES) {
      let t = this._drawButtonsByMode[r];
      t != null && (t.selected = this._drawMode === r);
    }
  }
  mergedSelections() {
    return [[0, 0]];
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.neighborhood";
  }
  setMergedType(e, r) {
    this.var_2687 = r === Ve.USER_SOURCE;
  }
  getMergedType(e) {
    return this.var_2687 ? Ve.USER_SOURCE : Ve.var_64;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  var_704() {
    (this.var_2541 != null && (this.var_2541.value = this.var_610.x),
      this.var_2864 != null && (this.var_2864.value = this.var_610.y));
  }
  setRootTileInternal(e, r, t) {
    let i = Math.trunc(e),
      s = Math.trunc(r);
    (this.var_610 == null
      ? (this.var_610 = new E(i, s))
      : ((this.var_610.x = i), (this.var_610.y = s)),
      this.var_704(),
      t && this._rcd7f54f35d3a27 != null && this._rcd7f54f35d3a27.setRootTile(i, s));
  }
  onValueChange = n((e) => {
    this.setRootTileInternal(e, this.var_610.y, !0);
  }, "onValueChange");
  _r846cdc35f7cfa7 = n((e) => {
    this.setRootTileInternal(this.var_610.x, e, !0);
  }, "_r846cdc35f7cfa7");
  _r07e271363ac1a7 = n((e, r) => {
    this.setRootTileInternal(e, r, !1);
  }, "_r07e271363ac1a7");
  _re814115e822ac1 = n(() => {
    ((this._r55bfaba6960bb8 = !this._r55bfaba6960bb8),
      (this._preferBigMode = this._r55bfaba6960bb8),
      (this._r5e21b43d6abe8a.smallMode = !this._r55bfaba6960bb8),
      this._rcd7f54f35d3a27.setFloor(this._r5e21b43d6abe8a),
      this.updateResolutionButtonUI(),
      this._r4294af0daf7815._r1c0e6e6b103258());
  }, "_re814115e822ac1");
  onDrawingChanged = n(() => {
    this.updateResolutionButtonUI();
  }, "onDrawingChanged");
  buildInputs(e, r, t) {
    let i = [
        new UnkClass_8ebb1d("add", "", () => {
          this.setMode(a.DRAW_MODES[0]);
        }),
        new UnkClass_8ebb1d(
          "remove",
          "",
          () => {
            this.setMode(a.DRAW_MODES[1]);
          },
          !0,
        ),
        new UnkClass_8ebb1d("reference", "", () => {
          this.setMode(a.DRAW_MODES[2]);
        }),
        new UnkClass_8ebb1d("enlarge_image", "", this._re814115e822ac1, !1, !0),
      ],
      s = e._r9ae51d526980e2(i);
    ((this._rcd7f54f35d3a27 = e._rdf116322ff7c88(this._r07e271363ac1a7)),
      (this.var_5065 = e.createFloorEditorPreset(s, this._rcd7f54f35d3a27)),
      (this._floor = s.buttons[3]),
      this._r5e21b43d6abe8a != null &&
        (this._rcd7f54f35d3a27.setFloor(this._r5e21b43d6abe8a),
        this._rcd7f54f35d3a27.setRootTile(this.var_610.x, this.var_610.y),
        this._rcd7f54f35d3a27.setMode(this._drawMode)),
      (this.var_2541 = e.createNamedNumberInput(new NumberInputParam(0, -64, 64, 20), "x:")),
      (this.var_2864 = e.createNamedNumberInput(new NumberInputParam(0, -64, 64, 20), "y:")),
      (this.var_2541._r53e08e0209a3cd = this.onValueChange),
      (this.var_2864._r53e08e0209a3cd = this._r846cdc35f7cfa7));
    let o = e.createSimpleListView(!1, [this.var_2541, this.var_2864]);
    o.spacing = r._r7ac8f2f1de8d9e;
    let d = s.buttons;
    for (let l = 0; l < a.DRAW_MODES.length && l < d.length; l += 1)
      this._drawButtonsByMode[a.DRAW_MODES[l]] = d[l];
    this.setMode(this._drawMode);
    let c = e.createSimpleListView(!0, [this.var_5065, o.alignRight()]),
      f = e.createSection(this.l("neighborhood_selection"), c);
    t.addElements(f);
  }
  get widthModifier() {
    return this._r55bfaba6960bb8 ? 1.7 : 1;
  }
}
