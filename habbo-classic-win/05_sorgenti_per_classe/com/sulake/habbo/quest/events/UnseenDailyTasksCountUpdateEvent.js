// Estratto da HabboAirLauncher.deobf.js, riga 158958.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/events/UnseenDailyTasksCountUpdateEvent.as
// Nome offuscato: _i4ca3bc2c91697e

class a extends M {
  constructor(r, t = !1, i = !1) {
    super(a.TYPE, t, i);
    this._count = r;
  }
  static {
    n(this, "UnseenDailyTasksCountUpdateEvent");
  }
  static TYPE = "qe_udtcue";
  get count() {
    return this._count;
  }
  clone() {
    return new a(this._count, this.bubbles, this.cancelable);
  }
}
