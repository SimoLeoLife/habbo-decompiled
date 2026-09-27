// Extracted from HabboAirLauncher.deobf.js, line 365392.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/chests/class_4260.as
// Obfuscated name: _i2cf0bc7313e50b

class extends Hg {
  static {
    n(this, "class_4260");
  }
  var_3230 = null;
  _iterationModeRadioGroup = null;
  get code() {
    return ActionTypeCodes.GIVE_FURNI_FROM_CHEST;
  }
  readIntParamsFromForm() {
    let e = super.readIntParamsFromForm();
    return (e.push(this._iterationModeRadioGroup.selected), e);
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r = e.intParams[5] ?? 0;
    ((this._iterationModeRadioGroup.selected = r),
      (this.var_3230.disabled = this._r69c4aa02799b1c === Hg.MODE_ALL));
  }
  onModeChange = n((e) => {
    (this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 0),
      (this.var_3230.disabled = e === Hg.MODE_ALL));
  }, "onModeChange");
  buildInputs(e, r, t) {
    let i = [
      new RadioButtonParam(0, this.l("chest_iteration_type.0")),
      new RadioButtonParam(1, this.l("chest_iteration_type.1")),
      new RadioButtonParam(2, this.l("chest_iteration_type.2")),
    ];
    ((this._iterationModeRadioGroup = e.createRadioGroup(i)),
      (this.var_3230 = e.createSection(
        this.l("chest_iteration_type"),
        this._iterationModeRadioGroup,
        Hr.COLLAPSED,
      )),
      super.buildInputs(e, r, t));
  }
  finalizeBuilding(e) {
    (super.finalizeBuilding(e), e.addElements(this.var_3230));
  }
}
