// Estratto da HabboAirLauncher.deobf.js, riga 70673.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineUseProductEvent.as
// Nome offuscato: _iaf831a57f2faff

class extends RoomEngineObjectEvent {
  constructor(r, t, i, s, o = -1, d = -1, c = !1, f = !1) {
    super(r, t, i, s, c, f);
    this.var_4476 = o;
    this.var_4671 = d;
  }
  static {
    n(this, "RoomEngineUseProductEvent");
  }
  static USE_PRODUCT_FROM_ROOM = "ROSM_USE_PRODUCT_FROM_ROOM";
  static USE_PRODUCT_FROM_INVENTORY = "ROSM_USE_PRODUCT_FROM_INVENTORY";
  get _r73c3ff147480eb() {
    return this.var_4476;
  }
  get _r53b4ddaab70c75() {
    return this.var_4671;
  }
}
