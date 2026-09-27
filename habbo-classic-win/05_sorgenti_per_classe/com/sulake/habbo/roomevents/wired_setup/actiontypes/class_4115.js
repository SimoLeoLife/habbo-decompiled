// Estratto da HabboAirLauncher.deobf.js, riga 364026.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4115.as
// Nome offuscato: _i0655d0da5135e8

class extends DefaultActionType {
  static {
    n(this, "class_4115");
  }
  var_3005 = null;
  _r4fd119dcc99d81 = null;
  _r1c68841b44969f = null;
  get code() {
    return ActionTypeCodes.MOVE_TO_DIRECTION;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [];
    for (let o = 0; o < 8; o += 1) {
      let d = new RadioButtonParam(o, "");
      ((d._r5a06aace4b01c4 = `move_${o}`), i.push(d));
    }
    ((this.var_3005 = e.createRadioGroup(i, null, 4)), (this.var_3005.selected = 0));
    let s = [];
    for (let o = 0; o <= 6; o += 1) s.push(new RadioButtonParam(o, this.l(`turn.${o}`)));
    ((this._r4fd119dcc99d81 = e.createRadioGroup(s)),
      (this._r4fd119dcc99d81.selected = 0),
      (this._r1c68841b44969f = e.createCheckboxGroup([new CheckboxOptionParam(this.l("user_collide.0"), 0)])),
      t.addElements(
        e.createSection(this.l("startdir"), this.var_3005),
        e.createSection(this.l("turn"), this._r4fd119dcc99d81),
        e.createSection(this.l("user_collide"), this._r1c68841b44969f),
      ));
  }
  onEditStart(e) {
    ((this.var_3005.selected = e.intParams[0] ?? 0),
      (this._r4fd119dcc99d81.selected = e.intParams[1] ?? 0),
      (this._r1c68841b44969f.get(0).selected = (e.intParams[2] ?? 0) !== 0));
  }
  readIntParamsFromForm() {
    return [
      this.var_3005.selected,
      this._r4fd119dcc99d81.selected,
      this._r1c68841b44969f.get(0).selected ? 1 : 0,
    ];
  }
}
