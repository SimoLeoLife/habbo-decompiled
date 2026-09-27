// Extracted from HabboAirLauncher.deobf.js, line 144693.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/SetExtraPurchaseParameterEvent.as
// Obfuscated name: _i5e4b84a807e641

class extends UnkClass_c4d6c8 {
  constructor(r, t = !1, i = !1) {
    super(CatalogWidgetEventEnum.SET_EXTRA_PARAMETER, t, i);
    this.var_2471 = r;
  }
  static {
    n(this, "SetExtraPurchaseParameterEvent");
  }
  get parameter() {
    return this.var_2471;
  }
}
