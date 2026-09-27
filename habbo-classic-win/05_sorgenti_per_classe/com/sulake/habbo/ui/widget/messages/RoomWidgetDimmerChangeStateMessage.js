// Extracted from HabboAirLauncher.deobf.js, line 161553.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetDimmerChangeStateMessage.as
// Obfuscated name: _id199079f133072

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetDimmerChangeStateMessage");
  }
  static CHANGE_STATE = "RWCDSM_CHANGE_STATE";
  var_344;
  constructor(e) {
    (super(a.CHANGE_STATE), (this.var_344 = e));
  }
  get objectId() {
    return this.var_344;
  }
}
