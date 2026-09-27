// Extracted from HabboAirLauncher.deobf.js, line 358114.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/WiredMenuTabConfigs.as
// Obfuscated name: _i2662b284d20f4e

class a {
  static {
    n(this, "WiredMenuTabConfigs");
  }
  static TAB_MONITOR_ID = "monitor";
  static TAB_OVERVIEW_ID = "variable_overview";
  static TAB_INSPECTION_ID = "inspection";
  static TAB_CHESTS_ID = "chests";
  static TAB_SETTINGS_ID = "settings";
  static TAB_INFO_ID = "info";
  var_5432;
  constructor(e) {
    this.var_5432 = [
      new WiredMenuTabConfig(a.TAB_MONITOR_ID, hh),
      new WiredMenuTabConfig(a.TAB_OVERVIEW_ID, gl),
      new WiredMenuTabConfig(a.TAB_INSPECTION_ID, JWe),
      new WiredMenuTabConfig(a.TAB_CHESTS_ID, R5),
      new WiredMenuTabConfig(a.TAB_SETTINGS_ID, WiredMenuSettingsTab),
      new WiredMenuTabConfig(a.TAB_INFO_ID, WiredMenuInfoTab, !0, !0, !1),
    ];
  }
  get menuTabs() {
    return this.var_5432;
  }
}
