// Estratto da HabboAirLauncher.deobf.js, riga 160121.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetCreditFurniUpdateEvent.as
// Nome offuscato: _i9370493ccf50d8

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this.objectId = t;
    this._r065c0ef6de5bd5 = i;
    this._r5ca93599defdd6 = s;
  }
  static {
    n(this, "RoomWidgetCreditFurniUpdateEvent");
  }
  static UPDATE_CREDIT_FURNI = "RWCFUE_CREDIT_FURNI_UPDATE";
}
