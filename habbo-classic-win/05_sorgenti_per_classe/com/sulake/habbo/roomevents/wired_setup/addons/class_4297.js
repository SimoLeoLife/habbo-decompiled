// Extracted from HabboAirLauncher.deobf.js, line 360346.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4297.as
// Obfuscated name: _i486ce957e88dbd

class extends DefaultAddonType {
  static {
    n(this, "class_4297");
  }
  var_1660 = null;
  var_1270 = null;
  get code() {
    return AddonCodes.FURNI_NAME_PLACEHOLDER;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1660 = e.createPlaceholderNameSection(this.l("texts.placeholder_name"), "$")),
      (this.var_1270 = e.createPlaceholderTypeSection("furni")),
      t.addElements(this.var_1660, this.var_1270));
  }
  onEditStart(e) {
    let r = e._r7e8836fc336e43.split("	"),
      t = e.getBoolean(0),
      i = r[0] ?? "",
      s = r.length > 1 ? r[1] : "";
    ((this.var_1660.placeholderName = i),
      (this.var_1270.isShowMultiple = t),
      (this.var_1270.delimiter = s));
  }
  readIntParamsFromForm() {
    return [this.var_1270.isShowMultiple ? 1 : 0];
  }
  readStringParamFromForm() {
    return this.var_1270.isShowMultiple
      ? this.var_1660.placeholderName + "	" + this.var_1270.delimiter
      : this.var_1660.placeholderName;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  advancedAlwaysVisible() {
    return !0;
  }
}
