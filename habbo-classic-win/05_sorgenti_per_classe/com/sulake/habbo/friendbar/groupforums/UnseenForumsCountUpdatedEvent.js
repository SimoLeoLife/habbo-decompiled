// Estratto da HabboAirLauncher.deobf.js, riga 158515.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/UnseenForumsCountUpdatedEvent.as
// Nome offuscato: _ic888d035288ac7

class extends M {
  constructor(r, t) {
    super(r);
    this.var_5156 = t;
  }
  static {
    n(this, "UnseenForumsCountUpdatedEvent");
  }
  static TYPE = "UNSEEN_FORUMS_COUNT";
  get unseenForumsCount() {
    return this.var_5156;
  }
}
