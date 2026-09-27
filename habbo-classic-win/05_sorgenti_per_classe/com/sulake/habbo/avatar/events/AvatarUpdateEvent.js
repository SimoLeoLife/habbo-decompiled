// Estratto da HabboAirLauncher.deobf.js, riga 158407.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/events/AvatarUpdateEvent.as
// Nome offuscato: _ic225682705604e

class a extends M {
  static {
    n(this, "AvatarUpdateEvent");
  }
  static AVATAR_FIGURE_UPDATED = "AVATAR_FIGURE_UPDATED";
  var_1129;
  constructor(e, r = !1, t = !1) {
    (super(a.AVATAR_FIGURE_UPDATED, r, t), (this.var_1129 = e));
  }
  get figure() {
    return this.var_1129;
  }
}
