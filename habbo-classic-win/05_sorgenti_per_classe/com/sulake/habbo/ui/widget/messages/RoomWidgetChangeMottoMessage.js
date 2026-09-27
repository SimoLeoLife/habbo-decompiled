// Extracted from HabboAirLauncher.deobf.js, line 161368.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetChangeMottoMessage.as
// Obfuscated name: _id97fcc89498407

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetChangeMottoMessage");
  }
  static CHANGE_MOTTO = "RWVM_CHANGE_MOTTO_MESSAGE";
  var_3329;
  constructor(e) {
    (super(a.CHANGE_MOTTO), (this.var_3329 = e));
  }
  get motto() {
    return this.var_3329;
  }
}
