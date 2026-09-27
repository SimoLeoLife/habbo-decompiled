// Extracted from HabboAirLauncher.deobf.js, line 160930.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPurseUpdateEvent.as
// Obfuscated name: _i9448848d1b603a

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.balance = t;
  }
  static {
    n(this, "RoomWidgetPurseUpdateEvent");
  }
  static CREDIT_BALANCE = "RWPUE_CREDIT_BALANCE";
  static const_395 = "RWPUE_PIXEL_BALANCE";
  static SHELL_BALANCE = "RWPUE_SHELL_BALANCE";
}
