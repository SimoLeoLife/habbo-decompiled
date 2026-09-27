// Estratto da HabboAirLauncher.deobf.js, riga 159239.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionDoorbellEvent.as
// Nome offuscato: _i9f5428401869b8

class extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(r, t, s, o);
    this._userName = i;
  }
  static {
    n(this, "RoomSessionDoorbellEvent");
  }
  static DOORBELL = "RSDE_DOORBELL";
  static REJECTED = "RSDE_REJECTED";
  static ACCEPTED = "RSDE_ACCEPTED";
  get userName() {
    return this._userName;
  }
}
