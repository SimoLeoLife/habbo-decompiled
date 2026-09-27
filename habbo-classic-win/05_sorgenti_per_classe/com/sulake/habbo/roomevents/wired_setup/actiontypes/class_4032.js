// Extracted from HabboAirLauncher.deobf.js, line 364713.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4032.as
// Obfuscated name: _i42dc922a61589e

class a extends DefaultActionType {
  static {
    n(this, "class_4032");
  }
  static const_338 = 4;
  static const_516 = 5;
  var_2577 = null;
  var_2482 = null;
  var_2201 = null;
  var_2468 = null;
  get code() {
    return ActionTypeCodes.RELATIVE_FURNI_MOVE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2577 = e.createRadioGroup(
      [
        this._r31e370732c9045(a.const_338, "move_2"),
        this._r31e370732c9045(a.const_516, "move_6"),
      ],
      null,
      4,
    )),
      (this.var_2577.selected = a.const_338));
    let i = e.createText(this.l("movement.horizontal.distance"), new Se(Se.MODE_MULTILINE));
    ((this.var_2201 = e._r5805d92f5d7823(0, 20, 1)),
      this.var_2201.addEventListener(M._ra3d93f66ba77c2, this.onHorizontalSliderChange));
    let s = e.createSimpleListView(!0, [this.var_2577, i, this.var_2201]),
      o = e.createSection(this.l("movement.horizontal.selection"), s);
    ((this.var_2482 = e.createRadioGroup(
      [
        this._r31e370732c9045(a.const_338, "move_4"),
        this._r31e370732c9045(a.const_516, "move_0"),
      ],
      null,
      4,
    )),
      (this.var_2482.selected = a.const_338));
    let d = e.createText(this.l("movement.vertical.distance"), new Se(Se.MODE_MULTILINE));
    ((this.var_2468 = e._r5805d92f5d7823(0, 20, 1)),
      this.var_2468.addEventListener(M._ra3d93f66ba77c2, this.onVerticalSliderChange));
    let c = e.createSimpleListView(!0, [this.var_2482, d, this.var_2468]),
      f = e.createSection(this.l("movement.vertical.selection"), c);
    (this.updateDistanceLocalization("horizontal", 0), this.updateDistanceLocalization("vertical", 0), t.addElements(o, f));
  }
  onEditStart(e) {
    (this.setAxisValue(
      e.intParams[0] ?? 0,
      this.var_2577,
      this.var_2201,
      "horizontal",
    ),
      this.setAxisValue(
        e.intParams[1] ?? 0,
        this.var_2482,
        this.var_2468,
        "vertical",
      ));
  }
  readIntParamsFromForm() {
    return [
      this._r5ee2ed102ef0cd(this.var_2577, this.var_2201),
      this._r5ee2ed102ef0cd(this.var_2482, this.var_2468),
    ];
  }
  _r31e370732c9045(e, r) {
    let t = new RadioButtonParam(e, "");
    return ((t._r5a06aace4b01c4 = r), t);
  }
  _r5ee2ed102ef0cd(e, r) {
    let t = r.value;
    return e.selected === a.const_516 ? -t : t;
  }
  setAxisValue(e, r, t, i) {
    let s = Math.abs(e);
    ((t.value = s),
      (r.selected = e < 0 ? a.const_516 : a.const_338),
      this.updateDistanceLocalization(i, s));
  }
  onHorizontalSliderChange = n((e) => {
    this.updateDistanceLocalization("horizontal", this.var_2201.value);
  }, "onHorizontalSliderChange");
  onVerticalSliderChange = n((e) => {
    this.updateDistanceLocalization("vertical", this.var_2468.value);
  }, "onVerticalSliderChange");
  updateDistanceLocalization(e, r) {
    this._r41f5cc7d3516ce.localization._r43eae9731f5b27(
      `wiredfurni.params.movement.${e}.distance`,
      "distance",
      String(r),
    );
  }
}
