// Extracted from HabboAirLauncher.deobf.js, line 161940.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetRequestWidgetMessage.as
// Obfuscated name: _i60ec6f534d82f7

class extends RoomWidgetMessage {
  constructor(r, t = 0, i = 0) {
    super(r);
    this.id = t;
    this.category = i;
  }
  static {
    n(this, "RoomWidgetRequestWidgetMessage");
  }
  static REQUEST_EFFECTS = "RWRWM_EFFECTS";
  static REQUEST_FURNI_CHOOSER = "RWRWM_FURNI_CHOOSER";
  static REQUEST_FURNI_CHOOSER_ADD = "RWRWM_FURNI_CHOOSER_ADD";
  static REQUEST_ME_MENU = "RWRWM_ME_MENU";
  static REQUEST_USER_CHOOSER = "RWRWM_USER_CHOOSER";
}
