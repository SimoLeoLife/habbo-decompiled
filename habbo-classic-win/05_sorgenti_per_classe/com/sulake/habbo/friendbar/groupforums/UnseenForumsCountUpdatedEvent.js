// Extracted from HabboAirLauncher.deobf.js, line 158515.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/UnseenForumsCountUpdatedEvent.as
// Obfuscated name: _ic888d035288ac7

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
