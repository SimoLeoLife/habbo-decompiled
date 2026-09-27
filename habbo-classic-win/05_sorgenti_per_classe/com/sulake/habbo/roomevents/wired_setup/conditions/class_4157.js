// Estratto da HabboAirLauncher.deobf.js, riga 365740.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4157.as
// Nome offuscato: _ife6074a57bd5c0

class extends DefaultConditionType {
  static {
    n(this, "class_4157");
  }
  _directions = null;
  get code() {
    return ConditionCodes.USER_DIRECTION;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [];
    for (let s = 0; s < 8; s += 1) {
      let o = new CheckboxOptionParam("");
      ((o._r5a06aace4b01c4 = `move_${s}`), i.push(o));
    }
    ((this._directions = e.createCheckboxGroup(i, null, 4)),
      t.addElements(e.createSection(this.l("direction_selection"), this._directions)));
  }
  onEditStart(e) {
    let r = e.intParams[0];
    for (let t = 0; t < 8; t += 1) this._directions.get(t).selected = (r & (1 << t)) > 0;
  }
  readIntParamsFromForm() {
    let e = 0;
    for (let r = 0; r < this._directions.options; r += 1)
      this._directions.get(r).selected && (e |= 1 << r);
    return [e];
  }
}
