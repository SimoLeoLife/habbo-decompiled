// Estratto da HabboAirLauncher.deobf.js, riga 363792.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/KickFromRoom.as
// Nome offuscato: _i4f38f32150dd76

class extends DefaultActionType {
  static {
    n(this, "KickFromRoom");
  }
  var_2526 = null;
  get code() {
    return ActionTypeCodes.KICK_FROM_ROOM;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  readStringParamFromForm() {
    return this.var_2526.text;
  }
  onEditStart(e) {
    this.var_2526.text = e._r7e8836fc336e43;
  }
  validate() {
    if (this.var_2526.text.length > 100) {
      let r = "wiredfurni.chatmsgtoolong";
      return this._r41f5cc7d3516ce.localization.getLocalization(r, r);
    }
    return null;
  }
  buildInputs(e, r, t) {
    this.var_2526 = e._r178edc7e663bd7(new it("", 100));
    let i = e.createSection("${wiredfurni.params.message}", this.var_2526);
    t.addElements(i);
  }
}
