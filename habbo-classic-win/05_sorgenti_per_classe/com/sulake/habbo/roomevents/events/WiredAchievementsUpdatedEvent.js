// Estratto da HabboAirLauncher.deobf.js, riga 162486.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/events/WiredAchievementsUpdatedEvent.as
// Nome offuscato: _ia2a7cc74990b7e

class extends M {
  static {
    n(this, "WiredAchievementsUpdatedEvent");
  }
  static WIRED_ACHIEVEMENTS_UPDATED = "WIRED_ACHIEVEMENTS_UPDATED";
  var_1625;
  constructor(e, r, t = !1, i = !1) {
    (super(e, t, i), (this.var_1625 = r));
  }
  get achievements() {
    return this.var_1625;
  }
}
