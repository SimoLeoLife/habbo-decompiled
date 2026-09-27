// Estratto da HabboAirLauncher.deobf.js, riga 158984.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/events/UnseenRewardTrackRewardsCountUpdateEvent.as
// Nome offuscato: _i498b42cc0b57ee

class a extends M {
  static {
    n(this, "UnseenRewardTrackRewardsCountUpdateEvent");
  }
  static TYPE = "qe_urtrcue";
  _count;
  constructor(e, r = !1, t = !1) {
    (super(a.TYPE, r, t), (this._count = e));
  }
  get count() {
    return this._count;
  }
}
