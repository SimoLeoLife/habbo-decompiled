// Estratto da HabboAirLauncher.deobf.js, riga 363888.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4084.as
// Nome offuscato: _i9a1f3ce3d1bee2

class extends DefaultActionType {
  static {
    n(this, "class_4084");
  }
  _re2682083b19496 = null;
  _r997790dee5b456 = null;
  get code() {
    return ActionTypeCodes.MOVE_FURNI;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new RadioButtonParam(0, this.l("movefurni.0"), null, null, !0),
      s = new RadioButtonParam(4, "");
    s._r5a06aace4b01c4 = "move_0";
    let o = new RadioButtonParam(8, "");
    o._r5a06aace4b01c4 = "move_1";
    let d = new RadioButtonParam(5, "");
    d._r5a06aace4b01c4 = "move_2";
    let c = new RadioButtonParam(9, "");
    c._r5a06aace4b01c4 = "move_3";
    let f = new RadioButtonParam(6, "");
    f._r5a06aace4b01c4 = "move_4";
    let l = new RadioButtonParam(10, "");
    l._r5a06aace4b01c4 = "move_5";
    let b = new RadioButtonParam(7, "");
    b._r5a06aace4b01c4 = "move_6";
    let _ = new RadioButtonParam(11, "");
    _._r5a06aace4b01c4 = "move_7";
    let h = new RadioButtonParam(2, "");
    h._r5a06aace4b01c4 = "move_diag";
    let p = new RadioButtonParam(3, "");
    p._r5a06aace4b01c4 = "move_vrt";
    let m = new RadioButtonParam(1, "");
    ((m._r5a06aace4b01c4 = "move_rnd"),
      (this._re2682083b19496 = e.createRadioGroup([i, s, o, d, c, f, l, b, _, h, p, m], null, 4)),
      (this._re2682083b19496.selected = 0));
    let v = new RadioButtonParam(0, this.l("rotatefurni.0")),
      w = new RadioButtonParam(1, this.l("rotatefurni.1"));
    w._r5a06aace4b01c4 = "rotate_cw";
    let I = new RadioButtonParam(2, this.l("rotatefurni.2"));
    I._r5a06aace4b01c4 = "rotate_ccw";
    let C = new RadioButtonParam(3, this.l("rotatefurni.3"));
    ((this._r997790dee5b456 = e.createRadioGroup([v, w, I, C])),
      (this._r997790dee5b456.selected = 0),
      t.addElements(
        e.createSection(this.l("movefurni"), this._re2682083b19496),
        e.createSection(this.l("rotatefurni"), this._r997790dee5b456),
      ));
  }
  onEditStart(e) {
    ((this._re2682083b19496.selected = e.intParams[0] ?? 0),
      (this._r997790dee5b456.selected = e.intParams[1] ?? 0));
  }
  readIntParamsFromForm() {
    return [this._re2682083b19496.selected, this._r997790dee5b456.selected];
  }
}
