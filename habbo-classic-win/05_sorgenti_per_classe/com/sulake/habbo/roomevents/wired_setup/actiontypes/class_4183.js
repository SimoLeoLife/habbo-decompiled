// Estratto da HabboAirLauncher.deobf.js, riga 364070.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4183.as
// Nome offuscato: _ib28ecdcfb62a89

class extends DefaultActionType {
  static {
    n(this, "class_4183");
  }
  _re2682083b19496 = null;
  _r997790dee5b456 = null;
  get code() {
    return ActionTypeCodes.MOVE_USER;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let s = [new RadioButtonParam(-1, this.l("movefurni.0"), null, null, !0)];
    for (let l = 0; l < 8; l += 1) {
      let b = new RadioButtonParam(l, "");
      ((b._r5a06aace4b01c4 = `move_${l}`), s.push(b));
    }
    ((this._re2682083b19496 = e.createRadioGroup(s, null, 4)), (this._re2682083b19496.selected = -1));
    let d = [new RadioButtonParam(-1, this.l("rotatefurni.0"), null, null, !0)];
    for (let l = 0; l < 8; l += 1) {
      let b = new RadioButtonParam(l, "");
      ((b._r5a06aace4b01c4 = `move_${l}`), d.push(b));
    }
    let c = new RadioButtonParam(9, "");
    ((c._r5a06aace4b01c4 = "rotate_cw"), d.push(c));
    let f = new RadioButtonParam(10, "");
    ((f._r5a06aace4b01c4 = "rotate_ccw"),
      d.push(f),
      (this._r997790dee5b456 = e.createRadioGroup(d, null, 4)),
      (this._r997790dee5b456.selected = -1),
      t.addElements(
        e.createSection(this.l("moveuser"), this._re2682083b19496),
        e.createSection(this.l("rotateuser"), this._r997790dee5b456),
      ));
  }
  onEditStart(e) {
    ((this._re2682083b19496.selected = e.intParams[0] ?? -1),
      (this._r997790dee5b456.selected = e.intParams[1] ?? -1));
  }
  readIntParamsFromForm() {
    return [this._re2682083b19496.selected, this._r997790dee5b456.selected];
  }
}
