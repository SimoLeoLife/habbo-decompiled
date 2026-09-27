// Estratto da HabboAirLauncher.deobf.js, riga 161553.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetDimmerChangeStateMessage.as
// Nome offuscato: _id199079f133072

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
