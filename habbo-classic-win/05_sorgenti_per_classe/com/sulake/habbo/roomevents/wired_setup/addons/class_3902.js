// Extracted from HabboAirLauncher.deobf.js, line 361166.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_3902.as
// Obfuscated name: _i75b6c9a608a396

class extends DefaultAddonType {
  static {
    n(this, "class_3902");
  }
  var_1660 = null;
  var_1270 = null;
  get code() {
    return AddonCodes.USERNAME_PLACEHOLDER;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1660 = e.createPlaceholderNameSection(this.l("texts.placeholder_name"), "$")),
      (this.var_1270 = e.createPlaceholderTypeSection("user")),
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
}
