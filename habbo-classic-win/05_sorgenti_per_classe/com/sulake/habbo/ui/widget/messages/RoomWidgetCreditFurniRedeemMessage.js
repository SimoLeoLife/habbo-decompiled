// Estratto da HabboAirLauncher.deobf.js, riga 161525.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetCreditFurniRedeemMessage.as
// Nome offuscato: _i9ae7e43c56d64c

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetCreditFurniRedeemMessage");
  }
  static const_274 = "RWFCRM_REDEEM";
  var_344;
  constructor(e, r) {
    (super(e), (this.var_344 = r));
  }
  get objectId() {
    return this.var_344;
  }
}
