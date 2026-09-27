// Extracted from HabboAirLauncher.deobf.js, line 360153.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_3957.as
// Obfuscated name: _ifb860dc1520456

class extends DefaultAddonType {
  static {
    n(this, "class_3957");
  }
  var_3512 = null;
  get code() {
    return AddonCodes.ACHIEVEMENT_ENABLER;
  }
  readStringParamFromForm() {
    return this.var_3512.text;
  }
  onEditStart(e) {
    this.var_3512.text = e._r7e8836fc336e43;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this.var_3512 = e._r1cb85c1e1927d4(
      new TextAreaParam(60, -1, -1, 100, 2e3, "", "${wiredfurni.params.achievement_enabler.placeholder}"),
    );
    let i = e.createSection("${wiredfurni.params.achievement_enabler}", this.var_3512);
    t.addElements(i);
  }
}
