// Estratto da HabboAirLauncher.deobf.js, riga 160244.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetDoorbellEvent.as
// Nome offuscato: _i5dce8483b10245

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this._userName = t;
  }
  static {
    n(this, "RoomWidgetDoorbellEvent");
  }
  static RINGING = "RWDE_RINGING";
  static REJECTED = "RWDE_REJECTED";
  static ACCEPTED = "RWDE_ACCEPTED";
  get userName() {
    return this._userName;
  }
}
